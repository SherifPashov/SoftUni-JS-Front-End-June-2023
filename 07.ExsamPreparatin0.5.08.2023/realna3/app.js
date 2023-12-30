let loadButton = document.querySelector("#load-vacations");
let section = document.querySelector("#list")
loadButton.addEventListener("click",loadVacantion);

let nameInput = document.querySelector("#name");
let daysInput = document.querySelector("#num-days");
let dateInput = document.querySelector("#from-date");





async function loadVacantion(e){
    let response = await fetch("http://localhost:3030/jsonstore/tasks/");
    let data = await response.json()

    let vacantion = Object.values(data);
    vacantion.forEach((e)=>{
        let name = e.name;
        let days=e.days;
        let date=e.date
        let id=e.id;
        console.log
        
        rendVacantion(date,name,days,id)
    });

    loadButton.setAttribute("disabled",true);
    
}

function rendVacantion(data,name,days,id){
    let divContainer = createElement("div","",section,["container",]);
    let nameCur=createElement("h2",name,divContainer);
    let dateCur=createElement("h3",data,divContainer);
    let daysCur=createElement("h3",days,divContainer)
    let buttonChange=createElement ("button","Change",divContainer,["change-btn"]);
    let buttonDone=createElement ("button","Done",divContainer,["done-btn"]);

    buttonChange.addEventListener("click",changeFunk);
    buttonDone.addEventListener("click",doneFunk);
    
    function changeFunk(){

        nameInput.value=nameCur.textContent;
        daysInput.value=daysCur.textContent;
        dateInput.value=dateCur.textContent;

    }
    function doneFunk(e){
        console.log(id);
         fetch(`http://localhost:3030/jsonstore/tasks/${id}`,{
            methehod: `delete `,
            
        });
    }
}


function createElement(type, content, parentNode, classes, id, useInnerHtml) {
    const element = document.createElement(type);

    if (content && useInnerHtml) {
        element.innerHTML = content;
    } else {
        if (content && type !== 'input') {
            element.textContent = content;
        }

        if (content && type === 'input') {
            element.value = content;
        }
    }

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