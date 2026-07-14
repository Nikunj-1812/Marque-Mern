
let display = document.getElementById("display");
let btn = document.querySelectorAll("button");

btn.forEach(function(button){
    button.addEventListener("click", function(){
        let value = button.innerText;
        if(value === "="){
            try{
                display.value = eval(display.value);
            }
            catch{
                display.value = "Error";
            }
        }
        else if(value === "C"){
            display.value = "";
        }
        else{
            display.value += value;
        }
    });
});