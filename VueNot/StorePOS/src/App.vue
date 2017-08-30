<template>
	<div class="tmpl clearfix">	
		<leftNav></leftNav>	
		<div class="main">
			<router-view></router-view>
		</div>

		
	</div>
</template>

<script>	
import leftNav from './components/common/leftNav';

	// 利用es6语法定义并且导出一个vm对象
	export default{		
		data(){
			return {
				
			}
		},
		components:{
		leftNav
		},
		methods:{
			
		}
	}

</script>

<style scoped>
	.main{
		width: 95%;
		height: 100%;
		float: left;
		overflow: auto;		
  		background-color: #EFF2F7;
	}
</style>