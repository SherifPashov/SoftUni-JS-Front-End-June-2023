function ReverseAnArrayOfNumbers(indexNumber,arr){
    let array = [];
    if(indexNumber-1>=0 && indexNumber-1 < arr.length){
        for (let index = indexNumber-1; index >= 0; index--) {
            array.push(arr[index]);
            
        }
        console.log(array.join(" "));
    }

}