function oddAndEvenSum(number){
    let numberStr = String(number);

    let even = 0;
    let odd = 0;

    for (let index = 0; index < numberStr.length; index++) {
        
        if (numberStr[index] % 2===0) {
            even+=Number(numberStr[index]);
        }
        else{
            odd+=Number(numberStr[index]);
        }
        
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);

}

oddAndEvenSum(1000435);