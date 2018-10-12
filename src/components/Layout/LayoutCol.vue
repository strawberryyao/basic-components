<template>
  <span>
    <el-col :span="span" :offset="offset_">
      <LayoutOpt :type="type"
                 :disabled="disabled"
                 :placeholder="placeholder"
                 :itemClass="itemClass"
                 :title="title"/>
    </el-col>
  </span>
</template>

<script>
import LayoutOpt from './LayoutOpt'
export default {
  data(){
    return {
      offset_:0
    }
  },
  props:{
    span: { type: String, required: false },
    type: { type: String, required: false },
    disabled:{ type:Boolean,required:false },
    itemClass: {type: String, required: false},
    placeholder:{ type:String,required:false },
    title:{ type: String,requried: false}
  },
  components:{
    LayoutOpt
  },
  mounted:function(){

  }
}
</script>

<style>

</style>
