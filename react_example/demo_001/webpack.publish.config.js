/*
在发布阶段的配置文件
*/
var path = require('path');
var webpack = require('webpack');

//删除文件夹的插件
var CleanPlugin = require('clean-webpack-plugin');

//自动生成html页面
var HtmlWebpackPlugin = require('html-webpack-plugin');

//抽取css
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:{
        app:path.resolve(__dirname,'src/js/app.js'),
        vendors:['react','react-dom']
    },
    output:{//输出到哪里,path指明文件夹，filename指明输出文件名
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[ //==> webpack2的写法
            //处理jsx
            {
                test:/\.jsx?$/,
                use:"babel-loader"
            },
            //处理css
            {
                test:/\.css$/,
                exclude:'/node_modules/',
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
                // loader:'style-loader!css-loader'
            },
            //处理图片
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:'url-loader?limit=1000&name=images/[name].[ext]'//相当于 10000 / (1024 * 8)  kb
            },
            //处理字体
            // {
            //     test:/\.(eot|woff|ttf|woff2|svg)$/,
            //     use:'url-loader?limit=25000&name=fonts/[name].[ext]'
            // }
        ]
    },
    plugins:[
        //删除文件夹插件
        new CleanPlugin(['dist']),
        //自动生成html页面插件
        new HtmlWebpackPlugin({
            template:'./src/template.html',
            HtmlWebpackPlugin:{
                "files":{
                    "js":["vendors.js","bundle.js"]
                }
            },
            minify:{
                removeComments:true,//移除注释
                collapseWhitespace:true,//移除空格
                removeAttributeQuotes:true//移动属性的引号
            }
        }),
        //压缩混淆js代码插件
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        }),
        //分离第三方应用插件
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendors',
            filename:'vendors.js'
        }),
        new ExtractTextPlugin('app.css'),
        // new webpack.DefinePlugin({
        //     'process.env':{
        //         NODE_ENV:'"production"'//如果判断是开发环境，则删除警告
        //     }
        // })
    ]
}