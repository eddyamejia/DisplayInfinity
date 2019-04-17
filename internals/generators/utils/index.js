/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');

const components = fs.readdirSync(
  path.join(__dirname, '../../../app/components'),
);

const containers = fs.readdirSync(
  path.join(__dirname, '../../../app/containers'),
);

const screens = fs.readdirSync(
  path.join(__dirname, '../../../app/screens'),
);


function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

function containerExists(comp) {
  return containers.indexOf(comp) >= 0;
}

function screenExists(comp) {
  return screens.indexOf(comp) >= 0;
}

module.exports = { componentExists, containerExists, screenExists };
