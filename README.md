# vitest/vite unable to alias module

https://github.com/vitest-dev/vitest/issues/1638

I am replacing my old Jest tests with Vitest but I am unable to resolve modules using aliases, similar to my old setup.

## How to reproduce

1. `pnpm i`
2. `pnpm test`
3. Should produce an error similar to:
```
FAIL  test/failing.test.ts > test which loads the same module with different versions > should alias them as defined in vite.config.js
RangeError: Can not convert <> to a Fragment (looks like multiple versions of prosemirror-model were loaded)
 ❯ Function.from node_modules/.pnpm/prosemirror-model@1.14.3/node_modules/prosemirror-model/dist/index.js:332:9
 ❯ NodeType.create node_modules/.pnpm/prosemirror-model@1.14.3/node_modules/prosemirror-model/dist/index.js:1974:60
```

Running the same test with jest `pnpm jest` passes:
```
 PASS  test/failing.test.ts
  test which loads the same module with different versions
    ✓ should alias them as defined in vite.config.js (58 ms)
```