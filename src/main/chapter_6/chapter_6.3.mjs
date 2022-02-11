import { Node } from "../../models/linked-list-models.mjs";
import LinkedList from "./chapter_6.1.mjs";

/**
 * 循环链表
 * */ 
class CirularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }
  insert(element, index) {
    if(index >= 0 && index < this.conut){
      const node = new Node(element);
      let current = this.head;
      if(index === 0){
        if(this.conut === 0){
          this.head = node;
          node.next = node;  // 链表为空时，更新node 的next 指向 current， 在更新head 为node
        } else {
          node.next = current;
          this.head = node; // 链表不为空时，node.next 指向 原来的head，并指定node 为现有head
        }
      } else if (index === this.conut){
        const previons = this.getElementAt(index - 1);
        node.next = previons.next
        previons.next = node;
      }
      this.conut ++;
      return true;
    }
    return undefined;
  }
  removeAt(index) {
    if(index >=0 && index < this.conut){
      let current = this.head; // current 为当前移除链表元素
      if(index === 0){
        if(this.conut === 1) {
          this.head = undefined; // 链表长度为一，移除后为空，更新head 
        } else {
          const removed = this.head;
          current = this.getElementAt(this.size())
          current.next = removed.next;
          this.head = removed.next; // 链表长度大于1，移除第一项后，末尾 next指针指向 head.next；再更新head
          current = removed;
        }
      }
      return removed; 
    }
    return undefined;
  }
}