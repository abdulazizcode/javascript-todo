//SELECTORS
const inputTodo = document.querySelector('.input-todo');
const addTodo = document.querySelector('.add-todo');
const todoLists = document.querySelector('.lists--container');

//EVENTLISTENERS
addTodo.addEventListener('click', addTodoItem);
todoLists.addEventListener('click', deleteCheck)
//FUNCTIONS
function addTodoItem(event){
    event.preventDefault();

    const parentDiv = document.createElement('ul');
    parentDiv.classList.add('todo-items');

    const todoIteam = document.createElement('li');
    todoIteam.classList.add('todo-item');
    todoIteam.innerText = inputTodo.value;

    parentDiv.appendChild(todoIteam);
    
    todoLists.appendChild(parentDiv);


    //CREATE COMPLETE BUTTON
    const completeButton = document.createElement('button');
    completeButton.classList.add('completed');
    completeButton.innerText = "Completed";
    parentDiv.appendChild(completeButton);
    
    //DELETE COMPLETE BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerText = "Delete";
    parentDiv.appendChild(deleteButton);

    inputTodo.value = "";
}


function deleteCheck(event){
    const item = event.target;
    
    //DELETE TODO
    if(item.classList[0] === 'delete'){
      const todo = item.parentElement;
      todo.remove();
    }
    
    //Check
    
    if(item.classList[0] === "completed"){
      const todo = item.parentElement;
      todo.classList.toggle("completed-todo");
    }
  }