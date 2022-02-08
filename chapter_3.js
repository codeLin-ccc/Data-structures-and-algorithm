/**
 * 3.7.1 数组合并
 ** 场景：多个数组需要合并为一个数组，同时合并单独的变量
 ** 方法：可以使用原生的concat 方法，此方法向一个数组传递数组，对象或是元素
*/
function array371 () {
  const zero = 0;
  const arr1 = [1, 2, 3];
  const arr2 = [2, 34, 55];
  let arrconcat = arr1.concat(zero, arr2);
  console.log(arrconcat);
}
// array371();

/**
 * 3.7.2 迭代器函数
 ** 场景：迭代数组：
| 方法      | 特性 |
| -----------| ----------- |
| every      | 迭代每个元素，直到返回false    |
| some       | 迭代每个元素，直到返回true     |
| forEach    | 迭代每个元素，                 |
| map        | 迭代每个元素，返回新数组，由每次迭代的返回值组成               |
| filter     | 迭代每个元素，返回新数组，由使每次迭代返回true的额元素组成               |
| reduce     | 迭代每个元素，返回一个将被叠加到累加器的值，reduce 方法停止执行后会返回这累加器，如果要对一个数组求和，这就很有用             |
 */
function array372 () {
  let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  /**
   * 判断是否为2的倍数
  */ 
  const isEven = x => {
    console.log(`${x} && ${x % 2 === 0}`);
    return x % 2 === 0;
  };

  // every
  // numbers.every(isEven)

  // some
  // numbers.some(isEven)

  // forEach
  // numbers.forEach(isEven)

  // map
  // const arr = numbers.map(isEven)
  // console.log(arr);

  // filter
  // const arrfilter = numbers.filter(isEven)
  // console.log(arrfilter);

  // reduce
  const arrreduce = numbers.reduce((pre, next) => {
    return pre + next
  })
  console.log(arrreduce);
}
// array372();

/**
 * 3.7.3 ECMAScript 6 和数组的新功能
 ** 场景：迭代数组：
 */
function array373 () {
  let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  // for...of 
  // for (const n of numbers) {
  //   console.log(n % 2 === 0);
  // }

  // @@iterator 对象 需要通过Symbol.iterator 来访问
  // let iteartor = numbers[Symbol.iterator]();
  // console.log(iteartor.next().value);
  // console.log(iteartor.next());

  // entries  得到键值对的迭代器
  // let aEntries = numbers.entries();
  // console.log(aEntries);
  // for (const n of aEntries) {
  //   console.log(n);
  // }

  // keys 得到数组索引的迭代器
  // 一旦没有可以迭代的值，keys.next() 就会返回一个value属性为undefined、done属性为true 的对象，如果done属性为false，那说明还有可迭代的对象
  // let keys = numbers.keys();
  // console.log(keys.next());

  // values 得到数组索引的迭代器
  // let values = numbers.values();
  // console.log(values.next());

  // from 根据已有的数组创建一个新的数组
  // let numbers2 = Array.from(numbers)
  // // 还可以传入一个用来过滤值的数组
  // let numbers3 = Array.from(numbers, y => (y % 2 === 0))
  // console.log(numbers3);

  // of 方法 根据传入的参数创建一个新数组
  // let numbers4 = Array.of(1,2,2)
  // // 与 这段代码效果一样
  // let numbers5 = [1,2,2]
  // console.log(numbers4)
  // Array.of(...numbers) 与 Array.from(numbers) 效果一样

  // fill 方法 填充数组
  // let numbersCopy = Array.of(1,23,444,45,66);
  // numbersCopy.fill(0);
  // numbersCopy.fill(2, 2) // 指定开始位置填充，从第二个位置开始填充2
  // numbersCopy.fill(1, 1, 3) // 指定开始结束位置填充
  // console.log(numbersCopy);
  // // 创建数组并初始化时，fill 非常好用
  // let ones = Array(10).fill(3)
  // console.log(ones);

  // copyWidthin 方法
  let copyArray = [1,2,3,4,5,6,7]
  // copyArray.copyWithin(1, 3, 5) // 把第3个位置到第五个位置 [3, 5)  复制到第一个位置去
  copyArray.copyWithin(3, 0, 1)  // 把[0,1) 复制到 第三个位置上
  console.log(copyArray); // [1,4,5,4,5,6,7]
}
// array373();

/**
 * 3.7.5 排序元素
 * 
*/
function Array374 () {
  let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  // reverse 反转数组
  // let a = numbers.reverse();

  // sort 排序 
  // a.sort()  // sort 在对数组做排序时，把元素默认成字符串进行互相比较
  // a.sort((a, b) => a - b) // 传入自己的比较函数，在b 大于a 时，返回负数，反之则返回正数。
  // 如果相等的话就会返回0，sort会根据返回值的情况对数组进行排序
  // 之前的代码也可以表示为这样
  // function compare (a, b) {
  //   if (a < b) {
  //     return -1;
  //   }
  //   if (a === 0) {
  //     return 0;
  //   }
  //   if (a > b){
  //     return 1;
  //   }
  // }
  // a.sort(compare)
  // console.log(a);
  
  // 1...自定义排序 使用sort 自定义比较函数
  // let friends = [{name: "小红", age: 18}, {name: "小军", age: 12}, {name: "小方", age: 19}];
  // function compareFunction (a, b) {
  //   if (a.age < b.age) {
  //     return -1;
  //   }
  //   if (a.age === b.age) {
  //     return 0;
  //   }
  //   if (a.age > b.age) {
  //     return 1;
  //   }
  // }
  // console.log(friends.sort(compareFunction)); 

  // 2...字符串排序 string[]
  let names = ["Ana", "ana", "john", "John"];
  console.log(names.sort());  // js 在做字符串比较时，是根据ASCII 值来比较的
  console.log(names.sort((a, b) => a.localeCompare(b))); // 如果希望小写字母排在前边，需要使用localeCompare方法；
  // 希望重音符号的字符做排序的话，也可以使用localeCompare

}
// Array374();

/**
 * 3.7.5 搜索
 * 
*/
function Array375 () {
  let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  // indexOf 和 lastIndexOf 
  // console.log(numbers.indexOf(10)); // 9  返回正序第一个
  // console.log(numbers.indexOf(100)); // -1 没有则返回-1
  // numbers.push(10)
  // console.log(numbers.lastIndexOf(10)); // 15 倒序第一个
  // console.log(numbers.lastIndexOf(100)); // 没有则返回-1

  // ECMAScript 2015 --- find 和findIndex 方法
  // console.log(numbers.find(x => x % 7 === 0)); // 返回第一个满足的值，没有则返回 undefined
  // console.log(numbers.findIndex(x => x % 7 === 0)); // 返回第一个满足的值的索引，没有则返回 -1

  // ECMAScript 7 --- includes 方法
  // console.log(numbers.includes(14));  // true 存在返回true
  // console.log(numbers.includes(16));  // false 不存在返回false
  // console.log(numbers.includes(6, 7)) // false 传入索引，索引7之后不存在6，返回false

}
// Array375()

/**
 * 将数组转为字符串
 * */ 
function Array376 () {
  let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  
  // toString
  console.log(numbers.toString());

  // join 传入分隔符,可以拼接
  console.log(numbers.join('--'));
}
Array376()
