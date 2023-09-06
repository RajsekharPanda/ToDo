const todoForm = document.querySelector(".formTodo");
const  todoInput = document.querySelector(".formTodo input[type='text']");
const todoList = document.querySelector(".todoList");
todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newTodoText = todoInput.value; 
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
            <div class="todoButtons">
                <button class="todoBtn done">Done</button>
                <button class="todoBtn remove">Remove</button>
            </div>`;
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value = "";
})

todoList.addEventListener("click", (e)=>{
    // console.log(e.target);
    if(e.target.classList.contains("done")){
        // console.log("Great !!!");
        const liSpan =  e.target.parentNode.previousElementSibling; 
        liSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
})