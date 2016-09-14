
var setType = require('setType');

function setKind(type, kind) {
  setType(type.prototype, kind);
  return type;
}

module.exports = setKind;
