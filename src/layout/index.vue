<script lang="ts" setup>
import LogoUrl from "@/assets/logo.png";
import Router from "@/router/index";
import { ref } from "vue"

const index = ref()

function gotoPage(url: string) {
  Router.replace(url);
  index.value = -1 
}

function gotoLogin(url: string) {
  Router.replace(url);
}

function gotoPageTab(url: string,e:number) {
  Router.replace(url);
  index.value = e
}

</script>

<template>
  <!-- head bar-->
  <div class="page">
    <el-row class="head">
      <el-col :span="6">
        <div @click="gotoPage('/index',)" class="title-logo">
          <div class="left">
            <img class="left" src="@/static/icon/lpes.png" alt="" />
          </div>
          <div class="right">
            <img class="right" src="@/static/icon/logo.png" alt="" />
          </div>
        </div>
      </el-col>
      <el-col class="label" :span="2" @click="gotoPageTab('/fators',0)">
      <div class="title">指标示范</div>
      <div  v-show="index == 0" class="value"></div>
      </el-col>
      <el-col class="label" :span="2" @click="gotoPageTab('/items',1)">
      <div class="title">绩效评价</div>
      <div  v-show="index == 1" class="value"></div>
      </el-col>
      <el-col class="label" :span="2" @click="gotoPageTab('/cases',2)">
      <div class="title">评价案例</div>
      <div  v-show="index == 2" class="value"></div>
      
      </el-col>
      <el-col class="label" :span="2" @click="gotoPageTab('/help',3)">
      <div class="title">帮助中心</div>
      <div  v-show="index == 3" class="value"></div>
      </el-col> 
      <el-col class="label" :span="2" @click="gotoPageTab('/downloads',4)">
      <div class="title">下载中心</div>
      <div  v-show="index == 4" class="value"></div>
      </el-col>
      <el-col class="label" :span="8" @click="gotoLogin('/downloads')">
        <div class="login">
          <div class="login-left">登录</div>
          <div class="login-right">注册</div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24"></el-col>
      <el-col :span="24">
        <router-view />
      </el-col>
      <el-col :span="24">
        <div class="base">
        <div class="code-box">
           <div class="code">
            <img class="code" src="../static/img/code.png" alt="" />
          </div>
            <div class="name">景观绩效评价平台公众号</div>
        </div>
          <div class="yellow"></div>
          <div  class="site">
            <div>北京林业大学郑曦教授工作室 Beijing Forestry University ZXGroup</div>
            <div>
              办公地址Office Address：北京海淀区清华东路35号北京林业大学学研中心 A1406
            </div>
            Room 1406, Building A, Academic Research Center, Beijing Forestry Univers ity,
            No.35 Tsinghua East Road, Haidian District,Beijing, P.R.China
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less">
.page {
  .head {
    height: 70px;
    background: #000;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .label {
      cursor: pointer;
      .title{
        width: 70px;
        height: 25px;
        line-height: 25px;
      }
      .value {
      width: 63px;
      height: 10px;
      border-bottom: 3px solid #fff;
      cursor: pointer;
    }
    }

    .title-logo {
      margin-left: 25px;
      display: flex;
      cursor: pointer;
    }
    .left {
      margin-right: 15px;
      width: 79px;
      height: 46px;
    }
    .right {
      width: 201px;
      height: 41px;
    }
    .login {
      display: flex;
      justify-content: flex-end;
      margin-right: 15px;
    }
    .login-left {
      margin-right: 20px;
      width: 52px;
      height: 32px;
      border: 1px solid #facc00;
      text-align: center;
      line-height: 32px;
      color: #facc00;
      cursor: pointer;
    }
    .login-right {
      background-color: #facc00;
      width: 52px;
      height: 32px;
      border: 1px solid #facc00;
      text-align: center;
      line-height: 32px;
      color: #000;
      cursor: pointer;
    }
  }
  .base {
    width: 100%;
    height: 167px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .code-box{
      margin-left: 50px;
      width: 300px;
    .code {
      margin-left: 25px;
      width: 100px;
      height: 100px;
    }
    .name{
      margin-top: 10px;
      width: 200px;
      color: #fff;
      text-align: center;
    }
    }
    .yellow{
      margin-right: 50px;
      width: 8px;
      height: 140px;
      background-color: #facc00;
    }
    .site{
      color: #fff;
    }
  }
}
</style>
