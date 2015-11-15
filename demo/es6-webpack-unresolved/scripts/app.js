import { mainFunctionA } from './cyclic/cyclicModuleA';

setTimeout(() => { mainFunctionA() }, 2000);