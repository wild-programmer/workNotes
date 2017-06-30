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

### git账户设置

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

##git提交 删除 恢复 保存

    1.git add file

    2.git commit -m "programmerisloser"

    3.git push -u https://github.com/wild-programmer/text.git master

	#添加当前修改的文件到暂存区  
	git add .  
	  
	#如果你自动追踪文件，包括你已经手动删除的，状态为Deleted的文件  
	git add -u  
	  
	#提交你的修改  
	git commit –m "你的注释"  
	  
	#推送你的更新到远程服务器,语法为 git push [远程名] [本地分支]:[远程分支]  
	git push origin master  
	  
	#查看文件状态  
	git status  
	  
	#跟踪新文件  
	git add readme.txt  
	  
	#从当前跟踪列表移除文件，并完全删除  
	git rm readme.txt  
	  
	#仅在暂存区删除，保留文件在当前目录，不再跟踪  
	git rm –cached readme.txt  
	  
	#重命名文件  
	git mv reademe.txt readme  
	  
	#查看提交的历史记录  
	git log  
	  
	#修改最后一次提交注释的，利用–amend参数  
	git commit --amend  
	  
	#忘记提交某些修改，下面的三条命令只会得到一个提交。  
	git commit –m &quot;add readme.txt&quot;  
	git add readme_forgotten  
	git commit –amend  
	  
	#假设你已经使用git add .，将修改过的文件a、b加到暂存区  
	  
	#现在你只想提交a文件，不想提交b文件，应该这样  
	git reset HEAD b  
	  
	#取消对文件的修改  
	git checkout –- readme.txt  

### github 图片链接格式：
    (http://github.com/yourname/your-repository/raw/master/images-folder/xxx.png)

    要自己设定的：yourname, your-repository, your-folder, xxx.png。
    	yourname            --- 你的帐号
		your-respository --- 你的 project 名
		images-folder      --- 你存放图片的文件夹，如果是直接放在 project 的项目根目录的話，就可以省略這個
		xxx.png                --- 你的图片名
    
	我的.github.io里面有实例 ！！/raw/master/是必填项不能省略

## doc命令 编译Less
    1.手动编译    
    npm install -g less
    lessc index.less //没有压缩的
    lessc styles.less  styles.css -x //压缩的css代码

    2.vs code里面的Easy LESS 插件
    该可以使Less文件保存编译，
    压缩成与less文件同名的css文件，两个没有抵触，方便开发环境使用
## npm 
	npm是 node package manager 
	npm的淘宝镜像为 cnpm  eg:(npm i -g typescript || cnpm i -g typescript)
## es6编译
	全局安装typescript之后， 创建ts 格式的文件，文件里面书写es6的语法。 打开git bush 输入tsc 文件名.ts 编译完成