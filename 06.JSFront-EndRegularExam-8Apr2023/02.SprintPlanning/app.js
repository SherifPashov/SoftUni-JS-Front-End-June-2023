window.addEventListener('load', solve);

function solve() {
    let tasks={};
    let inputDOMSelectors={
        title:document.querySelector("#title"),
        discription:document.querySelector("#description"),
        label: document.querySelector("#label"),
        points:document.querySelector("#points"),
        assignee:document.querySelector("#assignee"),

    };

    let anatherDomSelector={
        cteateTaskButton:document.querySelector("#create-task-btn"),
        deleteTaskButton:document.querySelector("#delete-task-btn"),
        section:document.querySelector("#tasks-section"),
        totalPointsVisual: document.getElementById('total-sprint-points'),
    } 

    const labelToIconMap = {
        'Feature': `⊡`,
        'Low Priority Bug': '☉',
        'High Priority Bug': '⚠',
    };
    const labelNameToClassMap = {
        'Feature': 'feature',
        'Low Priority Bug': 'low-priority',
        'High Priority Bug': 'high-priority',
    };
    anatherDomSelector.cteateTaskButton.addEventListener("click",createTask);
    anatherDomSelector.deleteTaskButton.addEventListener("click",delateTask);

    function createTask(){
        let{title, discription, label ,points, assignee}=inputDOMSelectors;

        let checkIsValidateInput=Object.values(inputDOMSelectors).some(i=>i.value === "");

        if(checkIsValidateInput){
            return;  
        }

        const taskId = `task-${Object.keys(tasks).length + 1}`;
        let articleSection=createElement("article",null,anatherDomSelector.section,["task-card"],taskId);
        createElement("div",`${label.value} ${labelToIconMap[label.value]}`,articleSection,['task-card-label', labelNameToClassMap[label.value]]);
        createElement("h3",title.value, articleSection,["task-card-title"]);
        createElement("p",discription.value,articleSection,["task-card-description"]);
        createElement("div",`Estimated at ${points.value} pts`,articleSection,["tesk-card-points"]);
        createElement("div",`Assigned to: ${assignee.value}`,articleSection,["task-card-assignee"])
        let divActions = createElement("div",null,articleSection,["task-card-actions"]);
        let buttonDeleteActions = createElement("button","Delate",divActions)
        buttonDeleteActions.addEventListener('click', loadDeleteForm);

        tasks[taskId] = {
            title: title.value,
            description: description.value,
            label: label.value,
            points: points.value,
            assignee: assignee.value,
        };
        updateTotalPoints();
        clearInputFields();
    }

    function loadDeleteForm(e){
        let taskId = e.target.parentNode.parentNode.getAttribute('id');
        document.getElementById('task-id').value = taskId;
        for (let key in inputDOMSelectors) {
            inputDOMSelectors[key].value = tasks[taskId][key];
        }
        Object.values(inputDOMSelectors)
            .forEach((input) => {
                input.setAttribute('disabled', true);
            })
        anatherDomSelector.cteateTaskButton.setAttribute('disabled', true);
        anatherDomSelector.deleteTaskButton.removeAttribute('disabled');
    }

    function delateTask(){
        let taskId = document.getElementById('task-id').value;
        let taskToRemove = document.getElementById(taskId);
        taskToRemove.remove();
        delete tasks[taskId];
        anatherDomSelector.deleteTaskButton.setAttribute('disabled', true);
        anatherDomSelector.cteateTaskButton.removeAttribute('disabled');
        Object.values(inputDOMSelectors)
            .forEach((input) => {
                input.removeAttribute('disabled');
            });
        clearInputFields();
        updateTotalPoints();

    }
    function clearInputFields() {
        Object.values(inputDOMSelectors)
            .forEach((input) => {
                input.value = '';
            });
    }

    function updateTotalPoints() {
        const totalSprintPoints = Object.values(tasks).map((t) => Number(t.points)).reduce((a, b) => a + b, 0);
        anatherDomSelector.totalPointsVisual.textContent = `Total Points ${totalSprintPoints}pts`;
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