<template>
  <div class="container">
    <HeaderContainer :article-data="articleData" />
    <article v-html="articleData.text " />
    <article>
      <SlideContainer
        v-for="theme in articleData.themes"
        :key="theme.title"
        :slide-content="theme"
        class="slide-container"
        @onTopicChange="onTopicChange"
      />
    </article>
    <OverlayContent
      ref="overlay"
      :topic="activeTopic"
      @closeOverlay="closeOverlay"
    />
  </div>
</template>

<script>
import SlideContainer from '../components/Custom/SlideContainer'
import OverlayContent from '../components/Custom/OverlayContent'
import HeaderContainer from '../components/Header/HeaderContainer2'

export default {
  components: {
    SlideContainer,
    OverlayContent,
    HeaderContainer
  },
  asyncData ({ env }) {
    return {
      articleData: env.ArticleData.content
    }
  },
  data () {
    return {
      activeTopic: null
    }
  },
  computed: {},
  watch: {

  },
  mounted () {
  },
  methods: {
    closeOverlay () {
      this.activeTopic = null
    },
    onTopicChange (topic) {
      this.activeTopic = topic
      this.$refs.overlay.setState(true)
    }
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
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s, transform 0.4s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  opacity: 1;
}
.page-enter,
.page-leave-active {
  opacity: 0.5;
  transform: translateX(+100%);
}
</style>
