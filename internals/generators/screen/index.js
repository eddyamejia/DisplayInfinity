/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const utils = require('../utils');

const baseRoute = '../../app/';

module.exports = {
  description: 'Add an screen container',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should this screen be called?',
      default: 'Home',
      validate: (value) => {
        if (/.+/.test(value)) {
          return utils.screenExists(`${value}Screen`)
            ? 'A screen with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: true,
      message: 'Do you want i18n messages (i.e. will this screen use text)?',
    },
    {
      type: 'input',
      name: 'connectContainer',
      default: false,
      message: 'Do you want to connect a container in this screen?',
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: `${baseRoute}screens/{{properCase name}}/index.js`,
        templateFile: './screen/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: `${baseRoute}screens/{{properCase name}}/styles.js`,
        templateFile: './screen/styles.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: `${baseRoute}routes.native.js`,
        pattern: /(import .+ from 'screens\/.+';\n)(?!import .+ from 'screens\/.+';\n)/g,
        templateFile: './screen/import-routes.native.js.hbs',
      },
      {
        type: 'modify',
        path: `${baseRoute}routes.native.js`,
        pattern: /(.+: { screen: .+ },\n)(?!.+: { screen: .+ },\n)/g,
        templateFile: './screen/routes.native.js.hbs',
      },
      {
        type: 'modify',
        path: `${baseRoute}routes.map.native.js`,
        pattern: /(.+: { statusBar: '.+-content' },\n)(?!.+: { statusBar: '.+-content' },\n)/g,
        templateFile: './screen/routes.map.native.js.hbs',
      },
    ];

    // If component wants messages
    if (data.wantMessages) {
      actions.push({
        type: 'add',
        path: `${baseRoute}screens/{{properCase name}}/messages.js`,
        templateFile: './screen/messages.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      path: '/screens/',
      suffix: '',
    });

    return actions;
  },
};
