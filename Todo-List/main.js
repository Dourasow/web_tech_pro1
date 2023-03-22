const startButton = document.querySelector('#start-button');
const todoList = document.querySelector('.second-main-container');
const displayFormBtn = document.querySelector('#button');
const form = document.querySelector('.third-main-container');
const closeForm = document.querySelectorAll('#close');
const addBtn = document.querySelector('#add-btn');
let taskTitle = document.querySelector('#task-title');
let taskDiscription = document.querySelector('#task-discription');
let taskDate = document.querySelector('#task-date');
const title = document.querySelector('.title');
const todoNum = document.querySelector('#todo-num');
const editIndTask = document.querySelectorAll('.edit-task');
// const editTask = document.querySelector('.edit-task-btn')
const editElement = document.querySelector('.task-container');
let test = document.querySelector('.form');
const fname = document.getElementById('#task-title');

const todoArr = [];


startButton.addEventListener('click', e =>{
    
    todoList.style.display = 'block';
})

function displayform(e){
    form.style.display = 'block';
}

displayFormBtn.addEventListener("click", e =>{
    displayform(e);
})

function closeform (e){
    form.style.display = "none";
}

closeForm.forEach(el =>{
    el.addEventListener('click', e =>{
        closeform(e)
    })
})


addBtn.addEventListener('click', e =>{
    let HTML = ` <div class="title"  >
    <div class="check">
        <input data-action="check" type="checkbox">
    </div>
    <div class="date">
        <h3>${taskDate.value}</h3>
       
    </div>
    <div class="task">
        <h3 data-action="edit">${taskTitle.value} &nbsp; ${taskDiscription.value}</h3>
    </div>
</div>`

title.insertAdjacentHTML('afterend', HTML);
taskDate.value = '';
taskTitle.value = '';
taskDiscription.value = '';
todoArr.push(HTML);

todoNum.textContent = todoArr.length;
closeform(e);
console.log(todoArr.length)

})

editElement.addEventListener('click', (event) => {
    const target = event.target;
    const parentElement = target.parentNode;
    todoNum.textContent = todoArr.length;

    if(parentElement.className !== 'task-container') return;

    const taskContainer = todoNum;
    // const todoId = Number(taskContainer.id);
    const todoId = todoArr.length;

    const action = target.dataset.action

    // if (action === "undefined") {
    //    alert("sow")
    // }else
    // {
    //     const dd = localStorage.getItem(taskTitle);
    //     console.log(dd);
           
    //     // displayform(event);
        
    // }
    action !== "undefined" && editToDo();

//    editToDo();

    // console.log(todoArr.length, action, todoId);
})



// function editindtask(e){
//     console.log("hello")
// }


function editToDo()
{
  
    for (const element of todoArr) {
        // console.log(element);
       taskTitle = element;
       taskDiscription = element;
       taskDate =element;
  
        displayform() ;
        // test.value = element.value;
         console.log(taskTitle );
    }
   }
        
            
editTask.addEventListener('click', e=>{
    if(todoArr.length != 0) {
    
        editIndTask.forEach(el => {
            el.addEventListener("click", e =>{
                editindtask(e);
                console.log("how are you")

                
            })
        })
console.log("Hello")
console.log(editIndTask)
}
})






