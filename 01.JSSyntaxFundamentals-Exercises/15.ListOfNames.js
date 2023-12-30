function solve(arrNames) {
    if(arrNames===undefined ){
        return;
    }
    let names=arrNames.sort().filter(n=>n.length>0);

    for (let index = 0; index < names.length; index++) {
        console.log(`${index+1}.${names[index]}`);
        
    }
    
}

  solve(["John",
  "Bob",
  "Christina",
  "Ema"]);