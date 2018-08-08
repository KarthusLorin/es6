{
  // 声明
  let a1 = Symbol()
  let a2 = Symbol()
  console.log(a1 === a2)
  // 返回由给定的 key 找到的 symbol，否则就是返回新创建的 symbol
  let a3 = Symbol.for('a3')
  let a4 = Symbol.for('a3')
  console.log(a3 === a4)
}

{
  // 避免覆盖'abc'
  let a1 = Symbol.for('abc')
  let obj = {
    [a1]: '123',
    'abc': 345,
    'c': 456
  }
  console.log(obj)

  // for-of无法取到Symbol
  for (let [key, value] of Object.entries(obj)) {
    console.log('let of', key, value)
  }

  // 使用bject.getOwnPropertySymbols可以拿到symbol属性
  Object.getOwnPropertySymbols(obj).forEach((item) => {
    console.log(item)
  })

  // 使用Reflect.ownKeyskey返回所有属性
  Reflect.ownKeys(obj).forEach((item) => {
    console.log('ownkyes', item, obj[item])
  })
}