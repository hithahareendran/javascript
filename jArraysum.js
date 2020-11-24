function sum(arr) {

    let total = 0;
    arr.forEach(element => {
        total += parseInt(element);
    });

    return total;
}
var numbers = ['2', '3', '4'];
//var numbers = ['1.5', '1.5', '-1'];
console.log(sum(numbers));