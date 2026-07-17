let display = document.getElementById("display");
let stbtn = document.getElementById("start");
let spbtn = document.getElementById("stop");
let rebtn = document.getElementById("reset");

let sec = 0;
let min = 0;
let hr = 0;

let timer = null;

stbtn.addEventListener("click", function(){

    if(timer == null){
        timer = setInterval(updateTime,1000);
    }

});

spbtn.addEventListener("click", function(){

    clearInterval(timer);
    timer = null;

});

rebtn.addEventListener("click", function(){

    clearInterval(timer);
    timer = null;

    sec = 0;
    min = 0;
    hr = 0;

    display.textContent = "00 : 00 : 00";

});

function updateTime(){

    sec++;

    if(sec == 60){
        sec = 0;
        min++;
    }

    if(min == 60){
        min = 0;
        hr++;
    }

    let h = String(hr).padStart(2,"0");
    let m = String(min).padStart(2,"0");
    let s = String(sec).padStart(2,"0");

    display.textContent = `${h} : ${m} : ${s}`;

}