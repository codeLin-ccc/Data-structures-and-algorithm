/**
 * @description 类型断言 联合类型 交叉类型 
 * */
// 联合类型
{
  type Users = string | number | null;
}

// 交叉类型
{
  interface Users {
    id: number;
    age: number;
  }
  interface Sex {
    sex: number
  }
  function fn(data: Users & Sex): Users & Sex {
    return data;
  }
  fn({
    id: 1,
    age: 2,
    sex: 1
  })
}

// 类型断言
{
  interface Users {
    id: number;
    age: number;
  }
  interface Sex {
    sex: number
  }
  // 断言data 类型
  function fn(data: Users | Sex): any {
    // return (<Users>data).id;
    return (data as Users).id;
  }

  function fn1(str: any): boolean {
    // return (<Users>data).id;
    return str as boolean;
  }
  console.log(fn1(1));   // 1
  
  
  //any可以访问任意值
  // window.a = 123;
  // (window as any).a = 123;
}

