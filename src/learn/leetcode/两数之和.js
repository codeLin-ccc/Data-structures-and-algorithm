
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/** 
  @param  数组转单链表
*/
function toListNode(arr) {
  let listNode = new ListNode(arr[0]);
  let copy = listNode;
  for (let i = 1; i <= arr.length; i++) {
    const element = arr[i];
    let nextNode = new ListNode(element);
    copy.next = nextNode;
    copy = copy.next
  }
  return listNode;
}

// console.log(toListNode([2,4,3]));
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 纯数组
var addTwoNumbers = function (l1, l2) {
  let l1Num = '';
  let l2Num = '';
  if (Array.isArray(l1) && Array.isArray(l2)) {
    l1.forEach(item => {
      l1Num = item + l1Num;
    })
    l2.forEach(item => {
      l2Num = item + l2Num;
    })
  }
  return Number(l1Num) + Number(l2Num);
};

// 单链表求和

var addTwoListNodes = function (l1, l2) {
  let res = new ListNode();
  let copy = res;
  let dig = 0;
  while (l1 || l2) {
    let L1 = l1 ? l1.val : 0;
    let L2 = l2 ? l2.val : 0;
    let cur = L1 + L2;
    copy.next = new ListNode((cur + dig) % 10);
    copy = copy.next;
    dig = Math.floor((cur + dig) / 10); 
    if (l1) {
      l1 = l1.next;
    };
    if (l2) {
      l2 = l2.next;
    }
  }
  // 最后如果大于10  需要进位
  if (dig) {
    copy.next = new ListNode(dig);
  }
  return res.next;
}

let l1 = toListNode([2, 4, 3]);
let l2 = toListNode([5, 6, 4])



console.log(addTwoListNodes(l1, l2));