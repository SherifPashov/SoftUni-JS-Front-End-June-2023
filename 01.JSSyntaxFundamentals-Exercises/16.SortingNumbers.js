function sortingnumber(numbers) {
    let n = [];
    numbers.sort(function(a, b){return a-b});
    let caunt = (numbers.length)/2;
    for(let i = 0; i < caunt; i++){
        n.push(numbers.shift());
        n.push(numbers.pop());

    }

   return(n);
}
sortingnumber([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])