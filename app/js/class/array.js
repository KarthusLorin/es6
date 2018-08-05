{
  // 将一组数据转化为数组
  let arr = Array.of(3, 4, 7, 9, 11)
  console.log('arr=', arr)
  let empty = Array.of()
  console.log('empty', empty)   // []
}

{
  // 集合转换为数组，比如arguments以及获取dom的集合
  let p = document.querySelectorAll('p')
  let pArr = Array.from(p)
  // forEach是数组方法
  pArr.forEach((item) => {
    console.log(item.textContent)
  })
}

{
  // 生成映射
  console.log(Array.from([1, 3, 5], (item) => {
    return item * 2
  }))
}

{
  // 填充数组
  console.log('fill-7', [1, 'a', undefined].fill(7))  // [7,7,7]
  // 第二个参数是起止，第三个是长度
  console.log('fill-7', [1, 'a', undefined].fill(7, 1, 3))  // [1,7,7]
}

