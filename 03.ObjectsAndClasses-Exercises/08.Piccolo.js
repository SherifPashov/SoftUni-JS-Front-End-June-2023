function solve(input){
    let parcking =new Set();

    input.forEach(element => {
        let[comand,number]=element.split(", ");

        if (comand ==="IN") {
            parcking.add(number);
            
        }
        else if (comand === "OUT") {
            parcking.delete(number);
        }

        
    });

    let carNumbers = Array.from(parcking).sort();
    if(carNumbers.length===0){
        console.log("Parking Lot is Empty")
    }
    else{
        console.log(carNumbers.join(`\n`));
    }

}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);