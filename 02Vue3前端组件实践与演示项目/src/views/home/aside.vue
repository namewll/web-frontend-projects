<template>
   
      <el-menu  class="el-menu-vertical-demo" default-active="2" text-color="#fff" active-text-color="#ffd04b" background-color="#545c64" >
        <el-sub-menu index="1">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>首页</span>
                </template>
                 <el-menu-item-group title="Group One">
                    <router-link to="/index/first" style="text-decoration: none;"><el-menu-item index="1-1">进度条</el-menu-item></router-link>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title>统计组件</template>
                    <router-link to="/index/time" style="text-decoration: none;">
                        <el-menu-item index="1-4-1">倒计时</el-menu-item>
                    </router-link>
                </el-sub-menu>
        </el-sub-menu>

        <router-link to="/index/direct" style="text-decoration: none;">
            <el-menu-item index="2">
                <el-icon><Collection /></el-icon>
                <span>漫游式引导</span>
            </el-menu-item>
        </router-link>
        

        <router-link to="/index/user" style="text-decoration: none;"> 
            <el-menu-item index="3">
                <el-icon><document /></el-icon>
                <span>表格数据</span>
            </el-menu-item>
        </router-link>

        <router-link to="/index/lbt" style="text-decoration: none;">
            <el-menu-item index="4">
                <el-icon><Setting /></el-icon>
                <span>走马灯</span>
            </el-menu-item>
        </router-link>
        
      </el-menu>


</template>

<script>
    export default{
        name:'Aside'
    }

</script>

<style>
.el-menu-vertical-demo{
    height: 800px;
    width: 200px;
}

</style>