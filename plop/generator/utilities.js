/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
  plop.setGenerator('utilities', {
    description: 'Generates a utilities package',
    prompts: [
      {
        type: 'input',
        name: 'utilitiesName',
        message: 'Enter utilities name:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'The description of this utilities:',
      },
    ],
    actions(answers) {
      const actions = [];

      if (!answers) return actions;

      const { utilitiesName, description, outDir } = answers;

      actions.push({
        type: 'addMany',
        templateFiles: 'plop/templates/utilities/**',
        destination: `./packages/utilities/{{dashCase utilitiesName}}`,
        base: 'plop/templates/utilities',
        data: { description, utilitiesName, outDir },
        abortOnFail: true,
      });

      return actions;
    },
  });
};
