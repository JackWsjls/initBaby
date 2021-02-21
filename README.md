# initBaby
learn react

## 报错问题
### ReferenceError: HtmlWebpackPlugin is not defined
没有引入这行代码 const HtmlWebpackPlugin = require('html-webpack-plugin')
### TypeError: webpackMerge is not a function
const webpackMerge = require("webpack-merge");
webpackMerge.merge();
### Error: Cannot find module ‘webpack-cli/bin/config-yargs’
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
  "html-webpack-plugin": "4.0.0-alpha"
  ```
备注：
https://mp.weixin.qq.com/s/q_MaupD49WuBvvO3oLXf1A 感谢
