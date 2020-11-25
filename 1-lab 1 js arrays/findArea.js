function findArea(arr) {
    let numberArray = arr.map(a => Number(a));
    let w = numberArray[0];
    let h = numberArray[1];
    let W = numberArray[2];
    let H = numberArray[3];

    let commonWidth = (w > W) ? W : w;
    let commonHeight = (h > H) ? H : h;


    console.log((w * h) + (W * H) - (commonWidth * commonHeight));
}

findArea(['2', '4', '5', '3']);
findArea(['13', '2', '5', '8']);