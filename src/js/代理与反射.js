// new Proxy(目标对象，处理程序对象)

// 空代理
/* const target = {
  name: 'target'
}
const handler = {}
const proxy = new Proxy(target, handler)
// 会访问同一个值
console.log(proxy.name);
console.log(target.name);
// 给代理赋值会反映再两个对象上, 因为两个对象访问的是同一个值
proxy.name = 'xiaohong'
console.log(proxy.name);
console.log(target.name);
// 给代理赋值会反映两个对象上，因为这个赋值会转移到目标对象
proxy.id = 0
console.log(proxy.id);
console.log(target.id);

// hasOwnProperty 方法再两个地方都会应用到目标对象
console.log(proxy.hasOwnProperty('id'));
console.log(target.hasOwnProperty('id'));
// Proxy 的 prototype 是undefined 因此不能使用instanceof 操作符
// console.log(proxy instanceof Proxy);
// console.log(target instanceof Proxy);

// 严格相等可以用来区分代理和目标
console.log(target === proxy);  // false
 */

/**
 * @p 定义捕获器
 */
// 捕获器就是拦截器，在代理对这些操作传播到目标对象之前线调用捕获器函数，从而拦截并修改相应的行为

// 定义一个get（）捕获器
/* const target = {
  name: 'target'
}
const handler = {
  get(){
    return 'proxy target'
  }
}
const proxy = new Proxy(target, handler)
// proxy[property]、proxy.property 或 object.create(proxy)[property]等操作都会触发get 操作获取属性
// 只要发生在代理身上，就会触发get 捕获器
console.log(proxy.name); */

// get(目标对象, 要查询的属性, 代理对象) 参数
/* const target = {
  foo: 'bar'
}
const handler = {
  get(target, property, receiver){
    console.log(target === receiver);
    console.log(property);
    console.log(target === receiver);
    // 重建原始行为
    return target[property]
  }
}
const proxy = new Proxy(target, handler)
console.log(proxy.foo); */

// 不需要重建原始行为  可以使用全局Reflect 对象（封装了原始行为）的同名方法创建。
/* const target = {
  foo: 'bar'
}
const handler = {
  get(){
  //  return Reflect.get(...arguments)
  // 甚至更简洁
  return Reflect.get
  }
}
const proxy = new Proxy(target, handler)
 */

// 如果真要创建一个可以捕获所有方法的空代理 只需要
/* const target = {
  foo: 'bar'
}
const proxy = new Proxy(target, Reflect) */

// 反射api 为开发者准备了基础代码， 我们可以用最少的代码修改捕获的方法
// 例如 在某个属性被访问时，会对返回的值进行修饰
/* const target = {
  foo: 'bar',
  baz: 'qee'
}
const handle = {
  get(trapTarget, property, receiver){
    let decoration = ''
    if(property === 'foo') decoration = '!!!'
    return Reflect.get(...arguments) + decoration
  }
}
const proxy = new Proxy(target, handle)
console.log(proxy.baz);
console.log(proxy.foo); */

// 9.1.5 可撤销代理
// revocable 方法 支持撤销代理对象和目标对象的关联,撤销代理是不可逆的
/* const target = {
  foo: 'bar',
  baz: 'qee'
}
const handle = {
  get(trapTarget, property, receiver){
    let decoration = ''
    if(property === 'foo') decoration = '!!!'
    return Reflect.get(...arguments) + decoration
  }
}
const {proxy, revoke} = Proxy.revocable(target, handle);
console.log(target.foo);
console.log(proxy.foo);
revoke();
console.log(proxy.foo); */

