// 动态类型 
// 定义函数，参数类型不明确时，让使用者告知我这里的参数类型
// 通过 num<T> 将类型传入 或 让ts 推论
{
  function num<T, k>(a: T, b: k) {
    return [a, b]
  }
  num<number, string>(1, '2')
  num<string, number>('1', 2)
}

// 泛型约束
{
  // 未约束
  function getLength1<T>(arg: T) {
    // console.log(arg.length); //类型“T”上不存在属性“length”。
  }

  // 约束为参数 必须有length属性
  interface Len {
    length: number;
  }
  function getLength2<T extends Len>(arg: T) {
    console.log(arg.length);
  }
  getLength2('222')
}

// 使用key of 约束泛型对象
{
  // function getValue1<T>(obj: T, key) {
  //   return obj[key]
  // }
  let obj = { a: 1, b: 2 }
  // getValue1(obj, 'aa')

  // 泛型和泛型约束
  // 首先定义T,并使用extends  继承object类型的子类型
  // 然后使用key of 操作符获取T的所有键，它的返回类型为联合类型
  // 最后利用extends 约束 K类型必须为 Keyof T 联合类型的子类型
  function getValue2<T, k extends keyof T>(obj: T, key: k) {
    return obj[key]
  }

  // getValue2(obj, 'aa') // K 此时为联合类型 "a" | "b"
}

// 泛型类
{
  class Sub <T>{
    attr: T[] = [];
    add(a:T): T[] {
      return [a]
    }
  }
  let s =new Sub<number>()
  s.attr = [1,2,3]
}