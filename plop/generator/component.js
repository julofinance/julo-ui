/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = function main(plop) {
  plop.setGenerator('component', {
    description: 'Generates a component package',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter component name:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'The description of this component:',
      },
    ],
    actions(answers) {
      const actions = [];

      if (!answers) return actions;

      const { componentName, description, outDir } = answers;

      actions.push({
        type: 'addMany',
        templateFiles: 'plop/templates/component/**',
        destination: `./packages/components/{{dashCase componentName}}`,
        base: 'plop/templates/component',
        data: { description, componentName, outDir },
        abortOnFail: true,
      });

      return actions;
    },
  });
};
