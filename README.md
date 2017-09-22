# webapp_jiangyi
webapp讲义
React构造方法中的bind即将handleClick函数与这个组件Component进行绑定以确保在这个处理函数中使用this时可以时刻指向这一组件。
http://www.ruanyifeng.com/blog/2015/03/react.html
React 的 JSX 使用大、小写的约定来区分本地组件的类和 HTML 标签。
React 组件的数据可以通过 componentDidMount 方法中的 Ajax 来获取，当从服务端获取数据库可以将数据存储在 state 中，再用 this.setState 方法重新渲染 UI。
http://www.oschina.net/translate/how-i-learned-to-stop-worrying-and-love-react
这里有一个小技巧，只要涉及到视图的变化，就应该考虑到state的变化，当某个方法改变了这个状态值时，整个组件就会重绘，从而达到刷新
淘宝出品的不错的组件库：https://ant.design/components/date-picker-cn/
关于路由的讲解：http://www.ruanyifeng.com/blog/2016/05/react_router.html
官方的路由教程：https://github.com/reactjs/react-router-tutorial/tree/master/


```javascript
var isProduction = function () {
  return process.env.NODE_ENV === 'production';
};
```

npm root --global可以查看npm全局安装的目录的路径


官方对jsx语法的解释：
```
We strongly believe that components are the right way to separate concerns rather than “templates” and “display logic.” We think that markup and the code that generates it are intimately tied together. Additionally, display logic is often very complex and using template languages to express it becomes cumbersome.

```

React 团队坚信一个组件的正确用途是 “separate concerns”，而不是前端模板或者展示逻辑。我们认为前端模板和组件代码是紧密相连的。另外，模板语言经常让展示的逻辑变得更复杂。

虚拟dom不同于真正的dom，它是一个JavaScript对象。当状态发生变化的时候虚拟dom会进行一个diff判断/运算；然后判断哪些dom是需要被替换的而不是全部重绘，所以性能会比dom操作高很多。

