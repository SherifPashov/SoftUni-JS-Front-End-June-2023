function RevealWords(wordsInput, text) {
    let words = wordsInput.split(", ");
    let wordText=text.split(" ");

    words.forEach(word => {
        for (let index = 0; index < wordText.length; index++) {
            if(wordText[index].includes("*")){
                if (wordText[index].length===word.length) {
                   wordText[index]=word;
                    
                }
            }   
            
        }
    });
 

    
    console.log(wordText.join(" "));
    
   
};
RevealWords('great',
'softuni is ***** place for learning new programming languages');