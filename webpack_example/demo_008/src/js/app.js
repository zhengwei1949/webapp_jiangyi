/*入口文件*/
import React,{Component} from 'react'
import ReactDOM from 'react-dom'
console.log(1)
import Hello from '../example/Hello.js'
ReactDOM.render(
    <div>
        <Hello/>
    </div>,
    document.getElementById('app')
)