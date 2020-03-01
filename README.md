# number-magic

## Install
```
npm install number-magic
```
or
```
yarn add number-magic
```

## Use
```js
import {comma, toFixed, percentage, idxList, randomInt, capital} from 'number-magic'

comma(1234567.123) // 1,234,567.123
toFixed(1234567.123) // 1234567.12
percentage(0.6666, 3) // 66.600%
dxList(6, 1) // [ 1, 2, 3, 4, 5, 6 ]
randomInt(1.1, 2.1) // 2
capital(123123.12) // 拾贰万叁千壹百贰拾叁元壹角贰分
// ...
// 更多使用方法可查看单元测试
```
