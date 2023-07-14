<template>
    <div class="common-layout" style="border: solid 1px red;">
      <el-container style="height: 100%;" >
        <el-aside width="200px" style="border: solid 1px black; background-color: black;">
            <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
        </el-aside>
        <el-container >
          <el-header style="border: solid 1px rgb(19, 170, 82);">Header</el-header>
          <el-main style="border: solid 1px rgb(20, 140, 161);">Main</el-main>
        </el-container>
      </el-container>
    </div>
</template>
<style scoped lang="less">
  .common-layout {
    height: 100%;
    width: 100%;
  }
</style>
  