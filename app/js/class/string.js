{
  let str = 'string';
  // 检测是否包含c
  console.log('includes', str.includes('c'));
  // 判断字符串是否以str为开头
  console.log('start', str.startsWith('str'));
  // 判断字符串是否以ng结束
  console.log('end', str.endsWith('ng'));
}

{
  let str = 'abc';
  // 字符串复制次数
  console.log(str.repeat(2));
}

{
  let name = 'list';
  let info = 'hello world';
  // 模板字符串
  let m = `i am ${name}, ${info}`
  console.log(m)
}

{
  // 开头补全，即在开头加一个0
  console.log('1'.padStart(2, '0'))
  // 结尾补全，即在结尾加一个0
  console.log('1'.padStart(2, '0'))
}

{
  let user = {
    name: 'list',
    info: 'hello'
  };
  // 标签模板
  console.log(abc`i am ${user.name}, ${user.info}`)
  function abc (s, v1, v2) {
    console.log(s, v1, v2)
    return s + v1 + v2
  }
}

{
  // String.row会对\进行转译
  console.log(String.raw`Hi\n${1 + 2}`)
  console.log(`Hi\n${1 + 2}`)
}