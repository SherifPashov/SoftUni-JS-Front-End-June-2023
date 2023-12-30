

function solve(input){
    let numberLine = Number(input.shift());
    let firtsStateArr = input.slice(0,numberLine);
    let comandArr = input.slice(numberLine);

    let race = firtsStateArr.reduce((acc,cur)=>{
        let[rider,fuelCapacity,position]=cur.split("|");

        fuelCapacity=Number(fuelCapacity);

        if(!acc.hasOwnProperty(rider)){
            acc[rider]=[];
        }
        if(fuelCapacity>100){
            fuelCapacity=100;
        }

        acc[rider].push({ fuelCapacity:Number(fuelCapacity),position:Number(position)});

        return acc;

    },{});
    
   

    let inputSplitCommand = input.shift();
    while(inputSplitCommand!=="Finish"){
        let infArr = inputSplitCommand.split(" - ");
        let comand=infArr[0];
        let rider = infArr[1];
       

        switch (comand) {
            case "StopForFuel":
                let needFuel=infArr[2];
                let changePosition=infArr[3];

                let currentFuel=race[rider][0].fuelCapacity;
                let currentPosition=race[rider][0].position;

                if (needFuel>currentFuel) {
                    
                    race.find(c=>c[0].position==changePosition)[0].position=currentPosition;
                    currentPosition=changePosition;
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${changePosition}.`)
                }
                else(
                    console.log(`${rider} does not need to stop for fuel!`)
                )
                
                break;
            case "Overtaking":
                    let rider2=infArr[2];
                    let positionRider1=race[rider][0].position;
                    let positionRide2=race[rider2][0].position;
                    if (positionRider1>positionRide2) {
                        let setpos=positionRide2;
                        positionRide2=positionRider1;
                        positionRider1=setpos;
                        
                    }
                    console.log(`${rider} overtook ${rider2}!`)
                
                break;
            case "EngineFail":

                let lapsLeft=infArr[2]
                
                delete  race[rider];
                console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
                
                
                break;
        }


        inputSplitCommand=input.shift();
    }
    Object.keys(race).forEach((info) => {
        

        console.log(info);
        console.log(`  Final position: ${race[info][0].position}`)
        
    });
    
}
solve((["3",
"Valentino Rossi|102|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
);