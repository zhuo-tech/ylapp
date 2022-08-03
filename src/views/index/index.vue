<template>
  <div class="index-page">
     <el-row>
      <el-col :span="24">
      <el-carousel trigger="click"  
        :interval="5000"
         arrow="always"
        indicator-position="none" 
        height="700px">
      <el-carousel-item  >
        <img class="img" src="../../static/img/2.png" alt="">
      </el-carousel-item>
            <el-carousel-item  >
        <img class="img" src="../../static/img/1.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
      </el-col>
    </el-row>

    <el-row>
      <div class="content"> 
        <div class="title">
        北京浅山区青龙湖森林修复规划
        </div>
        <div class="wid-box">
        <div class="wid"></div>
        <div class="text"> 城市公园绿地包括……先打一堆话来看看排版，之后再替换吧先打一堆话来看看排版之后再替换吧先打一堆话来看看排版，之后再替换吧</div>
        </div>
      </div>

      <div>
      资讯 & 活动
      </div>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs,ref } from 'vue'
import Router from "@/router/index";

const slideshow = ref([
  {label:"../../static/img/1.jpg"},
  {label:"../../static/img/2.png"},
])

function gotoPage(url: string) {
  Router.replace(url);
}

</script>

<style lang="less">
.index-page{
  position: relative;
.img{
  width: 100%;
  height: 100%
}
.el-carousel__arrow{
  width: 80px;
  height: 80px;
 background: rgba(0, 0, 0, 0.44);
}
.content{
  padding: 10px 30px;
  bottom: 70px;
  left: 20px;
  position: absolute;
  height: 156px;
  background: rgba(0, 0, 0, 0.44);
  .title{
    color: #fff;
    font-size: 40px;
    letter-spacing: 3px;
  }
  .wid-box{
    margin-top: 50px;
    color: #fff;
    display: flex;
    .wid{

      margin: 6px  10px 0 0;
      width: 4px;
      height: 30px;
      background-color: #fff;
    }
    .text{
      width: 580px;
    }
  }
}
}

</style>