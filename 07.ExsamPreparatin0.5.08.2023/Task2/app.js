window.addEventListener("load", solve);

function solve() {
    
  let studentInput=document.querySelector("#student");
  let universityInput=document.querySelector("#university");
  let scoreInput=document.querySelector("#score");

 
  
  
  let previewUlLust = document.querySelector("#preview-list");
  let applayList = document.querySelector("#candidates-list");


  let nextButton = document.querySelector("#next-btn");

  nextButton.addEventListener("click",nextStep);

  function nextStep(){
    if (studentInput.value===""||universityInput.value===""||scoreInput.value==""){
        return;
      }
    previewUlLust.innerHTML=""
    nextButton.setAttribute("disabled",true) ;

    let li=createElement("li",null,previewUlLust,["application"])
    let articleSection=createElement("article",null,li);
    let studentValue=createElement("h4", studentInput.value,articleSection);
    let uneversityValue=createElement("p",`University: ${universityInput.value}`,articleSection);
    let univer=universityInput.value;
    let scoreValue =createElement("p",`Score: ${scoreInput.value}`,articleSection);
    let scr = scoreInput.value;


    let buttonEdit=createElement("button","edit",li,["action-btn","edit"]);
    let buttonApplay = createElement("button","apply",li,["action-bnt", "apply"]);
    studentInput.value="";
    universityInput.value="";
    scoreInput.value="";

    buttonEdit.addEventListener("click",editFunchtion);

    function editFunchtion(){
      studentInput.value=studentValue.textContent;
      universityInput.value=univer;
      scoreInput.value=scr;
      nextButton.disabled=false;
      previewUlLust.innerHTML=""
    }

    buttonApplay.addEventListener("click",applayStudent);

    function applayStudent(){
        buttonApplay.remove();
        buttonEdit.remove();
        applayList.appendChild(li);
        nextButton.disabled=false;
        previewUlLust.innerHTML=""
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
  