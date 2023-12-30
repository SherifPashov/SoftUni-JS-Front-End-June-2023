function numbersFromMToN(...arr){
    let m = arr[0];
    let n = arr[1];

    for (let index = m; index >= n; index--) {
        console.log(index);
        
    }
}

numbersFromMToN(6,2);