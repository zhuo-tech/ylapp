<template>
  <el-row class="bgc">
  <div class="pop-up-help">

  <div class="link">联系</div>
  <div class="side">地址：北京海淀区清华东路35号北京林业大学学研中心 A1406</div>
  <div class="side">电话/传真：86 -10- 62337675</div>
  <div class="side">邮箱：</div>
  <div class="side">微信公众号：景观绩效评价</div>

  <div class=" wxcode">
  <img class="wxcode" src="../../static/img/code.png" alt=""></div>
  </div>
  </el-row>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref } from "vue";
import Router from "@/router/index";
</script>

<style lang="less">
.bgc{
  position: relative;
  width: 100%;
  height: 700px;
  background: url("../../static/img/help.png");
  background-size: 100% 700px;
  .pop-up-help{
    position: absolute;
    top: 80px;
    right: 200px;
    width: 500px;
    height: 550px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 30px;
    .link{
      margin-top: 50px;
      color: #fff;
      width: 100px;
      height: 100px;
      text-align: center;
    }
    .side{
      margin-left: 30px;
      width: 100%;
      height: 40px;
      color: #fff;
    }
    .wxcode{
      margin: auto;
      margin-top: 30px;
      width: 120px;
      height: 120px;
    }

  }
}
</style>
