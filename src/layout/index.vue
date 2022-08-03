<script lang="ts" setup>
import LogoUrl from '@/assets/logo.png'
import Router from '@/router/index'




function gotoPage(url: string) {
  Router.replace(url)
}

</script>

<template>
  <!-- head bar-->
  <div>
    <el-row class="head">


      <el-col :span="3" @click="gotoPage('/fators')">指标示范</el-col>
      <el-col :span="3"  @click="gotoPage('/items')">绩效评价</el-col>

       <el-col :span="3"  @click="gotoPage('/cases')">评价案例</el-col>
        <el-col :span="3"  @click="gotoPage('/help')">帮助中心</el-col>
       <el-col :span="3"  @click="gotoPage('/downloads')">下载中心</el-col>

      
     
    </el-row>


    <el-row>
      <el-col :span="3"></el-col>
      <el-col :span="18">
        <router-view />
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.head {
  height: 60px;
  background: #6667ab;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
