// 三斜线指令是包含单个XML标签的单行注释。 注释的内容会做为编译器指令使用。
// 三斜线指令仅可放在包含它的文件的最顶端。 一个三斜线指令的前面只能出现单行或多行注释，这包括其它的三斜线指令。
//  如果它们出现在一个语句或声明之后，那么它们会被当做普通的单行注释，并且不具有特殊的涵义。
// /// <reference path="..." />指令是三斜线指令中最常见的一种。 它用于声明文件间的 依赖。
// 三斜线引用告诉编译器在编译过程中要引入的额外的文件。
// 你也可以把它理解能import，它可以告诉编译器在编译过程中要引入的额外的文件
///<reference path="index2.ts" />
///<reference path="index3.ts" />
var index1;
(function (index1) {
    index1.a = 1;
})(index1 || (index1 = {}));
console.log(index1.b);
console.log(index1.c);
