<template>
  <span class="Layout">
    <Button :class="itemClass" class="button" v-if="type==='button'"></Button>
    <p v-else-if="type==='string'">{{title_}}</p>
    <Input/>
  </span>
</template>

<script>
import Button from '../Button/Button'
import Input from '../Input/Input'
export default {
  data () {
    return {
      oVal: ''
    }
  },
  props:{
    type: {type: String, required: false},
    disabled: {type: Boolean, required: false}
  },
  components:{
    Button,
    Input
  }
}
</script>

<style>

</style>
