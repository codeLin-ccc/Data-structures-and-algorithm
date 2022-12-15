/**
 * @description interface 
 * */
{
  // 声明多个同名interface, 会合并类型
  interface A {
    age: number;
  }
  interface A {
    name: string;
  }
  interface A {
    id: number;
  }
  // let obj: A = {
  //   age: 1
  // }
}

{
  // 可选操作符？
  interface Person {
    id: number;
    name?: string;
  }
  const obj: Person = {
    id: 1,
  }
}

{
  // 任意属性
  // 后台可能返回给我们n多的属性,在不清楚 属性名和属性数量时
  interface Person {
    id: number;
    [propsName: string]: any;  // Person 中属性的类型 必须为 propsName 类型的子类型
  }
  const obj: Person = {
    id: 1,
    aaa: 'aaa',
    data: [1, 1, 3]
  }
}

{
  // 只读属性 readonly
  interface Person {
    readonly id: number;
  }
  const p: Person = {
    id: 1
  }
  p.id;
  // p.id = 1;
}

{
  // 定义函数
  interface Person {
    id: number;
    qb(): void;
  }
  const obj: Person = {
    id: 1,
    qb: () => { },
  }
}

{
  // 类型继承 extends 
  interface Person {
    id: number;
  }
  interface Person2 extends Person {
    age: number;
  }
  const obj: Person2 = {
    id: 1,
    age: 2
  }
}