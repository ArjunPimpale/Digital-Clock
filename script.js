function date(){
    let time = new Date();

    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    hour = (hour<10)?'0'+hour:hour;
    min = (min<10)?'0'+min:min;
    sec = (sec<10)?'0'+sec:sec;

    document.querySelector(".clock").innerHTML=`<h1>${hour}:${min}:${sec}</h1>`
}

setInterval(date,1000);






