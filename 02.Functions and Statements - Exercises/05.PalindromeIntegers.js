function palindromeIntegers(array){
    let reverse = "";
    for (let index = 0; index < array.length; index++) {
        
        reverse = String(array[index]);
        reverse= [...reverse].reverse().join("");
        if (reverse === String(array[index])) {
            console.log("true");
        }
        else{
            console.log("false")
        }
        
    }
}

palindromeIntegers([123,323,421,121]);