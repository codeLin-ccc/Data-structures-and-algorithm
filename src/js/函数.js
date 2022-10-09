// 递归

// 计算阶乘
function fn(num) {
  if(num <= 1) {
    return 1;
  } else {
    // return num * fn(num - 1)
    // arguments.callee就是一个指向正在执行的函数的指针,因此可以在函数内部调用 可以确保
    return num * arguments.callee(num -1)
  }
}
// console.log(fn(5));

// let anotherFactorial = fn;
// fn = null;
// console.log(anotherFactorial(5));

//  斐波那契数列
function fib(num) {
  if(num < 2 ) return num;
  return fib(num - 1) + fib(num - 2)
}
// console.log(fib(1000));
// 进行尾调用优化

/* // 基础框架 
function fib1(num) {
  return fibImpl(0,1,num)
}
// 执行递归
function fibImpl(a, b, n) {
  if(n ===0 ) return a;
  return fibImpl(b, a+b, n-1)
}
 console.log(fib1(1000)); */

// 闭包
// 指的是那些引用了另一个函数作用域中变量的函数
/* function fn(params) {
  return function () {
    console.log(params);
  }
} */
// 保持对外部变量的引用,在执行完外部函数后,作用域并不能销毁,因为匿名函数包的作用域链中包含对它的引用


// 10.14.1 this 对象

/* let = identity = 'The Windows'
let object = {
  identity: 'object',
  getIdentity() {
    return function () {
      return this.identity
    }
  }
} */
// console.log(object.getIdentity()()); // the windows

let = identity = 'The Windows'
let object = {
  identity: 'object',
  getIdentity() {
    // 保存this指针 如果向访问包含作用域中的argments 对象, 也需要将其保存到闭包能访问的另一个变量中
    const that = this;
    return function () {
      return that.identity
    }
  }
}
console.log(object.getIdentity()()); // object

// 闭包导致内存泄漏
function assignHandler() {
    let element = document.querySelector('someElement')
    // 匿名函数引用这assignHandle 的活动对象, 阻止了element 的引用计数清零,只要这个匿名函数在,element 的引用技术就至少等于1,
    // 也就是内存不会被回收
    element.onclick = () => console.log(element.id);
}
// 
function assignHandler() {
  let element = document.querySelector('someElement')
  // 保存id,即使这样也还是保存element 的引用
  let id = element.id
  element.onclick = () => console.log(id);
  // 在使用完后 将element 设置 为null,解除对element 的引用,
}

// 闭包保存私有变量

function myObject() {
  // 私有变量和私有函数
  let privateVariable = 10;
  function privateFunction(params) {
    return false;
  }

  // 特权方法
  this.publicMethod = function () {
    privateVariable ++;
    return privateFunction();
  }
}
