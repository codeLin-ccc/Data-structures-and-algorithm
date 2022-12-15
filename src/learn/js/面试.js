// 1.对下面数组进行 排重 ，并按 升序 排序，代码尽量简练:
const array = ['2', 'b', '9', 'a', '7', '3', '4', 'b', '6', '4'];
function handle(arr) {
  const newArr = arr.map(item => {
    return item.charCodeAt();
  })
  for (let i = 0; i < newArr.length - 1; i++) {
     for (let j = 0; j < newArr.length -1 -i; j++) {
        if(newArr[j] > newArr[j +1]) {
          let a = newArr[j];
          newArr[j] = newArr[j+1];
          newArr[j+1] = a;
        }
     }
  }
  console.log(newArr);
  return newArr
}
// handle(array)

url="https://alibaba.com?a=1&b=2&c=3#/abc/def?a=2&b=3&c=4"
// 要求：只识别queryParam，排除 hash 的干扰
function getParamFromURL(url = '', key) {
  let str = url.split('#')
  str.shift()
  str.map((item)=> {
    return item.split('?')[1].split('&').map(item => {
      const [strKey, value] = item.split('=')
      if(strKey === key){
        console.log(value);
        return value
      }
    })
  })
}
// getParamFromURL(url, 'a')


var reg = /\d+/
var str1 = '123'
var str2 = 'abc'
// . ： 匹配非换行的任意字符
// \ ： 转译符号，把有意义的 符号 转换成没有意义的 字符，把没有意义的 字符 转换成有意义的 符号
// \s ： 匹配空白字符（空格/制表符/...）
// \S ： 匹配非空白字符
// \d ： 匹配数字
// \D ： 匹配非数字
// \w ： 匹配数字字母下划线
// \W ： 匹配非数字字母下划线

function getUrlFromWords(text = '') {
  return text.match(/(http(s)?)\:\/\/detail\.tmall\.com\//g) || text.match(/(http(s)?)\:\/\/\.tmall\.com\//g);
}
getUrlFromWords("Apple says: 今天我淘到了一个宝贝，你也看一下感觉很适合你 https://detail.tmall.com/item.html?id=577359445691&spm=a1z10.10649-b-s.0.0.335e225cy94dcW ，种草的话，下单吧！") 
