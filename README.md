# ESLint SonarJS bug

Reproducible example for https://community.sonarsource.com/t/eslint-plugin-sonarjs-doesnt-work-with-flat-config/129710

## Reproduction steps

1. `npm install`
2. `npm run lint`

Expected behavior: No error.
Actual behavior:

```
Oops! Something went wrong! :(

ESLint: 9.15.0

ConfigError: Config "sonarjs/recommended": Key "plugins": Cannot redefine plugin "sonarjs".
    at rethrowConfigError (/Users/xxx/Desktop/eslint-sonarjs-bug/node_modules/@eslint/config-array/dist/cjs/index.cjs:328:8)
    at /Users/xxx/Desktop/eslint-sonarjs-bug/node_modules/@eslint/config-array/dist/cjs/index.cjs:1174:5
    at Array.reduce (<anonymous>)
    at FlatConfigArray.getConfigWithStatus (/Users/xxx/Desktop/eslint-sonarjs-bug/node_modules/@eslint/config-array/dist/cjs/index.cjs:1167:43)
    at FlatConfigArray.getConfig (/Users/xxx/Desktop/eslint-sonarjs-bug/node_modules/@eslint/config-array/dist/cjs/index.cjs:1196:15)
    at entryFilter (/Users/xxx/Desktop/eslint-sonarjs-bug/node_modules/eslint/lib/eslint/eslint-helpers.js:282:40)
    at async NodeHfs.<anonymous> (file:///Users/xxx/Desktop/eslint-sonarjs-bug/node_modules/@humanfs/core/src/hfs.js:574:24)
    at async NodeHfs.walk (file:///Users/xxx/Desktop/eslint-sonarjs-bug/node_modules/@humanfs/core/src/hfs.js:614:3)
    at async globSearch (/Users/xxx/Desktop/eslint-sonarjs-bug/node_modules/eslint/lib/eslint/eslint-helpers.js:323:26)
    at async Promise.allSettled (index 0)
```