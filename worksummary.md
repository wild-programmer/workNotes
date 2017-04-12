##浏览器窗口监听事件
```
    window.onresize
```
##获取窗口大小
```
    document.body.clientWidth
```
##layui
.layui是jquery的一个模块化插件，用之前需要引入整一个layui模块，调用其中的layui.css layui.js文件

.使用layui分页配合接口的书写方式
     layui.use(['laypage', 'layer'], function() {
            var laypage = layui.laypage,
                layer = layui.layer;

            //测试数据
            var data = [
                '北京',
                '上海',
                '广州',
                '深圳',
                '赣州',
                '宁波',
                '绍兴',
                '无锡',
                '苏州',
                '徐州',

            ];

            var nums = 1; //每页出现的数据量

            //模拟渲染
            var render = function(curr) {
                //此处只是演示，实际场景通常是返回已经当前页已经分组好的数据
                var str = '',
                    last = curr * nums - 1;
                last = last >= data.length ? (data.length - 1) : last;
                for (var i = (curr * nums - nums); i <= last; i++) {
                    str += '<li href="$yeshu=' + i + '">' + data[i] + '</li>';
                }
                return str;
            };

            //调用分页
            laypage({
                cont: 'demo3',
                pages: Math.ceil(data.length / nums) //得到总页数
                    ,
                curr: 3,
                groups: 5,
                first: 1,
                last: Math.ceil(data.length / nums),
                hash: 'yeshu',
                // first: 1,
                // last: 10,
                prev: '<em><<</em>',
                next: '<em>>></em>',
                jump: function(obj) {
                    document.getElementById('biuuu_city_list').innerHTML = render(obj.curr);
                }
            });
        });

### git不要积分的下载地址
.[git下载地址](http://download.csdn.net/detail/q849340003/9670061 "不要积分")
  
### git命令 

	1.git-config user.name XXX
	2.git-config user.email XXX@xxx.com
设置git全局设置 

	1.git config --global user.name "your_name" 

	2.git config --global user.email  "your_email"
 

需要取消git的全局设置:

	1.git config --global --unset user.name  
	2.git config --global --unset user.email

针对每个项目，单独设置用户名和邮箱，设置方法如下：

	1.git config user.name "your_name" 
	2.git config user.email "your_email"

(说白了，也就是进入到你的git项目相对根目录下，然后执行git config设置记录)

git提交

	1.git add file

	2.git commit -m "programmerisloser"

	3.git push -u https://github.com/wild-programmer/text.git master

## doc命令 编译Less
	1.手动编译	
	npm install -g less
	lessc index.less //没有压缩的
	lessc styles.less  styles.css -x //压缩的css代码

	2.vs code里面的Easy LESS 插件
	该可以使Less文件保存编译，
	压缩成与less文件同名的css文件，两个没有抵触，方便开发环境使用