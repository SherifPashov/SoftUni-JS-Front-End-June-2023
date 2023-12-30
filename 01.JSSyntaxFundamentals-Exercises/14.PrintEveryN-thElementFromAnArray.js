function printEveryNthElement(arr,step) {
    let n = [];
 
    for(let i = 0; i <= arr.length; i+=step){
        n.push(arr[i]);
    }

    return(n);
}
printEveryNthElement(['5',
'20',
'31',
'4',
'20'],
2
);