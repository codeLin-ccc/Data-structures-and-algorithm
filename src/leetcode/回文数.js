/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  const xArr = x.toString().split('')
  while(xArr.length  > 1) {
      let frist = xArr.shift()
      let pop = xArr.pop()    
      if(frist !== pop) {
          return false
      }
  }
  return true
};  

var isPalindrome2 = function(x) {
  return x.toString() === x.toString().split('').reverse().join('');
};