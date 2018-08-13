{
  // 修饰器（设定只读）
  let readonly = function (target, name, descriptor) {
    descriptor.writable = false
    return descriptor
  }

  class Test {
    // 修饰器使用
    @readonly
    time () {
      return '2017-03-11'
    }
  }

  let test = new Test()

  test.time = function () {
    console.log('reset time')
  }

  console.log(test.time())
}

{
  let typename = function (target, name, descriptor) {
    target.myname = 'hello'
  }

  @typename
  class Test {

  }

  console.log('类修饰符', Test.myname)
}