<template>
  <div class="common-layout">
    <el-container>
      <el-container>
            <Aside></Aside>
        <el-container>
          <el-main><router-view></router-view></el-main>
          <el-footer><Foot></Foot></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    import Aside from '../home/aside.vue'
    import Foot from '../home/Foot.vue';
    export default{
        components:{
            Aside,
            Foot
        }
    }
</script>

<style>
</style>