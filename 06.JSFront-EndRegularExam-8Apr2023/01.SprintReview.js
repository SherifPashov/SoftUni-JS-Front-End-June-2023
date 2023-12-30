function sprintReview(input){
   
    let numberLine = Number(input.shift());
    let firtsStateArr = input.slice(0,numberLine);
    let comandArr = input.slice(numberLine);

    let board = firtsStateArr.reduce((acc,cur)=>{
        let[assignee,taskId,title,status,points]=cur.split(":");

        if(!acc.hasOwnProperty(assignee)){
            acc[assignee]=[];
        }

        acc[assignee].push({ taskId, title, status, points: Number(points) });

        return acc;

    },{})
    console.log(JSON.stringify(board));

    let commandParser={
        'Add New':addNewTask,
        'Change Status':ChangeStatusTask,
        'Remove Task':RemoveTask,
        
    }
    comandArr
        .forEach((line) => {
            const commandTokens = line.split(':');
            commandParser[commandTokens[0]](...commandTokens.slice(1));
        });

    let toDoTasksTotalPoints = sumPointStatus(`ToDo`)
    let inProgressTasksTotalPoints=sumPointStatus(`In Progress`);
    let codeReviewTasksTotalPoints=sumPointStatus(`Code Review`);
    let doneTasksTotalPoints=sumPointStatus(`Done`);


    let unfinishedPointsSum=toDoTasksTotalPoints+inProgressTasksTotalPoints+codeReviewTasksTotalPoints;

    console.log(`ToDo: ${toDoTasksTotalPoints}pts`);
    console.log(`In Progress: ${inProgressTasksTotalPoints}pts`);
    console.log(`Code Review: ${codeReviewTasksTotalPoints}pts`);
    console.log(`Done Points: ${doneTasksTotalPoints}pts`);
    
    if (doneTasksTotalPoints >= unfinishedPointsSum) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful...')
    }

    function addNewTask(assignee,taskId,title,status,points){
        if(!board.hasOwnProperty(assignee)){
            console.log(`Assignee ${assignee} does not exist on the board!`);
           
            
        }
        else{
            board[assignee].push({taskId,title,status,points:Number(points)});
        }

    }
    function ChangeStatusTask(assignee,taskId,newStatus){
        if(!board.hasOwnProperty(assignee)){
            console.log(`Assignee ${assignee} does not exist on the board!`);
            
        }
        else{

            let checkIfAssigneeExists = board[assignee];
            let flag = checkIfAssigneeExists.some(t=>t.taskId ===taskId);
            if(!flag){
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
               
            }
            else{
                checkIfAssigneeExists.find(t=>t.taskId ===taskId).status=newStatus;
            }
    
        }

    }

    function RemoveTask(assignee,index){
        let indexTask = Number(index);

        if(!board.hasOwnProperty(assignee)){
            console.log(`Assignee ${assignee} does not exist on the board!`);
            return;

        }

        if (indexTask<0 || indexTask>=board[assignee].length) {
            console.log('Index is out of range!');
            return;

        }

        board[assignee].splice(indexTask,1); 

    }
    

    function sumPointStatus(status){
        return Object.values(board)
            .reduce((totalPointsSum, tasks) => {
                return totalPointsSum + tasks
                    .filter((t) => t.status === status)
                    .map((t) => t.points)
                    .reduce((a, b) => a + b, 0);
            }, 0);
        
    }
}

sprintReview(    [
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]
);