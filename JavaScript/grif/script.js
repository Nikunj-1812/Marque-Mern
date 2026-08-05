const products = [
  {
    productId: 101,
    name: "Wireless Mouse",
    price: 19.99,
    quantity: 50,
    brand: "Logitech"
  },
  {
    productId: 102,
    name: "Mechanical Keyboard",
    price: 79.99,
    quantity: 30,
    brand: "Redragon"
  },
  {
    productId: 103,
    name: "Gaming Headset",
    price: 49.99,
    quantity: 25,
    brand: "HyperX"
  },
  {
    productId: 104,
    name: "USB-C Charger",
    price: 24.99,
    quantity: 60,
    brand: "Anker"
  },
  {
    productId: 105,
    name: "Bluetooth Speaker",
    price: 39.99,
    quantity: 40,
    brand: "JBL"
  },
  {
    productId: 106,
    name: "Smart Watch",
    price: 199.99,
    quantity: 15,
    brand: "Samsung"
  },
  {
    productId: 107,
    name: "Laptop Stand",
    price: 34.99,
    quantity: 35,
    brand: "AmazonBasics"
  },
  {
    productId: 108,
    name: "External SSD",
    price: 129.99,
    quantity: 20,
    brand: "Samsung"
  },
  {
    productId: 109,
    name: "HD Webcam",
    price: 59.99,
    quantity: 18,
    brand: "Logitech"
  },
  {
    productId: 110,
    name: "Wireless Earbuds",
    price: 89.99,
    quantity: 45,
    brand: "Sony"
  },
  {
    productId: 111,
    name: "Power Bank",
    price: 29.99,
    quantity: 55,
    brand: "Mi"
  },
  {
    productId: 112,
    name: "Monitor 24-inch",
    price: 179.99,
    quantity: 12,
    brand: "Dell"
  },
  {
    productId: 113,
    name: "Graphics Tablet",
    price: 69.99,
    quantity: 14,
    brand: "XP-Pen"
  },
  {
    productId: 114,
    name: "Gaming Chair",
    price: 249.99,
    quantity: 8,
    brand: "Green Soul"
  },
  {
    productId: 115,
    name: "Desk Lamp",
    price: 22.99,
    quantity: 32,
    brand: "Philips"
  },
  {
    productId: 116,
    name: "Portable HDD",
    price: 89.99,
    quantity: 16,
    brand: "Seagate"
  },
  {
    productId: 117,
    name: "WiFi Router",
    price: 99.99,
    quantity: 22,
    brand: "TP-Link"
  },
  {
    productId: 118,
    name: "USB Flash Drive 64GB",
    price: 14.99,
    quantity: 75,
    brand: "SanDisk"
  },
  {
    productId: 119,
    name: "Noise Cancelling Headphones",
    price: 299.99,
    quantity: 10,
    brand: "Bose"
  },
  {
    productId: 120,
    name: "LED Monitor 27-inch",
    price: 229.99,
    quantity: 11,
    brand: "LG"
  }
];

const list = document.querySelector(".list")

products.map((item) => {
  const temp = document.createElement("div")
  temp.innerHTML = `<div class="card">

            <div class="product-details">
                <h2>${item.name}</h2>
                <p class="brand">Brand: ${item.brand}</p>

                <div class="price">
                    ₹ +${item.price}
                </div>

                <p class="quantity">
                    Stock: ${item.quantity} units
                </p>
            </div>
        </div>`
  list.appendChild(temp)
})