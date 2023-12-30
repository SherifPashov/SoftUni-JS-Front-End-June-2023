function astroAdventure(input){
    let n = parseInt(input.shift());
    let teamAstro={};

    for (let i = 0; i < n; i++) {
        let [astronaut , oxygenLevel, energyReserves] = input[i].split(' ');
        teamAstro[astronaut] = {
            oxygenLevel: parseInt(oxygenLevel),
            energyReserves: parseInt(energyReserves)
        };
    }
   


    while (n < input.length && input[n] !== "End"){

        let [action,astronaut,ammaunt]=input[n].split(` - `);
        let amaunt=Number(ammaunt);
        

        switch (action) {
            case `Explore`:
                if (teamAstro[astronaut].energyReserves>amaunt) {
                    teamAstro[astronaut].energyReserves=teamAstro[astronaut].energyReserves-amaunt;
                    console.log(`${astronaut} has successfully explored a new area and now has ${teamAstro[astronaut].energyReserves} energy!`)
                }
                else{
                   console.log(`${astronaut} does not have enough energy to explore!`) 
                }
                break;
            case `Refuel`:
               
                let amauntRecovered=amaunt;
                
                if (teamAstro[astronaut].energyReserves+amaunt>200) {
                     amauntRecovered = amaunt -((teamAstro[astronaut].energyReserves+amaunt)-200);
                    teamAstro[astronaut].energyReserves=200;
                    
                }
                else{
                    teamAstro[astronaut].energyReserves=teamAstro[astronaut].energyReserves+amaunt;
                }

                console.log(`${astronaut} refueled their energy by ${amauntRecovered}!`);
                
                break;
            case `Breathe`:
                
            let recovered=amaunt;
                
                if (teamAstro[astronaut].oxygenLevel+amaunt>100) {
                    recovered = amaunt -((teamAstro[astronaut].oxygenLevel+amaunt)-100);
                    teamAstro[astronaut].oxygenLevel=100;
                    
                }
                else{
                    teamAstro[astronaut].oxygenLevel=teamAstro[astronaut].oxygenLevel+amaunt;
                }

                console.log(`${astronaut} took a breath and recovered ${recovered} oxygen!`);
                break;
        
            default:
                break;
        }
        n++;
    }

    
    for (const astronautInfo in teamAstro) {
        
        let oxygenLevel= teamAstro[astronautInfo].oxygenLevel;
        let energyReserves=teamAstro[astronautInfo].energyReserves;
        console.log(`Astronaut: ${astronautInfo}, Oxygen: ${oxygenLevel}, Energy: ${energyReserves}`)
    }
    
}


astroAdventure(
[  '3',
'John 50 120',
'Kate 80 180',
'Rob 70 150',
'Explore - John - 50',
'Refuel - Kate - 30',
'Breathe - Rob - 20',
'End']
)