
<template>
    <div class="Pos">
        <el-row>
            <el-col :span='7' class="pos-order" id="orderlist">
                <el-tabs>
                    <el-tab-pane label="点餐">
                        <el-table :data="tableData" border show-summary style="width: 100%">
                            <el-table-column prop="goodsName" label="商品"></el-table-column>
                            <el-table-column prop="count" label="量" width="50"></el-table-column>
                            <el-table-column prop="price" label="单价" width="70"></el-table-column>
                            <el-table-column label="操作" width="100" fixed="right">
                                <template scope="scope">
                                    <el-button type="text" size="small" @click="deleGoods(scope.row)">删除</el-button>
                                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <p class="total">
                            <small>数量：</small> {{totalCount}}
                            <small>金额：</small> {{totalMoney}}元</p>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">挂单</el-tab-pane>
                    <el-tab-pane label="外卖">外卖</el-tab-pane>
                </el-tabs>
                <div class="div-btn">
                    <el-button type="warning" @click="lert">挂单</el-button>
                    <el-button type="danger" @click="delAllMoney">删除</el-button>
                    <el-button type="success" @click="checkout">结账</el-button>
                </div>
            </el-col>
            <el-col :span='17'>
                <div class="ofen-goods clearfix">
                    <P class="title">常用商品</P>
                    <div class="ofen-goodslist">
                        <ul>
                            <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                                <span>{{goods.goodsName}}</span>
                                <span class="o-pres">￥15元</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="goods-type">
                    <el-tabs>
                        <el-tab-pane label="汉堡">
                            <div class="clearfix">
                                <ul class='cookList'>
                                    <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                                        <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                                        <p class="foodName">{{goods.goodsName}}</p>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="margin">
                                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                    <el-form-item label="下单人">
                                        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                                    </el-form-item>
                                    <el-form-item label="餐位">
                                        <el-select v-model="formInline.region" placeholder="活动区域">
                                            <el-option label="区域一" value="shanghai"></el-option>
                                            <el-option label="区域二" value="beijing"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item>
                                        <el-button type="primary" @click="onSubmit">查询</el-button>
                                    </el-form-item>
                                </el-form>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="小食">
                            <ul class='cookList'>
                                <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                                    <span class="foodName">{{goods.goodsName}}</span>
                                    <span class="foodPrice">￥{{goods.price}}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="饮料">
                            <ul class='cookList'>
                                <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                                    <span class="foodName">{{goods.goodsName}}</span>
                                    <span class="foodPrice">￥{{goods.price}}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label="套餐">
                            <ul class='cookList'>
                                <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                                    <p class="foodName">{{goods.goodsName}}</p>
                                    <span class="foodPrice">￥{{goods.price}}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Pos',
    data() {
        return {
            form: {
                name: '至善基金',
                region: '区域三',
                date1: '',
                date2: '',
                delivery: false,
                type: ['input'],
                resource: '这是什么？',
                desc: ''
            },
            formInline: {
                user: '',
                region: ''
            },
            tableData: [],
            oftenGoods: [],
            type0Goods: [],
            type1Goods: [],
            type2Goods: [],
            type3Goods: [],
            totalMoney: 0,
            totalCount: 0,
        }
    },
    methods: {
        onSubmit() {
            console.log(this.formInline.user + "---" + this.formInline.region);
            this.formInline.user = '';
            this.formInline.region = '';
        },
        lert() {
            alert(1)
        },
        addOrderList(goods) {
           this.totalCount=0; //汇总数量清0
            this.totalMoney=0;
            let isHave=false;
            //判断是否这个商品已经存在于订单列表
            for (let i=0; i<this.tableData.length;i++){
                if(this.tableData[i].goodsId==goods.goodsId){
                    isHave=true; //存在
                }
            }
            //根据isHave的值判断订单列表中是否已经有此商品
            if(isHave){
                //存在就进行数量添加
                 let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
                 arr[0].count++;
                 //console.log(arr);
            }else{
                //不存在就推入数组
                let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
                 this.tableData.push(newGoods);
 
            } 
            //进行数量和价格的汇总计算
            this.getAllMoney()

        },
        //删除单品
        deleGoods(goods) {
            this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
            this.getAllMoney()
        },
        delAllMoney(){
            this.tableData=[];
            this.totalCount = 0;
            this.totalMoney = 0;
        },
        getAllMoney() {
            this.totalCount = 0;
            this.totalMoney = 0;
            if (this.tableData) {
                this.tableData.forEach((element) => {
                    this.totalCount+=element.count;
                    this.totalMoney=this.totalMoney+(element.price*element.count);   
                });
            }
        },
        //结账
        checkout(){
            if(this.totalCount!=0){
                this.tableData=[];
                this.totalCount = 0;
                this.totalMoney = 0;
                this.$message({
                    message:'结账成功。感谢自己写的功能',
                    type:'success'
                })
            }else{
                this.$message.error('空空的，老板了解你急切的亲情')
            }
        }
    },
    mounted: function() {
        var orderHeight = document.body.clientHeight;
        document.querySelector('#orderlist').style.height = orderHeight + "px";
    },
    created: function() {
        axios.get('http://jspang.com/DemoApi/oftenGoods.php')
            .then(Response => {
                this.oftenGoods = Response.data;
            })
            .catch(error => {
                alert('网络错误，不能访问')
            })
        axios.get('http://jspang.com/DemoApi/typeGoods.php')
            .then(Response => {
                this.type0Goods = Response.data[0];
                this.type1Goods = Response.data[1];
                this.type2Goods = Response.data[2];
                this.type3Goods = Response.data[3];
            })
            .catch(error => {
                alert('网络错误，不能访问')
            })
    }
}
</script>
<style  scoped>
.margin {
    margin-top: 20px;
}

.ofen-goods {}

.total {
    background-color: #fff;
    padding: 10px;
    border-bottom: 1px solid #D3dce6;
}

.title {
    height: 20px;
    border-bottom: 1px solid #D3dce6;
    background-color: #F9FAFC;
    padding: 10px;
    text-align: left;
}

.ofen-goodslist ul li {
    border: 1px solid #E5E9F2;
    padding: 10px;
    float: left;
    margin: 10px;
    background-color: #FFF;
}

.o-pres {
    color: #5887FF;
}

.pos-order {
    background-color: #F9FAFC;
    border-right: 1px solid #C0CCDA;
}

.Pos {
    text-align: center
}

.div-btn {
    margin-top: 10px
}

.cookList li {
    list-style: none;
    width: 23%;
    border: 1px solid #E5E9F2;
    height: auot;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;
}

.cookList li span {

    display: block;
    float: left;
}

.foodImg {
    width: 40%;
}

.foodName {
    font-size: 18px;
    padding-left: 10px;
    color: brown;
}

.foodPrice {
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
}
</style>

