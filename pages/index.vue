<template>
  <div class="container">
    <h1 class="title">
      Getting by in California
    </h1>
    <SlideContainer slide-title="Big title test right now blah" />
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
  data () {
    return {
    }
  },
  computed: {},
  watch: {

  },
  asyncData (ctx) {
    return {
      articleData: ArticleData.content
    }
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
