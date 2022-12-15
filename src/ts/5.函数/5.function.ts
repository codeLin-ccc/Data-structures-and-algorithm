{
  const fn = (id: number, name: string): string => {
    return id + name;
  }

  const fn1 = (id: number, name: string = 'aaa'): string => {
    return id + name;
  }
}

// 通过interface 约束类型
{
  interface Users {
    id: number;
    name: string;
  }
  const fn = (user: Users): string => {
    return user.name;
  }
}

// 函数重载
{
  // 函数重载是指方法名字相同,而参数不同,返回值可以相同也可以不同
  // 如果参数类型不同，则操作函数参数类型应设置为any
  // 参数数量不同，你可以将不同的参数设置为可选

  // 这两个为重载函数
  function fn(param: number): void;
  function fn(param: string, param2: number): void;
  // 这个为执行函数
  function fn(param: any, param2?: any): any { 
    console.log(param, param2);
    
  };
  fn(1); // 走第一个 
  fn('1', 2); // 走第二个

  // const fn1 = (param: number): void => {
  // }
  // const fn1 = (param: string, param2: number): void => {
  // }
  // const fn1 = (param: number): any => {
  //   return param
  // }
}