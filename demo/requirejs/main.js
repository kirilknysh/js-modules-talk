requirejs.config({
  paths: {
    jquery: 'bower_components/jquery/dist/jquery'
  }
});

requirejs(['scripts/app'], function(app) {
  app.run();
});