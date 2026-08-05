let input = document.getElementById("input");
let btn = document.getElementById("btn");
let task = document.getElementById("tasklist");

btn.addEventListener("click", function () {

    let tasklist = input.value.trim();
    if (tasklist === "") {
        alert("Add a task");
        return;
    }

    let li = document.createElement("li");
    let div = document.createElement("div");
    div.innerText = tasklist;

    let btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group");

    let del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("deleteBtn");
    del.addEventListener("click", function () {
        li.remove();
    });

    let com = document.createElement("button");
    com.innerText = "Complete";
    com.classList.add("completBtn"); 
    com.addEventListener("click", function () {
    div.classList.toggle("completed");
    com.style.display = "none";
});
    

    btnGroup.appendChild(del);
    btnGroup.appendChild(com);

    li.appendChild(div);
    li.appendChild(btnGroup);

    task.appendChild(li);

    input.value = "";
});


