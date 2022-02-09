// 4.2.1
// 创建一个基于数组的栈
class Stack {
  constructor() {
    this.items = [];
  };

  push(element) {
    this.items.push(element)
  };

  pop() {
    return this.items.pop()
  };
  
  peek() {
    return this.items[this.items.length - 1];
  };

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
}
const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1.pop());
console.log(stack1.isEmpty());
console.log(stack1.peek());
console.log(stack1.size());
console.log(stack1);
