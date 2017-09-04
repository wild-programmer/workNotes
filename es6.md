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
    <!-- 数组的方法 遍历 替换 转换 查找 替换 -->
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

##数组
###JSON数组格式转换
    <!-- json数组格式 -->
    let  json = {
        '0': 'jspang',
        '1': '技术胖',
        '2': '大胖逼逼叨',
        length:3
    }
    let arr = Array.from(json);//json字符串转换为数组

    <!-- 数组转换为字符串 -->
    arr.toString() 
    arr.join('|') //改变数组或者字符串的分隔符
###Array.of()方法：
    <!-- 字符串转数组 -->
    let arr1 = Array.of(3, 4, 5, 6);
    
###find()实例方法：
####什么是实例方法：是已经实例出来对象的方法，不需要调用Array对象
    <!-- 查找字符串里面的值，满足条件就在找到的第一个地方停止 -->
    var arr =[1,2,3,4,5,6]
    console.log(arr.find(function(value, index, arr) {
        return value > 2;
    })) 
###fill( )实例方法：
    <!-- 数组填充 它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置 -->
    var arr4 = [0, 1, 2, 3, 4, 5, 6];
    arr4.fill('cc', 1, 2);
    document.write(arr4) //输出 [0, "cc", 2, 3, 4, 5, 6]
###for…of循环
    let arr5 = ['jspang', '技术胖', '逼逼叨']
    for (let item of arr5) {
        console.log(index, item)//只输出值
    }
    for (let item of arr5.keys()) {
        console.log(index, item)//只输出索引
    }
    for (let item of arr5.entries()) {
        console.log(item )//一起输出值和索引
    }
    for (let [index, value] of arr5.entries()) {
        console.log(index, value)//分来输出值和索引
    }
###entries( )实例方法
    <!-- entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。进行手动遍历 -->
    let arr=['jspang','技术胖','逼逼叨']
    let list=arr.entries();
    console.log(list.next().value);
    console.log('执行完这个，再继续遍历')
    console.log(list.next().value);
    console.log('执行完这个，再继续遍历')
    console.log(list.next().value);
###in的方法
    let arr=[,,,,,];
    console.log(arr.length); 
    //上边的代码输出了5，但是数组中其实全是空值，这就是一个坑 ES6的in就可以解决这个问题   
    console.log(0 in arr); //这里的0指的是数组下标位置是否为空。

    <!-- 数组的遍历方法 -->
###数组的遍历
####forEach遍历
    let arr=['jspang','技术胖','cc'];    
    arr.forEach((val,index)=>console.log(index,val));
####.filter遍历
    arr.filter(x=>console.log(x));
####.some遍历
    arr.some(x=>console.log(x));
####.map遍历
    arr.map(x => console.log(x));
    <!-- 数组遍历替换 -->
    console.log(arr.map(x=>'web'));


##ES6中的对象
###对象的赋值

##箭头函数和扩展
###
    <!-- 手动抛出异常  -->
    throw new Error('抛出异常')
    <!-- se6中的严禁模式  可以不写在头部，实现局部严谨-->
    'use strict'
    <!-- 获取传递参数的个数 -->
    function add(a, b) {
        return a + b;
    }
    console.log('几个参数:' + add.length)

###箭头函数
    <!-- 箭头函数中不可加new，也就是说箭头函数不能当构造函数进行使用。 -->
    var add11 = (a, b = 1) => a + b //只有一行执行逻辑的代码时不用带括号
    console.log(add11(1))
    var add11 = (a, b = 1) => {
        console.log('多行代码')
        return a+b;                 //多行情况下
    }
    console.log(add11(1,3))
###对象|数组的函数结构
    let obj={a:'cc',b:'qizhi'} 
    let arr=['cc','qizhi'];
    function fun({a,b='qizhi'}){
        console.log(a,b);
    }
    fun(obj) //cc qizhi
    fun(arr) //cc qizhi

### in的用法
    <!-- in是用来判断对象或者数组中是否存在某个值的 -->
    let obj = {
        a: 'cc',
        b: 'qizhi'
    }
    console.log('a' in obj);
    <!-- 数组中的用处 -->
  
    let arr=[,,,,,];
    console.log(arr.length); 
    //上边的代码输出了5，但是数组中其实全是空值，这就是一个坑 ES6的in就可以解决这个问题   
    console.log(0 in arr); //这里的0指的是数组下标位置是否为空。

    <!-- 数组的遍历方法 -->