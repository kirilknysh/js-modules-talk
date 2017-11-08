import { functionB } from './cyclicModuleB';

export function mainFunctionA () {
	console.log('main function A');
	functionB();
}

export function functionA () {
	console.log('function A');
	if (Math.random() > 0.5) {
		functionB();
	}
}