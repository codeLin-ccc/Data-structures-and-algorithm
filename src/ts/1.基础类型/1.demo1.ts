/*
  ts 编译
  tsc ts.ts 
  node ts.js
*/
/*
  node环境下编译
  npm install @types/node -D 
  npm install ts-node -g
*/
// 基础类型
// 1.string
{
  let str1: string = '';
  let str2: string = ``;
}

// 2.number
{
  let number: number = 0;
  let notNumber: number = NaN; // nan
  let infinityNumber: number = Infinity;  // 无穷大
  let decimal: number = 6;//十进制
  let hex: number = 0xf00d;//十六进制
  let binary: number = 0b1010;//二进制
  let octal: number = 0o744;//八进制s
}

// 3.boolean
{
  let boolean1: boolean = true;
  let boolean2: boolean = Boolean(1);
  let boolean3: Boolean = new Boolean(1);
  let boolean4: boolean = new Boolean(1).valueOf();
}

// 4.void
// void 表示没有任何返回值的函数
{
  const fn1 = (): void => {
  }
  // void 不可以分配给其他类型
  // const void1: void = '1';
}


// 5.undefined 和 null
{
  // void 和 undefined 和 null 最大的区别
  // 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 string 类型的变量：
  let undefined1: undefined = undefined;
  let null1: null = null;
  // 不可分配
  // undefined1 = '123';
  // null1 = {}
}

// 6.any 和 unknown
{
  // any
  // 声明变量没有赋值,默认为any 类型
  let any1;
  // any 类型可以任意赋值,可以对any类型进行任意操作,不需要检查类型
  any1 = 12;
  any1 = null;
  any1 = '12';
  any1.split(',')
  // !!! 使用any 的话会失去 ts 类型检测的作用

  let str: any = '1';
  let str2: number = 3
  // 使用any 不会报错
  str2 = str;
}
// unknown
{
  //unknown 可以定义任何类型的值
  let value: unknown;

  value = true;             // OK
  value = 42;               // OK
  value = "Hello World";    // OK
  value = [];               // OK
  value = {};               // OK
  value = null;             // OK
  value = undefined;        // OK
  value = Symbol("type");   // OK


  // unknown  unknown类型比any更加严格和安全,当你要使用any 的时候可以尝试使用unknown
  {
    // any 类型在对象没有这个属性的时候是不会报错的
    let obj: any = {
      a: 1
    }
    console.log(obj.b);
    let obj2: unknown = {
      a: 1,
    }
    // unknown 类型则不能调用属性和方法
    // console.log(obj2.b);
  }


  //unknown 类型不能作为子类型只能作为父类型 any可以作为父类型和子类型
  {
    //unknown 类型不能赋值给其他类型

    let names: unknown = '123'
    // let names2: string = names // 不能将类型“unknown”分配给类型“string”。
  }

  {
    // any类型是可以的
    let names: any = '123'
    let names2: string = names
  }

  {
    //unknown可赋值对象只有unknown 和 any
    let bbb: unknown = '123'
    let aaa: any = '456'
    bbb = aaa;
  }
}


/**
 * @description Object object {}
 * */
{
  // Object 包含了所有类型
  // 原型链的顶端为Object类型
  {
    let a: Object = '1';
    let a1: Object = 1;
    let a2: Object = () => 333;
    let a3: Object = [];
    let a4: Object = {};
  }

  // object 包含了引用类型
  // 可以将原始类型和引用类型筛选出来
  // 一般常用于 泛型约束 
  {
    // 不能将原始类型分配给object
    // let a: object = '1'; // 原始类型
    // let a1: object = 1; // 原始类型

    let a2: object = () => 333; // 引用类型
    let a3: object = []; // 引用类型
    let a4: object = {}; // 引用类型
  }

  {
    // 与Object 类型一样,包含所有类型
    let a: {} = '1'; // => new Object
    let a1: {} = 1;
    let a2: {} = () => 333;
    let a3: {} = [];
    let a4: {} = {};
  }
}
