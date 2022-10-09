// const a = {}
// const b = []

// console.log(b.prototype);

// 1、原型链继承
/* function SuperType() {
  this.colors = ['red', 'blue', 'green']
}
function SubType() {}
SubType.prototype = new SuperType();

let instance1 = new SubType();
let instance2 = new SubType();

console.log(instance1.colors);
// 缺点：color属性共享
instance1.colors.push('yellow')
console.log(instance1.colors);
console.log(instance2.colors); */

// 2、盗用构造函数继承
// function SuperType() {
//   this.colors = ['red', 'blue', 'green'];
//   this.addfnc= function(){
//     console.log(1);
//   }
// }
// function SubType() {
//   SuperType.call(this)
// }
// // 这相当于在啊新的 subType 对象上运行了 SuperType 的初始化代码。结果就是每个实例都有自己的colors属性
// let instance1 = new SubType();
// let instance2 = new SubType();

// instance1.addfnc();
// console.log(instance1.colors);
// // 缺点：
// instance1.colors.push('yellow')
// console.log(instance1.colors);
// console.log(instance2.colors);


//3、 组合继承
// function SuperType(name) {
//   this.name = name
//   this.id = 11
//   this.colors = ['red', 'blue', 'green']
// }

// SuperType.prototype.sayName = function () {
//   console.log(this.name);
// }

// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age;
// }
// SubType.prototype.sayAge = function () {
//   console.log(this.age);
// }

// // 这相当于在啊新的 subType 对象上运行了 SuperType 的初始化代码。结果就是每个实例都有自己的colors属性
// let instance1 = new SubType('xiao11', 123);
// let instance2 = new SubType('xiao22', 10);

// // console.log(instance1.age);
// // 缺点：
// instance1.colors.push('yellow')
// console.log(instance1.sayAge());

// console.log(instance2.sayAge());

// 4、原型式继承
// 和原型继承类似，通过一个临时构造函数继承传入的对象，再返回临时构造函数的实例

/* function object(o) {
  function F() {
    // 扩展属性
    this.id = 0
  };
  F.prototype = o;
  return new F();
}
// 本质上，object 是对传入的对象执行了一次浅复制
let person = {
  name: 'xiaoping',
  friends: ['shelby', 'count', 'van']
}
let instance1 = object(person);
let instance2 = object(person);

instance1.friends.push('xiaojing')

console.log(instance1.id);
// 引用类型的值会保持
console.log(instance1.friends);
console.log(instance2.friends);
 */

// 5、寄生式继承
function object(o) {
  function F() {};
  F.prototype = o;
  return new F();
}
function createAnother(original) {
  const clone = object(original);
  clone.sayHi = () => {
    console.log(111);
  }
  return clone;
}
let person = {
  name: 'xiaoping',
  friends: ['shelby', 'count', 'van']
} 

const anotherPerson = createAnother(person)
anotherPerson.sayHi()
console.log(anotherPerson.name);

// 组合寄生式继承
function inheritPrototype(subType, SuperType){
  let prototype = object(SuperType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}