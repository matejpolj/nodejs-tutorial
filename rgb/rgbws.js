var http = require('http').createServer(handler);
var fs = require('fs');
var io = require('socket.io')(http);
var Gpio = require('pigpio').Gpio,
ledRed = new Gpio(4, {mode: Gpio.OUTPUT}),
ledGreen = new Gpio(17, {mode: Gpio.OUTPUT}),
ledBlue = new Gpio(27, {mode: Gpio.OUTPUT}),
redRGB = 0,
greenRGB = 0,
blueRGB = 0;

ledRed.digitalWrite(0);
ledGreen.digitalWrite(0);
ledBlue.digitalWrite(0);
//console.log("1,2,3");

http.listen(8080);

function handler(req, res) {
    fs.readFile(__dirname + '/public/rgb.html', function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            //console.log("Err!");
            return res.end();
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        //console.log("Prvi del dela!");
        return res.end();
    });
}

io.sockets.on('connection', function (socket) {
    socket.on('rgbLed', function (data)  {
        console.log(data);
        console.log("Neki neki!");
        redRGB = parseInt(data.red);
        greenRGB = parseInt(data.green);
        blueRGB = parseInt(data.blue);

        ledRed.pwmWrite(redRGB);
        ledGreen.pwmWrite(greenRGB);
        ledBlue.pwmWrite(blueRGB);
        console.log("Data on raspberry!");
    });
});

process.on('SIGINT', function () {
    ledRed.digitalWrite(0);
    ledGreen.digitalWrite(0);
    ledBlue.digitalWrite(0);
    process.exit();
});