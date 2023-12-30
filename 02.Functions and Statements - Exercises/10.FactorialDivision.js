function factorialDeviision(num1, num2){
    
    function factorial(num){
        let factorial = 1;
    
        for (let index = 1; index <= num; index++) {
            factorial*=index;
        
        }
        return factorial;
    }
    console.log((factorial(num1)/factorial(num2)).toFixed(2))
}

factorialDeviision(5,2);