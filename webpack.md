#webpack 3.0学习笔记
##步骤
    安装
    npm install --save-dev webpack

    创建 webpack.config.js文件嵌入代码
    单文件入口配置
    module.exports = {
        entry: './main.js',  //入口文件
        output: {
            filename: './build.js'  //出口文件
        }
    }

    命令行执行webpack 

    开启服务监听更新页面
    cnpm i  live-server -g
    //有文件改变 页面也会更新   但是不能自动执行webpack命令，需另开一个控制台手动操作

    多文件入口配置
    module.exports = {
        entry: {
            bundel1: './main.js',
            bundel2: './main2.js',
        },
        output: {
            filename: '[name].js'
        }
    }
    
- - -
webpack-dev-server
---
	
>上面的live-server其实它和webpack是不搭的，我们可以利用webpack自带的webpack-dev-server来构建一个本地服务器。webpack-dev-server是一个单独的组件，在webpack中进行配置之前需要单独安装它作为项目依赖。

	1、安装webpack-dev-server
	本地安装
	npm install --save-dev webpack-dev-server
	全局安装
	npm install -g webpack-dev-server
	2、在webpack.config.js中配置devserver选项：
	contentBase : 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录。
	port ：设置默认监听端口，如果省略，默认为”8080″
	inline : 设置为true，当源文件改变时会自动刷新页面
	colors ： 设置为true，使终端输出的文件为彩色的
	historyApiFallback ：在开发单页时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
	host ： 主机地址，如果是开发本机搭建，需要使用本机IP地址，否则会报错。
	3、在终端中输入命令，开启运行本地服务器。它不仅提供了服务器，还会监视我们的文件变化自动更新效果，但是它不是真正的打包，它类似于在内存中进行了打包。所以本地文件并没有变化。
	webpack-dev-server
>>eg
>
	module.exports = {
	    entry: __dirname + '/main.js',
	    output: {
	        path: __dirname + '/',
	        filename: 'bundle.js'
	    },
	    devServer: {
	        contentBase: './', //本地服务器所加载的页面所在的目录
	        host: '192.168.1.158', //本地IP地址
	        colors: true, //终端输出结果为彩色
	        historyApiFallback: true, //不跳转
	        inline: true, //实时刷新
	        port: '3333' //端口号	 
	    }
	}
	命令 webpack-dev-server
##webpack css loader 加载器
    1.何为加载器  是运行在node环境下边的一个函数 通过npm安装，类似正则表达式用来匹配文件名，用Loader进行打包
    2. loader解析  它类似一个模块。一个Loader模块可导出一个方法  可被node打包成兼容的js
    3.安装loader npm install xxx-loader  --save-dev

	entry: './main.js',
    output: {
        filename: './build.js'
    },
    module: {
        loaders: [{
            // 打包css文件
            test: /\.css$/, //表示当前要打包的文件的后缀正则表达式
            loader: 'style-loader!css-loader' //表示先利用css-loader解析.css文件，再调用style-loader打包
        }]
    }
	//打包css
###图片打包
	{
          test:/\.(png|jpg|gif|ttf)$/, 
          loader: 'url-loader?limit=8192' //limit=8192为参数limit<8192 以url data形式打包 >8192就是地址打包
    }

	文件大于8192时会报错！ 需要安装 file-loader进行地址打包 上面配置不需要修改
	data打包减少请求 但是不能缓存  地址打包能进行缓存
###less打包
	{
			// 打包less文件
			test:/\.less$/,   //表示当前要打包的文件的后缀正则表达式
			loader:'style-loader!css-loader!less-loader' //实现sass文件的打包
	}
###es6转换
	{
			// 将当前项目中所有的.js文件都要进行es6转es5操作，node_moudels除外
			test:/\.js$/,   //表示当前要打包的文件的后缀正则表达式
			// loader:'babel-loader?presets[]=es2015', //如果写到这里，将来在打包.vue文件的时候会报错，表示先利用css-loader解析.css文件，再调用style-loader打包
			loader:'babel-loader',
			exclude:/node_modules/  //node_modules中的所有.js文件不去转换，提高打包性能
	}

###路径
	 entry: __dirname + '/main.js', //__dirname是node的一个方法  代表着根目录（是绝对路径）
     output: {
        path: __dirname + '/',
        filename: 'build.js'
     },
###压缩文件
[参考地址](https://doc.webpack-china.org/configuration/plugins/ 'webpck中文文献')
	
>>eg:
>   
    var webpack = require('webpack');
	module.exports = {
	...
	plugins: [
        new webpack.optimize.UglifyJsPlugin({
	            compress: {
	                warnings: false,
	                drop_console: false,
	            }
	        })
	    ]
	}
	命令行输入 webpack 执行
###
	