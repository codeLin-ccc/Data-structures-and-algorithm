var longestCommonPrefix = function (strs) {
  let re = ''
  if (!strs.length) return re;
  for (let i = 0; i < strs[0].length; i++) { //第一个str
    for (let j = 1; j < strs.length; j++) { // 对比次数
      if (strs[j][i] !== strs[0][i]) return re
    }
    re += strs[0][i]
  }
  return re
};
console.log( longestCommonPrefix(["flower", "flower", "flower", "flower"]));