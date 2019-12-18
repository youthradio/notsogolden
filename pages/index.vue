<template>
  <div class="container">
    <HeaderContainer />
    <br> <br>
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
import HeaderContainer from '~/components/Header/HeaderContainer'

export default {
  components: {
    HeaderContainer
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
  margin: 0 1rem 1rem 1rem;
}

.slide-container{
  border-top: 8px $green solid;
  font-weight: 600;
  margin: 0 2rem 0 2rem;
  max-width: 50%;
  cursor: pointer;
}

</style>
