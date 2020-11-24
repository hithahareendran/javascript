function oddEven(arr) {
    let num = Number(arr[0])
    if (num % 2 == 0)
        console.log('even')
    else if (num % 2 == 1)
        console.log('odd')
    else
        console.log('invalid')
}
oddEven(['5']);
oddEven(['8']);
oddEven(['1.5']);