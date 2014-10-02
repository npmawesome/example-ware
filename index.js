var ware = require('ware');
var app = ware();

app.use(function(req, res, next) {
  if (!req.name) {
    return next(new Error('Missing `name`.'));
  }

  res.x = 'Hello ' + req.name;
  setTimeout(next, 50);
});

app.use(function(req, res, next) {
  res.y = '[' + res.x + ']';
  next();
});

app.run({name: 'Alex'}, {}, function(err, req, res) {
  console.log(res.x);
  console.log(res.y);
});

app.run({}, {}, function(err, req, res) {
  console.error(err.message);
});
