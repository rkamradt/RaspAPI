module.exports = function(app, db) {
  app.get('/led/:id', (req, res) => {
    res.send('Blinking led ' + req.params.id)
  });
  app.post('/led', (req, res) => {
    // You'll blink your led here.
    res.send('Hello');
  });
};
