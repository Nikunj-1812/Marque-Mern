const form = document.getElementById("form");
const tableBody = document.querySelector("#table tbody");

let products = JSON.parse(localStorage.getItem("products")) || [];

class Product {
    constructor(name, category, price, quantity) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
    }
}

displayProducts();

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = form.name.value.trim();
    const category = form.category.value;
    const price = Number(form.price.value);
    const quantity = Number(form.quantity.value);

    const product = new Product(
        name,
        category,
        price,
        quantity
    );

    products.push(product);

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

    displayProducts();

    form.reset();
});

function displayProducts() {

    tableBody.innerHTML = "";

    products.forEach((product, index) => {

        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>₹${product.price}</td>
                <td>${product.quantity}</td>
                <td>
                    <button onclick="deleteProduct(${index})">Delete</button>
                </td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
}

function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );
    displayProducts();
}