<template>
  <div class="container">
    <HeaderContainer :article-data="articleData" />
    <article
      class="b-copy"
      v-html="articleData.text "
    />
    <article>
      <SlideContainer
        v-for="theme in articleData.themes"
        :key="theme.title"
        :slide-content="theme"
        class="slide-container"
        @onTopicChange="onTopicChange"
      />
      <div class="credits">
        <h2>Credits</h2>
        <div
          v-for="credit in articleData.credits"
          :key="credit"
        >
          <h4>{{ credit.title }}</h4>
          <ul>
            <li
              v-for="names in credit.list"
              :key="names"
            >
              {{ names }}
            </li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import SlideContainer from '../components/Custom/SlideContainer'
import HeaderContainer from '../components/Header/HeaderContainer2'

export default {
  components: {
    SlideContainer,
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

.title {
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
.credits {
  margin-top: 2rem;
  font-size: 0.8rem;
  h2 {
    border-bottom: 8px $black solid;
  }
  h4 {
    font-weight: bold;
    font-size: 0.8rem;
  }
  ul {
    margin-top: 0;
    margin-bottom: 0rem;
    padding-left: 0.5rem;
    list-style: none;
  }
}
</style>
