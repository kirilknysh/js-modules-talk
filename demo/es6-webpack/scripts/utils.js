import $ from 'jquery';

const STATE = {
  NAME_PREFIX: 'Sir ',
  SAL_PREFIX: '€'
};

export function getName(actor) {
  return STATE.NAME_PREFIX + $.trim(actor.name);
}
export function getSalary(actor) {
  return STATE.SAL_PREFIX + actor.salary;
}