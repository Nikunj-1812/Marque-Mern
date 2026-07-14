let input = document.getElementById("input");
let btn = document.getElementById("btn");
let task = document.getElementById("tasklist");


btn.addEventListener("click",function(){
    let tasklist = input.value;
    if(tasklist === ""){
        alert("add a task");
        return;
    }

    let li = document.createElement("li");
    li.innerText = tasklist;

    let del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("deleteBtn");
    del.addEventListener("click", function(){
        li.remove();
    });

    li.appendChild(del);
    task.appendChild(li);
    input.value = "";

})