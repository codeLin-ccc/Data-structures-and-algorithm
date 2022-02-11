import LinkedList from "./chapter_6.1.mjs";
import { DoublyNode } from "../../models/linked-list-models.mjs";
import { defaultEquals } from "../../util.mjs";

export default class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals){
    super(equalsFn);
    this.tail = undefined; // 保存链表最后一个元素的引用
  }
  insert(element, index) {
    if(index >= 0 && index <= this.conut){
      const node = DoublyNode(element);
      let current = this.head;
      if(index === 0){
        if(this.head == null) {  // 链表无元素前端添加
          this.head = node;
          this.tail = node;
        } else {  // 链表有元素时前端添加元素，更新之前头部元素的prev， 及插入元素的next
          node.next = this.head;
          current.prev = node; // 第一个元素的上一个引用，为自己
          this.head = node; // 更新第一个元素
        }
      } else if (index === this.conut) { // 尾部插入，更新插入元素的prev ，上一个元素的next
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node; // 更新最后一个元素
      } else {  // 中间插入 更新 插入元素的prev next 和上一个元素的next 及下一个元素的 prev
        const previons = this.getElementAt(index - 1);
        current = previons.next;
        node.next = current;
        previons.next = node;  // 首先node.next 指向current；其次previons.next 指向node，这样就不会丢失节点之间的链接
        node.prev = previons;
        current.prev = node;
      }
      this.conut ++;
      return true;
    }
    return undefined;
  }
  
  removeAt(index){
    if(index >= 0 && index < this.conut){
      let current;
      if(index === 0){
        if(this.size() === 0){
          return undefined;
        } else {  // 删除第一个元素，更新下个一元素的prev，并将其指定为第一个元素
          current = this.head.next;
          current.prev = undefined;
          this.head = current;
        }
      } else if (index === this.conut) { // 删除末尾元素，更新上一个元素的next，并将其指定为末尾元素
        current = this.tail;
        current.next = undefined;
        this.tail = current;
      } else { // 删除中间元素，需要更新对应元素的上一个元素的next，及其下一个元素的prev
        const previons = this.getElementAt(index - 1);
        const nextElement = this.getElementAt(index + 1);
        previons.next = nextElement;
        nextElement.prev = previons;
      }
      this.conut --;
      return current.element;
    }
    return undefined;
  }
  
  // 改进版本
  removeAt(index){
    if(index >= 0 && index < this.conut){
      let current = this.head;
      if(index === 0){ // 要删除的是第一个元素
        this.head = current.next; // 始终更新 head 指向 head 的下一个元素;
        if(this.size() === 1){
          this.tail = undefined; // 如果链表长度为1，更新 tail 指向
        } else {  
          this.head.prev = undefined; // 链表长度不为1，更新head.prev 指向
        }
      } else if (index === this.conut) { // 删除末尾元素
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;  // 指定上一个元素为末尾元素，更新其 next
      } else { // 删除中间元素
        current = this.getElementAt(index);
        const previons = current.prev;
        previons.next = current.next;
        current.next.prev = previons; // 更改 current 上一个元素的 next 指向 curent 的下一个元素，更改current 下一个元素 的 prev 指向 current 的上一个元素
      }
      this.conut --;
      return current.element;
    }
    return undefined;
  }
}

// 可以对链表进行改进
// 1、在结果为否的情况下，将元素插入双向链表的尾部
// 2、在 index > this.count / 2, 可以从尾部开始迭代，提升性能;

