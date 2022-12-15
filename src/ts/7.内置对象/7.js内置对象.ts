const boolean: Boolean = new Boolean();
console.log(boolean);

const number: Number = new Number();
console.log(number);

const string: String = new String();
console.log(string);

const regexp: RegExp = /\w\d\s/;

const data: Date = new Date();

const error: Error = new Error('错误');

// html tag 映射表
let element: HTMLElementTagNameMap;

const div:HTMLDivElement | null = document.querySelector('#box');
// 事件type
div?.addEventListener('click', (e:MouseEvent) => {
})

// 定义Promise

function promise(num: number): Promise<number>{
  // 为promise<T> 指定类型
  return new Promise<number>((resolve, reject)=> {
    resolve(num);
  })
}
promise(1)
// 类型定义文件在 typescript/src/lib 
