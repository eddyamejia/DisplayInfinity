/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => [
        'Stateless Function',
        'React.PureComponent',
        'React.Component',
      ],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (!value) {
          return 'The name is required';
        }
        return true;
      },
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this component use text)?',
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './page/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './page/class.js.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../../app/pages/{{properCase name}}Page/index.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/pages/{{properCase name}}Page/tests/index.test.js',
        templateFile: './page/test.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/pages/{{properCase name}}Page/Styled.js',
        templateFile: './page/Styled.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/pages/{{properCase name}}Page/Loadable.js',
        templateFile: './page/loadable.js.hbs',
        abortOnFail: true,
      },
    ];

    // If they want a i18n messages file
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: '../../app/pages/{{properCase name}}Page/messages.js',
        templateFile: './page/messages.js.hbs',
        abortOnFail: true,
      });
    }
    return actions;
  },
};
