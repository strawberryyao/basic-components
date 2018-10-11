<template>
  <div>
    <el-input type="text"
              v-model="oVal"
              @change="change"
              :disabled="disabled"
              :placeholder="placeholder"/>
    <div class="el-form-item_error" v-if="isErr"><i class="el-icon-error">{{errText}}</i></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      oVal_: ''
    }
  },
  props:{
    disabled:{type:Boolean,required:false},
    placeholder: {type: String, default: ''}
  },
  oVal:{
    get(){
      
    },
    set (oVal){
      this.oVal_ = oVal
    }
  }
}
</script>

<style>

</style>
