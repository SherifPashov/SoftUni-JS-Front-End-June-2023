function stringSubstring(word, text){
    let wordsText = text.split(" ").map(m=>m.toLowerCase());
    word.toLowerCase();
    let findWord = false 
    wordsText.forEach(wordText => {
        if (wordText===(word)) {
            findWord = true;
        }
    });

    if(findWord){
        console.log(word)

    }
    else{
        
       console.log(`${word} not found!`)
        
    }
    
}

stringSubstring('javascript',
'JavaScript is the best programming language'
);