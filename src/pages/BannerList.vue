<template>
  <div id="bannerList">
    <Layout type="button"
            span="12"/>
    <!-- <el-row>
      <input type="text" class="bannerList">
      <el-button type="primary">主要按钮</el-button>
    </el-row>
    <el-row>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
    </el-row> -->
  </div>
</template>

<script>
import Layout from '../components/Layout/Layout'
export default {
  name: 'BannerList',
  data() {
    return {

    }
  },
  components:{Layout}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bannerList {

}
</style>
