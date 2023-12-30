function evenAndOddSubtraction(inputArray){
    let evenSum=0;
    let oddSum=0;

    for (let index = 0; index < inputArray.length; index++) {
        if (inputArray[index]%2===0) {
            evenSum+=inputArray[index];
        }
        else{
            oddSum+=inputArray[index];
        }
        
    }
    console.log(evenSum-oddSum);
}
evenAndOddSubtraction([3,5,7,9] )