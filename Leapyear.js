
function CheckLeapYear(arr) {
    let year = Number(arr[0]);
    console.log(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ? 'Yes' : 'No');
}
var yr = ['1999'];
CheckLeapYear(yr);

