taskLabel = document.querySelector("#new-task");
addLabel = document.querySelector("#add");
errorLabel = document.querySelector("#error-label")
tasks = document.querySelector("#tasks-list");
tasksArr = [];

addLabel.addEventListener('click', function (e) {

    if (taskLabel.value == "") {
        errorLabel.innerText = "Empty!!!";
    } else {
        if (tasksArr.indexOf(taskLabel.value) != -1) {
            errorLabel.innerText = "Task already Exist!!!";
            taskLabel.value = "";
        } else {
            errorLabel.innerText = "";
            tasksArr.push(taskLabel.value);

            addTask();        

            delBtn.addEventListener('click', delTask)
        }
    }
})

function addTask() {

    taskContainer = document.createElement("div");
    newTask = document.createElement("li");
    taskText = document.createTextNode(taskLabel.value);
    
    newTask.appendChild(taskText);
    taskContainer.appendChild(newTask);

    delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    taskContainer.appendChild(delBtn);
    tasks.appendChild(taskContainer);

    taskContainer.classList.add(taskLabel.value.trim() + "-class");
    delBtn.classList.add(taskLabel.value.trim() + "-class");

    taskLabel.value = "";
    
    newTask.addEventListener('click', function () {
        this.style.textDecoration = "line-through";
    })
}

function delTask() {
    deleted = document.querySelector("." + this.classList[0]);
    
    // remove the element from the array of tasks to can be added it later
    taskName = this.classList[0].split("-")[0];
    tasksArr = tasksArr.filter(function (elm, index) {
        return (elm != taskName);
    });
    
    deleted.remove();
}