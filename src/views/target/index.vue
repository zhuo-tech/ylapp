<template>
  <div class="target-page">
    <el-row class="tac">
      <div @click="gotoTarget('/')" class="home">返回首页</div>
      <el-col :span="5" class="sidebar">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <h3 class="mb-2">&emsp;筛选</h3>

          <el-sub-menu @click="cut(1)" index="1">
            <template #title>
              <span>安全韧性</span>
            </template>
            <el-menu-item index="1-1">生态格局</el-menu-item>
            <el-menu-item  @click="skip" index="1-2">地址安全</el-menu-item>
            <el-menu-item index="1-3">水安全</el-menu-item>
            <el-sub-menu index="1-4">
              <template #title>耕地安全</template>
              <el-menu-item index="1-4-1">耕地安全</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>

          <el-menu-item @click="cut(2)" index="2">
            <span>生态调节</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span>生物多样性</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span>健康舒适</span>
          </el-menu-item>

          <el-sub-menu index="5">
            <template #title>
              <span>创新活力</span>
            </template>
            <el-menu-item index="5-1">生态格局</el-menu-item>
            <el-menu-item index="5-2">地址安全</el-menu-item>
            <el-menu-item index="5-3">水安全</el-menu-item>
            <el-sub-menu index="5-4">
              <template #title>耕地安全</template>
              <el-menu-item index="5-4-1">耕地安全</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-col>


      <el-col v-show="cutIndex==1" :span="10">
        <div class="target-input">
          <div class="input"><el-input v-model="input" placeholder="输入搜索内容" /></div>
          <div class="search">搜索</div>
          <div class="sort">排序方式</div>
        </div>
        <div class="right">
          <div class="tar-title">
            <div>安全韧性</div>
            <div class="cleat">清除全部</div>
            <div class="all">选择全部</div>
          </div>
          <div class="hint">
            参考《国土空间规划城市体检评估规程》、 《关于开展2021年城市体检工作的通知》、
            《村镇乡土景观资源评价标准》、《乡村建设评价工作》
            等各部委政策文件设定“安全韧性”模块。用以表征乡村生态景观系统在多种灾害换种的承受、
            适应和恢复能力
          </div>

          <div class="from">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="生态格局" name="1">

              <el-collapse-item class="emsp" title="生态" name="2">
                <div>这是一个标题</div>
                <div class="ensp">
                  <div class="checkbox">选择的&ensp;</div>
                  <el-checkbox   v-model="checked1" label="" size="large" />
                </div>
              </el-collapse-item>

                      <el-collapse-item class="emsp" title="格局" name="2">
                <div>这是一个标题</div>
                <div class="ensp">
                  <div class="checkbox">选择的&ensp;</div>
                  <el-checkbox   v-model="checked1" label="" size="large" />
                </div>
              </el-collapse-item>

              </el-collapse-item>

              <el-collapse-item title="地质安全" name="2">
                <div></div>
              </el-collapse-item>

              <el-collapse-item title="水安全" name="3">
                <div></div>
              </el-collapse-item>

              <el-collapse-item title="生态调节" name="4">
                <div></div>
              </el-collapse-item>

              <el-collapse-item title="生物多样性" name="5">
                <div></div>
              </el-collapse-item>

              <el-collapse-item title="健康舒适" name="6">
                <div></div>
              </el-collapse-item>

              <el-collapse-item title="创新活力" name="7">
                <div></div>
              </el-collapse-item>
            </el-collapse>

            <div class="select">已选指标</div>
          </div>
        </div>

      </el-col>



      <el-col v-show="cutIndex==2" :span="10">
        <div class="target-input">
          <div class="input"><el-input v-model="input" placeholder="输入搜索内容" /></div>
          <div class="search">搜索</div>
          <div class="sort">排序方式</div>
        </div>
        <div class="right">
          <div class="tar-title">
            <div>安全韧性</div>
            <div class="cleat">清除全部</div>
            <div class="all">选择全部</div>
          </div>
          <div class="hint">
            参考《国土空间规划城市体检评估规程》、 《关于开展2021年城市体检工作的通知》、
        
          </div>

          <div class="from">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="生态调节" name="1">

              <el-collapse-item class="emsp" title="生态" name="2">
                <div>这是一个标题</div>
                <div class="ensp">
                  <div class="checkbox">选择的&ensp;</div>
                  <el-checkbox   v-model="checked1" label="" size="large" />
                </div>
              </el-collapse-item>

              <el-collapse-item class="emsp" title="格局" name="2">
                <div>这是一个标题</div>
                <div class="ensp">
                  <div class="checkbox">选择的&ensp;</div>
                  <el-checkbox   v-model="checked1" label="" size="large" />
                </div>
              </el-collapse-item>

              </el-collapse-item>

              <el-collapse-item title="生态调节" name="2">
                <div></div>
              </el-collapse-item>

              <el-collapse-item title="生态调节" name="3">
                <div></div>
              </el-collapse-item>

              <el-collapse-item title="生态调节" name="4">
                <div></div>
              </el-collapse-item>

              <el-collapse-item title="生态调节" name="5">
                <div></div>
              </el-collapse-item>

              <el-collapse-item title="生态调节" name="6">
                <div></div>
              </el-collapse-item>

              <el-collapse-item title="生态调节" name="7">
                <div></div>
              </el-collapse-item>
            </el-collapse>

            <div class="select">已选指标</div>
          </div>
        </div>
        
      </el-col>

    </el-row>

    <el-col :span="24" class="worldly"> </el-col>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Router from "@/router/index";

