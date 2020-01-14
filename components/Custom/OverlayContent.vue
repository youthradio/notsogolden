<template>
  <div
    v-if="isEnable"
    class="overlay"
    @click="toggle"
  />
</template>

<script>
export default {
  props: {
    topic: {
      type: Object,
      require: true,
      default: null
    }
  },
  data () {
    return {
      isEnable: false
    }
  },
  computed: {

  },
  methods: {
    toggle () {
      this.isEnable = !this.isEnable
    }
  }
}
</script>

<style lang="scss" scoped>
.overlay{
  z-index: 1000;
  position: fixed;
  height: 100%;
  width: 100%;
  background-color:rgba(gray, 0.8);
  top:0px;
  left: 0px;
}
</style>
