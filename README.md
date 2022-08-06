# yzhanNotify
Only 0.78 kB (gzip) ES3 IE 6-8 Support 
Element and Global Notifications / Toasts with Pure / Vanilla / Native JavaScript.  
用原生 JavaScript 在视窗或元素的指定位置发送通知和提示。  

## DEMO
[DEMO](//mantoufan.github.io/yzhannotify/) 

## Start
### Node.js
```shell
npm i yzhannotify
import YZhanNotify from 'yzhandanmu'
```
### Browser
```html
<script src="https://cdn.jsdelivr.net/npm/yzhandanmu/docs/yzhannotify.umd.cjs"></scirpt>
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