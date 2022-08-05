<template>
  <el-row class="box">
    <el-col :span="24">
      <div class="title">
        <div class="new">新建项目</div>
        <div class="owner">查看已有项目</div>
      </div>
      <div class="hint">
        选择需要新建的景观绩效评价项目类型，进行后续的指标选择及计算。
      </div>

      <div class="center">
        <div  @click="gotoTarget('/target')"  class="layout">
          <div  class="img">
            <img class="img" src="../../static/img/2.png" alt="" />
          </div>
          <div class="shade">
            <div class="shade-title">新建乡村生态 景观绩效评价项目</div>
           <div style="display: flex;">
            <div class="placeholder"></div>
            <div class="shade-text">城市公园绿地包括……先打一堆话来看看排版，之后再替换吧先打一堆话来看看排版之后再替换吧先打一堆话来看看排版，之后再替换吧</div>
           </div>
          </div>
        </div>

        <div @click="gotoTarget('/target')" class="layout">
          <div class="img">
            <img class="img" src="../../static/img/2.png" alt="" />
          </div>
          <div class="shade">
            <div class="shade-title">新建乡村生态 景观绩效评价项目</div>
           <div style="display: flex;">
            <div class="placeholder"></div>
            <div class="shade-text">城市公园绿地包括……先打一堆话来看看排版，之后再替换吧先打一堆话来看看排版之后再替换吧先打一堆话来看看排版，之后再替换吧</div>
           </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref } from "vue";
import Router from "@/router/index";


function gotoTarget(url: string) {
  Router.replace(url);
}

</script>

<style lang="less">
.box {
  padding: 28px 100px;
  .title {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #a9a9a9;
    .new {
      font-size: 25px;
    }
    .owner {
      margin-top: 5px;
      width: 138px;
      height: 26px;
      line-height: 26px;
      text-align: center;
      background-color: #facc00;
      border-radius: 10px;
    }
  }
  .hint {
    margin: 5px 0 60px 0;
    height: 25px;
    color: #888888;
    font-size: 18px;
  }
  .center {
    display: flex;
    justify-content: space-between;
    position: relative;
    .layout {
      width: 800px;
      height: 503px;
      cursor: pointer;
      .img {
        width: 800px;
        height: 503px;
      }
      .shade {
        position: absolute;
        bottom: 50px;
        width: 800px;
        height: 180px;
        background: rgba(0, 0, 0, 0.44);
        .shade-title{
          margin: 0 0 20px 400px;
          direction: rtl;
          color: #fff;
          font-size: 40px;
          letter-spacing: 3px;
        }
        .placeholder{
          margin: 0px 20px 0 50px;
          width: 5px;
          height: 40px;
          border-radius: 50px;
          background-color: #fff;
        }
        .shade-text{
          color: #fff;
        }
      }
    }
  }
}
</style>
