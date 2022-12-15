// symbol 值是唯一的
{
  let s1: symbol = Symbol('lin')
  let s2: symbol = Symbol('lin')

  // 内存地址不一样
  // console.log(s1 === s2); //false

  let obj = {
    [s1]: 'value',
    [s2]: 's2',
    name: 'lin',
    age: 18
  }

  // for (const key in obj) {
  //  console.log(key);
  // }
  // console.log(Object.keys(obj));

  // 只能通过get symbol 方法获取
  // console.log(Object.getOwnPropertySymbols(obj));
}

// symbol迭代器和生成器
// 数组, map, set, arguments...等都有迭代器
{
  let arr: Array<number> = [1, 3, 4, 5]
  let it: Iterator<number> = arr[Symbol.iterator]()
  // console.log(it.next()); // { value: 1, done: false }
  // console.log(it.next());
  // console.log(it.next());
  // console.log(it.next()); // { value: 5, done: false }
  // console.log(it.next()); // { value: undefined, done: true }
}

// symbol 生成器
{
  let arr = [1, 22, 3]
  let set: Set<number> = new Set([1, 2, 3]);
  let map: Map<string, string> = new Map();
  map.set('1', '一')
  map.set('2', '二')
  map.set('3', '三')

  function getIt(arr: any) {
    let it: Iterator<any> = arr[Symbol.iterator]()
    let next: any = {
      done: false
    };
    while (!next.done) {
      next = it.next()
      if(!next.done) {
        // console.log(next);
      }
    }
  }
  getIt(arr)

  // for of 会调用 arr[Symbol.iterator]() , 返回value
  for (const iterator of set) {
    console.log(iterator);
  }
  // for in 会返回索引
  for (const key in arr) {
    console.log(key);
  }
}