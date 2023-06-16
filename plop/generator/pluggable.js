/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
  plop.setGenerator('pluggable', {
    description: 'Generates a pluggable package',
    prompts: [
      {
        type: 'input',
        name: 'pluggableName',
        message: 'Enter pluggable name:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'The description of this pluggable:',
      },
    ],
    actions(answers) {
      const actions = [];

      if (!answers) return actions;

      const { pluggableName, description, outDir } = answers;

      actions.push({
        type: 'addMany',
        templateFiles: 'plop/templates/pluggable/**',
        destination: `./packages/pluggables/{{dashCase pluggableName}}`,
        base: 'plop/templates/pluggable',
        data: { description, pluggableName, outDir },
        abortOnFail: true,
      });

      return actions;
    },
  });
};
