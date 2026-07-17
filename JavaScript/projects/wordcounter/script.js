let text = document.getElementById("text");
let word = document.getElementById("word");

text.addEventListener("mouseup", function(){

    let value = text.value.trim();

    if(value === ""){
        word.innerText = 0;
        return;
    }

    let words = value.split(/\s+/);

    word.innerText = words.length;

});