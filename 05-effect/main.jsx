import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 设置移动端的适配
// 除以几视口的宽度就是多少rem，现在我们设置视口的总宽度为750rem
document.documentElement.style.fontSize = 100 / 750 + 'vw'

window.onload = function () {
  /iphone|ipod|ipad/i.test(navigator.appVersion) &&
    document.addEventListener(
      'blur',
      (event) => {
        // 当页面没出现滚动条时才执行，因为有滚动条时，不会出现这问题
        // input textarea 标签才执行，因为 a 等标签也会触发 blur 事件
        if (
          document.documentElement.offsetHeight <= document.documentElement.clientHeight &&
          ['input', 'textarea'].includes(event.target.localName)
        ) {
          document.body.scrollIntoView(); // 回顶部
        }
      },
      true,
    );
};
window.scrollTo(0, 0);
window.scrollTo(0, Math.max(document.body.clientHeight, document.documentElement.clientHeight));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
