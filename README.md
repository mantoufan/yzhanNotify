# yzhanNotify
![npm](https://img.shields.io/npm/v/yzhannotify)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/yzhannotify)
![npm](https://img.shields.io/npm/dt/yzhannotify)
[![GitHub license](https://img.shields.io/github/license/mantoufan/yzhanNotify)](https://github.com/mantoufan/yzhanNotify/blob/main/LICENSE)
![ie6+](https://img.shields.io/badge/IE-6%2B-skyblue)  
Element and Global Notifications / Toasts with Pure / Vanilla / Native JavaScript    
用原生 JavaScript 在视窗或元素的指定位置发送通知和提示 Compatible with IE6+ 支持八方向

## DEMO
[DEMO](//mantoufan.github.io/yzhanNotify/) 

![DEMO Picture](https://files.catbox.moe/s80yx9.jpg)

## Start
### Node.js
```javascript
npm i yzhannotify
import YZhanNotify from 'yzhannotify'
```
### Browser
```html
<script src="https://cdn.jsdelivr.net/npm/yzhannotify/docs/yzhannotify.umd.cjs"></scirpt>
```

## API
```javascript
YZhanNotify({
  msg: 'hello world',
  position: 'top center', // All optional Values can be found in DEMO
  duration: '2500', // ms
  className: '', // Class of notify container 
  ele: document.getElementById('main'), // If ele is null, notify will be displayed globally
})
```