function charactersInRange(firstChar,lastChar){
    let startNumber=firstChar.charCodeAt(0)+1;
    let lastNumber = lastChar.charCodeAt(0);

    let array = [];
    if(startNumber<lastNumber){
        for (let index = startNumber; index < lastNumber; index++) {
            array.push(String.fromCharCode(index));
            
        }
    }
    else{
        for (let index = lastNumber; index < startNumber; index++) {
            array.push(String.fromCharCode(index));
            
        }
    }

    

    console.log(array.join(" "));
}

charactersInRange('C','#')
