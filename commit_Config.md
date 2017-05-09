##设置 .gitmessage 模板

.这是 Git 内置就支持的，你可以为每次提交的 commit message 设置一个模板，
每次提交的时候都能促使你遵循这个思考的模式去编写 commit message，比如下面是我的模板，存放在 ~/.gitmessage：
    What: 简短的描述干了什么

	Why:

	* 我为什么要这么做？

	How:

	* 我是怎么做的？这么做会有什么副作用？

##让模板生效

.在全局 Git 配置 ~/.gitconfig 中添加如下配置：
    [commit]
  	template = ~/.gitmessage

##拥抱新模板

.配置好模板之后，你要放弃在提交时直接指定 commit message 的习惯做法，
.即下面这种提交方式：

    git commit


What: 简短的描述这次的改动

Why：为什么修改？就是要说明这次改动的必要性，可以是需求来源，任务卡的链接，或者其他相关的资料；

How: 做了什么修改？需要说明的是使用了什么方法（比如数据结构、算法）来解决了哪个问题；
