function circleArea(num){
    let inputType = typeof(num);
    let result;
    if (inputType === 'number') {
        result = Math.pow(num,2) * Math.PI;
        result=result.toFixed(2);
    }
    else{
        result=`We can not calculate the circle area, because we receive a ${inputType}.`;
    }
    
    console.log(result)
}
