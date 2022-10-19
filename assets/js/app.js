/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */


 var index;
 var myTitle ;
 var myFeature = document.getElementById("feature");
 var myBug = document.getElementById("bug");
 var myType;


 var high = document.getElementById("high");
 var medium = document.getElementById("medium");
 var low = document.getElementById("low");
 var critical = document.getElementById("critical");
 var myPriority;

 var myToDo = document.getElementById("To Do");
 var myDoing = document.getElementById("In Progress");
 var myDone = document.getElementById("Done");
 var myStatus
 var myDate
 var myDescription


function createTask() {
    // initialiser task form
    // Afficher le boutton save
    // Ouvrir modal form
    
    myTitle = document.getElementById("formTitle").value;
    console.log(myTitle);

    if(myFeature.checked) {myType= document.getElementById("feature").id}
    if(myBug.checked){myType= document.getElementById("bug").id;}

    if(high.selected){myStatus = document.getElementById("high").id}
    if(medium.selected){myPriority = document.getElementById("medium").id}
    if(low.selected){myPriority = document.getElementById("low").id}
    if(critical.selected){myPriority = document.getElementById("critical").id}

    if(myToDo.selected){myStatus = document.getElementById("To Do").id}
    if(myDoing.selected){myStatus = document.getElementById("In Progress").id}
    if(myDone.selected){myStatus = document.getElementById("Done").id}

    myDate=document.getElementById("endDate").value
    myDescription = document.getElementById("formTextarea").value

    tasks.push({
        title        : myTitle,
        type         : myType,
        priority     : myPriority,
        status       : myStatus,
        date         : myDate,
        description  : myDescription,
    })
    console.log(tasks);
    readTask()
}

var myDos, myDoings, myDones ;
myDos = document.getElementById("to-do-tasks");
myDoings = document.getElementById("in-progress-tasks");
myDones = document.getElementById("done-tasks");

var index;
function readTask(){
    myDos.innerHTML= '';
    myDoings.innerHTML='';
    myDones.innerHTML='';
    for(let i = 0; i < tasks.length; i++){
        if( tasks[i].status === "To Do" ){
            myDos.innerHTML +=`<button type="button" data-bs-toggle="modal" data-bs-target="#modal-task-edit" class="w-100 border-0 mb-1 bg-white d-flex" onclick="editTask(${i})"  >
         					<div class="p-2">
         						<i class="bi bi-question-circle text-green-500 fs-4"></i> 
         					</div>
         					<div class="d-flex flex-column text-start py-2">
         						<div class="fw-bolder h5 mb-1 ">  ${tasks[i].title}</div>
         						<div class="d-flex flex-column text-start">
         							<div class="text-gray-600 mb-1">#1 created in  ${tasks[i].date}</div>
         							<div class="mb-2" title=""> ${tasks[i].description}</div>
         						</div>
         						<div class="">
        							<span class="rounded px-2 py-1 text-white bg-cyan-600"> ${tasks[i].priority}</span>
                                    <span class="btn btn-secondary px-2 py-1"> ${tasks[i].type}</span>
         						</div>
         					</div>
         				</button> `
        }
        if(tasks[i].status === "In Progress"){
            myDoings.innerHTML +=`<button type="button" data-bs-toggle="modal" data-bs-target="#modal-task-edit" class="w-100 border-0 mb-1 bg-white d-flex" onclick="editTask()" >
                            <div class="p-2">
                                <i class="bi bi-question-circle text-green-500 fs-4"></i> 
                            </div>
                            <div class="d-flex flex-column text-start py-2">
                                <div class="fw-bolder h5 mb-1 ">  ${tasks[i].title}</div>
                                <div class="d-flex flex-column text-start">
                                    <div class="text-gray-600 mb-1">#1 created in  ${tasks[i].date}</div>
                                    <div class="mb-2" title=""> ${tasks[i].description}</div>
                                </div>
                                <div class="">
                                <span class="rounded px-2 py-1 text-white bg-cyan-600"> ${tasks[i].priority}</span>
                                <span class="btn btn-secondary px-2 py-1"> ${tasks[i].type}</span>
                                </div>
                            </div>
                        </button> `
        }
        if(tasks[i].status === "Done" ){
            myDones.innerHTML +=`<button  type="button" data-bs-toggle="modal" data-bs-target="#modal-task-edit" class="w-100 border-0 mb-1 bg-white d-flex" onclick="editTask()" >
                                <div class="p-2">
                                    <i class="bi bi-question-circle text-green-500 fs-4"></i> 
                                </div>
                                <div class="d-flex flex-column text-start py-2">
                                    <div class="fw-bolder h5 mb-1 ">  ${tasks[i].title}</div>
                                    <div class="d-flex flex-column text-start">
                                        <div class="text-gray-600 mb-1">#1 created in  ${tasks[i].date}</div>
                                        <div class="mb-2" title="">${tasks[i].description} </div>
                                    </div>
                                    <div class="">
                                    <span class="rounded px-2 py-1 text-white bg-cyan-600"> ${tasks[i].priority}</span>
                                    <span class="btn btn-secondary px-2 py-1"> ${tasks[i].type}</span>
                                    </div>
                                </div>
                            </button> `
                            }
    }
}

function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
    
}

function editTask(index) {
    // console.log(index);
    // Initialisez task form
    // Affichez updates
    // Delete Button
    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete
    // Definir FORM INPUTS
    // Ouvrir Modal form

    let edit;
    edit = document.getElementById("edit");
    edit.innerHTML = `<div class="modal fade" id="modal-task-edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <!-- Modal content goes here -->
    <div class="modal-dialog">
        <form  class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add task</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div   class="mb-3">
              <label  class="form-label">Title</label>
              <input type="text" class="form-control" id="formTitle">
              <label  class="form-label mt-10px">Type</label>
              <div class="form-check ms-3">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="feature" >
                  <label class="form-check-label" >Feature</label>
              </div>
              <div class="form-check ms-3">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="bug">
                  <label class="form-check-label" >Bug</label>
              </div>
              <label class="form-label mt-1">Priority</label>
              <select class="form-select form-select-lg mb-3" id="formSelectPriority" aria-label=".form-select-lg example">
                  <option disabled selected>Please select</option>
                  <option id="high" value="1">high</option>
                  <option id="medium" value="2">medium</option>
                  <option id="low" value="3">low</option>
                  <option id="critical" value="3">critical</option>
              </select>
              <label  class="form-label mt-1">Status</label>
              <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="formSelectStatus">
                  <option disabled selected>Please select</option>
                  <option id="To Do" value="1">to do</option>
                  <option id="In Progress" value="2">doing</option>
                  <option id="Done" value="3">done</option>
              </select>
              <label  class="form-label mt-1">Date</label>
              <div>
                  <input type="date" id="endDate" name="trip-start"
                  value="yyyy-MM-dd" class="form-control mb-3"
                  min="2021-01-01" max="2023-12-31">
              </div>
              <div class="mb-3">
                  <label class="form-label">Description</label>
                  <textarea class="form-control" id="formTextarea" rows="3"></textarea>
              </div>
              <div class="modal-footer">
                  <button type="button"  class="btn btn-light text-dark" data-bs-dismiss="modal">Close</button>
                  <button type="button" id="update"  class="btn btn-success" data-bs-dismiss="modal">Update</button>
                  <button type="button" id="delete"  class="btn btn btn-danger" data-bs-dismiss="modal">Delete</button> 
              </div>
          </div>
      </div>
  </form>
  </div>
</div>`
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}




    
