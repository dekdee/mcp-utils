import { validateMCP, normalizeMCP, generateMCP } from './index.js';

console.log(validateMCP({ model: 'gpt-4', inputs: [], outputs: [] })); // true
console.log(validateMCP({ foo: 'bar' })); // false

console.log(normalizeMCP({ model: 'gpt-4' }));
console.log(generateMCP());
