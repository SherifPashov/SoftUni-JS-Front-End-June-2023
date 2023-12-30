function PascalCaseSplit(input){
    input=input.replace(/([A-Z])/g, ' $1')
    .replace(/^./, function(str){ return str.toUpperCase(); })
    .split(" ");
   input.shift();

    
    console.log(input.join(", "))
}

PascalCaseSplit('SplitMeIfYouCanHaHaYouCantOrYouCan');