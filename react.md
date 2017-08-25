# 前置知识
- 正则表达式基础知识
- es6语法
- node.js中的模块化思想
- npm使用
- base64和图片的互相转换 http://imgbase64.duoshitong.com/


学习flex的在线教程：http://www.webhek.com/post/flexbox-playground.html

# 注意事项
- 大小写一定要注意，包括文件名大小写

# day01
## 01-移动App开发视频-混合app开发相关知识介绍-20:41
- 原生app --> 适合复杂、对体验要求高的app(可以获得手机较高的权限，用于获取用户和手机的深度信息，比如用户连接过的wifi,Mac地址，手机装过的app,各种手机里的文件等...,其他的类型的app像webapp,混合app比如要整一个摄像头实时识别的功能，要在摄像头取景界面定制一些文字功能就没办法做，只能用原生的ios,android来做)
- react Native(react native不能归为原生，原生一般指的是android,ios写的app如何理解 --> react native写好之后，可以翻译成ios,android的代码)
    + https://facebook.github.io/react-native/showcase.html

### 如何确定是webview中嵌套的网页还是原生的控件写的?
找到你手机的设置(只有android才可以测出来)--->开发者选项---->显示布局边界  选择开启后再去你要查看的app看整体布局边界就可以知道，如果是web app那么应该就是一个webview去加载网页，只有屏幕边才有红色线，如果是native app那么每个按钮，文字，图片都会红色的线显示这个控件的布局情况


