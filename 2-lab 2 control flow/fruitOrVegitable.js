function fruitOrVegetable(arr) {
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    let vegs = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];

    let type = fruits.includes(arr[0]) ? 'fruit' : vegs.includes(arr[0]) ? 'vegetable' : 'unknown';
    console.log(type);
}
fruitOrVegetable(['banana']);
fruitOrVegetable(['cucumber']);
fruitOrVegetable(['pizza']);