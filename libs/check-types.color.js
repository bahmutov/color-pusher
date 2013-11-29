check.color = function (val) {
  if (!check.string(val)) { return false; }
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
