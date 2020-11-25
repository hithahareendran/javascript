function stringOfNumbers(arr) {
    let number = Number(arr[0]);
    let result = '';
    for (let i = 1; i <= 11; i++) {
        result += i;
    }
    console.log(result);
}
stringOfNumbers(['11']);