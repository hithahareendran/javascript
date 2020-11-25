function distance(arr) {
    let x1 = parseFloat(arr[0]);
    let y1 = parseFloat(arr[1]);
    let x2 = parseFloat(arr[2]);
    let y2 = parseFloat(arr[3]);
    let a = x1 - x2;
    let b = y1 - y2;

    console.log(Math.sqrt(a * a + b * b));
}

distance(['2', '4', '5', '0']);
distance(['2.34', '15.66', '-13.55', '-2.9985']);