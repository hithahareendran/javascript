function Multiply(arr)
{
   let reducer = (accumulator,currentValue) =>accumulator*currentValue;
   return arr.map(a=>Number(a)).reduce(reducer);
}
//var num  = ['2','3']
var num = ['23632.36','-12.3249']
console.log(Multiply(num));