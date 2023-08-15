---
icon: pen-to-square
order: 2
date: 2023-08-10
category:
- 问题记录
tag:
- Typescript
dir:
- collapsible : true

# 禁用配置
article: true
---

# Typescript在日常工作的使用
<!-- more -->
# Typescript在日常工作的使用（面向新人）
## 前言
  相信很多人在第一次接触ts时都和我一样，不是看文档被其中的各种专业名词整的头昏脑涨、就是看视频被长达8小时的时长和毫无平仄的语调催眠到昏昏欲睡......都是泪啊
  
  作为一个刚入职的菜鸟新人，完全理清且弄懂ts显然需要花费大量的时间成本（要知道当下环境，时间拖的越长，工作越难找），想要快速上手ts的项目？看我就对了！！

  注：此篇文章仅对刚入门ts的新人，希望能对大家有一定的帮助

## 目录
1. 基本知识
2. 常见问题与应用
3. ts在Vue中的问题
4. ts在React中的问题

## 基本知识
在第一次上手ts的项目时，我们肯定是需要知道一些ts的知识的，在这里我只罗列一些和我们日常开发中有关的基础知识。
### 1.1 变量
在ts和js中

js：定义一个变量，该变量可以被赋值成任何一个数据类型

ts：定义一个变量，该变量只能被指定数据类型所赋值
```typescript
// js变量赋值
let a
a = 1
a = 'hello'
```
```typescript
// ts变量赋值
let a: number
a = 1
a = 'hello' // 报错：不能将string分配给number
```

### 1.2 数据类型
js：number，string，boolean，undefined，null，object，symbol，bigInt

ts：兼容所有的js类型
#### null, undefined
这里把null和undefined单独拎出来，需要特别注意，
'null'类型的数据只能赋值'null'
'undefined'类型的数据只能赋值'undefined'
```typescript
let a: undefined
let b: null
a = 1 // 不能将类型1分配给类型"undefined"。
b = 'hello' // 报错：不能将类型"hello"分配给类型"undefined"。
```
#### any, void, never
any：变量的数据类型可以是任意数据类型

void：没有返回值的函数，其返回值类型为 void；void 类型的变量，只能赋予 undefined 和 null

never：函数抛出异常或者是一个无线循环的函数，函数的返回值就可以定义为never类型
```typescript
// any
let a: any
a = 1
a = 'hello'
```
```typescript
// void
// 没有返回值的函数，其返回值类型为 void
function fn1(): void {
    console.log("hello world");
}
// 申明为 void 类型的变量，只能赋予 undefined 和 null
let a: void = undefined 
let b: void = null
```
#### 数组
js：不限制数组的数据类型

ts：数组中的数据必须是统一类
```typescript
// js数组
let arr = []
arr = [1, '', {}]
```
```typescript
// ts数组
let arr:number[] = [] 
arr = [1, '', {}] // 报错
```
ts创建的数组有两种写法
```typescript
// 常规写法
let arr: number[] = []
// 泛型写法
let arr: Array<number> = []
```
#### 元组
元组是必须指定长度和每一个元素数据类型的特殊数组
```typescript
// 包含多种类型的数组
let arr: [string, number, boolean] = ['hello', 1, false]
// 偷懒写法（不建议）
let arr: any[] = ['hello', 1, false]
```
#### 枚举 enum
枚举里每一项的值会根据前一项的值自动累加
```typescript
// 常规写法
enum num {
    a = 1,
    b, // num.b = 2
    c, // num.c = 3
}
```
### 1.3 函数
函数没啥好说的，找常写就行
```typescript
// 无返回值
function fn1():void {
  console.log('我没有返回值')
}
// 有返回值
function fn2():number {
  console.log('我有返回值,我反回的结果是number类型的')
  return 1
}
```
### 1.4 类
类的作用是批量创建对象（一般在游戏开发中用的较多）
```typescript
// 定义一个动物类，该动物有名字和年龄
class Animal {
  _name: string
  _age: number
  // 构造函数
	constructor(name: string, age: number) {
		this._name = name
		this._age = age
	}
  // 成员方法
  _say(){
    console.log('我会叫');
  }
}
// 创建一个两岁的猫猫
let cat = new Animal('猫',2)
// 猫猫的动作
cat._say() // 我会叫
```
### 1.5 interface 和 type
一般用于定义一个对象类型的时候我们可以使用interface和type，按原文的话来说，几乎所有 interface 的功能在 中 type 都可用，关键区别在于不能重新打开类型来添加新属性，而接口始终是可扩展的。
interface：接口

type：类型
```typescript
// interface
interface Animal {
  name: string
  age: number
}
let cat: Animal = {
  name: '猫猫',
  age: 2
}
```
```typescript
// type
type Animal = {
  name: string
  age: number
}
let cat: Animal = {
  name: '猫猫',
  age: 2
}
```

