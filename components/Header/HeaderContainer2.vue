<template>
  <header class="article-header">
    <div :class="[headType === 'main' ? 'top-container title' : 'sub-container sub-title' ]">
      <article v-if="headType === 'main'">
        <h1> {{ articleData.title }} </h1>
        <p> {{ articleData.subtitle }} </p>
      </article>
      <article v-if="headType === 'subpage'">
        <h2>
          {{ articleData.title }}
        </h2>
        <p>
          {{ articleData.subtitle }}
        </p>
      </article>
    </div>
    <div v-if="headType === 'main'" :class="[headType === 'main' ? 'bg-container' : '' ]">
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
    },
    headType: {
      required: false,
      type: String,
      default: 'main'
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

.sub-title, .title{
  h1,h2,p{
    padding: 0;
    }
}

.article-header{
  margin: 0 0 0 -0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.sub-container{
  background-color: #FFDF38;
  padding-top: 2.3rem;

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
    }
  @include breakpoint(small){
    h1 {
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
