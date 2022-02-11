import { defaultEquals } from "../../util.mjs";
import { Node } from "../../models/linked-list-models.mjs";

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.conut = 0;
    this.head = undefined;  // 由于数据结构是动态的，我们需要用head 保存第一个元素的引用
    this.equalsFn = equalsFn;
  }
  push(element) {
    const node = new Node(element);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head; // current 初始化为 head
      while (current.next != null) {  // 循环链表，终止循环条件为 是否为最后一个元素，即判断最后一个元素的next 为undefined 或空
        current = current.next;  // 设置current 始终为下一个元素的指针；
      }
      current.next = node;  // current 已经为末尾元素了，设置其指针指向新元素，新元素指针默认为undefined
    };
    this.conut++; // 递增链表的长度
  }
  // removeAt(index) {  // 迭代链表在LinkdedList 类中的方法很常见。我们可以将其逻辑独立为单独的方法，即 getElementAt(element)
  //   if(index >= 0 && index < this.conut){
  //     let current = this.head;
  //     if(index === 0){
  //       this.head = current.next; // 当前元素 -> 下一个元素 && head -> a1 变成 head -> (a1.next)
  //     } else {
  //       let previons;
  //       for (let i = 0; i < index; i++) {
  //         previons = current;
  //         current = current.next;
  //       }
  //       previons.next = current.next; // a10 -> a11 变成 a10 -> a11的指针，也是就a12，这样，当前节点就会被丢弃在计算机内存中，等着被垃圾回收器清除
  //     };
  //     this.conut --;
  //     return current.element;
  //   }
  //   return undefined;
  // }
  getElementAt(index) {
    if (index >= 0 && index < this.conut) {
      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }
  // 重构 removeAt 方法
  removeAt(index) {
    if (index >= 0 && index < this.conut) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        const previons = this.getElementAt(index - 1);
        current = previons.next;
        previons.next = current.next;
      }
      this.conut--;
      return current.element;
    }
    return undefined;
  }

  insert(element, position) {
    const node = new Node(element);
    if (index >= 0 && index < this.conut) {
      if (position === 0) {
        const current = this.head;
        this.head = node;
        node.next = current;
      } else {
        const previons = this.getElementAt(position - 1);
        const current = previons.next;
        previons.next = node;
        node.next = current;
      };
      this.conut++;
      return true;
    }
    return undefined;
  }

  indexOf(element) {
    let current = this.head;
    // let sum = 0;
    // while(equalsFn(current.element === element)){
    //   current = current.nextl;
    //   sum ++;
    // }
    // if(current == null){
    //   return -1;
    // }
    // return sum;

    // 思考，对比第一种，计数器变量得到释放
    for (let i = 0; i < this.conut && current != null; i++) {  // ！！！！循环条件一定要判断好
      if (this.equalsFn(current.element, element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  // 我们已经有了一个根据element 查找索引indexOf 和一个根据 索引删除元素 的方法removeAt
  // 这样我们在修改removeAt 时相当于修改了两个删除元素的方法，维护起来更简单
  remove(element) {
    const currentIndex = this.indexOf(element);
    return this.removeAt(currentIndex);
  }

  isEmpty() {
    // return this.head == null; // 自己的判断
    return this.size() === 0; // 书上 这样写或许会好点?
  }
  size() {
    return this.conut;
  }
  // 提供获取链表的第一个元素的方法
  getHead() {
    return this.head;
  }
  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.conut && current != null; i++) {  // 在外面赋予第一次的值，减少循环 && 判断条件为小于链表长度 且 current 不为空
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }
  clear() {
    while (!this.isEmpty()) {  // !!!!!!做好判断逻辑
      this.removeAt(0);
    }
    return true;
  }
}

// const stack = new LinkedList();

// stack.push('111')
// stack.push('233')
// stack.push('abbd')
// stack.push('4446f')
// stack.push('gasdfgsa')
// console.log(stack.toString());
// // console.log(stack.isEmpty());
// // console.log(stack.size());
// // console.log(stack.getElementAt(3));
// // console.log(stack.getHead(), '头部元素');
// // console.log(stack.indexOf('abbd'));
// // console.log(stack.indexOf('233'));
// // console.log(stack.clear());
// // console.log(stack);
// // console.log(stack.removeAt(2));
// console.log(stack.remove('abbd'));
// console.log(stack.toString());


