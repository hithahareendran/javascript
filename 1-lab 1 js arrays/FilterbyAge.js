function filterByAge(arr) {
    let min = Number(arr[0]);
    let p1 = { name: arr[1], age: Number(arr[2]) };
    let p2 = { name: arr[3], age: Number(arr[4]) };

    [p1, p2]
        .filter(p => p.age >= min)
        .forEach(p => console.log(p));

}
filterByAge(['12', 'John', '15', 'Alfred', '9']);