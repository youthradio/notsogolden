<template>
  <div>
    <HeaderContainer :article-data="articleData" />

    <div class="player">
      <h2 class="breadcrumb">
        <NuxtLink to="/">
          Home
        </NuxtLink>
        ->
        {{ theme.title }}
      </h2>
      <CustomFormat :topic="topic" />
    </div>
  </div>
</template>

<script>
import CustomFormat from '../../../components/Custom/CustomFormat'
import HeaderContainer from '../../../components/Header/HeaderContainer2'

export default {
  components: {
    CustomFormat,
    HeaderContainer

  },
  validate ({ env, params }) {
    // validade is input params thems is in avalable list
    const theme = env.ArticleData.content.themes.find(theme => theme.slug === params.theme)
    return theme.topics.map(t => t.slug).includes(params.topic)
  },
  asyncData ({ params, env, error }) {
    const theme = env.ArticleData.content.themes.find(theme => theme.slug === params.theme)
    const topic = theme.topics.find(topic => topic.slug === params.topic)

    // if (!theme) {
    // return error({ message: 'Theme not found', statusCode: 404 })
    // }
    return { articleData: env.ArticleData.content, topic, theme }
  },
  // validate ({ params }) {
  //   return !isNa(+params.theme)
  // },
  mounted () {
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 27 || e.keyCode === 32) {
        this.$router.back()
      }
    })
  },
  head () {
    return {
      title: this.name
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/css/vars";
@import "~@/css/base";
@import "~@/css/mixins";

.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s, transform 0.4s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  opacity: 1;
}

.player{
  background-color: #C4C4C4 !important;
}
.page-enter,
.page-leave-active {
  opacity: 0.5;
  transform: translateX(+100%);
}

.breadcrumb {
  font-family: $baseFont;
  font-size: 60%;

  color: $red;
  a {
    color: $red;
  }
  padding: 0.2rem 6rem 0rem 6rem;
}
</style>
