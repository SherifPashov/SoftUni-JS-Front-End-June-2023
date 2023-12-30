function solve(input){
    let emplpyees=input.reduce((acc,curr)=>{
        acc[curr]=curr.length;
        return acc;
    },{});

    Object.keys(emplpyees).forEach((key=>{
        console.log(`Name: ${key} -- Personal Number: ${emplpyees[key]}`);
    }))
    
}