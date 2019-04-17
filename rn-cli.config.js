const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
  getSourceExts() {
    return ['js', 'jsx'];
  },
  getBlacklistRE() {
    return blacklist([/react-native\/local-cli\/core\/__fixtures__.*/]);
  },
};
