// 定义class
class Person {
  name: string;
  age: number;
  sub: boolean;
  constructor(name: string, age: number, sub: boolean) {
    this.name = name;
    this.age = age;
    this.sub = sub;
  }
}
new Person('LIN', 123, true)

// 修饰符
// public 内部外部都可以访问
// private 内部可以访问
// protected 内部和子类可以访问
class Person1 {
  public name: string;
  private age: number;
  protected sub: boolean;
  static a: string = '1111';
  constructor(name: string, age: number, sub: boolean) {
    this.name = name;
    this.age = age;
    this.sub = sub;
  }
  static run() {
    this.a
  }
}
const p1 = new Person1('LIN', 123, true);
// 外部只能访问name
p1.name;

class Man extends Person1 {
  constructor() {
    super('lin', 33, true)
    // 子类访问不到age
    // this.age
  }
}

// implements 约束类型
{
  interface Action {
    run(type: boolean): boolean;
  }

  class Person {
     name: string;
     constructor (name: string) {
      this.name = name;
     }
  }

  class Man extends Person implements Action {
    run (a: boolean):boolean {
      return a
    }
  }
}
