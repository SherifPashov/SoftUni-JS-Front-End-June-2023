function matrixNxN(n){
    let line = (String(n)+" ").repeat(n);
    for (let index = 0; index < n; index++) {
        console.log(line);
        
    }
}
matrixNxN(7);