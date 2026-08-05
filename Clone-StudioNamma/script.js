let video = document.querySelector(".motion-video");
let home = document.querySelector(".home");

home.addEventListener("mousemove",(move)=>{
    video.style.display = "block"

    video.style.left = move.x + "px"
    video.style.top = move.y + "px"
    video.style.opacity = "1"
})

home.addEventListener("mouseleave",()=>{
    video.style.opacity = "0"
    video.style.display = "none"

})