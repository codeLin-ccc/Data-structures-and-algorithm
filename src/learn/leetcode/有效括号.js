// 执行用时：60 ms, 在所有 JavaScript 提交中击败了80.31%的用户
// 内存消耗：41.5 MB, 在所有 JavaScript 提交中击败了41.98%的用户
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  let map = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  let arr = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
      let str = arr.pop();
      if (str !== map[s[i]]) {
        return false
      }
    } else {
      arr.push(s[i])
    }
  }
  return !arr.length;
};

// 与上面差不多
var isValid1 = function (s) {
  if (s.length % 2 === 1) return false;
  let arr = []
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        arr.push(')')
        break;
      case '[':
        arr.push(']')
        break;
      case '{':
        arr.push('}')
        break;
      default:
        if (s[i] !== arr.pop()) {
          return false
        }
        break;
    }
  }
  return !arr.length;
};


// 较慢
// 执行用时：100 ms , 在所有 JavaScript 提交中击败了5.36 % 的用户
// 内存消耗：45 MB, 在所有 JavaScript 提交中击败了 9.34 %的用户
var isValid2 = function (s) {
  if (s.length % 2 === 1) return false;
  const map = new Map();
  map.set(')', '(')
  map.set('}', '{')
  map.set(']', '[')
  let left = []
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      console.log(map.has(s[i]));
      if (left.pop() !== map.get(s[i])) {
        return false
      }
    } else {
      left.push(s[i])
    }
  }
  return !left.length;
};

console.log(isValid1("{[]}"));