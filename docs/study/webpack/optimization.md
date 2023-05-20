# `webpack3` 升级 `webpack4`并优化

打包时间从`60ms -> 20ms`

`webpack3` 升级 `webpack4`

```sh
npm install webpack@4.46.0 -D
npm install webpack-cli@3.3.0 -D
npm install webpack-dev-server@3.2.1 -D
npm install html-webpack-plugin@3.2.0 -D
npm install vue-loader@15.7.0 -D
```

文件： `build/webpack.base.conf.js` 

将vue-loader引入webpack配置

```javascript
const { VueLoaderPlugin } = require('vue-loader')    
module.exports = {  	
  ...., 
  plugins:[new VueLoaderPlugin()]
}
```

文件：`build/webpack.prod.conf.js`

去除下面相关代码

```javascript
new UglifyJsPlugin({
  uglifyOptions: {
    compress: {
      warnings: false
    }
  },
  sourceMap: config.build.productionSourceMap,
  parallel: true
}),
new webpack.optimize.UglifyJsPlugin({
  //自动删除console.log
  compress: {
    warnings: false,
    drop_debugger: true,
    drop_console: true
  },
  sourceMap: true
}),
new ExtractTextPlugin({
  filename: utils.assetsPath('css/[name].[contenthash].css'),
  allChunks: true
}),
```

引入

```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
```

后面追加

```javascript
new MiniCssExtractPlugin({
  filename: utils.assetsPath('css/[name].[contenthash].css')
}),
```

安装`mini-css-extract-plugin`

```sh
npm i mini-css-extract-plugin@0.5.0 -D
```

去除相关代码

```javascript
new webpack.optimize.CommonsChunkPlugin 相关代码
HtmlWebpackPlugin.minify 代码
```

`build/utils.js`文件修改

```javascript
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
...
// return ExtractTextPlugin.extract({
//     use: loaders,
//     publicPath: '../../',
//     fallback: 'vue-style-loader'
// });
return [
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../../'
    }
  }
].concat(loaders);
```

使用`webpack.optimization.splitChunks`分割代码

```javascript
optimization: {
  splitChunks: {
    chunks: 'all',
      maxSize: 30 * 1024, //控制包的最大字节数
        automaticNameDelimiter: '.', //新chunk名称的分隔符，默认为～
          minChunks: 1, //一个模块被多少个chunk使用时才会进行分包，默认为1
            minSize: 30 * 1024 //单位为字节，当分包达到多少字节后才允许被真正地拆包，默认为30000
  }
},
```



使用`thread-loader`多线程打包和`babel-loader`开启缓存

```sh
npm i thread-loader -D
```

```javascript
const threadLoader = {
    loader: 'thread-loader',
    options: {
        workers: require('os').cpus().length - 1
    }
};

{
  test: /\.js$/,
    use: [
      threadLoader,
      {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    ],
      include: [resolve('src')],
        exclude: '/node_modules/'
},
```

第三方库使用cdn加载

`webpack.externals`去除打包的第三方库

```javascript
externals: {
  vue: 'Vue',
  axios: "axios",
  "element-ui": "ELEMENT"
}
```

`index.html`使用`script`加载第三方库

```html
<script src="https://www.xxxx.com/static/vue.min.js"></script>
<script src="https://www.xxxx.com/static/axios.min.js"></script>
<script src="https://www.xxxx.com/static/element-ui.min.js"></script>
```

