/*
在发布阶段的配置文件
*/
var path = require('path');
var webpack = require('webpack');
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
                use:[
                    'style-loader','css-loader'
                ],
                // loader:'style-loader!css-loader'
            },
            //处理sass
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
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
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendors',
            filename:'vendors.js'
        })
    ]
}