//选择框默认值
const checked1 = ref(false)

//默认展开的表单
const activeNames = ref(["1"]);
//搜索框
const input = ref("");
//选的某一项
const cutIndex=ref(1)

//导航
function skip(){
  activeNames.value[0] ='2'
  console.log(activeNames.value[0]);
  
}

//选择的页面
function cut(e:number){
cutIndex.value = e
}


const handleChange = (val: string[]) => {
  console.log(val); 
};

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

function gotoTarget(url: string) {
  Router.replace(url);
}
</script>

<style lang="less">
.target-page {
  position: relative;
  background-color: #f6f6f6;
  .home {
    position: absolute;
    left: 120px;
    top: 50px;
    width: 100px;
    height: 30px;
    background-color: #facc00;
    border-radius: 10px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
  }
  .tac {
    .sidebar {
      margin: 80px 100px 50px 120px;
      .mb-2 {
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #dbdbdb;
      }
    }
    .target-input {
      width: 1165px;
      display: flex;
      margin-top: 40px;
      .input {
        width: 1000px;
      }
      .search {
        margin-left: 20px;
        width: 90px;
        height: 32px;
        background-color: #facc00;
        border-radius: 10px;
        text-align: center;
        line-height: 32px;
      }
      .sort {
        width: 100px;
        margin-left: 10px;
        color: #000;
        height: 32px;
        line-height: 32px;
      }
    }
    .right {
      padding: 15px;
      margin: 25px 0;
      width: 1150px;
      background-color: #fff;
      .tar-title {
        display: flex;
        .cleat {
          margin-left: 25px;
          width: 80px;
          height: 18px;
          line-height: 18px;
          text-align: center;
          border: 2px solid #999999;
          font-size: 14px;
          border-radius: 5px;
        }
        .all {
          margin-left: 25px;
          width: 80px;
          height: 22px;
          line-height: 22px;
          text-align: center;
          background-color: #ffd600;
          font-size: 14px;
          border-radius: 5px;
        }
      }
      .hint {
        margin-top: 20px;
        color: #888888;
      }

    .from{
        margin-top: 30px;
        .emsp{
          margin-left: 20px;
        }
        .ensp{
          display: flex;
          margin-left: 20px;
        .checkbox{
          height: 50px;
          line-height: 50px;
        }
        }
        .select{
          margin-top: 20px;
          width: 100px;
          height: 30px;
          background-color: #ffd600;
          text-align: center;
          line-height: 30px;
          border-radius: 10px;

        }
      }
  
    }

  }
}
</style>
