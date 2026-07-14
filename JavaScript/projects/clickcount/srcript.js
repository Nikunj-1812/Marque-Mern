let count = 0;

let cnt = document.getElementById("count");
let inc = document.getElementById("increase");
let dec = document.getElementById("decrease");
let res = document.getElementById("reset");

inc.addEventListener("click", function () {
    count++;
    cnt.innerText = count;
});

dec.addEventListener("click", function () {
    count--;
    cnt.innerText = count;
});

res.addEventListener("click", function () {
    count = 0;
    cnt.innerText = count;
});