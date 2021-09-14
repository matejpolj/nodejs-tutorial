var Gpio = require('onoff').Gpio;
var LED = new Gpio(4, 'out'); //use pin 4 as an output

function blinkLed() {
    if (LED.readSync() === 0) {
        LED.writeSync(1);
    } else {
        LED.writeSync(0);
    }
}

var blinkInterval = setInterval(blinkLed, 250);

function endBlink() {
    clearInterval(blinkInterval);
    LED.writeSync(0);
    LED.unexport();
}

setTimeout(endBlink,5000);