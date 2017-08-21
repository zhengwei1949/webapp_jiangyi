/*
webpack开发阶段配置文件
*/
var path = require('path');
module.exports = {
    entry:path.resolve(__dirname,'src/js/app.js'),//入口文件
    output:{//输出到哪里,path指明文件夹，filename指明输出文件名
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
}