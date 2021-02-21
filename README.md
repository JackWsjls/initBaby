# initBaby
learn react

## 报错问题
### ReferenceError: HtmlWebpackPlugin is not defined
没有引入这行代码 const HtmlWebpackPlugin = require('html-webpack-plugin')
### TypeError: webpackMerge is not a function
const webpackMerge = require("webpack-merge");
webpackMerge.merge();
const { merge } = require('webpack-merge');
merge();
### Error: Cannot find module ‘webpack-cli/bin/config-yargs’
webpack的版本与webpack-dev-server 的版本不兼容
webpack、webpack-cli、webpack-dev-server是需要版本匹配
不匹配：
```
"webpack": "^5.23.0",
"webpack-cli": "^4.5.0",
"webpack-dev-server": "^3.11.2",
"html-webpack-plugin": "^5.2.0"
```
不匹配的启动方式：
```
"scripts": {
  "start": "webpack serve --open Chrome.exe"
}
```
匹配：
```
"webpack": "^4.43.0",
"webpack-cli": "^3.3.12",
"webpack-dev-server": "^3.11.0",
"webpack-merge": "^5.7.3"
"html-webpack-plugin": "4.0.0-alpha"
```
```
"webpack": "^5.10.0",
"webpack-cli": "^3.3.12",
"webpack-dev-server": "^3.11.0",
"webpack-merge": "^5.4.1",
"html-webpack-plugin": "^5.2.0"
```
webpack 5.10.0 webpack-dev-server ^3.11.0下
```"webpack-cli": "^4.2.0"```不可用
以下这个没有试过
```
"webpack": "^4.39.1",
"webpack-cli": "^3.3.6",
"webpack-dev-server": "^3.8.0",
```
### 可视化分析包大小 webpack-bundle-analyzer
它可以直观分析打包出的文件包含哪些，大小占比如何，模块包含关系，依赖项，文件是否重复，压缩后大小如何，针对这些，我们可以进行文件分割等操作。
```"webpack-bundle-analyzer": "^4.2.0",```
下载
```npm install webpack-bundle-analyzer --save-dev```
配置(见webpack.prod.config.js)
启动
```npm run build --report```
浏览器打开127.0.0.1:8888地址查看效果图。每个文件的占用面积越大则该文件越大，可以找到相关文件优化
### 安装less-loader模块之后报错,TypeError: this.getOptions is not a function
原因： less-loader安装的版本过高
解决方案： 
1.npm uninstall less-loader
2.npm install less-loader@5.0.0

备注：
https://mp.weixin.qq.com/s/q_MaupD49WuBvvO3oLXf1A 感谢
