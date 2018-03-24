var gpio = require("rpi-gpio");

module.exports = function(app, db) {
  app.get('/led/:id', (req, res) => {
    gpio.setup(21, gpio.DIR_OUT, function(err) {		// Open pin 16 for output
    	gpio.write(21, true, function() {			// Set pin 16 high (1)
    	});
    });
    res.send('turning on led ' + req.params.id)
  });
  app.post('/led/:id', (req, res) => {
    gpio.setup(21, "output", function(err) {		// Open pin 16 for output
    	gpio.write(21, false, function() {			// Set pin 16 high (1)
    	});
    });
    res.send('turning off led ' + req.params.id)
  });
};
