
function attachEvents() {
    document
    .querySelector(`#load-board-btn`)
    .addEventListener("click",loadBoard);

    const taskSecektion={
        ToDo : document.querySelector(`#todo-section`),
        "In Progress" : document.querySelector("#in-progress-section"),
        "Code Review" : document.querySelector("#code-review-section"),
        "Done": document.querySelector("#done-section"),

    };

    async function loadBoard(){
        let tasks = await fetch(`http://localhost:3030/jsonstore/tasks/`)
        .then(res=>res.json())
        .then(console.log);
    }


    function createElement(type, content, parentNode, classes, id, ) {
        const element = document.createElement(type);
    
    
        if (classes && classes.length > 0) {
          element.classList.add(...classes);
        }
    
        if (id) {
          element.setAttribute('id', id);
        }
    
        if (parentNode) {
          parentNode.appendChild(element);
        }
      
        return element;
    }
}

attachEvents();