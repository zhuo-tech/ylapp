<script lang="ts" setup>
import LogoUrl from "@/assets/logo.png";
import Router from "@/router/index";
import { ref } from "vue";
//选择的tab
const index = ref();
//登录切换状态
const loginIndex = ref(0);

//登录弹窗
const loginPopup = ref(false);

//注册弹窗
const registerPopup = ref(false);

//登录切换
function loginCut(e: number) {
  loginIndex.value = e;
}

//登录切换注册账号
function showregister(){
  loginPopup.value=false
  registerPopup.value = true
}


//注册切换登录
function showlogin(){
  loginPopup.value=true
  registerPopup.value = false
}

//tba栏选择
function gotoPage(url: string) {
  Router.replace(url);
  index.value = -1;
}

//路由跳转
function gotoLogin(url: string) {
  Router.replace(url);
}

//确定选择的是哪一个tab添加样式
function gotoPageTab(url: string, e: number) {
  Router.replace(url);
  index.value = e;
}
</script>

<template>
  <!-- head bar-->
  <div class="page">
    <div v-show="loginPopup" class="mask"></div>
    <div v-show="registerPopup" class="mask"></div>
    <el-row class="head">
      <el-col :span="6">
        <div @click="gotoPage('/index')" class="title-logo">
          <div class="left">
            <img class="left" src="@/static/icon/lpes.png" alt="" />
          </div>
          <div class="right">
            <img class="right" src="@/static/icon/logo.png" alt="" />
          </div>
        </div>
      </el-col>
      <el-col class="label" :span="2" @click="gotoPageTab('/fators', 0)">
        <div class="title">指标示范</div>
        <div v-show="index == 0" class="value"></div>
      </el-col>
      <el-col class="label" :span="2" @click="gotoPageTab('/items', 1)">
        <div class="title">绩效评价</div>
        <div v-show="index == 1" class="value"></div>
      </el-col>
      <el-col class="label" :span="2" @click="gotoPageTab('/cases', 2)">
        <div class="title">评价案例</div>
        <div v-show="index == 2" class="value"></div>
      </el-col>
      <el-col class="label" :span="2" @click="gotoPageTab('/help', 3)">
        <div class="title">帮助中心</div>
        <div v-show="index == 3" class="value"></div>
      </el-col>
      <el-col class="label" :span="2" @click="gotoPageTab('/downloads', 4)">
        <div class="title">下载中心</div>
        <div v-show="index == 4" class="value"></div>
      </el-col>
      <el-col class="label" :span="8">
        <div class="login">
          <div @click="loginPopup = true" class="login-left">登录</div>
          <div @click="registerPopup = true" class="login-right">注册</div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div v-show="loginPopup" class="pop-up">
          <el-icon @click="loginPopup = false" class="xx" color="#000" :size="24"
            ><Close
          /></el-icon>
          <div class="login-name">
            <div @click="loginCut(0)" :class="loginIndex == 0 ? 'note' : 'select'">
              短信登录
            </div>
            <div @click="loginCut(1)" :class="loginIndex == 1 ? 'note' : 'select'">
              密码登录
            </div>
          </div>

          <!-- 短信登录 -->
          <div v-show="loginIndex == 0">
            <div class="input-box">
              <input
                type="number"
                maxlength="11"
                class="input"
                placeholder="请输入手机号码"
              />
            </div>
            <div class="input-box">
              <input
                type="number"
                class="input"
                maxlength="6"
                placeholder="请输入验证码"
              />
            </div>
            <div class="but">发送短信验证码</div>
            <div class="new-box">
              <div @click="showregister" class="new">注册账号</div>
              <div class="forget">忘记密码</div>
            </div>
            <div class="hint">第三方登录</div>
            <div class="wx">
              <div class="wx-icon">
                <img class="wx-icon" src="../static/icon/wx.png" alt="" />
              </div>
              <div class="wx-size">微信登录</div>
            </div>
          </div>
          <!-- 密码登录 -->
          <div v-show="loginIndex == 1">
            <div class="input-box">
              <input type="number" class="input" placeholder="请输入手机号码" />
            </div>
            <div class="input-box">
              <input
                type="number"
                class="input"
                maxlength="16"
                placeholder="请输入密码"
              />
            </div>
            <div class="but">登录</div>
            <div class="new-box">
              <div class="new">注册账号</div>
              <div class="forget">忘记密码</div>
            </div>
            <div class="hint">第三方登录</div>
            <div class="wx">
              <div class="wx-icon">
                <img class="wx-icon" src="../static/icon/wx.png" alt="" />
              </div>
              <div class="wx-size">微信登录</div>
            </div>
          </div>
        </div>

        <!-- 注册------------------------------------------------------------------- -->

        <div v-show="registerPopup" class="pop-up-a">
          <el-icon @click="registerPopup = false" class="xx" color="#000" :size="24"
            ><Close
          /></el-icon>
          <div class="login-name">
            <div @click="loginCut(0)" :class="loginIndex == 0 ? 'note' : 'select'">
              手机注册
            </div>
            <div @click="loginCut(1)" :class="loginIndex == 1 ? 'note' : 'select'">
              邮箱注册
            </div>
          </div>

          <!-- 短信登录 -->
          <div v-show="loginIndex == 0">
            <div class="input-box">
              <input type="number" class="input" placeholder="请输入手机号码" />
            </div>
            <div class="input-box">
              <input
                type="number"
                class="input"
                maxlength="6"
                placeholder="请输入验证码"
              />
            </div>
            <div class="but">下一步</div>
            <div @click="showlogin" class="new-box-a">已有账号登录</div>
          </div>
          <!-- 密码登录 -->
          <div v-show="loginIndex == 1">
            <div class="input-box">
              <input type="text" maxlength="20" class="input" placeholder="请输入邮箱" />
            </div>
            <div class="input-box">
              <input
                type="number"
                class="input"
                maxlength="16"
                placeholder="请输入密码"
              />
            </div>
            <div class="but">登录</div>
            <div @click="showlogin" class="new-box-a">已有账号登录</div>
          </div>
        </div>
      </el-col>
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
          <div class="site">
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
  position: relative;
  .head {
    height: 70px;
    background: #000;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .label {
      cursor: pointer;
      .title {
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
      border-radius: 5px;
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
      border-radius: 5px;

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
  .mask {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: -1px;
    z-index: 20;
    background: rgba(0, 0, 0, 0.44);
  }
  .pop-up {
    position: absolute;
    top: 40px;
    left: 700px;
    width: 500px;
    height: 580px;
    background-color: #fff;
    border-radius: 30px;
    z-index: 100;
    
    .xx {
      position: absolute;
      top: 10px;
      right: 20px;
        cursor: pointer;
    }
    .login-name {
      display: flex;
      margin: 50px 0 0 50px;
      font-size: 22px;
      .note {
        text-align: center;
        width: 200px;
        height: 40px;
        line-height: 30px;
        border-bottom: 4px solid #facc00;
        cursor: pointer;
      }
      .select {
        text-align: center;
        width: 200px;
        height: 40px;
        line-height: 30px;
        border-bottom: 4px solid #999999;
        color: #999999;
        cursor: pointer;
      }
    }
    .input-box {
      margin: 30px 0 0 80px;
      width: 350px;
      height: 50px;
      border: 1px solid #facc00;
      border-radius: 50px;
      .input {
        margin-left: 5px;
        width: 330px;
        height: 44px;
        border: 0px;
        outline: none;
        border-radius: 50px;
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
      }
      input {
        -moz-appearance: textfield;
      }
    }
    .but {
      margin: 30px 0 0 80px;
      width: 350px;
      height: 50px;
      border: 1px solid #facc00;
      border-radius: 50px;
      background-color: #facc00;
      text-align: center;
      line-height: 50px;
      color: #fff;
      cursor: pointer;
    }
    .new-box {
      margin: 20px 0 0 80px;
      width: 350px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      color: #808080;
      .new{
        cursor: pointer;
      }
      .forget{
        cursor: pointer;
      }
    }
    .hint {
      margin-left: 80px;
      width: 350px;
      height: 40px;
      text-align: center;
      color: #808080;
    }
    .wx {
      margin: 10px 0 0 80px;
      display: flex;
      justify-content: center;
      width: 350px;
      height: 50px;
      border-radius: 50px;
      border: 1px solid #d9d9d9;
      cursor: pointer;
      .wx-icon {
        margin: 5px 10px 0 0;
        width: 30px;
        height: 30px;
      }
      .wx-size {
        width: 100px;
        height: 50px;
        line-height: 50px;
      }
    }
  }
  .pop-up-a {
    position: absolute;
    top: 40px;
    left: 700px;
    width: 500px;
    height: 480px;
    background-color: #fff;
    border-radius: 30px;
    z-index: 100;
    .xx {
      position: absolute;
      top: 10px;
      right: 20px;
    }
    .login-name {
      display: flex;
      margin: 50px 0 0 50px;
      font-size: 22px;
      .note {
        text-align: center;
        width: 200px;
        height: 40px;
        line-height: 30px;
        border-bottom: 4px solid #facc00;
        cursor: pointer;
      }
      .select {
        text-align: center;
        width: 200px;
        height: 40px;
        line-height: 30px;
        border-bottom: 4px solid #999999;
        color: #999999;
        cursor: pointer;
      }
    }
    .input-box {
      margin: 30px 0 0 80px;
      width: 350px;
      height: 50px;
      border: 1px solid #facc00;
      border-radius: 50px;
      .input {
        margin-left: 5px;
        width: 330px;
        height: 44px;
        border: 0px;
        outline: none;
        border-radius: 50px;
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
      }
      input {
        -moz-appearance: textfield;
      }
    }
    .but {
      margin: 30px 0 0 80px;
      width: 350px;
      height: 50px;
      border: 1px solid #facc00;
      border-radius: 50px;
      background-color: #facc00;
      text-align: center;
      line-height: 50px;
      color: #fff;
      cursor: pointer;
    }

    .new-box-a {
      margin: 20px 0 0 80px;
      width: 350px;
      height: 40px;
      text-align: center;
      color: #808080;
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
    .code-box {
      margin-left: 50px;
      width: 300px;
      .code {
        margin-left: 25px;
        width: 100px;
        height: 100px;
      }
      .name {
        margin-top: 10px;
        width: 200px;
        color: #fff;
        text-align: center;
      }
    }
    .yellow {
      margin-right: 50px;
      width: 8px;
      height: 140px;
      background-color: #facc00;
    }
    .site {
      color: #fff;
    }
  }
}
</style>
