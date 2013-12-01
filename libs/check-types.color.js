check.color = function (val) {
  if (!check.string(val)) { return false; }
  val = val.trim();
  if (val.length === 6) {
    val = '#' + val;
  }
  if (val.length !== 7) {
    return false;
  }
  return (/^#?[0-9a-f]{6}$/i).test(val);
};

check.verify.color = function (val, msg) {
  if (!check.color(val)) {
    throw new Error(msg);
  }
};

check.verify.colors = function (list) {
  check.verify.array(list, 'expected array of colors, got ' + list);
  list.forEach(function (color, index) {
    check.verify.color(color, 'invalid color ' + color + ' index ' + index);
  });
};
