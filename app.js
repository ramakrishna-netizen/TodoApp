const todoList = document.querySelector(".todo-list");
const todoAddButton = document.querySelector(".todo-add");
const todoInput = document.querySelector(".todo-input");




todoAddButton.addEventListener("click", createTodo);
todoList.addEventListener('click', todoActions);



function createTodo(e){


    e.preventDefault();
    const todo = document.createElement("div");
    todo.classList.add("todo");


    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerText= todoInput.value;

    const doneButton = document.createElement("button");
    doneButton.innerHTML = '<i class="fas fa-check"></i>';


    const deleteButton = document.createElement("button");


    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('button-trash');
    deleteButton.classList.add('fall');

    doneButton.classList.add("check-button");

    todo.appendChild(todoItem);
    todo.appendChild(doneButton);
    todo.appendChild(deleteButton);


    
    

    todoInput.value = "";

    
    todoList.appendChild(todo);

}

function todoActions(e){

    const item = e.target;



    if(item.classList[0] === "check-button"){

        item.parentElement.classList.toggle("mark-done");
   
    }
    if(item.classList[0] === "button-trash"){


        console.dir("Deleting "+ item.parentElement);
        
       


        item.parentElement.remove();

        


        

        

    }



}