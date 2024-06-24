
// -------- creating constructor --------
function Product(title, image, price, description) {
    this.description = description;
    this.image = image;
    this.price = price;
    this.title = title;
}


// -------- creating render function  --------

async function render() {
    let response = await fetch("https://fakestoreapi.com/products?limit=20");
    let products = await response.json();
    
    products.map(product => {
        const card = document.createElement('div');
        card.className = 'card';

        const cardTitle = document.createElement('h2');
        cardTitle.className = 'card-title';
        cardTitle.textContent = product.title;
        cardTitle.style.color = 'green';

        const img = document.createElement('img');
        img.src = product.image; 
        img.alt = 'Product Image';
        img.style.width = "300px";
        img.style.height = "200px";

        const cardContentPrice = document.createElement('p');
        cardContentPrice.className = 'card-content';
        cardContentPrice.innerHTML = `<strong>Price:</strong> ${product.price}`;

        const cardContentDesc = document.createElement('p');
        cardContentDesc.className = 'card-content';
        cardContentDesc.textContent = product.description;
        cardContentDesc.style.color = 'black';



                const deleteButton = document.createElement('button');
                deleteButton.className = 'btn';
                deleteButton.textContent = 'Delete';
                deleteButton.style.background = 'Red';


                const updateButton = document.createElement('button');
                updateButton.className = 'btn';
                updateButton.textContent = 'Update';

        card.appendChild(img);
        card.appendChild(cardTitle);
        card.appendChild(cardContentPrice);
        card.appendChild(cardContentDesc);
        card.appendChild(deleteButton); 
        card.appendChild(updateButton);
        document.getElementById('cardContainer').appendChild(card);
    });
   
}

render();

