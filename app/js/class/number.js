{
  // 判断是否是有限值
  console.log('15', Number.isFinite(15))
  console.log('NaN', Number.isFinite(NaN))
  console.log('1/0', Number.isFinite(1/0))
}

{
  // 判断是否为数
  console.log('NaN', Number.isNaN(NaN))   // true
}

{
  // 判断是否为整数
  console.log('25', Number.isInteger(25))       // true
  console.log('25.0', Number.isInteger(25.0))   // true
  console.log('25.1', Number.isInteger(25.1))   // false
  console.log('25.1', Number.isInteger('25'))   // 不是数，false
}

{
  // 取小数整数部分
  console.log(4.1, Math.trunc(4.1))
  //
}

{
  // 判断正数负数还是0
  console.log('-5', Math.sign(-5))    // -1
  console.log('-5', Math.sign(0))    // 0
  console.log('-5', Math.sign(5))    // 1
}

{
  // 立方根计算
  console.log('-1', Math.cbrt(-1))
  console.log('8', Math.cbrt(8))
}

