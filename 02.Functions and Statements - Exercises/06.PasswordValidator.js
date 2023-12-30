function passwordValidator(password){
    let lastTwoChars=0;
    let flagCorrectPasoword=true;

   if(password.length<6 || password.length>10){
        console.log("Password must be between 6 and 10 characters");
        flagCorrectPasoword=false;
    }

    if(!onlyLettersAndNumbers(password)){
        console.log("Password must consist only of letters and digits")
        flagCorrectPasoword=false;
    }
    
    let passCahr = password.split("").forEach(f=>{
        if (/^[0-9]+$/.test(f)) {
        lastTwoChars++;            
        } 
    });
    
    if(lastTwoChars<2){
        console.log("Password must have at least 2 digits");
        flagCorrectPasoword=false;
    }
    
    if(flagCorrectPasoword){
        console.log(`Password is valid`);
    }

    function onlyLettersAndNumbers(str) {
        return /^[A-Za-z0-9]*$/.test(str);
      }
}
passwordValidator('1asd2asd');