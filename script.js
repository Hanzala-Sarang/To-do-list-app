const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")
const cpyBtn = document.getElementById("cpy-btn")
function addTask(){

    if (inputBox.value == ''){
        alert("Please Enter The Task")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false)

cpyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(inputBox.value)
    cpyBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    setTimeout(()=>{
        cpyBtn.innerHTML = '<i class="fa-solid fa-copy"></i>'
    },3000)
})

function saveData(){
    localStorage.setItem("task",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("task")
}

showTask()