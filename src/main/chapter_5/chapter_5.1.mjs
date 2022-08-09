// 对象比数组在获取元素时更高效
export default class Queue {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  enqueue(element) {
    this.items[this.count] = element;
    this.count ++; 
  }
  isEmpty() {
    return this.size() === 0;
  }
  dequeue() {
    if(this.isEmpty()){
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount ++;
    return result;
  }
  peek() {
    if(this.isEmpty()){
      return undefined
    }
    return this.items[this.lowestCount];
  }
  size() {
    // this.count - this.lowestCount 差值即为该队列的长度
    return this.count - this.lowestCount;
  }
  clear() {
    // 一种是不断调用dequeue方法直到它返回undefined
    // 一种是直接设置为构造函数一样
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    // 在此次 取第一个值 可减少一次循环
    let result = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      result = `${result},${this.items[i]}`;
    }
    return result;      
  }
}
// const queue = new Queue();
// queue.enqueue(12)
// queue.enqueue(121)
// queue.enqueue(45)
// console.log(queue.isEmpty());
// console.log(queue.size());
// console.log(queue.peek());
// console.log(queue.dequeue());
// console.log(queue);
// console.log(queue.toString());
