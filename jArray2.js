function priceCalc(arr)
{
    let sum = 0;
    arr.forEach(element => {
        sum+=parseFloat(element)
    });
    let vat =sum*0.2;
    console.log("Sum =" ,sum);
    console.log("Vat =",vat);
    console.log("Total=" ,vat+sum);
}

//priceCalc(['1.20','2.60','3.50']);
priceCalc(['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445']);