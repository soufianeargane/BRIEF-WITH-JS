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

 var myToDo = document.getElementById("to do");
 var myDoing = document.getElementById("doing");
 var myDone = document.getElementById("done");
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

    if(myToDo.selected){myStatus = document.getElementById("to do").id}
    if(myDoing.selected){myStatus = document.getElementById("doing").id}
    if(myDone.selected){myStatus = document.getElementById("done").id}

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

function readTask(){
    myDos.innerHTML= '';
    myDoings.innerHTML='';
    myDones.innerHTML='';
    for(let i = 0; i < tasks.length; i++){
        if( tasks[i].status === "To Do" ){
            myDos.innerHTML +=`<button type="button" class="w-100 border-0 mb-1 bg-white d-flex" >
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
            myDoings.innerHTML +=`<button type="button"  class="w-100 border-0 mb-1 bg-white d-flex" >
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
            myDones.innerHTML +=`<button type="button" class="w-100 border-0 mb-1 bg-white d-flex">
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
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
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