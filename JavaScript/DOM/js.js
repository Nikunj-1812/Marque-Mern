let h = document.getElementById("heading");
let items = document.getElementsByClassName("item");
h.innerText = "Welcome";
h.style.color = "blue";

for(let i = 0;i<items.length;i++){
    items[i].style.color = "red";
}

console.log(h);
