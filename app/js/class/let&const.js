function test () {
  for (let i = 1;i < 3;i++) {
    console.log(i);
  }
  // let 拥有块级作用域
  console.log(i);

  let a = 1;
  // let不可以重定义同一个变量
  let a = 2;
}

function last () {
  const PI = 3.14;
  // const不可重定义
  PI = 8
  console.log(PI);

  // 定义常量时必须定义完整
  const a;
  a = 1;
  // 常量的指针是可以修改的，但是指针指向的那片区域的值是可以变的
  const k = {
    a: 1
  }
  //
  k.a = 2;
}

test()
last()