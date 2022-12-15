declare const express: ()=> any

// @types/express 文件, package.json 的types 指定 d.ts 声明文件
// 有些老的库没有写声明文件，可以 npm install -D @types/express 或 declare 自己声明一个类型文件