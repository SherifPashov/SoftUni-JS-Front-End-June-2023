window.addEventListener("load", solve);

function solve() {

  let name = document.querySelector("#player");
  let score = document.querySelector("#score");
  let round = document.querySelector("#round");

  let ulLust = document.querySelector("#sure-list");
  let scoreList=document.querySelector("#scoreboard-list");

  let addBtn = document.querySelector("#add-btn");
  

  let reloadBtn=document.querySelector(".clear");
  
  reloadBtn.addEventListener("click",reloadPage);

  function reloadPage(){
    window.location.reload(true);
  }

  addBtn.addEventListener('click',addItem);

    
    function addItem(){

      if (name.value===""|| score.value==="" || round.value==="") {
        return;
      }
        let ob={
          name:name.value,
          score:score.value,
          round:round.value,
        }
      let li = createElement("li",null,ulLust,["dart-item"]);
      let  article = createElement("article",null,li);
      createElement("p",`${name.value}`,article);
      createElement("p",`Score: ${score.value}`,article);
      createElement("p",`Round: ${round.value}`,article);

      let editBtn =createElement("button",'edit',li,["btn","edit"]);
      let okBtn=createElement("button","ok",li,["btn","ok"]);

      addBtn.setAttribute("disabled",true);
      

      editBtn.addEventListener("click",editFunk);
      okBtn.addEventListener("click",okFunk);

      function editFunk(){
        
        name.value=ob.name;
        score.value=ob.score;
        round.value=ob.round;

          li.remove();

        addBtn.removeAttribute("disabled");
        
      }

      function okFunk(){
        scoreList.appendChild(li);
        editBtn.remove();
        okBtn.remove();

        addBtn.disabled=false;
      }
      name.value="";
      score.value="";
      round.value="";
    }
    function reloadPage(){
      location.reload();
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
  