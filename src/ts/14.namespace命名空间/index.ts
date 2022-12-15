// 避免全局污染，
// ts 和 es2015一样，任何包含import 和export 的文件都被当成一个模块，
// 相反，如果没有带有import 或者export声明，那么它的内容被视为全局可见
// index2.ts也声明了 a， 会起冲突

// 解决，通过export 将内容导出

// 或通过namespace 解决

// 命名空间中通过export将想要暴露的部分导出
// 如果不用export 导出是无法读取其值的
namespace Index {
  export const a = 1 
} 
// 重名的namespace 可以合并为一个
namespace Index {
  export const b =2
}
console.log(Index.a);


// 嵌套命名空间
namespace AA {
  export namespace BB {
    export const c = 3
  }
}

// 抽离命名空间
export namespace CC {
  export const c = 1
}
