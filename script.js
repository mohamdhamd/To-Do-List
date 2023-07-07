const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-container");
// to remove space from val
// const inputValue = inputBox.value.trim()

function AddTask() {
    if (inputBox.value === "" || inputBox.value === " " || inputBox.value === "   " || inputBox.value === "    ") {
        alert("Please enter Task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCont.appendChild(li)
        inputBox.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        savedData();
    }
}
listCont.onclick = (function (e) {
    console.log(e);
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        savedData();
    } 
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedData();
    }
    savedData()
})
var input = document.getElementById("input-box");
input.addEventListener("keypress", function (event) {
    console.log(event.key)
    if (event.key === "Enter") {
        event.preventDefault();
        if (inputBox.value === "" || inputBox.value === " " || inputBox.value === "   " || inputBox.value === "    ") {
            alert("Please enter Task");
        } else {
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listCont.appendChild(li)
            inputBox.value = "";
            let span = document.createElement("span");
            span.innerHTML = "\u00d7"
            li.appendChild(span);
            savedData();
        }
    }
});
function savedData(){
    localStorage.setItem("data",listCont.innerHTML)
}
function showTask(){
    listCont.innerHTML=localStorage.getItem("data")
}
showTask();