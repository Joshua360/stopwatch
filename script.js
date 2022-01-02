let seconds = 0
let minutes = 0
let hours = 0

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;
let timerStatus = "stopped";



//function to define the logic of the timer


function myTimer(){
    seconds ++;

    if(seconds/60 === 1){
        minutes ++;
        seconds = 0;
    }

    if(minutes/60 ===1){
        hours ++;
        minutes = 0;
    }



    if(seconds <10){
        displaySeconds = "0" + seconds.toString();
    }else{
        displaySeconds = seconds;
    }
    
    
    if(minutes <10){
        displayMinutes = "0" + minutes.toString();
    }else{
        displayMinutes = minutes;
    }
    
    if(hours <10){
        displayHours = "0" + hours.toString();
    }else{
        displayHours = hours;
    }
    



    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;


}

///window.clearInterval(interval)

function StartStopTimer(){
    if(timerStatus === "stopped"){
        interval = window.setInterval(myTimer, 1000);
        timerStatus = "started";
        document.getElementById("startstop").innerHTML = "Stop";
    }else{
        window.clearInterval(interval);
        timerStatus = "stopped";
        document.getElementById("startstop").innerHTML = "Start";
    }
}

function resetTimer(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startstop").innerHTML = "Start";
    timerStatus = "stopped";
}

