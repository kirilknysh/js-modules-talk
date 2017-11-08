import { getName, getSalary } from './utils.js';
import './lib/jquery.js';

const actor = {
	name: 'Samuel L. Jackson',
	salary: 1000000
};

$('body').text('Salary of ' + getName(actor) + ' is ' + getSalary(actor));
