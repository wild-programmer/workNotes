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
##第3节解构赋值：
#### 数组的解构赋值：
    <!-- 数组是按顺序解构的 -->
    es6  let [a, b, c] = [1, 2, 3];    es5  var a = 1, b = 2, c = 3;
         let [a, [b, c], d, e = "cc"] = [1, [2], 3, undefined]; 
		 console.log(a)//1
		 console.log(e)//cc  
####对象的解构赋值：
	let foo; //foo已经定义了变量  再赋值时在外边加括号
    ({foo}={foo:'bb'}) ;
    <!-- 对象是按照key值解构的 -->
    let { fo, bar } = { fo: 'cc', bar: 'wd' } 
	
    
####字符串的解构赋值：
    const [f, g, h, j, k, l] = 'jspang';
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
	console.log(e);
	console.log(f);


##第4节运算符
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


##第5节：字符串模板 （拼接字符串）    
    let cc = "乘冲"
    let blog = `字符串拼接 ${cc},不以物喜不以己悲`
    console.log(blog) //字符串拼接 乘冲,不以物喜不以己悲
###支持html标签
	let blog = `<b>非常高兴你能看到这篇文章</b>，我是你的老朋友${cc}。<br/>这节课我们学习字符串模版。`;
	document.write(blog);
###对运算的支持：
	let a=1;
	let b=2;
	let result=`文字${a+b}`;
	document.write(result);
###字符串查找
	console.log(blog.indexOf(cc)); //ES5的方法是 返回的是6
	console.log(blog.includes(cc)) //直接返回true
###判断开头是否存在：		
	blog.startsWith(cc);
###判断结尾是否存在：
	blog.endsWith(cc);
	!!starts和ends 后边都要加s
###复制字符串		
	document.write('cc,'.repeat(3));


##第6节：ES6数字操作
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

##第7节：数组
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
###第8节：fill( )实例方法：
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


##第9节：箭头函数和扩展
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
###第10节：对象|数组的函数结构
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
    console.log(0 in arr); //这里的0指的是数组下标位置 看它是否为空。

    <!-- 数组的遍历方法 在顶部-->


##第11节：ES6对象
###对象的赋值
    变量直接赋值给对象
    let name="cc";
    let skill= 'web';
    var obj= {name,skill}; //键和值都是变量
    console.log(obj);  //Object {name: "cc", skill: "web"}
###对象Key值的变量构建
    key允许变量 构建
    let key='skill';
    var obj={
        [key]:'web'
    }
    console.log(obj.skill); //obj {skill:"web}
###Object.is()对象值的比较
    var obj1 = {name:'jspang'};
    var obj2 = {name:'jspang'};
    console.log(obj1.name === obj2.name);//true
    console.log(Object.is(obj1.name,obj2.name)); //true
    === 和 is方法的区别
    console.log(+0 === -0);  //true
    console.log(NaN === NaN ); //false
    console.log(Object.is(+0,-0)); //false
    console.log(Object.is(NaN,NaN));  //true
    ===为同值相等  is()为严格相等

###Object.assign()合并对象
    var a={name:'cc'};
    var b={age:18};
    var c={stature:'180cm'};    
    let d=Object.assign(a,b,c)
    console.log(d);

###第12节：Symbol在对象中的应用
    使用Symbol来进行数据保护
    let obj = { name: 'cc', skill: 'web' };
    let age = Symbol();
    obj[age] = 18;
    for (let item in obj) {
        console.log(obj[item]);// cc web
    }
    console.log(obj);  //{name: "cc", skill: "web", Symbol(): 18}
    console.log(obj[age]);  //18

###第13节：Set和WeakSet数据结构
    set是一个数组结构  最重要的是去重
    let setArr = new Set(['cc', 'web', 18, 18])
    console.log(setArr) // Set(3) {"cc", "web", 18}
####Set值的增删查
    //add
    setArr.add('前端职场'); //不能增加重复的 会报错
    //delete
    setArr.delete('前端职场');
    //has  查
    console.log(setArr.has('cc'));//true
    //.clear  删除全部
    setArr.clear();
####set的循环
    //for…of…循环：
    for (let item of setArr){
        console.log(item);
    }
####size属性
    console.log(setArr.size); //3  18去重了一个
####forEach循环
    setArr.forEach((value)=>console.log(value));
####WeakSet的声明
    set是一个数组结构  weakSet就是一个对象版的set
    不能直接在new 的时候就放入值，将报错 eg let weakObj=new WeakSet({a:'cc',b:'wd'});//报错
    let weakObj=new WeakSet();
    let obj={a:'cc',b:'乘冲'}
    let obj1=obj;   obj1和obj用的是同一个内存空间  所以重复不会被添加进去
    
    weakObj.add(obj);
    weakObj.add(obj1);   

    console.log(weakObj);

    let obj={a:'cc',b:'乘冲'}
    let obj1={a:'cc',b:'乘冲'};
    
    weakObj.add(obj);
    weakObj.add(obj1);//obj1产生的内存空间和obj不一样  所以会被添加进去
    
    console.log(weakObj);


