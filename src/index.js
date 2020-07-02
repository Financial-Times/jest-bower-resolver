/*
|-------------------------------------------------------------------------------
| Custom 'bower resolver' for Jest
|-------------------------------------------------------------------------------
|
| Forked from Jest, this is the default 'resolver' with the added benefit of when
| looking in bower_components it respects the bower.json file instead of the 
| package.json file.
|
*/

const path = require('path');
const execa = require('execa');

const bowerModules = JSON.parse(execa.sync('bower', ['list', '--paths', '--json', '--offline'], {
  preferLocal: true
}).stdout);

function bowerResolve(moduleName, options) {
  if (moduleName && moduleName in bowerModules) {
    var pkgMeta = bowerModules[moduleName];
    var mainModule;
    if (pkgMeta) {
      mainModule = Array.isArray(pkgMeta) ? pkgMeta.find(function (file) { return /\.js$/.test(file); }) : pkgMeta;
    } else {
      mainModule = pkgMeta;
    }
    var fullModulePath = path.resolve(path.join(options.rootDir, mainModule));
    return path.join(process.cwd(), path.relative(path.dirname(moduleName), fullModulePath));
  } else {
    throw new Error(`${moduleName} not found in bower_components`);
  }
}

/**
 * 
 * @param {string} path path to resolve 
 * @param {{
  "basedir": string,
  "defaultResolver": "function(request, options)",
  "extensions": [string],
  "moduleDirectory": [string],
  "paths": [string],
  "rootDir": [string]
}} options 
 */
function defaultResolver (path, options) {

  try {
    const result = bowerResolve(path, options);
    return result
  } catch (e) {
    return options.defaultResolver(path, options);
  }
}

module.exports = defaultResolver;
