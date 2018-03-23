var gpio = require("pi-gpio");

module.exports = function(app, db) {
  app.get('/led/:id', (req, res) => {
    gpio.open(40, "output", function(err) {		// Open pin 16 for output
    	gpio.write(40, 1, function() {			// Set pin 16 high (1)
    		gpio.close(40);						// Close pin 16
    	});
    });
    res.send('turning on led ' + req.params.id)
  });
  app.post('/led/:id', (req, res) => {
    gpio.open(40, "output", function(err) {		// Open pin 16 for output
    	gpio.write(40, 0, function() {			// Set pin 16 high (1)
    		gpio.close(40);						// Close pin 16
    	});
    });
    res.send('turning off led ' + req.params.id)
  });
};
