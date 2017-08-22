/*入口文件*/
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import Hello from '../example//Hello.js'
import Life from '../example/Life.js'
import ClickEvent from '../example/ClickEvent.js'
import FindDom from '../example/FindDom.jsx'
import ListenEvent from '../example/ListenEvent.jsx'
import PropsCheck from '../example/PropsCheck.js'
import ControlForm from '../example/ControlForm.jsx'

const obj = {
    name:'小甲',
    age:34,
    sex:'女'
}

// 这是注释

ReactDOM.render(
    // 这是注释
    <div>
       <ControlForm />
    </div>,
    document.getElementById('app')
)