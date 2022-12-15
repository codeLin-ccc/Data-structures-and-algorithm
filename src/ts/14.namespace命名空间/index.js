// 避免全局污染，
// ts 和 es2015一样，任何包含import 和export 的文件都被当成一个模块，
// 相反，如果没有带有import 或者export声明，那么它的内容被视为全局可见
// index2.ts也声明了 a， 会起冲突
// 解决，通过export 将内容导出
// 或通过namespace
// namespace Index {
//   export const a = 1 
// } 
// console.log(Index.a);
var Index;
(function (Index) {
    Index.a = 1;
    Index.b = 2;
})(Index || (Index = {}));
