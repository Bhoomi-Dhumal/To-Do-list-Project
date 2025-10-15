let inputbox = document.getElementById("task-input");
let addbtn = document.getElementById("add-button");
let tasklist =document.getElementById("task-list");
addbtn.addEventListener("click" , addtask);

function addtask(){
    let tasktext=inputbox.value.trim();
    if (tasktext===""){
        alert("Please enter the task");
        return;
    }
     let li =document.createElement('li');
     li.textContent=tasktext;
     let deleteBtn = document.createElement('button');
     deleteBtn.textContent = "Delete";
     deleteBtn.classList.add("delete-btn");
     deleteBtn.addEventListener("click",function(){
       li.remove();
     })
     li.addEventListener("click",function(e){
        if(e.target!==deleteBtn){
       li.classList.toggle("completed");
        }
     })
     li.appendChild(deleteBtn);
     tasklist.appendChild(li);
     inputbox.value="";
}