/**
 * @description array 
 * */
// 声明数组类型
{
  let arr1: string[] = ['1', '2', '3'];
  let arr2: number[] = [1, 2, 3];
  let arr3: boolean[];
  let arr4: string | number[];
}

// 泛型方式声明 数组
{
  let arr1: Array<string> = ['1', '2', '3'];
  let arr2: Array<number> = [1, 2, 3];
  let arr3: Array<boolean> = [true];
  let arr4: Array<string | number | null> = [null];
}

// 多维数组声明
{
  let arr1: number[][] = [[1], [2]]
  let arr2: Array<Array<number>> = [[1], [2]]
}

// 伪数组
{
  function Arr(...args: any) {
    console.log(arguments); // [Arguments] { '0': 1, '1': 3, '2': 'ID' }
  }
  Arr(1, 3, 'ID')
}

// 用接口表示数组
{
  interface Arr {
    [index: number]: number;
  }
  const arr1: Arr = [1, 2, 3];
  // const arr2: Arr = { 1:1, 2:1, 3:1};
  console.log(arr1);
}