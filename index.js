
/**
 * validateMCP(ctx): returns true if ctx has required MCP fields
 * normalizeMCP(ctx): fills in defaults, sorts keys
 * generateMCP(): returns blank MCP template
 */

export function validateMCP(ctx) {
  if (typeof ctx !== 'object' || ctx === null) return false;
  return ['model', 'inputs', 'outputs'].every(key => key in ctx);
}

export function normalizeMCP(ctx) {
  const defaults = {
    model: 'unknown',
    inputs: [],
    outputs: [],
    metadata: {}
  };
  const merged = { ...defaults, ...ctx };
  return Object.keys(merged).sort().reduce((acc, key) => {
    acc[key] = merged[key];
    return acc;
  }, {});
}

export function generateMCP() {
  return {
    model: '',
    inputs: [],
    outputs: [],
    metadata: {}
  };
}
