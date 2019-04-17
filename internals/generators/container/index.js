/**
 * Container Generator
 */

const utils = require('../utils');

module.exports = {
  description: 'Add a container component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Form',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return utils.screenExists(value) ? 'A container with this name already exists' : true;
      }
      return 'The name is required';
    },
  }],
  actions: () => {
    const actions = [{
      type: 'add',
      path: '../app/containers/{{properCase name}}/index.js',
      templateFile: './container/index.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../app/containers/{{properCase name}}/tests/index.test.js',
      templateFile: './container/test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../app/containers/{{properCase name}}/actions.js',
      templateFile: './container/actions.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../app/containers/{{properCase name}}/tests/actions.test.js',
      templateFile: './container/actions.test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../app/containers/{{properCase name}}/constants.js',
      templateFile: './container/constants.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../app/containers/{{properCase name}}/selectors.js',
      templateFile: './container/selectors.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../app/containers/{{properCase name}}/tests/selectors.test.js',
      templateFile: './container/selectors.test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../app/containers/{{properCase name}}/reducer.js',
      templateFile: './container/reducer.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../app/containers/{{properCase name}}/tests/reducer.test.js',
      templateFile: './container/reducer.test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../app/containers/{{properCase name}}/saga.js',
      templateFile: './container/saga.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../app/containers/{{properCase name}}/tests/saga.test.js',
      templateFile: './container/saga.test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../app/containers/{{properCase name}}/api.js',
      templateFile: './container/api.js.hbs',
      abortOnFail: true,
    }];
    actions.push({
      type: 'prettify',
      path: '/containers/',
    });

    return actions;
  },
};
