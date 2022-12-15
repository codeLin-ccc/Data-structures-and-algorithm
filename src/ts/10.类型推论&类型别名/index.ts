// ts 会根据场景进行类型推论
{
  let str = '';

  let a;
}


// 类型别名
{
  type s1 = string;
  type s2 = string | number;
  type s3 = '1' | '2'
  type fn = () => string;

  let str: s3 = '1'
  let fn: fn= () => ''


}