<template>
  <header class="article-header">
    <div class="top-container title">
      <h1> {{ articleData.title }} </h1>
      <h3> {{ articleData.subtitle }} </h3>
    </div>
    <div class="bg-container">
      <img
        :data-srcset="`${headerImg}x300.jpg 375w,
        ${headerImg}x750.jpg 563w,
        ${headerImg}x1050.jpg 1125w,
        ${headerImg}x1350.jpg 1500w,
        ${headerImg}x1500.jpg 1875w,
        `"
        :data-src="`${headerImg}x1500.jpg`"
        alt="The golden gate bridge"

        class="img-fluid lazyload bg-srcimg"
        @load="updateHeaderHeight"
      >
    </div>
  </header>
</template>

<script>

export default {
  components: {
  },
  mixins: [
  ],
  props: {
    articleData: {
      required: false,
      type: Object,
      default: null
    }
  },
  data () {
    return {
    }
  },
  computed: {
    headerImg () {
      return this.articleData.featureImage.trim()
    }
  },
  watch: {

  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
@import "~@/css/vars";
@import "~@/css/base";
@import "~@/css/mixins";

.title{
  font-family: $baseFont;
  font-size: 3rem;
}

.article-header{
  margin: 0 0 0 -0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.top-container{
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1;
  h1 {
      font-size: 50%
    }
  @include breakpoint(small){
    h1 {
      font-size: 100%;
    }
  }
  h3 {
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
  }
}

.bg-container{
  z-index: 0;
  width: 100%;
  background-color: #FFDF38;
}
.bg-srcimg{
  opacity: 0.5;
  width: 100%;
  max-width: 100%;
  object-fit: contain;
  vertical-align: top;
}
</style>
