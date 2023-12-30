function solve(comand){
    let [specialWordsArr,...words]=comand;
    
    let wordObject = specialWordsArr.split(" ").reduce((acc,curr)=>{
        acc[curr] = 0;
        return acc;
    }, {});

    words.forEach(word => {
        if(wordObject.hasOwnProperty(word)){
            wordObject[word]+=1;
        }
        
    });

    let sortable = [];

    for (var word in wordObject) {
        sortable.push([word, wordObject[word]]);
    }

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    }).forEach((info) => {
        let [word,num]=info;
        console.log(`${word} - ${num}`)

    });


    
}
solve([
    'is the a',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence','a','a','a']
    );