{
  // 函数默认值
  function test (x, y = 'world') {
    console.log('默认值', x, y)
  }

  test('hello')
  test('hello', 'kill')
}

{
  // rest参数
  function test3 (...arg) {
    // for of 遍历值
    // for in 遍历key
    for (let v of arg) {
      console.log('rest', v)
    }
  }

  test3(1, 2, 3, 4)
}

{
  // 箭头函数
  let arrow = v => v * 2

  console.log('arrow', arrow(3))
}