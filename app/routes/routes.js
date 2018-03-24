var gpio = require("rpi-gpio");

module.exports = function(app, db) {
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
