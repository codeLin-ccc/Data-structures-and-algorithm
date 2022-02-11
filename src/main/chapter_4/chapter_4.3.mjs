// 4.3 创建一个基于js 对象的stack类
export default class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  };
  push(element) {
    this.items[this.count] = element;
    this.count ++;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  pop() {
    // 判断栈是否为空
    if(this.isEmpty()){
      return undefined;
    }
    this.count --;
    const result = this.items[this.count]; 
    // 由于使用的是对象，可以使用 js 的 delete运算符从对象中删除一个特定的值
    // delete 操作符用于删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放
    delete this.items[this.count];
    return result;
  }
  clear() {
    // this.items = {};
    // this.count = 0;

    // 也可以遵循LIFO原则，使用以下逻辑进行移除
    // while(this.count > 0) 或者如下
    while(!this.isEmpty()) {
      this.pop();
    }
  }
  peek() {
    return this.items[this.count -1];
  }
  toString() {
    // 在数组中，stack可以直接使用数组的tostring方法
    // 在对象版本中，我们可以实现一个tostring 方法打印出栈的内容
    if(this.isEmpty()){
      return "";
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString += `,${this.items[i]}`
    }
    return objString;
  }
}

// const stack = new Stack();
// stack.push(56565)
// stack.push(454)
// stack.push(4966)
// stack.push(566)
// console.log(stack.size());
// console.log(stack.isEmpty());
// // console.log(stack.pop());
// console.log(stack.peek());
// // stack.clear();
// console.log(stack.toString());





