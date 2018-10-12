<template>
  <div id="bannerList">
    <el-row>
      <LayoutCol type="button"
               :disabled="false"
               :placeholder="placeholder"
               :itemClass = 'itemClass'
               title = "查询"
               span="24,6"
                />
    </el-row>
    <el-row class="oBtn">
      <Button title = "新增"/>
      <Button title = "编辑"/>
      <Button title = "删除"/>
    </el-row>
    <template>
      <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
    </template>
  </div>
</template>

<script>
import LayoutCol from '../components/Layout/LayoutCol'
// import Input from '../components/Input/Input'
import Button from '../components/Button/Button'
export default {
  name: 'BannerList',
  data() {
    return {
      placeholder:'请输入banner名称',
      itemClass:'',
      title:'',
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
  },
  components:{ LayoutCol,Button }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bannerList {

}
.oBtn{
  display: flex;
  margin-top: 20px;
}
</style>
