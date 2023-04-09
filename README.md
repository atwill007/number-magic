# number-magic

## Docs
English | [简体中文](./docs/zh-cn/README.zh-CN.md)

## Install
```
npm install number-magic
```
or
```
pnpm install number-magic
```
or
```
yarn add number-magic
```

## Use
```js
import { comma, toFixed, percentage, idxList, randomInt, capital, precise, isNumber } from 'number-magic'

comma(1234567.123) // 1,234,567.123

toFixed(1234567.123) // 1234567.12
toFixed(123.123, 4) // 123.1230
toFixed(12345.12345, 4) // 12345.1235

percentage(0.6666, 3) // 66.600%

idxList(6, 1) // [ 1, 2, 3, 4, 5, 6 ]

randomInt(1.1, 2.1) // 2

capital(123123.12) // 拾贰万叁千壹百贰拾叁元壹角贰分

const numb = 0.1 + 0.2 // 0.30000000000000004
precise(numb) // 0.3

isNumber('hi') // false
isNumber(NaN) // false
isNumber(Math.PI) // true
isNumber(2 ** 53) // true
isNumber(2 ** 53, true) // false

// ...
// See unit tests for more
```

## You are welcome to join the project by proposing PR
