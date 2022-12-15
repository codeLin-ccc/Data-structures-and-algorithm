//  数字枚举
//  枚举值默认为0
//  赋值后，后续枚举值递增
{
  enum Color {
    // red,  // 0
    // green,  // 1
    // blue,   // 2

    // red = 1,  // 1
    // green,  // 2
    // blue,   // 3

    red = 3,  // 3
    green,  // 4
    blue = 23,   // 23
    black,   // 24

  }
  // console.log(Color.red);
  // console.log(Color.green);
  // console.log(Color.blue);
  // console.log(Color.black);
}

// 字符串枚举
{
  enum Color {
    red = 'red',  // 0
    green = 'green',  // 1
    blue = 'blue',   // 2
  }
}

// 异构枚举
// 混合字符串和数字成员
{
  enum Color {
    yes = 'yes',
    no = 0,
  }
}

// const 枚举
// 会将其编译为常量
{
  const enum Types {
    success,
    fail,
    pending
  }
}

// 反向映射
// Types[value] => key
{
  enum Types {
    success,
    fail,
    pending = 'pe'
  }
  
  const key = Types[0]
  const value: number = Types.success
  console.log(`key: ${key}, value: ${value}`); // key: success, value: 0

  // 字符串不支持 反向映射
  console.log(Types['pending']);  // pe

}


// 枚举和联合类型 ？
{
  type Color1 = 'red' | 'green' | 'blue'
  enum Color2 {
    red = 'red',  // 0
    green = 'green',  // 1
    blue = 'blue',   // 2
  }
  let a: Color1;
  a = 'blue';
  // console.log(a);
  // console.log(Color2.blue);
}

