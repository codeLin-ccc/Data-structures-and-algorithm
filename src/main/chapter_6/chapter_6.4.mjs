// 有序链表
import { Node } from "../../models/linked-list-models.mjs";
import LinkedList from "./chapter_6.1.mjs";
import { defaultEquals } from "../../util.mjs";
const Compare = {
  LESS_THAN : -1,
  BIGGER_THAN: 1, 
}
function defaultCompare(a, b) {
  if(a === b){
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}
class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }
  insert(element, index = 0) {
    if(this.isEmpty()){
      return super.insert(element, index); // 调用 LinkedList 上的insert方法。并推出 insert
    }
    const pos = this.getIndexNextSortedElement(element); // 比较获取元素应该插入的下表
    return super.insert(element, pos);
  }
  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current.next == null; i++) {
      const comp = this.compareFn(element, current.element)
      if(comp === Compare.LESS_THAN){ // cpmpareFn（3，2）比较得 1，继续循环
        return i;
      }
      current = current.next;    
    }
    return i;
  }
}