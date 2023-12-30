function CountStringOccurrences(text,word){
    let count = 0;
    let array = text.split(" ");
    for (let index = 0; index < array.length; index++) {
       if(array[index]=== word){
        count++;
       }
    }
    console.log(count);
}