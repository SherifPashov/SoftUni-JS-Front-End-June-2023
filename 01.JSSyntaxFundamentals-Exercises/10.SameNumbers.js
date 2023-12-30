function sameNumbers(number){
    let str = number.toString();
    let sum = 0;
    let digits = Array.from(String(number), Number);
    let set = new Set(digits); 

    for (let index = 0; index < str.length; index++) {
        sum+= Number(str[index]);
    }

    if(set.size===1){
        console.log('true');
    }
    else{
        console.log('false')
    }
    
    console.log(sum);
}

sameNumbers(2222222);