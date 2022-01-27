# evenbus

[中文版](https://github.com/asasugar/evenBus/blob/master/README.zh-CN.md)

## plugin setup

```
npm install evenbus
or
yarn add evenbus
```

## plugin use

```js
import EvenBus from "evenbus";
const evenbus = new EvenBus();

// AddListener
evenbus.on("events", msg => {
  console.log(msg); // I am the event bus
});

// Emit
evenbus.emit("events", "I am the event bus"); // Parameter type is all types.

// remove
evenbus.remove("events"); // Remove specified listener
evenbus.remove(); // Remove all listener
```

## Props type

| _Prop_       | _Type_ | _Defaults_ | _Required_ | _Description_              |
| :----------- | :----- | :--------- | :--------- | -------------------------- |
| maxListeners | Number | 10         | ×          | Maximum number of monitors |
