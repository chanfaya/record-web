<template>
    <div class="common-layout">
      <el-container style="height: 100%;">
        <el-aside width="200px">
            <Title/>
            <Menu/>
        </el-aside>
        <el-container >
          <el-header>
            <Header/>
          </el-header>
          <el-main>
            <Main/>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>
<script setup lang="ts">
import Title from '@/layout/components/TitleComp.vue'
import Menu from '@/layout/components/MenuComp.vue'
import Main from '@/layout/components/MainComp.vue'
import Header from '@/layout/components/HeaderComp.vue'
</script>
<style scoped lang="less">
  .common-layout {
    height: 100%;
    width: 100%;
  }
</style>
  