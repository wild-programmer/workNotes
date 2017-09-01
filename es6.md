##demo结构
    dist为编译后的代码  
    src放es5代码
##环境搭建
    <!-- 安装babel -->
    npm install --save-dev babel-cli
    <!-- //转换es5 -->
    cnpm i --save-dev babel-preset-es2015 babel-cli

    <!-- 创建一个.babelrc文件 -->
    {
        "presets": [
            "es2015"
        ],
        "plugins": [

        ]
    }
    <!-- 然后，改写package.json。 -->
    {
        // ...
        "devDependencies": {
            "babel-cli": "^6.0.0"
        },
        "scripts": {
            "build": "babel src -d dist"
        },
    }
    <!-- 执行下面的命令。 -->
    $ npm run build


##方法 
    <!-- for…of 的循环可以避免我们开拓内存空间，增加代码运行效率-->
    function cc(f, ...arg) {
        for (let val of arg) {
            console.log(val)
        }
    }
    cc(1, 2, 3, 4)

    <!--    判断是否包含指定字符串 -->
    let cc = "王乘冲";
    arr.includes(cc);
    <!-- 判断开头是否存在： -->
    arr.startsWith(cc);
    <!-- 判断结尾是否存在： -->
    arr.endsWith(cc);
    <!--          重复复制字符串 -->
    document.write(`${cc}`.repeat(3));
    document.write(`王乘冲`.repeat(3));

    <!-- 数字判断的格式化|判断等方法在 ##数字判断和转换里 -->

##解构赋值：
#### 数组的解构赋值：
    <!-- 数组是按顺序解构的 -->
    es6  let [a, b, c] = [1, 2, 3];    es5  var a = 1, b = 2, c = 3;
         let [a, [b, c], d, e = "jspang"] = [1, [2], 3, undefined];
####对象的解构赋值：
    <!-- 对象是按照key值解构的 -->
    let { foo, bar } = { foo: 'cc', bar: 'wd' } 
    let foo; //已经先赋值了  再赋值时在外边加括号
    ({foo}={foo:'cc'}) ;
####字符串的解构赋值：
    const [f, g, h, j, k, l] = 'jspang';


##运算符
####对象扩展运算符
    <!-- 参数不确定个数时候 -->
    function cc(...arg) {
        console.log(arg[0])
        console.log(arg[1])
        console.log(arg[2])
        console.log(arg[3])
        console.log(arg[4])
    }
    cc(1, 2, 3, 4)
    eg:     let arr1 = ['www', 'qqq'];
            let arr2 = arr1;
            arr2.push('eeee');  <!-- 这样arr1和arr2都改变  因为let会使arr2从arr1映射一个值， -->

            let arr1 = ['www', 'qqq'];
            let arr2 = [...arr1];
            arr2.push('eeee');<!-- 这样就没问题 -->
####rest扩展运算符 rest译为剩余
    <!-- 声明方法时候 进行变量不确定处理 -->
    function cc(f, ...arg) {
        console.log(arg.length);
    }
    cc(1, 2, 3, 4) //length为3


##字符串模板 （拼接字符串）    
    let cc = "乘冲"
    let blog = `字符串拼接 ${cc},不以物喜不以己悲`
    console.log(blog) //字符串拼接 乘冲,不以物喜不以己悲


##ES6数字操作
###二进制和八进制
    <!-- Binary -->
    let binary = 0B010101;//21
    <!-- Ovtal -->
    let octal = 0O666;//438
###<a name="jump">数字判断和转换</a>

    <!-- 使用Number.isFinite( )来进行数字验证，只要是数字，不论是浮点型还是整形都会返回true，其他时候会返回false。 -->
    let a= 11/4;
    console.log(Number.isFinite(a));//true
    console.log(Number.isFinite('jspang'));//false
    console.log(Number.isFinite(NaN));//false
    console.log(Number.isFinite(undefined));//false
    <!-- NaN验证 -->
    console.log(Number.isNaN(NaN));
    <!-- 判断是否为整数Number.isInteger(xx) -->
    let a=123.1;
    console.log(Number.isInteger(a)); //false<!-- 整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx) -->
    let a='9.18';
    console.log(Number.parseInt(a)); 
    console.log(Number.parseFloat(a));
    <!-- 整数取值范围操作(最大值|最大安全整数) -->
    let a = Math.pow(2,53)-1;
    console.log(a); //9007199254740991
    <!-- 最大安全整数 -->
    console.log(Number.MAX_SAFE_INTEGER);
    <!-- 最小安全整数 -->
    console.log(Number.MIN_SAFE_INTEGER);
    <!-- 安全整数判断isSafeInteger( ) -->
    let a= Math.pow(2,53)-1;
    console.log(Number.isSafeInteger(a));//false

#看到第七节