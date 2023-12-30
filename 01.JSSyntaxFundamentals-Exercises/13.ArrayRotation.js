function solve(arr,rotations)
{
    
    for(let i = 1; i <= rotations; i++)
    {
        let current = arr.shift();
        arr.push(current);
    }
    console.log(arr.join(' '));
}
solve([2, 4, 15, 31], 5);