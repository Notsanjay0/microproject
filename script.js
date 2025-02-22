const inputBox = document.getElementById("input-box");
const taskContainer = document.getElementById("task-container");

taskContainer.innerHTML = localStorage.getItem("data");

function addTask() {
    if(inputBox.value === ''){
        alert("You must type SOMETHING");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveTasks();
    inputBox.value = '';
   
}
taskContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveTasks();
}, false);

function saveTasks() {
    localStorage.setItem("data", taskContainer.innerHTML);
}

taskContainer.innerHTML = localStorage.getItem("data");

