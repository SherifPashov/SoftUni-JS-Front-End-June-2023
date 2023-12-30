let BASE_URL = `http://localhost:3030/jsonstore/tasks/`;

let locatinonInput = document.querySelector(`#location`);
let temperatureInput = document.querySelector("#temperature");
let dateInput=document.querySelector("#date");

let divList = document.querySelector("#list");

let loadHistory = document.querySelector("#load-history");
let addWeather = document.querySelector("#add-weather");
let editWeather=document.querySelector("#edit-weather");

addWeather.addEventListener("click",addLocation);
loadHistory.addEventListener("click" ,loadLocation);

function loadLocation(e){
    
    divList.innerHTML="";
    
    fetch(BASE_URL)
        .then(e=>e.json())
        .then(items=>{
            Object.values(items).forEach(
                ({location,temperature,date,_id})=>{
                    
                    let divConteiner = createElement("div",null,divList,["container"],);
                    createElement("h2",location,divConteiner);
                    createElement("h3",date,divConteiner);
                    createElement("h3",temperature,divConteiner,null,"celsius");

                    let divBtn=createElement("div",null,divConteiner,["buttons-container"],);

                    let changeBtn =  createElement("button","Change",divBtn,["change-btn"]);
                    let deleteBtn = createElement("button","Delete",divBtn,["delete-btn"]);
                    
                    changeBtn.id=_id;
                    deleteBtn.id=_id;
                    
                    changeBtn.addEventListener("click",changeInfo);
                    deleteBtn.addEventListener("click",deleteLocation);

                    function deleteLocation(e){

                        let id =e.target.id;
                        
                        let headers = {
                            method:"DELETE"
                        };
                    
                        fetch(`${BASE_URL}${id}`,headers)
                        .then(()=>loadLocation());
                    } 

                    function changeInfo(e){

                       let id = e.target.id;
                        

                        locatinonInput.value=location;
                        temperatureInput.value=temperature;
                        dateInput.value=date;

                        
                        editWeather.removeAttribute("disabled");
                        addWeather.setAttribute("disabled",true)
                        
                        editWeather.addEventListener("click",editRequest);

                        function editRequest(){
                            
                            headers = {
                                method:'PUT',
                                body:JSON.stringify({
                                    location : locatinonInput.value,
                                    temperature : temperatureInput.value,
                                    date : dateInput.value,
                                })
                            };
                            
                            fetch(`${BASE_URL}${id}`,headers)
                            .then(()=>{loadLocation(e)})
                            .catch((error)=>console.error(error));
                            
                            divConteiner.remove();

                            addWeather.disabled=false;
                            editWeather.disabled=true;
                            
                            locatinonInput.value="";
                            temperatureInput.value="";
                            dateInput.value="";
                        }
                    }
                }
            )
        }
    )
        
};
    
    
function addLocation(e){

    if (locatinonInput.value===""||temperatureInput.value===""|| dateInput.value===""){
        return;
    }

    let headers = {
        method:'POST',
        body:JSON.stringify({
            location:locatinonInput.value,
            temperature:temperatureInput.value,
            date:dateInput.value
        })
    }

    fetch(BASE_URL,headers).then(()=>{
        loadLocation(e);

        locatinonInput.value="";
        temperatureInput.value="";
        dateInput.value="";
    })
    

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