![](http://images2015.cnblogs.com/blog/605230/201706/605230-20170603132438274-1646294214.png)

你必须谨慎对待 JSX 回调函数中的 this，类的方法默认是不会绑定 this 的。如果你忘记绑定 this.handleClick 并把它传入 onClick, 当你调用这个函数的时候 this 的值会是 undefined。





react-router V4 被一分为三: react-router-dom(for web)、react-router-native(for native)、react-router(core)。但如果仅在浏览器中使用的话，一般只需要用到react-router-dom就可以了。


const foo = ({ hello: { world: bar } }) => ({ bar }) 这是什么意思？？

![](https://pic3.zhimg.com/dfee38183aed0b1058da9d6317a4e976_b.png)


propTypes, defaultProps不要懒的去写，别人通过你的propTypes很容易理解组件，也容易debug

关于用state还是props原则上是顶层组件才有state而子组件都是接收props，有些少数的情况比如一个UI的零时数据，只对自己内部有影响而对子组件，父组件没有任何影响的，同时又可能需要渲染那么可以放到state里，尽量用props实现单向数据流，props传递层数太多可以用context替换

React.js

React.js 是 React 的核心库，在应用中必须先加载核心库。

ReactDOM.js

ReactDOM.js 是 React 的 DOM 渲染器，React 将核心库和渲染器分离开了，为了在 web 页面中显示开发的组件，需要调用 ReactDOM.render 方法， 第一个参数是 React 组件，第二个参数为 HTMLElement。


![](https://pic4.zhimg.com/cbdba5d7d12c05e379cbac608f16e6d3_b.png)

![](https://pic4.zhimg.com/808767a118831a948be8e36329fad30b_b.png)

![](https://pic3.zhimg.com/a91da7a9714bf46c8ff46f53881db696_r.png)


https://zhuanlan.zhihu.com/p/21246418

讲解受控组件 非受控组件 https://zhuanlan.zhihu.com/p/21246468


![](https://pic2.zhimg.com/51d186cddc18d929e5329c1d6cd206a1_b.png)

https://github.com/leanklass/leanreact/tree/component

https://zhuanlan.zhihu.com/p/21246327

![](https://unbug.gitbooks.io/react-native-training/content/QQ20160627-0.png)


## props vs state
- Use props to pass data and settings through the component tree.
- Never modify this.props inside of a component; consider props immutable.
- Use props to for event handlers to communicate with child components.
- Use state for storing simple view state like wether or not drop-down options are visible.
- Never modify this.state directly, use this.setstate instead.

## flex布局
http://the-echoplex.net/flexyboxes/

## 如何学习jsx
http://magic.reactjs.net/htmltojsx.htm
https://www.npmjs.com/package/htmltojsx
https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&circleciRepo=&code_lz=G4QwTgBAMglg1gUwEIFcAuaD2A7CBeCAJQRAGM0A6UsEtBAYQBsQBnFgCgG8AoCP_gXwDmCNAElsMNDBCMAymhB0AXADMU2cjBzsAlD0GHBNNCjC5OjeAgAma2SwQBfXkYFOANK7d8AFiGwbRgYrUjg1DS0dBGAEbDR9bx8BNF8YFgpHNAUlBC4rRDsAQlT0zMU6CgLbJ10AbiS3T0ajGkCEMAjNaR1E5MNQSDoADzR8CFKMlgqEKusbAH4Acmql5SWNVYb-41EzXHYWnb4AHgAHCBwmGDC8TkmKf0Dg67CnAD4ATUwUCHuEUZOCZpDKkUJwCaYSFCITBE4AejO7yOPl0KPcKNq3G4QA&debug=false&evaluate=false&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&showSidebar=true&targets=&version=6.26.0


## 思考的框架
- state is mutable,props is unmutable
- event up,data down
- props can be state ,and state can be props
- if too depth ,use context 

## react native的playground
https://snack.expo.io/
https://repl.it/languages/react_native

## webpack学习诀窍
- entry
- loaders
- plugins
- output
- devServer

## 学会es6语法
https://github.com/kdchang/reactjs101/tree/master/Appendix01

## 注意
只有在constructor当中才可以写this.state = ,其他地方只能用this.setState
如果用了constructor,一定要用super


人人学习react视频
链接: https://pan.baidu.com/s/1pKCScMR 密码: ft3g

## plugin汇总
http://webpack.github.io/docs/list-of-plugins.html#hotmodulereplacementplugin

The publicPath specifies the public URL address of the output files when referenced in a browser. For loaders that embed <script> or <link> tags or reference assets like images, publicPath is used as the href or url() to the file when it’s different than their location on disk (as specified by path)


Windows paths
webpack expects absolute paths for many config options. __dirname + "/app/folder" is wrong, because windows uses \ as path separator. This breaks some stuff.

Use the correct separators. I.e. path.resolve(__dirname, "app/folder") or path.join(__dirname, "app", "folder").

![](http://jellybellydev.github.io/webpack-presentation/img/do-you-want-to-know-more.gif)


对devtool的理解：eval-source-map 适合开发，source-map 适合线上环境

defaultValue 属性而不是 value,htmlFor而不是for,className而不是class

context举例 https://doc.react-china.org/react/docs/context.html
![](https://segmentfault.com/img/remote/1460000006831823?w=278&h=300)


## 预习资料
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="reactContainer"></div>
    <script src="./common/react.js"></script>
    <script src="./common/react-dom.js"></script>
    <script>
        var HelloComponent =React.createClass({
            render:function(){
                return React.createElement('h1',null,'Hello world');
            }
        });
 
        ReactDOM.render(
            React.createElement(HelloComponent,null),
            document.getElementById('reactContainer')
        )
    </script>
</body>
</html>
```
---> 太啰嗦了 ---> jsx --> 虽然看起来比较不习惯，但是代码更好看懂了 
jsx--> 单向数据流 --> 

如何理解单向数据流 
　　在React中，数据的流向是单向的——从父节点传递到子节点，因为组件是简单而且易于把握的，他们只需从父节点获取props渲染即可，如果顶层组件的某个prop改变饿了，React会递归的向下便利整棵组件树，重新渲染所有使用这个属性
  
  
 ## 理解生命周期小案例
 ```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>生命周期案例</title>
    <script src="./common/react.js"></script>
    <script src="./common/react-dom.js"></script>
    <script src="http://cdn.bootcss.com/babel-core/5.8.38/browser.min.js"></script>
</head>
<body>
    <div id="demo"></div>
    <script type="text/babel">
      var Hello = React.createClass({
          getInitialState:function(){
              return {
                  opacity:1.0
              }
          },
          componentDidMount: function () {
            setInterval(function () {
                var opacity = this.state.opacity;
                opacity -= .05;
                if (opacity < 0.1) {
                    opacity = 1.0;
                }
                this.setState({
                    opacity: opacity
                });
                }.bind(this), 100);
          },

          render:function(){
              return (
                  <div style={{opacity:this.state.opacity}}>
                       <h2>Hello {this.props.name}</h2> 
                  </div>
              )
          }
      });
      ReactDOM.render(
          <Hello name="world"/>,
          document.getElementById('demo')
      )
    </script>
</body>
</html>
```


```ljsx
const title = <h1>React Learning</h1>
```

![](https://yubolun.com/wp-content/uploads/2017/08/React-Lifecycle.png)

![](https://pic3.zhimg.com/v2-97606d1cd5f055887a9735f414dbe002_b.jpg)

## 为什么要把css用模块化的方式引入
- 去除写死的代码：当一个JS组件不再被代码引入到项目中，对应的CSS也不会被引入进来。而最终打包后的结果也只会包含那些被引用的部分。
- CSS模块：由于全局CSS命名空间的存在，使得改变CSS后是否有副作用不得而知。CSS模块默认情况下将CSS设成本地，并显示你在Javascript中可以引用的唯一类名。

想象我们的界面是一段动画，React可以让我们把动画切分成一帧一帧的片段，我们只需要关注其中某个片段，以及片段有哪些变化，至于怎么变化，过程如何，React可以自动帮我们处理

![](http://p0.qhimg.com/t01f27a564f7933eda2.png)

对cors的理解：http://www.ruanyifeng.com/blog/2016/04/cors.html


componentDidMount
常用来在组件加载完毕后 网络请求数据是使用
componentWillUnmount
组件死的时候调用，一般用来清除监听之类的
componentWillReceiveProps
传入新的props是调用

![](https://segmentfault.com/img/bVUaxs?w=380&h=670)

# 对于 webpack 3
npm install --save-dev extract-text-webpack-plugin
# 对于 webpack 2
npm install --save-dev extract-text-webpack-plugin@2.1.2
# 对于 webpack 1
npm install --save-dev extract-text-webpack-plugin@1.0.1


// 1. 不会刷新浏览器
$ webpack-dev-server
//2. 刷新浏览器
$ webpack-dev-server --inline
//3. 重新加载改变的部分，HRM失败则刷新页面
$ webpack-dev-server  --inline --hot


像 Gulp 这样的任务运行工具可以操作很多不同的预处理器和编译器，但是在所有情况下，它都需要接收一个源码输入并将其处理成一个编译好的输出。然而，它是在不关心整个系统的情况下逐个去处理的。这就是开发者的负担了：检查任务运行工具有无遗漏的地方，并为所有改动的部分找到正确的方式，将它们在生产环境上协调一致。

总而言之，如果你曾经挣扎于下面这些情况中的其中之一：

不小心将一些不需要的样式表或者 JS 库引入生产环境，导致项目体积变大
遇到作用域问题 - 不管是来自 CSS 还是 JavaScript
不停寻找一个好的系统好让你可以在 JavaScript 代码里使用 Node 或 Bower 的模块，或者依赖一系列疯狂的后端配置来正确地使用那些模块
需要优化资源分发机制却又担心会破坏掉某些东西

http://www.jianshu.com/p/5a76bda88d13
http://www.jianshu.com/p/2f632cbdf6ad
http://www.jianshu.com/p/dcb28b582318

一般来说，使用flexDirection、alignItems和 justifyContent三个样式属性就已经能满足大多数布局需求

只要记住一句话就可以了：UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。
你可能会问，如果一个组件既有 UI 又有业务逻辑，那怎么办？回答是，将它拆分成下面的结构：外面是一个容器组件，里面包了一个UI 组件。前者负责与外部的通信，将数据传给后者，由后者渲染出视图。


观察virtual dom的性能：http://requirebin.com/?gist=5492847b9a9025e64bab

把css转换成jsx语法 https://staxmanade.com/CssToReact/
