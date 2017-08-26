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
