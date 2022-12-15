{
  // B 为never 类型
  type B = string & number
  let a:never;
  let b:number = 2
  // a = b
  
}

{
  function error(message: string): never {
    throw new Error(message)
  }

  function loop(message: string): never {
    while (true) {

    }
  }
}

{
  interface A {
    type: '1'
  }
  interface B {
    type: '2'

  }
  interface C {
    type: '3'
  }
  type All = A | B | C
  function type(val: All) {
    switch (val.type) {
      case '1':
        break;
      case '2':
        break;
      case '3':
        break;
      default:
        // val 所有类型判断完成，default 为never 
        // never只能作为父类型赋值

        const check:never = val
        break;
    }

  }


}