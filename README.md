# @mohdnajwan/bmi-calculator

![alt](https://img.shields.io/badge/npm-1.0.1-blue)

A BMI calculator that accept metric and imperial units

## Install
```javascript
$ npm install @mohdnajwan/bmi-calculator
```

## Import
```javascript
const { BMI } = require('@mohdnajwan/bmi-calculator')
```

## Usage
Metric units weight in kg and height in meter
```javascript
// BMI(weight, height)

const myBMI = BMI(52.2,1.72)
// => 17.2
```

Imperial units Weight in lbs and height in inch.
Just add 'imperial' in the parameter after height.
```javascript
// BMI(weight,height,unit)

const myBMI = BMI(114.64, 67.7, 'imperial')
// => 17.2
```

