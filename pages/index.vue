<template>
  <div class="container">
    <h1 class="title">
      Getting by in California
    </h1>
    <div class="row">
      <div class="img-container">
        <img src="https://picsum.photos/200">
      </div>
      <carousel class="slide-parent">
        <slide class="slide-container">
          Transportation Costs of Attending College
        </slide>
        <slide class="slide-container">
          Homeless Community College Students
        </slide>
        <slide class="slide-container">
          Rising Tuition Costs
        </slide>
        <slide class="slide-container">
          Tuition Costs (graphic)
        </slide>
      </carousel>
    </div>

    <div class="row">
      <div class="img-container">
        <img src="https://picsum.photos/200">
      </div>
      <carousel>
        <slide class="slide-container">
          Transportation Costs of Attending College
        </slide>
        <slide class="slide-container">
          Slide 2
        </slide>
        <slide class="slide-container">
          Slide 3
        </slide>
        <slide class="slide-container">
          Slide 4
        </slide>
      </carousel>
    </div>

    <div class="row">
      <div class="img-container">
        <img src="https://picsum.photos/200">
      </div>
      <carousel>
        <slide class="slide-container">
          Transportation Costs of Attending College
        </slide>
        <slide class="slide-container">
          Slide 2
        </slide>
        <slide class="slide-container">
          Slide 3
        </slide>
        <slide class="slide-container">
          Slide 4
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import CommonUtils from '../mixins/CommonUtils'
import ArticleData from '../data/data.json'

export default {
  components: {
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

.row{
  display: flex;
  margin: 0 0 1rem 0rem;
}

.container {
  padding: 0 0 0 1rem;
}

.slide-parent{
}

.title{
  font-family: $baseFont;
  font-size: 3rem;
}

.img-container{
  border-top: 8px $green solid;
}

.slide-container{
  border-top: 8px $green solid;
  font-weight: 600;
  margin: 0 2rem 0 2rem;
  cursor: pointer;
}

</style>
