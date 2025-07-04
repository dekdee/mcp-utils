# mcp-utils

Utilities to validate, normalize, and generate MCP (Model Context Protocol) JSON metadata for AI workflows.

## Install

```bash
npm install mcp-utils
```

## Usage

```js
import { validateMCP, normalizeMCP, generateMCP } from 'mcp-utils';

const ctx = {
  model: 'gpt-4',
  inputs: ['text'],
  outputs: ['text'],
  metadata: {}
};

console.log(validateMCP(ctx));
console.log(normalizeMCP(ctx));
console.log(generateMCP());
```

## Learn more about MCP

🌐 [Visit mcp-hunt.com](https://www.mcp-hunt.com/) for more details.

## License

MIT
