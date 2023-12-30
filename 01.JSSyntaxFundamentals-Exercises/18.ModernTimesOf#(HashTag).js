function modernTimesOfHashTag(input){
    let words = input.split(" ").filter(w=>w.includes("#"));

    words.forEach(m=>{
        m=m.substr(1,m.length);
        
        if (m.length>0 && allLetter(m)) {
            console.log(m);
        }
    });
    
    function allLetter(inputtxt)
  {
   
   if(/^[a-zA-Z]/.test(inputtxt))
     {
      return true;
     }
   else
     {
     
     return false;
     }
  }
    
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');