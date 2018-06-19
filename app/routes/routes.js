var gpio = require("rpi-gpio");
var wpi = require('wiring-pi');

wpi.setup('wpi');

module.exports = function(app, db) {
  app.post('/number/:number', (req, res) => {
    const fd = wpi.wiringPiSPISetup(0, 500000)
    if(fd === -1) {
      throw Error("setup returned error")
    }
    const data = Buffer.alloc(5)
    for (let i = 0; i < 5; i++) {
      data[i] = i;
    }
    const res = wpi.wiringPiSPIDataRW(0, data)
    console.log('response from DataRW = ' + res)
    for (const value of data.values()) {
      console.log(value);
    }
    wpi.wiringPiSPIClose(fd)
  }
  app.get('/led/:id', (req, res) => {
    const id = req.params.id;
    console.log("in get turning on pin " + id);
    gpio.setup(id, gpio.DIR_OUT, function(err) {		// Open pin for output
      if(err) {
        console.log("after setup err: " + err);
        return;
      }
    	gpio.write(id, true, function(err) {			// Set pin high (1)
        if(err) {
          console.log("after write err: " + err);
          return;
        }
    	});
    });
    res.send('turning on led ' + id)
  });
  app.post('/led/:id', (req, res) => {
    const id = req.params.id;
    console.log("in post turning on pin " + id);
    gpio.setup(id, gpio.DIR_OUT, function(err) {		// Open pin for output
      if(err) {
        console.log("after setup err: " + err);
        return;
      }
    	gpio.write(id, false, function(err) {			// Set pin low (0)
        if(err) {
          console.log("after write err: " + err);
          return;
        }
    	});
    });
    res.send('turning off led ' + id)
  });
};
