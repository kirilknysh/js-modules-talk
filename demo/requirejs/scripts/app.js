define(['./utils', 'jquery'], function(UTILS, $) {
  return {
    run: function () {
      var actor = {
        name: 'Samuel L. Jackson',
        salary: 1000000
      };

      $('body').text('Salary of ' + UTILS.getName(actor) + ' is ' + UTILS.getSalary(actor));
    }
  }
});