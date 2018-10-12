<template>
  <div>
    <el-input type="text" v-model="oVal" @change="change" :disabled="disabled" :placeholder="placeholder" />
    <div class="el-form-item_error" v-if="isErr"><i class="el-icon-error">{{errText}}</i></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      oVal_: ''
    }
  },
  props: {
    disabled: { type: Boolean, required: false },
    isErr: { type: Boolean, required: false },
    errText: {type: String, required: false},
    placeholder: { type: String, default: '' }
  },
  computed: {
    oVal: {
      get() {},
      set(oVal) {
        this.oVal_ = oVal
      }
    }
  },
  methods:{
    change(){

    }
  }
}
</script>

<style>
</style>
