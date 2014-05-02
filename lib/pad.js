// Generated by CoffeeScript 1.7.1
module.exports = function(string, size, char) {
  var i, pad, prefix, _i, _ref;
  if (char == null) {
    char = ' ';
  }
  prefix = typeof string === 'number';
  if (prefix) {
    _ref = [string, size], size = _ref[0], string = _ref[1];
  }
  string = string.toString();
  pad = '';
  size = size - string.length;
  for (i = _i = 0; 0 <= size ? _i < size : _i > size; i = 0 <= size ? ++_i : --_i) {
    pad += char;
  }
  if (prefix) {
    return pad + string;
  } else {
    return string + pad;
  }
};