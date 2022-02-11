// 使用队列和双端队列来解决问题
import Queue from './chapter_5.1.mjs';
import Deque from './chapter_5.2.mjs';

// 循环队列---击鼓传花游戏
function hotPotato(elementList, num) {
  const queue = new Queue();
  const eliminatedList = []; // eliminated - 被淘汰
  for (let i = 0; i < elementList.length; i++) {
    queue.enqueue(elementList[i]);
  };
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }
  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(), // 弹出最后一个元素为获胜者
  }
}
// const names = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// const result = hotPotato(names, 6);
// result.eliminated.forEach(item => {
//   console.log(`${item} 被淘汰了`);
// })
// console.log(`获胜者是 ${result.winner}`);


function palindromeChecker(aString) {
  if(aString === undefined || aString === null || 
    (aString !== null && aString.length === 0)){
      return false;
  };
  let isEqual = true; // 是否构成回文
  let firstChar, lowerChar; // 声明队列双端
  // 对参数 进行小写转换，处理空格
  const lowerString = aString.toLocaleLowerCase().split(' ').join('');
  const deque = new Deque();
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }
  // while (deque.size() > 0 && isEqual) { 这里的判断条件 size 为1 时，已经不用判断了

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lowerChar = deque.removeBack();
    console.log(firstChar, lowerChar, 1111);
    if(firstChar !== lowerChar){
      isEqual = false;
    }
  }
  return isEqual;
}
console.log(palindromeChecker('ade da'))