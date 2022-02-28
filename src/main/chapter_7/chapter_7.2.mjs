// 原生 es 2015 set 类
const set = new Set();
set.add(1);
set.add(3);
set.add(4);
set.add(67);
set.add(88);
// const a = set.values();
// console.log(a);

// const a1 = a.next();
// console.log(a);

// const b = a.next();
// console.log(a);
// console.log(a1, b);

// 模拟集合运算
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
// 1.模拟并集运算
const union = (setA, setB) => {
  const unionSet = new Set();
  setA.forEach(element => {
    unionSet.add(element);
  });
  setB.forEach(element => {
    unionSet.add(element);
  })
  return unionSet;
} 

console.log(union(setA, setB));
// 2.模拟交集运算
const intersection  = (setA, setB) => {
  const intersection = new Set();
  setA.forEach(element => { 
    if(setB.has(element)){
      intersection.add(element);
    }
  })
  return intersection
}

// 3.模拟差集运算 包含 A 有 B 没有的元素

const difference  = (setA, setB) => {
  const differenceSet = new Set();
  setA.forEach(element => { 
    if(!setB.has(element)){
      differenceSet.add(element);
    }
  })
  return differenceSet;
}


//  4.使用扩展运算符进行 集合运算
console.log(new Set([...setA, ...setB])); // 并集
console.log(new Set([...setA].filter(item => setB.has(item)))); // 交集
console.log(new Set([...setA].filter(item => !setB.has(item)))); // 差集
