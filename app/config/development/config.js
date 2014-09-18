
// Node serves static files in dev
app.use( express.static(app.settings.static) );

// Pretty HTML in dev
app.use(function(req, res, next) {
  app.locals.pretty = true;
  next();
});