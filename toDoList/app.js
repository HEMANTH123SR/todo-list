//selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
//event listners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCeck);

//function
function addTodo() {
  event.preventDefault();
  console.log("hello world");
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerHTML = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //complete button
  const compleButton = document.createElement("button");
  compleButton.innerHTML = '<i class="fas fa-check"></i>';
  compleButton.classList.add("complete-btn");
  todoDiv.appendChild(compleButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //append to list
  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function deleteCeck(e) {
  const item = e.target;
  //   console.log(e.target);
  //   console.log(item.classList[0]);
  if (item.classList[0] == "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  //check Mark
  if (item.classList[0] == "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

const fun = () => {
  let a = 10;
  return () => {
    console.log(a);
  };
};

let copy = fun();
console.log(copy);
