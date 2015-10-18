define(['jquery'] , function ($) {
  var STATE = {
    NAME_PREFIX: 'Sir ',
    SAL_PREFIX: '€'
  };

  return {
    getName: function (actor) {
      return STATE.NAME_PREFIX + $.trim(actor.name);
    },
    getSalary: function (actor) {
      return STATE.SAL_PREFIX + actor.salary;
    }
  };
});