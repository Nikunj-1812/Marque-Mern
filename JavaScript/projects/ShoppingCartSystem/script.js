// Product Class
class product {
    constructor(productId, description, price) {
        this.productId = productId;
        this.description = description;
        this.price = price;
    }
}

// Notification Class
class notif {

    ordersucc(orderId) {
        console.log("Successful");
        console.log(`Order ID : ${orderId}`);
        console.log("Your order has been placed.");
    }

    ordercan() {
        console.log("Cancelled");
        console.log("Your order has been cancelled.");
    }

}

// Order Class
class Order {
    constructor() {
        this.products = [];
        this.cartItems = [];
    }

    crecartprod(products) {
        this.products = [...products];
    }

    getprodet(productId) {
        let product = this.products.find(
            (item) => item.productId === productId
        );

        if (product) {
            console.log(product);
        }
        else {
            console.log("No Product Found");
        }

        return product;
    }

    addtocart(productId) {
        let index = this.products.findIndex(
           function(item){
            return item.productId===productId;
}
        );

        if (index === -1) {
            console.log("No Product Available");
            return;
        }

        let product = this.products.splice(index, 1)[0];
        this.cartItems.push(product);
        console.log(product.description + " Added To Cart");
    }

    recart(productId) {
        let index = this.cartItems.findIndex(
            function(item){
                return item.productId===productId;
}
        );

        if (index === -1) {
            console.log("Product Not In Cart");
            return;
        }

        let product = this.cartItems.splice(index, 1)[0];

        this.products.push(product);

        console.log(product.description + " Removed From Cart");
    }

    makeord() {
        if (this.cartItems.length === 0) {
            console.log("Cart Is Empty");
            return null;
        }

        let orderId = Math.floor(Math.random() * 100000);

        console.log("\nOrder Created Successfully");
        console.log("Order ID :", orderId);

        return orderId;
    }

}

// Payment Class
class Payment {
    constructor(order) {
        this.order = order;
    }

    getTA() {
        let total = this.order.cartItems.reduce(function(sum, product) {
            return sum + product.price;
        }, 0);

        return total;
    }

    checkoutForPayment(orderId) {
        let total = this.getTA();

        console.log("\nPayment");
        console.log("Order ID :", orderId);
        console.log("Total Amount : ₹" + total);
        console.log("Payment Successful");

        return true;
    }

}

// Products
const products = [
    new product(101, "Laptop", 65000),
    new product(102, "Mouse", 700),
    new product(103, "Keyboard", 1500),
    new product(104, "Monitor", 12000),
    new product(105, "Headphones", 2500)
];

// For Input 
const order = new Order();
order.crecartprod(products);

// View Product
order.getprodet(102);

// Add Products
order.addtocart(102);
order.addtocart(103);
order.addtocart(105);

console.log("\nCart Items");
console.log(order.cartItems);

console.log("\nAvailable Products");
console.log(order.products);

// Remove Product
order.recart(103);

console.log("\nCart Items");
console.log(order.cartItems);

// Create Order
let orderId = order.makeord();

if (orderId !== null) {
    const payment = new Payment(order);
    payment.checkoutForPayment(orderId);
    const notification = new notif();
    notification.ordersucc(orderId);
}
else {
    const notification = new notif();
    notification.ordercan();
}