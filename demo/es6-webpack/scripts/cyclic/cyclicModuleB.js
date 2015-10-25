import { functionA } from './cyclicModuleA';

export function functionB () {
	console.log('function B');
	functionA();
}