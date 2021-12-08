export function onlyInteger(value) {
  if (isNaN(value)) {
    return ''
  }
  var regStrs = [
    ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0
    ['[^\\d]+$', ''], //禁止录入任何非数字
  ];
  for (var i = 0; i < regStrs.length; i++) {
    var reg = new RegExp(regStrs[i][0]);
    value = value.replace(reg, regStrs[i][1]);
  }
  if (value.indexOf('-') != -1) {
    value = Math.abs(value);
  }
  return value;
}
export function canDecimal(value, point) {
  if (isNaN(value)) {
    return ''
  }
  var regStrs = [
    ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0
    ['[^\\d\\.]+$', ''], //禁止录入任何非数字和点
    ['\\.(\\d?)\\.+', '.$1'], //禁止录入两个以上的点
    ['^(\\d+\\.\\d{' + point + '}).+', '$1'], //禁止录入小数点后两位以上
    ['^\\.$', '0.'] //禁止首位录入点
  ];
  for (let i = 0; i < regStrs.length; i++) {
    let reg = new RegExp(regStrs[i][0]);
    value = value.replace(reg, regStrs[i][1]);
  }

  if (value.indexOf('-') != -1) {
    value = Math.abs(value);
  }
  return value;
}
