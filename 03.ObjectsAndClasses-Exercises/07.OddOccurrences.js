function solve(input){
    let objectArr = {};
    let oddCauntWord=[];
    let words = input.toLowerCase().split(" ");
    words.forEach(word=> {
        if(objectArr.hasOwnProperty(word)){
            objectArr[word]+=1;
        }
        else{
            objectArr[word]=1;
        }
   
        
    });
    
    Object.keys(objectArr).forEach(word=>{
        if(objectArr[word]%2 === 1){
        oddCauntWord.push(word);}
    })
    console.log(oddCauntWord.join(" "));



}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');