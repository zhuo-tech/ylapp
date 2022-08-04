<template>
  <div class="index-page">
    <el-row>
      <el-col :span="24">
        <el-carousel
          trigger="click"
          :interval="5000"
          arrow="always"
          indicator-position="none"
          height="870px"
        >
          <el-carousel-item>
            <img class="img" src="../../static/img/2.png" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img class="img" src="../../static/img/1.jpg" alt="" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>

    <el-row>
      <div class="content">
        <div class="title">北京浅山区青龙湖森林修复规划</div>
        <div class="wid-box">
          <div class="wid"></div>
          <div class="text">
            城市公园绿地包括……先打一堆话来看看排版，之后再替换吧先打一堆话来看看排版之后再替换吧先打一堆话来看看排版，之后再替换吧
          </div>
        </div>
      </div>

      <div class="bottom-card">
        <div class="title">资讯 & 活动</div>
        <div class="title-a">NEWS & EVENT</div>
        <div class="layout">
          <div v-for="item in 4" class="card-box">
            <div class="card">
              <div class="card-img">
                <img class="card-img" src="../../static/img/cardimg.png" alt="" />
              </div>
              <div class="card-text">LA国际资讯 | 巴黎圣母院周边景观改造方案新鲜出炉</div>
              <div class="time">2022年7月2日</div>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom-card2">
        <div class="title">精选指标 & 案例</div>
        <div class="title-a"> INDICATORS & CASES</div>
        <div class="layout">
          <div v-for="item in 4" class="card-box">
            <div class="card">
              <div class="card-img">
                <img class="card-img" src="../../static/img/cardimg.png" alt="" />
              </div>
              <div class="card-text">LA国际资讯 | 巴黎圣母院周边景观改造方案新鲜出炉</div>
              <div class="time">2022年7月2日</div>
            </div>
          </div>
        </div>

      </div>
      
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref } from "vue";
import Router from "@/router/index";

const slideshow = ref([
  { label: "../../static/img/1.jpg" },
  { label: "../../static/img/2.png" },
]);

function gotoPage(url: string) {
  Router.replace(url);
}
</script>

<style lang="less">
.index-page {
  position: relative;
  background-color: #f6f6f6;

  .img {
    width: 100%;
    height: 100%;
  }
  .el-carousel__arrow {
    width: 80px;
    height: 80px;
    background: rgba(0, 0, 0, 0.44);
  }
  .content {
    padding: 10px 30px;
    position: absolute;
    top: -250px;
    left: 20px;
    height: 156px;
    background: rgba(0, 0, 0, 0.44);
    .title {
      color: #fff;
      font-size: 40px;
      letter-spacing: 3px;
    }
    .wid-box {
      margin-top: 50px;
      color: #fff;
      display: flex;
      .wid {
        margin: 6px 10px 0 0;
        width: 4px;
        height: 30px;
        background-color: #fff;
      }
      .text {
        width: 580px;
      }
    }
  }
.bottom-card{
  width: 100%;
  .title {
    margin-left: 20px;
    font-size: 30px;
    color: #e3a609;
  }
  .title-a {
    margin-left: 20px;
    font-size: 20px;
    color: #e3a609;
  }
  
  .layout{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  .card-box {
    margin: 20px 0px;
    .card {
      width: 400px;
      height: 440px;
      background-color: #fff;
      .card-img {
        width: 400px;
        height: 320px;
      }
      .card-text {
        margin: 10px 0 0 10px;
        width: 280px;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
      }
      .time {
        margin: 20px  0 0 10px;
        font-size: 15px;
        font-weight: 700;
      }
    }
  }
 }

}
.bottom-card2{
  width: 100%;
  .title {
    margin-left: 20px;
    font-size: 30px;
    color: #e3a609;
  }
  .title-a {
    margin-left: 20px;
    font-size: 20px;
    color: #e3a609;
  }
    .layout{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  .card-box {
    margin: 20px 0px;
    .card {
      width: 400px;
      height: 318px;
      background-color: #fff;
      .card-img {
        width: 400px;
        height: 200px;
      }
      .card-text {
        margin: 10px 0 0 10px;
        width: 280px;
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
      }
      .time {
        margin: 20px  0 0 10px;
        font-size: 15px;
        font-weight: 700;
      }
    }
  }
 }

}
}
</style>
