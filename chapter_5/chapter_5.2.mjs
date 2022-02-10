// 双端队列数据结构
export default class Deque {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  size() {
    return this.count - this.lowestCount;
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let result = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      result = `${result},${this.items[i]}`
    }
    return result;
  }
  addFront(element) {
    if (this.isEmpty()) {  // 空队列情况
      this.addBack(element)
    } else if (this.lowestCount > 0) {  // 前段键不为0的情况 
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else { // 前段键为0 的情况
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element;
    }
  }
  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }
  removeFront() {
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  removeBack() {
    const result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return result;
  }
  peekFront() {
    return this.items[this.lowestCount];
  }
  peekBack() {
    return this.items[this.count - 1];
  }
}
const deque = new Deque();
console.log(deque.isEmpty());
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString());
deque.addBack('Camila');
console.log(deque.toString());
console.log(deque.peekFront(), '前端');
console.log(deque.peekBack(), '后端');
console.log(deque.isEmpty());
// deque.removeFront();
// console.log(deque.toString(), '移除前端后');
// deque.removeBack();
console.log(deque.removeBack());
console.log(deque.toString(), '移除后端后');
deque.addFront('John');
console.log(deque.toString(), '前端添加后');
deque.addFront('John');
console.log(deque.toString(), '前端添加后')


