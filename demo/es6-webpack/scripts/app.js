import { getName, getSalary } from './utils';
import { mainFunctionA } from './cyclic/cyclicModuleA';
import $ from 'jquery';

const actor = {
	name: 'Samuel L. Jackson',
	salary: 1000000
};

$('body').text('Salary of ' + getName(actor) + ' is ' + getSalary(actor));


setTimeout(() => { mainFunctionA() }, 2000);