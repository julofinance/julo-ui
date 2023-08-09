/* eslint-disable @typescript-eslint/no-var-requires */
const componentGenerator = require('./plop/generator/component');
const pluggableGenerator = require('./plop/generator/pluggable');
const utilitiesGenerator = require('./plop/generator/utilities');

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const camelCase = (str) => {
  return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase());
};

// const workspaces = ['components', 'pluggables', 'hooks', 'utilities'];

/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
  plop.setHelper('capitalize', (text) => {
    return capitalize(camelCase(text));
  });

  componentGenerator(plop);
  pluggableGenerator(plop);
  utilitiesGenerator(plop);
};
