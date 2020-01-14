<template>
  <div
    v-if="isEnable"
    class="overlay"
  >
    <h1> test </h1>
    <CustomFormat
      :format="topicFormat"
      :link="topicLink"
    />
    <a
      href=""
      @click.prevent="toggle"
    >
      <h2>
        CLOSE
      </h2>
    </a>
  </div>
</template>

<script>
import CustomFormat from './CustomFormat'

export default {
  components: {
    CustomFormat
  },
  props: {
    topic: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      isEnable: false
    }
  },
  computed: {
    topicFormat () {
      if (this.topic) {
        return this.topic.format.trim()
      }
      return null
    },
    topicLink () {
      if (this.topic) {
        return this.topic.link.trim()
      }
      return null
    }
  },
  watch: {
    topic () {
      this.isEnable = true
    }
  },
  methods: {
    toggle () {
      this.isEnable = !this.isEnable
    },
    setState (state) {
      this.isEnable = state
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
  background-color:rgba(gray, 1);
  top:0px;
  left: 0px;
  overflow-y: scroll;
}
</style>
