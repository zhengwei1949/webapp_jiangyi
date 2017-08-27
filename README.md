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
