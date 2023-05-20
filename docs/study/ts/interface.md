# 接口

只要传入的对象满足必要条件，那么它就是被允许的

## 可选属性

```typescript
interface Config {
    color?: string;
    width?: number;
}

function createConfig(config: Config): { color: string; width: number } {
    let defaultColor = { color: "red", width: 100 };
    if (config.color) defaultColor.color = config.color;
    if (config.width) defaultColor.width = config.width;
    return defaultColor;
}

console.log(createConfig({ color: "blue" })); // { color: 'blue', width: 100 }
```



## 只读属性

可以在属性名前用 `readonly`来指定只读属性

```typescript
interface Point {
    readonly x: number;
    readonly y: number;
}

// 通过赋值一个对象字面量来构造一个Point。 赋值后，x和y再也不能被改变
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```



`ReadonlyArray<T>`和`Array<T>` 相似，但是创建数组后不能修改

```typescript
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```

可通过类型断言重写

```typescript
a = ro as number[];
```

注意：下面的这方式可以修改数组，可以看出是只对第一层有效果

```typescript
interface obj {
    num: number;
}
let arr: ReadonlyArray<obj> = [{ num: 1 }];
arr[0].num = 2;
console.log(arr[0].num);
```



## `readonly` vs `const`

做为变量使用的话用 `const`，若做为属性则使用`readonly`



## 函数类型

```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
}
```



## 可索引的类型

支持**字符串**和**数字**两种索引签名

```typescript
interface StringArray {
  [index: number]: string;
}
```

