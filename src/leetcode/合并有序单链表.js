/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// 虚拟头节点
var mergeTwoLists = function (list1, list2) {
  let Node = new ListNode(0);
  let head = Node;
  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      Node.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      Node.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    Node = Node.next;
  }
  Node.next = list1 === null ? list2 : list1
  return head.next;
};