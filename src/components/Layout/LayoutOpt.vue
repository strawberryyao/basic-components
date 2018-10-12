<template>
  <span class="Layout">
    <Button class="button"
            v-if="type==='button'"
            :class="itemClass"
            :title="title"></Button>
    <Input :disabled="disabled"
           :placeholder="placeholder"
           :isErr="isErr" />
  </span>
</template>

<script>
import Button from '../Button/Button'
import Input from '../Input/Input'
export default {
  data () {
    return {
      oVal: '',
      isErr:false,
    }
  },
  props:{
    type: {type: String, required: false},
    disabled: {type: Boolean, required: false},
    placeholder:{type: String, required: false},
    itemClass: {type: String, required: false},
    title:{ type: String,requried: false}
  },
  components:{
    Button,
    Input
  },
  beforeCreate(){

  },
  mounted () {

  }
}
</script>

<style>
  .Layout{
    display: flex
  }
</style>
