/**
 @param element 元素本身
 @param next 指向下一元素的指针
 * */ 
export class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

export class DoublyNode extends Node {
  constructor(element, next, prev) { 
    super(element, next); // 继承Node 的属性
    this.prev = prev;
  }
}