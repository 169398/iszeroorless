# iszeroorless

A simple TypeScript utility package to check if a number is zero or less.

## Installation

```bash
npm install iszero-or-less
```

## Usage

```typescript
import isZeroOrLess from 'iszero-or-less';

isZeroOrLess(0); // true
isZeroOrLess(-1); // true
isZeroOrLess(1); // false
```

## API

### `isZeroOrLess(num: number): boolean`

Returns `true` if the input number is less than or equal to zero, `false` otherwise.





### Running Tests

```bash
npm test
```

### Building

```bash
npm run build
```

## Publishing

1. Update version in `package.json`
2. Build the package: `npm run build`
3. Run tests: `npm test`
4. Publish to npm: `npm publish`

## License

MIT
