# 基础类型

## 布尔

```typescript
let isDone: boolean = false;
```

## 数字

```typescript
let decLiteral: number = 6;
```

## 字符串

```typescript
let name: string = "str";
```

## 数组

```typescript
let list: number[] = [1, 2, 3]; // 元素类型[]
let list: Array<number> = [1, 2, 3]; // 使用数组泛型，Array<元素类型>
```

## 元组

```typescript
let x:[string, number] // 已知元素数量和类型的数组，当访问一个越界的元素，会使用联合类型替代
x = ['hello', 0] // OK
x = [0, 'hello'] // Error
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
x[6] = true; // Error, 布尔不是(string | number)类型
```

## 枚举

``` typescript
// 默认从元素编号为0开始，当指定成员数值，则后面自增+1
enum Color {Red, Green, Blue}
let c:Color = Color.Green // 1

enum Color {Red = 1, Green, Blue}
let c:Color = Color.Green // 2
// 反之通过元素编号获取
let colorName:string = Color[2]; // Green
// 或者，全部都采用手动赋值
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green; // 2
```

## Any

给不清楚类型的变量指定一个类型，不会被类型检查器检查

```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

## Void

当一个函数没有返回值时，通常会以`void`作为返回类型

```typescript
function warnUser(): void {
    console.log("This is my warning message");
}
```

当声明一个`void`类型变量，只能赋予`undefined`和`null`

```typescript
let unusable: void = undefined;
```

## Null和Undefined

默认情况下`null`和`undefined`是所有类型的子类型，就是说 `null`和`undefined`赋值给`number`类型的变量

```typescript
let u: number = undefined;
let n: null = null;
```

然而，当你指定了`--strictNullChecks`标记，`null`和`undefined`只能赋值给`void`和它们各自。

## Nerve

指永不存在的值的类型，**抛出异常**或**根本就不会有返回值**的函数

```typescript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

## Object

## 类型断言

你知道这个值的类型，可以通过类型断言来确认他的类型

```typescript
let str: any = "1,2,3";
// let strList: string[] = (<string>str).split(",");
// 或者使用 as 语法
let strList: string[] = (str as string).split(",");
console.log(strList);
```



