function largestNumber(...arr){
    
    let max = arr[0];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(max<arr[index]){
            max=arr[index];
        }
    }
    console.log(`The largest number is ${max}.`);
}

largestNumber(-3, -5, -22.5);