# 基于发布/订阅者模式实现的 evenbus

[English](https://github.com/xxj95719/evenBus/blob/master/README.md)

## 插件安装

```
npm install evenbus
or
yarn add evenbus
```

## 插件使用

```js
import EvenBus from "evenbus";
const evenbus = new EvenBus();

// 添加监听
evenbus.on("events", msg => {
  console.log(msg); // I am the event bus
});

// 触发监听
evenbus.emit("events", "I am the event bus"); // 可以传递任意类型参数

// remove
evenbus.remove("events"); // 移除指定监听
evenbus.remove(); // 移除所有监听
```

## 可选参数

| _Prop_       | _Type_ | _Defaults_ | _Required_ | _Description_ |
| :----------- | :----- | :--------- | :--------- | ------------- |
| maxListeners | Number | 10         | ×          | 最大监听数量  |