![](http://7fvanf.com1.z0.glb.clouddn.com/17-8-21/29259951.jpg)

![](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503334257281&di=c144af2f590e0125cc80db9ed6a88acb&imgtype=0&src=http%3A%2F%2Fwww.2cto.com%2Fuploadfile%2FCollfiles%2F20160405%2F2016040509214744.jpg)

- webapp --> 只适合特别简单的app 类如：使用angular.js开发spa然后嵌入到ios的webview当中,体验不是很好，只适用于简单的app
    + http://app.ft.com/
    + http://m.sspapp.cn/
- 混合app
    + ionic --> http://showcase.ionicframework.com/apps/top
    + apiCloud
    + AppCan
Hybrid APP 指的是半原生半 Web 的混合类App。需要下载安装，看上去类似 Native App，但只有很少的 UI Web View，访问的内容是 Web 。
![](https://segmentfault.com/img/bVp1XV)
![](https://segmentfault.com/img/bVp1XY)

### 如何选择
- 每年的热门技术不一样，选择标准 --> 相关职位数量
- 拉钩网上搜索职位 --> 只有react + react native工作机会最多，其他的几乎没啥工作机会

## 02-移动App开发视频-webapp介绍和快速开始-14:16

### webpack理解
今的很多网页其实可以看做是功能丰富的应用，它们拥有着复杂的JavaScript代码和一大堆依赖包。为了简化开发的复杂度，前端社区涌现出了很多好的实践方法

a:模块化，让我们可以把复杂的程序细化为小的文件;

b:类似于TypeScript这种在JavaScript基础上拓展的开发语言：使我们能够实现目前版本的JavaScript不能直接使用的特性，并且之后还能能装换为JavaScript文件使浏览器可以识别；

c:scss，less等CSS预处理器

.........

这些改进确实大大的提高了我们的开发效率，但是利用它们开发的文件往往需要进行额外的处理才能让浏览器识别,而手动处理又是非常反锁的，这就为WebPack类的工具的出现提供了需求。

### 使用范围
    + vue + webpack
    + react + webpack
### 使用
1. 全局安装 `npm install -g webpack -g`
2. 创建演示文件夹(demo_001)
```
├─dist
├─node_modules
|- src
|--- js
|-----app.js
|--package.json
|--README.md
|--webpack.develop.config.js
|--webpack.publish.config.js
```
3. 安装本地webpack `npm install --save-dev webpack`
4. 书写webpack.develop.config.js中配置代码

```javascript
var path = require('path');
module.exports = {
    entry:path.resolve(__dirname,'src/js/app.js'),//入口文件
    output:{//输出到哪里,path指明文件夹，filename指明输出文件名
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
}
```

5. 在app.js当中随便写点js代码
6. 在命令行中执行`webpack --config webpack.develop.config.js`

### 这样操作的问题
1. 在命令行里面输入太麻烦了,每次要输入一堆字母
2. 每次修改了app.js,都需要我们手动的再输入一次命令进行编译

## 03-移动App开发-webpack配置文件改造-21:36(demo_002)
- 把命令写在package.json中的scripts属性当中
- 配置好package.json后，执行`npm run develop`
- 实现监视的效果 --> 安装webpack-dev-server `npm install webpack-dev-server --save-dev` + `npm install -g webpack-dev-server`
- 修改package.json文件: `webpack-dev-server --config webpack.develop.config.js --devtool eval --progress --colors --hot --content-base src`
    + webpack-dev-server --> 让我们的代码以服务器的模式运行
    + --colors 有颜色的输出,当项目逐渐变大，webpack 的编译时间会变长，可以通过参数让编译的输出内容带有进度和颜色。
    + --progress 显示进度
    + --hot 热加载
    + --content-base --> 以src为根目录开启服务器 
    + webpack-dev-server构建的代码在内存当中
    +　--devtool eval eval和source-map都是webpack中devtool的配置选项， eval模式是使用eval将webpack中每个模块包裹，然后在模块末尾添加模块来源//# souceURL， 依靠souceURL找到原始代码的位置。包含eval关键字的配置项并不单独产生.map文件（eval模式有点特殊， 它和其他模式不一样的地方是它依靠sourceURL来定位原始代码， 而其他所有选项都使用.map文件的方式来定位）。包含source-map关键字的配置项都会产生一个.map文件，该文件保存有原始代码与运行代码的映射关系， 浏览器可以通过它找到原始代码的位置。（注：包含inline关键字的配置项也会产生.map文件，但是这个map文件是经过base64编码作为DataURI嵌入），举个栗子：eval-source-map是eval和source-map的组合，可知使用eavl语句包括模块，也产生了.map文件。webpack将.map文件作为DataURI替换eval模式中末尾的//# souceURL。按照我自己的理解， eval和.map文件都是sourcemap实现的不同方式，虽然大部分sourcemap的实现是通过产生.map文件， 但并不表示只能通过.map文件实现。

用webstorm的注意了，因为他是自动保存的，所以可能识别的比较慢，你需要手动的ctrl+s一下

## 04-移动App开发-babel-loader的使用-20:05(demo_003)
-loaders(加载器) --> webpack像一个全能型的翻译专家，你不管在你的文件中写什么类型的代码(js,css,jsx,less,sass),都可以识别出来并最终转换成对应可以执行的代码
- babel-loader --> 帮我们把es6、jsx转换成es5

```
npm install babel-loader --save-dev
npm install babel-core babel-preset-es2015 babel-preset-react --save-dev
npm install react react-dom --save
```
- 这里大家要理解的是：我们安装的webpack版本不是1.x的，所以1.x的语法了解即可，除非降级成1.x的，否则会有一堆的bug

## 05-移动App开发-style和css和sass加载器的使用-19:26
`npm install css-loader style-loader  --save-dev`
`npm install sass-loader --save-dev`
`npm install node-sass --save-dev`

！用来定义loader的串联关系

### node-sass极有可能安装不了(尝试着翻墙安装或者使用cnpm)
https://segmentfault.com/q/1010000004378378
https://segmentfault.com/a/1190000005921721


## 06-移动App开发-url加载器的使用-15:47(demo_005)
一般限制小图片转 base64 可以用 url-loader，其他情况都用 file-loader。

## 07-移动App开发-webpack的发布策略-12:14(demo_005)

--> 分离(demo_006,demo007)

## 08-移动App开发-webpack常用插件(上)-18:15
- clean-webpack-plugin --> `npm install --save-dev clean-webpack-plugin`
- html-webpack-plugin --> `npm install --save-dev html-webpack-plugin`
- UglifyJsPlugin(内置) --> 压缩混淆js
- CommonsChunkPlugin(内置) --> 分离代码

## 08-移动App开发-webpack常用插件(上)-23:25(demo_008)
- extract-text-webpack-plugin --> `npm install --save-dev extract-text-webpack-plugin`
- definePlugin配置整个开发环境变量
搜索这样的字眼 --> 把所有非production下执行的代码全部删除了
```
"production"!==t.env.NODE_ENV&
```
- open-browser-webpack-plugin --> `npm install --save-dev open-browser-webpack-plugin`

## 安装create-react-native-app
1. 注意：确保自己的npm版本低于5(`npm install -g npm@4`)
2. `npm install -g  create-react-native-app`
3. `create-react-native-app my-app`
4. `cd my-app`
5. `npm install`
6. `npm start`（这个过程可能比较慢，有可能要等10分钟，如果成功应该会出现一个二维码)
7. 在应用市场找一个叫expo的app,安装下来 --> scan QR code,如果不出意外(不要)，则会发现app可以在手机上显示了
8. 如果想放到网上供别人看，可以下载xde，安装好之后，注册登录(相关文档https://docs.expo.io/versions/latest/guides/building-standalone-apps.html)
9. 在xde当中打开当前项目 --> publish到Expo.io上面进行查看

### 最简单的体验react native的方式 -->　https://snack.expo.io/

# day02
## 01-移动App开发-react的四个核心内容介绍-17:33(这块等后面学完了再回头看，了解即可，没有写代码看了也会忘记)
### 特点
- 一个js的库
    + 抛弃了MVC，只负责v，轻量级
- 专注于视图部分的构建
- 顺应了web开发组件的趋势：将UI上相对独立的小模块封装成组件，然后再组装成大的组件

理解：
React.js的作用：帮助我们将界面分成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套，就成了我们的页面。

最简单的组件：
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
  
  
  <div id="container">
      <!-- This element's contents will be replaced with your component. -->
  </div>
  <script src="https://a.alipayobjects.com/??es5-shim/4.0.5/es5-shim.js,es5-shim/4.0.5/es5-sham.js,html5shiv/3.7.2/src/html5shiv.js,react/0.13.3/react.js,react/0.13.3/JSXTransformer.js"></script>  
  <script type="text/jsx">
    var Hello = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});
 
React.render(<Hello name="World" />, document.getElementById('container'));
  </script>
</body>
</html>
```


![](https://mc.qcloudimg.com/static/img/cd3730f5809ead4914f09cf6692ea3ca/image.jpg)

![](http://7fvanf.com1.z0.glb.clouddn.com/17-8-21/96829612.jpg)

![](http://7fvanf.com1.z0.glb.clouddn.com/17-8-21/2867110.jpg)


```
FilterableProductTable 整个视图 (orange)
    SearchBar 搜索组件(blue)
    ProductTable 产品列表组件(green)
        ProductCategoryRow 产品分类标题组件(青绿色)
        ProductRow 产品组件(red)
        ProductCategoryRow 产品分类标题组件(青绿色)
        ProductRow 产品组件(red)
```

```javascript
class ProductCategoryRow extends React.Component {
  render() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
}

class ProductRow extends React.Component {
  render() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    console.log(this.props.inStockOnly)
    this.props.products.forEach((product) => {
      if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }
  
  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }
  
  handleInStockInputChange(e) {
    this.props.onInStockInput(e.target.checked);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockInputChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInStockInput = this.handleInStockInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockInput(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleInStockInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);

```


## 应用案例 (react.js主要适合用来制作)
- https://shiji.douban.com/
- http://m.maizuo.com

## react四个概念
- virtual DOM 
    + js不直接和DOM打交道，而是和虚拟DOM打交道，这样，以后把DOM换成ios,android对应的界面UI也是可以的，实现写一份代码，可以开发出各个平台的代码
    ![](http://7fvanf.com1.z0.glb.clouddn.com/17-8-23/84217367.jpg)
    + 采用了diff算法(这块后面会讲的)

    ![](http://7fvanf.com1.z0.glb.clouddn.com/17-8-21/81283142.jpg)
    ![](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503334257281&di=a4056dd298153e51a48540d16d7be92d&imgtype=0&src=http%3A%2F%2Fmc.qcloudimg.com%2Fstatic%2Fimg%2F7e32f95b1620df34a9a77b7a6534f9b5%2Fimage.jpg)
    ![](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503334257261&di=a7277054be3b5f2d882cb81585ea7cd0&imgtype=0&src=http%3A%2F%2Ffile.quweiwu.com%2Fnews%2F20150409102554737.jpg)
    ![](https://mc.qcloudimg.com/static/img/f5f136d703ee9b6b858323815ad23b44/image.jpg)

```javascript
//如果用代码来理解virtual DOM
{
  tag: 'div',
  attrs: { className: 'box', id: 'content'},
  children: [
    {
      tag: 'div',
      arrts: { className: 'title' },
      children: ['Hello']
    },
    {
      tag: 'button',
      attrs: null,
      children: ['Click']
    }
  ]
}
```

- 组件化开发
    + 自定义标签 --> <Hello>标签
        1. https://codepen.io/zhengwei/pen/ZJxVvZ
    + 高内聚的资源 --> 组件和组件之间无不干扰
    + 独立的作用域 --> 每个组件有自己独立的作用域
    + 规范化的接口 --> 用别人规定好的就能出效果
    + 组件化开发的特点
        1. 可组合
        2. 可重用



- jsx --> 允许js和html混合 --> 遇到以<开头，就以html进行解析，遇到{，就是js进行解析
- 单向数据流 --> vue中的问题:多个组件共同依赖某个数据，一旦这个数据在某个组件中改变了，不太方便对其他组件进行同步，比较麻烦,数据管理不够清晰(这块了解即可，后面写代码会知道的)


## 02-移动App开发-react中jsx语法详细介绍-15:55
### 视图相关概念
- props
- state
    + 关于state和props的区别
        1. state相当于angular中的$scope，一般可进行改变，一般往往和界面UI有关(花心)
        2. props相当于angular封装自定义组件当中的scope,需要外界在用的时候传入值，一般值不会改变，类似定义了一个函数，传参进去(专情)
    + 如果还不懂怎么办? --> 打开自己的qq
        1. state --> 隐身模式、在线模式、离线模式、夜间模式、白天模式
        2. props --> 每个人登录自己的账号之后，拥有的好友是不一样的

![](https://mc.qcloudimg.com/static/img/a98e990392fc38ef80bc69b3ef67edae/image.jpg)

    + 还是不懂
        1. 人 --> 组件
        2. 每天吃的饭 --> props
        3. 人在睡觉、运动 --> state 
- event --> onchange --> onChange

### 谷歌的react dev tools插件
![](http://7fvanf.com1.z0.glb.clouddn.com/17-8-21/35925469.jpg)

### jsx语法
#### 支持的标签
```
accept acceptCharset accessKey action allowFullScreen allowTransparency alt
async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
charSet checked cite classID className colSpan cols content contentEditable
contextMenu controls coords crossOrigin data dateTime default defer dir
disabled download draggable encType form formAction formEncType formMethod
formNoValidate formTarget frameBorder headers height hidden high href hrefLang
htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label
lang list loop low manifest marginHeight marginWidth max maxLength media
mediaGroup method min minLength multiple muted name noValidate nonce open
optimum pattern placeholder poster preload profile radioGroup readOnly rel
required reversed role rowSpan rows sandbox scope scoped scrolling seamless
selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step
style summary tabIndex target title type useMap value width wmode wrap
```

JSX是React的核心组成部分，它使用XML标记的方式去直接声明界面，界面组件之间可以互相嵌套。但是JSX给人的第一印象却是相当“丑陋”。当下面这样的例子被第一次展示的时候，甚至很多人称之为“巨大的退步”：

```javascript
var React = require('React');
var message =
  <div class="hello" onClick={someFunc}>
    <span>Hello World</span>
  </div>;
React.renderComponent(message, document.body);
```

将HTML直接嵌入到JavaScript代码中看上去确实是一件足够疯狂的事情。人们花了多年时间总结出的界面和业务逻辑相互分离的“最佳实践”就这么被彻底打破。那么React为何要如此另类？

模板出现的初衷是让非开发人员也能对界面做一定的修改。但这个初衷在当前Web程序里已完全不适用，每个模板背后的代码逻辑严重依赖模板中的内容和DOM结构，两者是紧密耦合的。即使做到文件位置的分离，实际上两者还是一体的，并且为了两者之间的协作而不得不引入很多机制和概念。以Angularjs的首页示例代码为例：


```html
<ul class="unstyled">
  <li ng-repeat="todo in todoList.todos">
    <input type="checkbox" ng-model="todo.done">
    <span class="done-{{todo.done}}">{{todo.text}}</span>
  </li>
</ul>
```

尽管我们很容易看懂这一小段模板的含义，但你却无法开始写这样的代码，因为你需要学习这一整套语法。比如说，你得知道有ng-repeat这样的标记的准确含义，其中的”todo in todoList.todos”看上去是repeat语法的一部分，或许还有其它语法存在；可以看到有{{todo.text}}这样的数据绑定，那么如果要对这段文本格式化（加一个formatter）该怎么做；另外，ng-model背后又需要什么样的数据结构？

现在来看React怎么写这段逻辑：

```javascript
render: function () {
  var lis = this.todoList.todos.map(function (todo) {
    return  (
      <li>
        <input type="checkbox" checked={todo.done}>
        <span className="done-{todo.done}">{todo.text}</span>
      </li>);
  });
  return (
    <ul class="unstyled">
      {lis}
    </ul>
  );
}
```
可以看到，JSX中除了另类的HTML标记之外，并没有引入其它任何新的概念（事实上HTML标记也可以完全用JavaScript去写）。Angular中的repeat在这里被一个简单的数组方法map所替代。在这里你可以利用熟悉的JavaScript语法去定义界面，在你的思维过程中其实已经不需要存在模板的概念，需要考虑的仅仅是如何用代码构建整个界面。这种自然而直观的方式直接降低了React的学习门槛并且让代码更容易理解。



```jsx
//变量可以通过{变量}来嵌入
var x = 'http://www.alipay.com';
var y = <a href= {x} target="_blank">alipay.com</a>;
React.render(y, document.getElementById('container'));
```


#### 属性扩展
```jsx
/*入口文件*/
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import Hello from '../example/Hello.js'

ReactDOM.render(
    <div>
        <Hello name="小甲" age={23} sex="男" />
    </div>,
    document.getElementById('app')
)
```

可以写成

```jsx
import React,{Component} from 'react'
import ReactDOM from 'react-dom'

import Hello from '../example/Hello.js'

const obj = {
    name:'小甲',
    age:34,
    sex:'女'
}

ReactDOM.render(
    <div>
        <Hello {...obj} />
    </div>,
    document.getElementById('app')
)
```

#### 自闭合标签
- 如果中间有东西，用双标签，否则用单标签

```jsx
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
```

## 03-移动App开发-react中生命周期函数-19:58

![](http://img.blog.csdn.net/20161026155856764)

![](http://7fvanf.com1.z0.glb.clouddn.com/17-8-21/36117107.jpg)

![](https://github.com/kdchang/reactjs101/raw/master/Ch04/images/react-lifecycle.png)

![](https://mc.qcloudimg.com/static/img/dba5e6cddce25b078213d9083e2902bf/image.jpg)

![](https://mc.qcloudimg.com/static/img/a58e42614d9321107f7a57b14529a9f7/image.jpg)

### 组件的生命周期
- Mounting:已插入真实的DOM
    + componentWillMount
    + componentDidMount
- Updating:正在被重新渲染
    + componentWillUpdate
    + compoenntDidUpdate
- Unmounting:已移出真实DOM
    + componentWillUnmount

- other
    + componentWillReceiveProps
    + shouldComponentUpdate


```javascript
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
```

```
npm install --save-dev babel-preset-stage-0 babel-preset-stage-1 babel-preset-stage-2 babel-preset-stage-3
```

## 04-移动App开发-ES5和ES6语法对比+单击事件的使用-13:38(demo_003)
### es5和es6语法对照(预习的时候对照着抄写三遍) 
http://bbs.reactnative.cn/topic/15/react-react-native-%E7%9A%84es5-es6%E5%86%99%E6%B3%95%E5%AF%B9%E7%85%A7%E8%A1%A8

```javascript
//react中的事件支持和使用
import React,{Component} from 'react';

//直接在js中定义样式，内嵌样式
let style = {
    backgroundColor:'blue'
}

export default class ClickEvent extends Component{
    //设置默认属性和默认状态
    constructor(props){
        super(props);
        //初始化state
        this.state = {
            liked:false
        };
    }

    //单击事件处理方法
    handleClick(pm1,pm2,pm3,e){
        console.log(pm1);
        console.log(pm2);
        console.log(pm3);
        console.log(e);
        this.setState({liked:!this.state.liked});
    }

    //用箭头函数去定义自己的方法
    handleMouseOver=(str)=>{
        console.log(str);
    }

    render(){
        const text = this.state.liked?'like':'have\'t liked';
        //return里面要渲染的html页面
        return (
            <p onMouseOver={()=>this.handleMouseOver('mouseover triggered')} onClick={this.handleClick.bind(this,23,'df')}>
                You {text} this,Click to toggle.
            </p> 
        )
    }
}

```

## 05-移动App开发-获取dom元素+事件监听+属性校验-18:25(demo_004)
- 通过ref定位元素+通过this.refs获取元素
- 事件监听
- 属性校验

## 06-移动App开发-受控表单组件和组合组件-17:22(demo_005)


## 06-移动App开发-context特性介绍-15:23(demo_006)

虫洞 https://segmentfault.com/a/1190000004636213
