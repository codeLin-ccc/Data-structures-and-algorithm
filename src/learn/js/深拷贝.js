function deepClone(obj = null) {
  let result;
  // 判断是否为对象 或为空
  if(typeof obj !== "object" || obj === null) return obj;
  // 判断是否为数组
  if(Array.isArray(obj)){
    result = []
  }else {
    result = {};
  }
  // for in 会遍历自身和继承的属性和方法
  for (const key in obj) {
    // 判断是否自身属性
    if (Object.hasOwnProperty.call(obj, key)) {
        result[key] = deepClone(obj[key])
    }
  }
  return result;  
}
function Person (name, age) {
  this.name = name
  this.age = age
  this.sayHello = function () {
    console.log('Hello');
  }
}
Person.prototype.addr = 'The Earth'
Person.prototype.getNum = function() {
  console.log(1);
}

const tom = new Person('Tom', 18, 'tomato')
const b = [1,3,{name: '1', id: 0},[1,[1,3]]]
const a  = deepClone(b)
const c = b
// console.log(c === b);

// 不太适合遍历数组
/* for (const key of b) {
    // console.log(key); // 输出每项
}
for (const key in b) {
  console.log(key); //输出0、1、2、3
} */