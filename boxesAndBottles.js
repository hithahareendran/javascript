function boxesAndBottles(arr)
{
    let numberOfBottles = Number(arr[0]);
    let capacity = Number(arr[1]);
    console.log(Math.ceil(numberOfBottles/capacity));
}
boxesAndBottles(['20','5']);
boxesAndBottles(['15','7']);
boxesAndBottles(['5','10']);