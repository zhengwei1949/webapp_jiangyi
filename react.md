# 前置知识
- 正则表达式基础知识
- es6语法
- node.js中的模块化思想
- npm使用

# day01
## 01-移动App开发视频-混合app开发相关知识介绍-20:41
- 原生app --> 适合复杂、对体验要求高的app(可以获得手机较高的权限，用于获取用户和手机的深度信息，比如用户连接过的wifi,Mac地址，手机装过的app,各种手机里的文件等...,其他的类型的app像webapp,混合app比如要整一个摄像头实时识别的功能，要在摄像头取景界面定制一些文字功能就没办法做，只能用原生的ios,android来做)
- react Native(react native不能归为原生，原生一般指的是android,ios写的app如何理解 --> react native写好之后，可以翻译成ios,android的代码)
    + https://facebook.github.io/react-native/showcase.html

![](http://7fvanf.com1.z0.glb.clouddn.com/17-8-21/29259951.jpg)

![](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503334257281&di=c144af2f590e0125cc80db9ed6a88acb&imgtype=0&src=http%3A%2F%2Fwww.2cto.com%2Fuploadfile%2FCollfiles%2F20160405%2F2016040509214744.jpg)

- webapp --> 只适合特别简单的app 类如：使用angular.js开发spa然后嵌入到ios的webview当中
    + http://app.ft.com/
    + http://m.sspapp.cn/
- 混合app(体验不是很好，只适用于简单的app)
    + ionic --> http://showcase.ionicframework.com/apps/top
    + apiCloud
    + AppCan

### 如何选择
- 每年的热门技术不一样，选择标准 --> 相关职位数量
- 拉钩网上搜索职位 --> 只有react + react native工作机会最多，其他的几乎没啥工作机会

## 02-移动App开发视频-webapp介绍和快速开始-14:16
- 使用范围
    + vue + webpack
    + react + webpack
## 使用
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
    + --colors 有颜色的输出
    + --progress 显示进度
    + --hot 热加载
    + --content-base --> 以src为根目录开启服务器 
    + webpack-dev-server构建的代码在内存当中

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

## 打包
http://www.jianshu.com/p/22aa14664cf9?open_source=weibo_search
见pdf文件

# day02
## 01-移动App开发-react的四个核心内容介绍-17:33(这块等后面学完了再回头看，了解即可，没有写代码看了也会忘记)
### 特点
- 一个js的库
    + 抛弃了MVC，只负责v，轻量级
- 专注于视图部分的构建
- 顺应了web开发组件的趋势：将UI上相对独立的小模块封装成组件，然后再组装成大的组件

理解：
React.js的作用：帮助我们将界面分成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套，就成了我们的页面。

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
- 单向数据流 --> vue中的问题:多个组件共同依赖某个数据，一旦这个数据在某个组件中改变了，不太方便对其他组件进行同步，比较麻烦,数据管理不够清晰


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
