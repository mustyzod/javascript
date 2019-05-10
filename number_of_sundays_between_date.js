/**
 * calculate the difference
 */
function timeD(date_future, date_now) {
    // get total seconds between the times
    let delta = Math.abs(date_future - date_now) / 1000;
    // calculate (and subtract) whole days
    let days = delta / 86400;
    delta -= days * 86400;

    if (Math.round(days) !== days) {
        days = days.toFixed(2);
    }
    //remove sundays from the count
    let startDate = new Date(date_now);
    let endDate = new Date(date_future);
    // 0 stands for sunday, 1 for monday and so on ...
    let totalSundays = 0;
    for (let i = startDate; i <= endDate; ){
        if (i.getDay() == 0){
            totalSundays++;
        }
        i.setTime(i.getTime() + 1000*60*60*24);
    }
    // total sundays between the dates
    console.log(totalSundays);

    // subtract sundays from the date difference
    days = days-totalSundays;
    
    //remaining days after substracting the sundays
    console.log(totalSundays);
}

//usage
let date_future = 'date to subtract from';
let date_now = 'date to subtract';
function timeD(date_future, date_now);
