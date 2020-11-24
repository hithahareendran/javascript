function findNextDay(arr)
{
    let year = Number(arr[0]);
    let month = Number(arr[1]);
    let date = Number(arr[2]);

    if(date === numberOfDays(month))
    {
        date = 1;
        if( month === 12)
        {
            month = 1;
            year = year +1;
        }
        else{
            month = month +1;
        }
    }
    else{
        date = date+1;
    }
    console.log(year+"-"+month+"-"+date);
}

function numberOfDays(month){
    switch(month){
        case 2: return 28;
        case 1,3,5,7,8,10,12 : return 31;
        default: return 30;
    }
}

findNextDay(['2016','9','30']);