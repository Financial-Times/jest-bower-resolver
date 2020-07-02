# @financial-times/jest-bower-resolver

This package is for jest to resolve bower components correctly by reading the bower.json file.

## Usage

1. install the package

   ```
   $ npm i -D @financial-times/jest-bower-resolver
   ```

2. add `jest-bower-resolver` as the resolver of jest.

   In your package.json, please add them as follows:

   ```json
   {
     ...
     "jest": {
       ...
       "resolver": "@financial-times/jest-bower-resolver"
     }
   }
   ```
   
   In a jest.config.js file:
   
   ```json
   {
     ...
     "resolver": "@financial-times/jest-bower-resolver",
   }
   ```
