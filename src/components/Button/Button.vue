<template>
  <el-button :type="type_" @click="click" :disabled="disabled">{{title_}}</el-button>
</template>

<script>
export default {
  data () {
    return {
      type_:'',
      title_:''
    }
  },
  props:{
    type:{type:String,required:false},
    title:{type:String,required:false},
    disabled:{type:Boolean,require:false}
  },
  mounted () {
    this.type_ = this.type || 'primary'
    this.title_ = this.title
  },
  methods: {
    click: function () {

    }
  }

}
</script>

<style>

</style>
