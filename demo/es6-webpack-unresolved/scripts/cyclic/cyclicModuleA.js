import { functionB } from './cyclicModuleB';

console.log('initial execution module A');
let bValue = functionB();

export function mainFunctionA () {
	console.log('main function A');
	bValue = functionB();
}

export function functionA () {
	console.log('function A');
	console.log('type of bValue: ' + (typeof bValue));
	if (Math.random() > 0.5) {
		functionB();
	}
}