## 常见问题与应用
### 2.1 如何创建一个可能是'string'或'number'的变量？
```typescript
let a: string | number
a = 'hello'
a = 1
```
### 2.2 如何创建一个数据为指定对象的数组？
```typescript
interface ObjectModel {
  a: string
  b: number
}
let arr: ObjectModel[] // 数据的每一项必须为{a: string, b: number}
```
### 2.3 如何让将象中的某个属性设为非必要属性？
```typescript
interface ObjectModel {
  a: string
  b?: number // b为非必要属性
}
let arr: ObjectModel[] // 数据的每一项必须为{a: string, b: number}或{a: string}
```
### 2.4 如何在不改变原对象模型的基础上扩展对象属性？
```typescript
// interface 使用 extends 扩展
interface ObjectModel {
  a: string
  b?: number // b为非必要属性
}
interface ChildModel extends ObjectModel {
  c: []
}
// type 使用 & 进行扩展
type ChildModel = ObjectModel & {
  c: []
}
let object: ChildModel // object:{a: string, b: number, c: []}
```
当然声明的对象结构的 interface 和定义类型的关键字的 type 可以相互转化
```typescript
// interface 转为 type
interface AModel {
  a: string
  b: number
}
type BModel = typeof AModel
```
```typescript
// type 转为 interface
type AModel = {
  a: string
  b: number
}
interface BModel extends AModel {}
```
### 2.5 什么时候使用interface，什么时候使用type？
仅个人使用习惯！！！

interface：声明对象类型，检查接口类型

type：处理联合类型，扩展工具类型
```typescript
// 因为inteface不能声明的对象类型赋初值，所以将之作接口类型检查
interface ParamsModel {
  id: string
  name: string
  passWord: number
}
const api = function(params:ParamsModel):Promise<any[]> {
  return new Promise()
} // 该函数只接受传入一个类型为ParamsModel的对象入参
```
```typescript
// type主要作用于工具类型、联合数据类型
type SearchParamsModel = {
  id: string
  name: string
  passWord: number
}
let formValue: SearchParamsModel
```
### 2.6 如何获取值可能为undefined的变量？
```typescript
// 在可能为undefined的方法、变量前使用？运算符
let a: any
a?.name
```
### 2.7 如何在不使用any的情况下，为对象动态分配属性
<!-- 定义一个特殊的变量类型 -->
```typescript
// interface
interface DynamicObjectModel {
  [key: string]: any
}
// type
type DynamicObjectModel<T> = {
  [P in keyof T]: T[P];
}
```
### 2.8 如何给函数的入参限制指定属性？
这句话说的可能有点歧义...主要意思就是入参为一个对象，对象里限制属性，但又不想用interface或type额外声明一个对象类型
```typescript
// 函数fn要求传入参数必须为{a}且值为number类型
function fn({a}: {a: number}): void {}
```
### 2.9 如何给函数的入参添加默认值
```typescript
// 函数fn要求传入参数必须为{a}且值为number类型
function fn(a?: number = 1): void {
  console.log(a)
}
fn()  // 1
fn(2) // 2 
```
### 2.10 使用 object[key] 时报错
要解决这类问题有三种方法

1. 配置tsconfig.json文件
2. 使用类型断言
3. 使用？修饰符（不推荐）
```typescript
// 1. 配置tsconfig.json文件
{
    "compilerOptions": {
        // 开启配置项suppressImplicitAnyIndexErrors
        "suppressImplicitAnyIndexErrors": true
    }
}
```
```typescript
// 2. 使用类型断言
const obj: { a: number } = {
  a: 10,
};
const key: string = 'a';
const value: number = obj[key as keyof typeof obj];
```
```typescript
// 3. 使用？修饰符（不推荐）
const obj: { a?: number } = {
  a: 10,
};
const key: string = 'a';
const value: number | undefined = obj[key]?.toFixed(2);
```

## ts在Vue中的问题
以下仅为个人在初次使用vue3 + ts 时所遇到的涉及ts的基础问题，
### 3.1 子组件接受父组件传参，并对其设置初始值
```typescript
interface PageProps {
    name: string;
    age: number;
}

const props = withDefaults(defineProps<PageProps>(), {
  name: 'abc',
  age: 2
})
```
### 3.2 Element-Plus的form组件，使用resetFields或者validate方法时，提示没有该属性
```typescript
// 使用InstanceType <typeof ElForm> 作为范型约束
<el-form :model="form" :ref="setformRef" label-width="100px"/>

import { ElForm } from 'element-plus';
import { ref } from 'vue';

const formRef = ref<InstanceType<typeof ElForm>>()
const setFormRef = (el: InstanceType<typeof ElForm>){
  formRef.value = el
}

const resetForm = () => {
  formRef.value?.resetFields();
};
const confirm = () => {
  formRef.value?.validate((valid) => {});
};
```

## ts在React中的问题
以下仅为个人初次使用 React18 + ts 时所遇到的涉及ts的基础问题
### 4.1 React函数式写法
```typescript
interface PageProps {
    name: string;
    age: number;
}

const Page:React.FC = (props) => Hello {props.name};
// 推荐使用第二种
const Page = (props:PageProps) => Hello {props.name};
```
### 4.2 子组件接受父组件传参，并对其设置初值
```typescript
// 子组件
interface ChildPageProps {
  id: string
}

const ChildPage: React.FC<ChildPageProps> = (props) => {}
export default ChildPage

ChildPage.defaultProps = {
  id: 'abc'
}
```
### 4.3 使用 import 引入非 JS 模块报错，而使用 require 则没有问题
给非Js的模块添加申明
```typescript
// 新建一个文件
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'

declare module '*.css'
declare module '*.less'
declare module '*.sass'
```
