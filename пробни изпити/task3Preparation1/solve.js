// TODO
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    let loadButton = document.querySelector('#load-button');
    let addButton = document.querySelector('#add-button');
    
    let ulList=document.querySelector('#todo-list');
    let inputTitle = document.querySelector('#title');
    

    loadButton.addEventListener('click',loadItem);
    
    addButton.addEventListener(`click`,addNewItem)


    function loadItem(e){
        if (e) {
            e.preventDefault();
        }
        ulList.innerHTML="";

        fetch(BASE_URL)
        .then(e=>e.json())
        .then(items=>{
            Object.values(items).forEach(
                ({name,_id})=>{
                    let liItem=createElement(`li`,null,ulList);
                    createElement('span',name,liItem)
                    let removeBtn=createElement('button','Remove',liItem);
                    let editBtn=createElement('button','Edit',liItem);

                    removeBtn.id=_id;
                    editBtn.id=_id;

                    removeBtn.addEventListener('click',removeItem);
                    editBtn.addEventListener(`click`,editItem);
                }   
            )
        })
    }
    function addNewItem(e){
        e.preventDefault();
        let headers = {
            method:'POST',
            body:JSON.stringify({name:inputTitle.value})
        }

        if (typeof inputTitle.value !== "string" ||
            inputTitle.value.length <= 3) {
            return;
        }

        fetch(BASE_URL,headers).then(()=>{
            loadItem(e);
            inputTitle.innerHTML="";
        })
    }
    function removeItem(e){
        let id = e.target.id;
        
        let headers = {
            method:"DELETE"
        };

        fetch(`${BASE_URL}${id}`,headers)
        .then(()=>loadItem());
    }

    function editItem(e) {
        let id = e.target.id;
        
        let li = e.target.parentNode;
        let valueSpan=li.querySelector(`span`).textContent;

        li.innerHTML="";
        let inputEdit=createElement(`input`,valueSpan,li );
        let removeBtn=createElement(`button`,`Remove`,li);
        let submitBtn=createElement(`button`,`Submit`,li);

        removeBtn.addEventListener(`click`,removeItem);

        submitBtn.addEventListener(`click`,editRequest);

        function editRequest(e){
            
            let headers={
                method:`PATCH`,
                body:JSON.stringify({name:inputEdit.value})
            }

            fetch(`${BASE_URL}${id}`,headers)
            .then(()=>{loadItem(e)})
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
}

attachEvents();
