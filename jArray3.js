function LetterCount(arr) {
    return Array.from(arr[0])
        .filter(ch => ch === arr[1])
        .length
}
var arr = ['hello', 'l']
//var arr =['panther', 'n'];
console.log(LetterCount(arr));