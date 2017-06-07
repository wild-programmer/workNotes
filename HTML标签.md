
##特殊字符
	&nbsp; 空格
	&gt;   大于号
	&lt;   小于号
	&copy; 版权符号
	&reg;  注册符号
##块级元素
	address、blockquote、center、dir、div、dl、dt、dd、fieldset、form、h1~h6、hr、isindex、menu、
	noframes、noscript、ol、p、pre、table、ul
##内联元素
	a、abbr、acronym、b、bdo、big、br、cite、code、dfn、em、font、i、img、input、kbd、label、q、s、samp、select、
	small、span、strike、strong、sub、sup、textarea、tt、u、var
##嵌套规则
	1.块元素可以包含内联元素或某些块元素，但内联元素却不能包含块元素，它只能包含其它的内联元素
	eg:<div><h1></h1><p></p></div> —— 对   <a href=”#”><span></span></a> —— 对
	2. 块级元素不能放在<p>里面：
	eg:<p><ol><li></li></ol></p> —— 错　　<p><div></div></p> —— 错
	3. 有几个特殊的块级元素只能包含内嵌元素，不能再包含块级元素，这几个特殊的标签是：
	h1、h2、h3、h4、h5、h6、p、dt 
	4.li的解释li 和 div 标 签都是装载内容的容器，地位平等，没有级别之分（例如：h1、h2 这样森严的等级制度^_^），要知道，li 标签连它的父级 ul 或者是 ol 都可以容纳的
	5. 块级元素与块级元素并列、内嵌元素与内嵌元素并列：（网上有这样的说法，我是没有特别在意去遵循过）
	eg: <div><h2></h2><p></p></div> —— 对　　<div><a href=”#”></a><span></span></div> —— 对　
	<div><h2></h2><span></span></div> —— 错