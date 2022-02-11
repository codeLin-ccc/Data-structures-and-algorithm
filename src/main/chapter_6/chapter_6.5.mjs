// StackLinkedList 类
import DoublyLinkedList from "./chapter_6.2.mjs";

class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList();
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if(this.items.isEmpty()){
      return undefined;
    }
    return this.items.removeAt(this.items.size() -1);
  }
  isEmpty() {
    return this.items.isEmpty();
  }
  size() {
    return this.items.size();
  }
  clear() {
    return this.items.clear();
  }
  peek() {
    if(this.isEmpty()){
      return undefined;
    }
    return this.items.getElementAt(this.items.size() -1).element;
  }
  toString() {
    return this.items.toString();
  }
}

const stack = new StackLinkedList();

stack.push('111')
stack.push('233')
stack.push('abbd')
stack.push('4446f')
stack.push('gasdfgsa')
console.log(stack.toString());
console.log(stack);