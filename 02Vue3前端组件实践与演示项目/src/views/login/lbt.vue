<template>
  <el-carousel :interval="4000" type="card" height="300px" class='el-carousel1'>
    <el-carousel-item  v-for="(path,index) in img_list" :key="index">
      <img :src="path" height="300px" width="300px">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default{
        data(){
            return{
                img_list:[
                    require('../../assets/lbt_imgs/img_1.jpeg'),
                    require('../../assets/lbt_imgs/img_2.jpeg'),
                    require('../../assets/lbt_imgs/img_3.jpeg'),
                    require('../../assets/lbt_imgs/img_4.jpeg'),
                    require('../../assets/lbt_imgs/img_5.jpeg'),
                    require('../../assets/lbt_imgs/img_6.jpeg')
                ]
            }
        }
    }
</script>

<style scoped>

.el-carousel__item:nth-child(n) {
  background-color: #bf99aa;
}
.el-carousel1{
    width: 600px;
}

</style>
