function fruit(fruit, grams, pricePerKilogram ){
    let money = (grams * pricePerKilogram / 1000).toFixed(2);
    let weight = (grams / 1000).toFixed(2);
    console.log(`I need ${money} to buy ${weight} kilograms {fruit}.`);
}