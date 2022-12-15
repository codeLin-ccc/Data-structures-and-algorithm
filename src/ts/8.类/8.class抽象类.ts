// 抽象类 abstract
abstract class A {
  name: string
  constructor (name: string) {
    this.name = name;

  }
  abstract getName():string;
  // 如果不用abstract 定义函数或属性，派生类是不需要实现，可以直接使用的
  setName():string {
    return this.name
  }
}
// 抽象类无法实例化

class B extends A {
  constructor(name: string) {
    super(name)
  };
  getName(): string {
    return this.name
  }
} 

const b = new B('lin');
console.log(b.getName());
console.log(b.setName());



