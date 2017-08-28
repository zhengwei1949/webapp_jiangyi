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


## 思考的框架
- state is mutable,props is unmutable
- event up,data down
- props can be state ,and state can be props
- if too depth ,use context 
