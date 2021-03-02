import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Scroll from './App';
import reportWebVitals from './reportWebVitals';


const  noticeList = [
  {
      key: 1,
      text: '(1)iPhone11挥泪降价1600元 iPhone12出道即巅峰?5G手机'
  },
  {
      key: 2,
      text: '(2)VR式体验奔驰博物馆重新开张 广东最惨的"88888"车牌'
  },
  {
      key: 3,
      text: '(3)4年5队的落选秀太香了 巅峰2.6帽!力压魔兽夺最佳新秀'
  },
  {
      key: 4,
      text: '(4)你好世界：寻找心中的风景 [征集]寻找中式风景禅意美'
  },
]

ReactDOM.render(
  <React.StrictMode>
    <h3>最新职位</h3>
    <Scroll  noticeList={noticeList}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
