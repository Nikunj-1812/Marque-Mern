const form = document.getElementById("myForm");
const input = document.getElementById("nameInput");
const output = document.getElementById("output");

form.addEventListener("submit", function(e){
e.preventDefault();
const name = input.value.trim();
if(name === "") return;
let n = localStorage.setItem("name",name);
console.log(n);
output.textContent =  name;

});

let count = 0;
const counttext = document.getElementById("count");
const add = document.getElementById("increase");
const dec = document.getElementById("decrease");

add.addEventListener("click",function(e){
    e.preventDefault();
    count++;
    counttext.textContent = count;
})
dec.addEventListener("click",function(e){
    count--;
    counttext.textContent = count;
})

const text = document.getElementById("text");
const hide = document.getElementById("hide");
const show = document.getElementById("show");

hide.addEventListener("click",function(){
    text.style.display = "none";
})
show.addEventListener("click",function(){
    text.style.display = "block";
})

const button = document.getElementById("themeBtn");

button.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

const input = document.getElementById("itemInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("list");

button.addEventListener("click",function(){
    if(input.value.trim() == "") return;
    const li = document.getElementById("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
});