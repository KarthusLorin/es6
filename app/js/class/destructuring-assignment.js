{
  // 数组解构方式——基本
  let a, b, c, rest;
  [a, b, c] = [1, 2];
  console.log(a, b, c)   // 1 2 undefined
}

{
  // 数组解构方式——设置默认值
  let a, b, c, rest;
  [a, b, c = 3] = [1, 2];
  console.log(a, b, c)   // 1 2 3
}

{
  // 数组解构方式——跳跃赋值
  let a, b, c, rest;
  [a, , , b] = [1, 2, 3, 4, 5]
  console.log(a, b)   // 1 4
}

{
  // 数组解构方式——最后一个变量设为数组
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6]
  console.log(a, b, rest)
}

{
  // 数组解构运用1——交换赋值
  let a = 1;
  let b = 2;
  [a, b] = [b, a];
  console.log(a, b)     // 2 1
}

{
  // 数组解构运用2——计算结果赋值
  function f () {
    return [1, 2]
  }

  let a, b;
  [a, b] = f();
  console.log(a, b)     // 1 2
}

{
  // 对象解构——基本
  let a, b;
  ({a, b} = {a: 1, b: 2})
  console.log(a, b)     // 1 2
}

{
  // 对象解构——默认赋值
  let {a = 10, b = 5} = {a: 3};
  console.log(a, b)     // 3 5
}

{
  // 对象解构——嵌套对象解构，注意左侧是key，右侧是你命名的对象
  let metaData = {
    title: 'abc',
    test: [{
      title: 'test',
      desc: 'description'
    }]
  }
  // 其实就是做了两层的对象解构
  let {title: esTitle, test: [{title: cnTitle}]} = metaData;
  console.log(esTitle, cnTitle)       // 'abc'  'test'
}