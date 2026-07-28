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
    let span = document.createElement("span");
    span.innerText = tasklist;

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
        span.classList.toggle("completed");
    });

    btnGroup.appendChild(del);
    btnGroup.appendChild(com);

    li.appendChild(span);
    li.appendChild(btnGroup);

    task.appendChild(li);

    input.value = "";
});