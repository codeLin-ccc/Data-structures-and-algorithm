// 4.4 保护数据结构内部元素
// 属性不是私有的，可以随意访问
// const stack = new Stack();
// console.log(Object.getOwnPropertyNames(stack));
// console.log(Object.keys(stack));
// console.log(stack.items);

// 4.4.1 下划线命名约定
// 一些开发者喜欢在js 中使用下划线来标记一个属性为私有属性。
// this._items = {};
// this._count = 0; 

// 4.4.2 用ES2015的限定作用域Symbol实现类
// const _items = Symbol("stackItems")
// const _count = Symbol("stackCount")
// this[_items] = {};
// this[_count] = {};

// 4.4.3 使用WeakMap 实现类
const items = new WeakMap();
class Stack {
  constructor() {
    items.set(this, [])
  }
  push(element) {
    const s = items.get(this);
    s.push(element);
    // console.log(this); // class中this指的是stack类自己的引用
  }
  pop() {
    const a = items.get(this);
    const b = a.pop();
    return b;
  }
}
const stack = new Stack();
stack.push(1);
stack.push(5555);
console.log(stack);
console.log(stack.pop());

// 4.4.4 ECMAscript 类属性的提案
// #count = 0
// #items = {}
// class DStack {
//   constructor(){
//     #count = 0;
//     #items = {};
//   }
// }
// const dstack = new DStack();
// console.log(dstack);



