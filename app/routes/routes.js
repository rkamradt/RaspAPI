var gpio = require("rpi-gpio");

module.exports = function(app, db) {
  app.get('/led/:id', (req, res) => {
    console.log("in get");
    gpio.setup(21, gpio.DIR_OUT, function(err) {		// Open pin 21 for output
      console.log("after setup err:" + err);
    	gpio.write(21, true, function(err) {			// Set pin 21 high (1)
        console.log("after write err:" + err);
    	});
    });
    res.send('turning on led ' + req.params.id)
  });
  app.post('/led/:id', (req, res) => {
    gpio.setup(21, gpio.DIR_OUT, function(err) {		// Open pin 21 for output
    	gpio.write(21, false, function() {			// Set pin 21 high (1)
    	});
    });
    res.send('turning off led ' + req.params.id)
  });
};
