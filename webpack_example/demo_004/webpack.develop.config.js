/*
webpack开发阶段配置文件
注释部分的是webpack1.x的写法，看了即可，不用测试
*/
var path = require('path');
// var webpack = requrie('webpack');
module.exports = {
    // entry:[ ====> 这种写法已经不需要了，在webapck@1.x的时候才需要这样写
    //     'webpack/hot/dev-server',
    //     'webpack-dev-server/client?http://localhost:8080',
    //     path.resolve(__dirname,'src/js/app.js')
    // ],
    entry:path.resolve(__dirname,'src/js/app.js'),//入口文件
    output:{//输出到哪里,path指明文件夹，filename指明输出文件名
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        // loaders:[
        //     {
        //         test:'/\.jsx?$/',//用正则来匹配文件路径，这段意思是匹配js,jsx
        //         loader:'babel-loader',//加载模块babel是babel-loader的缩写
        //         query:{
        //             presets:['es2015','react']
        //         }
        //     }
        //{
        //      test:/\.css$/,
        //       loader:'style-loader!css-loader'
        //}    
        // {
        //     test:/\.scss$/,
        //     loader:'style!css!sass'
        // }
        // ],

        rules:[ //==> webpack2的写法
            {
                test:/\.jsx?$/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:['es2015','react']
                        }
                    }
                ]
            },
            {
                test:/\.css$/,
                exclude:'/node_modules/',
                use:[
                    'style-loader','css-loader'
                ],
                // loader:'style-loader!css-loader'
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    // devServer:{
    //     contentBase:__dirname+'/src',
    //     hot:true
    // },
    // plugins:[
    //     new webpack.HotModuleReplacementPlugin()
    // ]
}