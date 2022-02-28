class Set {
  constructor() {
    this.items = {}
  }
  has(element) {
    // return element in this.items;
    // 更安全的做法
    return Object.prototype.hasOwnProperty.call(this.items, element);
    // Object原型有hasOwnProperty 方法。该方法返回一个表明对象是否具有特定属性的布尔值。in 运算符则返回表示对象在原型链上是否有特定属性的布尔值
    // 如果 使用this.items.hasOwnProperty(),会有风险，this.items是否继承了Object的方法？this.itmes.has  方法是否被覆盖？
  }
  add(element) {
    if (!this.has(element)) {
      // 添加一个元素时，同时把他作为键和值保存，有利于查找元素
      this.items[element] = element;
      return true;
    }
    return false;
  }
  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
  // 或者手动遍历 对象的属性
  sizeLegacy() {
    let conut = 0
    for (const key in this.items) {
      if (Object.hasOwnProperty.call(this.items, key)) {
        conut++;
      }
    }
    return conut;
  }
  values() {
    // return Object.values(this.items);

    // 如果想让代码在任何浏览器中运行，可以使用下面这段
    let array = [];
    for (const key in this.items) {
      if (Object.hasOwnProperty.call(this.items, key)) {
        const element = this.items[key];
        array.push(element);
      }
    }
    return array;
  }

  // 交集
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach(value => {
      unionSet.add(value);
    });
    otherSet.values().forEach(value => {
      unionSet.add(value);
    });
    return unionSet
  }

  // 并集
  intersection(otherSet) {
    // 始终迭代当前实例，考虑是否优化
    // const unionSet = new Set();
    // otherSet.values.forEach(element => {
    //   if (this.has(element)) {
    //     unionSet.add(element);
    //   }
    // });
    // return unionSet;

    // 改进版本，始终迭代最小长度的 set 集合
    const unionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallSet = otherValues;
    if(biggerSet.length - smallSet.length < 0){
      smallSet = values;
      biggerSet = otherValues;
    }
    smallSet.forEach(element => {
      if (biggerSet.includes(element)) {
        unionSet.add(element);
      }
    });
    return unionSet;
  }

  // 差集运算 A 与 B 的差集 和 B 与 A 的差集是不一样的
  difference(otherSet) {
    const differenceSet = new Set();
    otherSet.values().forEach(value => {
      if(!this.has(value)){
        differenceSet.add(value);
      }
    })
    return differenceSet;
  }

  // 子集
  inSubsetOf(otherSet) {
    if(otherSet.size() < this.size()){
      return false;
    }
    let isSubset = true;
    // 使用every 可以在返回false 时停止迭代
    this.values().every(value => {
      if(!otherSet.has(value)){
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }
}

const setA = new Set();
// setA.add(1);
// setA.add(2);
setA.add(3);
setA.add(5);
const setB = new Set();
setB.add(3);
setB.add(5);
setB.add(6);
setB.add(7);
setB.add(8);
setB.add(99);
setB.add(998898);

// console.log(setA.values());
// setA.delete(3)
// console.log(setA.values());
// console.log(setA.has(5));
// console.log(setA.size());
// console.log(setA.sizeLegacy());
// console.log(setA.intersection(setB));
// console.log(setA.difference(setB));
// console.log(setB.difference(setA));
console.log(setA.inSubsetOf(setB));
