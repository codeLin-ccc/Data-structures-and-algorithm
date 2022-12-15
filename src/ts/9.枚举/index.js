//  数字枚举
//  枚举值默认为0
//  赋值后，后续枚举值递增
{
    var Color = void 0;
    (function (Color) {
        // red,  // 0
        // green,  // 1
        // blue,   // 2
        // red = 1,  // 1
        // green,  // 2
        // blue,   // 3
        Color[Color["red"] = 3] = "red";
        Color[Color["green"] = 4] = "green";
        Color[Color["blue"] = 23] = "blue";
        Color[Color["black"] = 24] = "black";
    })(Color || (Color = {}));
    // console.log(Color.red);
    // console.log(Color.green);
    // console.log(Color.blue);
    // console.log(Color.black);
}
// 字符串枚举
{
    var Color = void 0;
    (function (Color) {
        Color["red"] = "red";
        Color["green"] = "green";
        Color["blue"] = "blue";
    })(Color || (Color = {}));
}
// 异构枚举
// 混合字符串和数字成员
{
    var Color = void 0;
    (function (Color) {
        Color["yes"] = "yes";
        Color[Color["no"] = 0] = "no";
    })(Color || (Color = {}));
}
// const 枚举
// 会将其编译为常量
{
}
// 反向映射
// Types[value] => key
{
    var Types = void 0;
    (function (Types) {
        Types[Types["success"] = 0] = "success";
        Types[Types["fail"] = 1] = "fail";
        Types["pending"] = "pending";
    })(Types || (Types = {}));
    var success = Types.success;
    console.log(success); // 0
    console.log(Types[0]); // success
}
// 枚举和联合类型 ？
{
    var Color2 = void 0;
    (function (Color2) {
        Color2["red"] = "red";
        Color2["green"] = "green";
        Color2["blue"] = "blue";
    })(Color2 || (Color2 = {}));
    var a = void 0;
    a = 'blue';
    // console.log(a);
    // console.log(Color2.blue);
}
