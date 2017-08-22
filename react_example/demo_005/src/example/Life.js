//ES6语法定义的组件生命周期
import React,{Component} from 'react';

export default class Life extends Component {
    constructor(props){
        super(props)
        console.log('构造函数')
        //初始化了我们的state,这是被推荐的写法
        this.state = {
            props1:'初始化state'
        }
    }

    static defaultProps = {
        autoPlay:false,
        maxLoops:10
    }

    //组件将要被渲染到真实的dom节点中
    componentWillMount(){
        console.log('componentWillMount');
    }

    //组件已经插入到真实的dom节点中
    componentDidMount(){
        console.log('componentWillMount');
    }
    //组件是否要被重新渲染
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
    //组件将要被重新渲染
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    //组件将要接受新的属性
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    click1 = ()=>{
        console.log('点击了单击事件');
        this.setState({
            props1:"改变了state的值"
        })
        console.log('点击了单击事件结束')
    }
    render(){
        console.log('render');
        return (
            <div>
                <h1 onClick={this.click1}>{this.state.props1}</h1>
            </div>
        )
    }
}
//ES5定义组件的写法
// import React,{Component} from 'react'

// var Life = React.createClass({
//     //getDefaultProps,getInitialState在ES6的写法中不被支持
//     //初始化props属性方法
//     getDefaultProps(){
//         console.log('getDefaultProps');
//     },
//     //初始化我们的state属性
//     getInitialState(){
//         console.log('getInitialState');
//         return {
//             props1:"初始化state值"
//         }
//     },
//     //组件将要被渲染到真实的dom节点中
//     componentWillMount(){
//         console.log('componentWillMount');
//     },
//     //组件已经插入到真实的dom节点中
//     componentDidMount(){
//         console.log('componentDidMount');
//     },
//     //组件是否要被重新渲染
//     shouldComponentUpdate(){
//         //这个方法比较特殊，如果你要重写，你要在这里手动的进行一下state值是否发生改变的判断，因为已经把之前的方法覆盖
//         console.log('shouldComponentUpdate');
//         return true;
//     },
//     //组件将要被重新渲染
//     componentWillUpdate(){
//         console.log('componentWillUpdate');
//     },
//     //组件已经被重新渲染
//     componentDidUpdate(){
//         console.log('componentDidUpdate');
//     },
//     //组件将要接受到新属性
//     componentWillReceiveProps(){
//         console.log('componentWillReceiveProps');
//     },
//     click1(){
//         console.log('点击事件');
//         this.setState({
//             props1:'改变state的值'
//         })
//         console.log('2');
//         console.log(this.state.props1);
//     },
//     render(){
//         console.log('render');
//         return (
//             <div>
//                 <h1 onClick={this.click1}>{this.state.props1}</h1>
//             </div>
//         )
//     }
// })

// module.exports = Life;