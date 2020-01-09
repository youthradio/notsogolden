<template>
  <div class="container">
    <h1 class="title">
      Getting by in California
    </h1>
    <SlideContainer
      v-for="theme in articleData.themes"
      :key="theme.title"
      :slide-content="theme"
    />
  </div>
</template>

<script>
import CommonUtils from '../mixins/CommonUtils'
import ArticleData from '../data/data.json'
import SlideContainer from '../components/Custom/SlideContainer'

export default {
  components: {
    SlideContainer
  },
  mixins: [
    CommonUtils
  ],
  asyncData (ctx) {
    return {
      articleData: ArticleData.content
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {

  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import "~@/css/vars";
@import "~@/css/base";
@import "~@/css/mixins";

.container {
  padding: 0 0 0 0.2rem;
  width: 100%;
}
.title{
  font-family: $baseFont;
  font-size: 3rem;
}
</style>
