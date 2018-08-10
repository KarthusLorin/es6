{
  let list = new Set()
  // 向set添加元素
  list.add(5)
  list.add(7)
  console.log('size', list.size)
}

{
  let arr = [1, 2, 3, 4, 5]
  // 通过数组生成Set
  let list = new Set(arr)

  console.log('size', list.size)
}

{
  let list = new Set()
  list.add(1)
  list.add(2)
  list.add(1)   // 不生效

  console.log('list', list)

  let arr = [1, 2, 3, 1, 2]
  // 通过Set去重
  let list2 = new Set(arr)

  console.log('unique', list2)
}

{
  let arr = ['add', 'delete', 'clear', 'has']
  let list = new Set(arr)

  // 判断是否包含
  console.log('has', list.has('add'))
  // 删除
  console.log('delete', list.delete('add'), list)
  // 清空
  list.clear()
  console.log('list', list)
}

{
  let arr = ['add', 'delete', 'clear', 'has']
  let list = new Set(arr)
  // 遍历key
  for (let key of list.keys()) {
    console.log('keys', key)
  }
  // 遍历value
  for (let value of list.values()) {
    console.log('value', value)
  }
  // 遍历键值对
  for (let [key, value] of list.entries()) {
    console.log('entries', key, value)
  }
  // forEach遍历
  list.forEach(function (item) {
    console.log(item)
  })
}

{
  let weakList = new WeakSet()
  // WeakSet只能放对象，并且不能遍历
  let arg = {}
  weakList.add(arg)
}

{
  let map = new Map()
  let arr = ['123']
  // 添加数据，不限制key的类型，通过set方法取值
  map.set(arr, 456)
  // 通过get方法进行取值
  console.log('map', map, map.get(arr))
}

{
  let map = new Map([['a', 123], ['b', 456]])
  console.log('map args', map)
  console.log('size', map.size)
  // 删除
  console.log('delete', map.delete('a'), map)
  // 清空
  console.log('clear', map.clear(), map)
}

{
  // WeakMap和WeakSet类似
  let weakmap = new WeakMap()

  let o = {}
  weakmap.set(o, 123)
  console.log(weakmap.get(o))
}

{
  // 数据结构横向对比，增，查，改，删
  let map = new Map()
  let array = []

  // 增
  map.set('t', 1)
  array.push({t: 1})
  console.info('map-array', map, array)

  // 查
  let map_exist = map.has('t')
  let array_exist = array.find(item => item.t)
  console.info('map-array', map_exist, array_exist)

  // 改
  map.set('t', 2)
  array.forEach(item => item.t ? item.t = 2 : '')
  console.info('map-array-modify', map, array)

  // 删
  map.delete('t')
  let index = array.findIndex(item => item.t)
  array.splice(index, 1)
}