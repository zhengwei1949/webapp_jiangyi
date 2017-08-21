/*入口文件*/
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import Hello from '../example/Hello.js'

const obj = {
    name:'小甲',
    age:34,
    sex:'女'
}

// 这是注释

ReactDOM.render(
    // 这是注释
    <div>
        {/* 这是注释 */}
        <Hello {...obj} />
    </div>,
    document.getElementById('app')
)