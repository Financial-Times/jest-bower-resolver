# jest-bower-resolver

This package is for jest to resolve bower components correctly by reading the bower.json file.

## Usage

1. install the package

   ```
   $ npm i -D jest-bower-resolver
   ```

2. add `jest-bower-resolver` as the resolver of jest, and
   `transformIgnorePattern` so that the package missing `main` field can be
    transpiled correctly when running jest.

   In your package.json, please add them as follows:

   ```json
   {
     ...
     "jest": {
       ...
       "resolver": "jest-bower-resolver"
     }
   }
   ```
