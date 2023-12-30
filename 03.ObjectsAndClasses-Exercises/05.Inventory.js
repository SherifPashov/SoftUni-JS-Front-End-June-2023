function solve(command){
    class Hero{
        constructor(heroName,heroLevel,items)
        {
           
            this.heroName=heroName;
            this.heroLevel=Number(heroLevel);
            this.item=items;
            
        }
        
    }

    let heros = [];

    command.forEach(element => {
        
        let [heroName,heroLevel,...items]= element.split(" / ");

        
        heros.push(new Hero(heroName,heroLevel,items));

    });

    heros.sort((x, y) => x.heroLevel-y.heroLevel)
    .forEach(her=>{
        console.log(`Hero: ${her.heroName}`);
        console.log(`level => ${her.heroLevel}`);
        console.log(`items => ${her.item.join(", ")}`);
    })
    
}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );