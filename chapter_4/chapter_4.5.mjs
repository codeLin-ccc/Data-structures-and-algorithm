import Stack from "./chapter_4.3.mjs";
// 在Node.js 中使用原生的ES2015导入功能。
// 在node 命名后加 --experimental-modules 来执行代码
// const stack = new Stack();
// console.log(stack);

// 十进制转换为二进制
function decimalToBinary(decNumber) {
  const dec = new Stack();
  let a = decNumber;
  let b = 0;
  let result = '';
  while (a > 0) {
    b = a % 2;
    dec.push(b);
    a = Math.floor(a / 2);
  };
  while (!dec.isEmpty()) {
    result += dec.pop().toString();
  }

  // for (let i = 0; i <= dec.size(); i++) {
  //   // result += dec.pop(); // 此处改变原数组的长度,该方法麻烦，需转换思维
  //   console.log(222);
  // }
  return result;
}
// console.log(decimalToBinary(233));

// 进制转换算法
// 将十进制转换成基数为 2~36 的任意进制
function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let rem;
  let baseString = '';
  if(!(base >=2 && base <= 36)){
    return '';
  }
  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }
  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()]; //获取对应的字符串
  }
  return baseString;
}
console.log(baseConverter(100345, 35));