##第14节：map数据结构
###json和map的对比
    Map的灵活性要更好，你可以把它看成一种特殊的键值对，但你的key可以设置成数组，值也可以设置成字符串，让它不规律对应起来。
    给 var map赋值 key为对象  value为字符串
    let json = {
        name:'jspang',
        skill:'web'
    }
    console.log(json.name);    
    var map=new Map();
    map.set(json,'iam'); //拿json对象作为key  iam字符串作为值
    console.log(map);

    当然也可key字符串，value是对象。我们调换一下位置，依然是符合map的数据结构规范的。  
    map.set('jspang',json);
    console.log(map);
###map的增删查取
###取值get
    获取json对应的value值 (json对象是key值)
    console.log(map.get(json));
###删除delete
    map.delete(json);
###size属性
    console.log(map.size) //打印map对象的长度  从0开始
###查找是否存在某值 has
    查找的是key值
    map.set('jspang',json);
    console.log(map.has('jspang'));
###清除所有的元素 clear
    map.clear()
##第15节:用Proxy进行预处理 
###get set是得到会要改变对象属性值时预处理的方法
    proxy为代理的意思   是es6用它增强对象和函数的方法
    //es5定义对象的方法
    let obj={
        add:function(){
            return val+100;
        },
        name:"i am cc"
    }
    //se6proxy的方法
    let pro = new Proxy({放对象体},{放预处理机制}) 
    let pro = new Proxy({
        add:function(){
            return val+100;
        },
        name:"i am cc"},{
            //get 得到数据之前 预处理的事情
            get:function(target,key,property){//三个参数是固定的
                console.log('come in get')
                return target[key]
            }，
            set:function(target,key,value,receiver){
                        //目标，属性名，要变成的值，原始值
                console.log(`setting ${key}=${value}之前的值是${receiver}`)
                return target[key]
            }
        }
    );

    console.log(pro.name)//打印的是get函数执行的结果
    console.log(pro.name = 'cc');//这里打印的是set里面的返回值
###apply apply的作用是调用内部的方法，它使用在方法体是一个匿名函数时。
	语法：函数名.apply(对象，数组(或者伪数组))
	功能：1，调用该函数  2，将this指向第一个参数  3，将第二个参数的数组拆解成一个个的元素，依次作为函数的实参
    let target = function () {
        return 'I am JSPang';
    };
    var handler = {
        apply(target, ctx, args) {
            console.log('do apply');
            return Reflect.apply(...arguments); //固定格式 并未完全解释，要自己查文档深究
        }
    }
    
    var pro = new Proxy(要处理的函数, 放预处理机制);
    var pro = new Proxy(target, handler);
    
    console.log(pro());
##第16节 promise对象的使用
    解决回调地狱
    let state=1;
 
    function step1(resolve,reject){
        console.log('1.开始-洗菜做饭');
        if(state==1){
            resolve('洗菜做饭--完成');
        }else{
            reject('洗菜做饭--出错');
        }
    }
    
    
    function step2(resolve,reject){
        console.log('2.开始-坐下来吃饭');
        if(state==1){
            resolve('坐下来吃饭--完成');
        }else{
            reject('坐下来吃饭--出错');
        }
    }
    
    
    function step3(resolve,reject){
        console.log('3.开始-收拾桌子洗完');
        if(state==1){
            resolve('收拾桌子洗完--完成');
        }else{
            reject('收拾桌子洗完--出错');
        }
    }
    
    new Promise(step1).then(function(val){
        console.log(val);
        return new Promise(step2);    
    }).then(function(val){
        console.log(val);
        return new Promise(step3);
    }).then(function(val){
        console.log(val);
        return val;
    });
##第17节：class类的使用
    类里面是方法和函数
    声明类
    class Coder{
        name(val){
            console.log(val)
        }
    }
    实例化类
    let cc = new Coder;
    cc.name('cc');
###在类里面 多个方法不需要,号隔开
    class Coder {
        name(val) {
            console.log(val)
            return val
        }
        skill(val) {
            console.log(this.name('cc') + ":" + val)
        }
    }
    // 实例化类
    let cc1 = new Coder;
    cc1.skill('web');
###类的参数传递
    类参数传递 eg: new Coder('val')  
    与类里面方法的参数传递区分开eg：cc1.skill('web')
    <br> 
    在类的参数传递中我们用constructor( )进行传参
    class Coder{    
        constructor(a,b){
            this.a=a;
            this.b=b;
        }    
        add(){
            return this.a+this.b;
        }
    }
    
    let cc=new Coder(1,2);
    console.log(cc.add());  
###class的继承 
    类的一大特点就是继承
    class htmler extends Coder{}
    
    let pang=new htmler;
    pang.name('cc-extends');
    声明一个htmler的新类并继承Coder类，htmler新类里边为空，这时候我们实例化新类，并调用里边的name方法。结果也是可以调用到的。

##第18节：模块化操作
###export :负责进行模块化，也是模块的输出。 生成模块
###import : 负责把模块引，也是模块的引入操作。 引入模块
###export的用法
   [模块化操作](http://jspang.com/2017/06/03/es6/#18 "js胖博客地址")


