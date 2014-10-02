var ware = require('ware');

var middleware = ware()
  .use(function(req, res, next) {
    if (!req.name) {
      return next(new Error('Missing `name`.'));
    }

    res.x = 'Hello ' + req.name;
    setTimeout(next, 50);
  })
  .use(function(req, res, next) {
    res.y = '[' + res.x + ']';
    next();
  });

middleware.run({name: 'Alex'}, {}, function(err, req, res) {
  console.log(res.x);
  console.log(res.y);
});

middleware.run({}, {}, function(err, req, res) {
  console.error(err.message);
});
