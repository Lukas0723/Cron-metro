const watchDocument = document.querySelector ("#watch");
let milesimos = 0;
let seconds = 0;
let minutes = 0;
let interval;

function init() {
    watch();
    interval = setInterval(watch,16);
}

const pause = () => {
    clearInterval(interval);
}

const clearAll = () => {
    clearInterval(interval)
    milesimos = 0;
    seconds = 0;
    watchDocument.innerHTML = "00:00:00"; 
}

const digitZero = (digit) => {
    if(digit < 10) {
        return `0${digit}`;
    } else {
        return digit
    }
} 

function watch() {
    milesimos++;

    if(milesimos === 60) {
        seconds++;
        milesimos = 0;
    }

    if(seconds === 60) {
        seconds = 0;
        minutes++;
    }


    watchDocument.innerHTML = 
    digitZero (minutes) + ":" + digitZero (seconds) + ":" + digitZero (milesimos) ;
} 