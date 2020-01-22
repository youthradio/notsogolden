<template>
  <div>
    <HeaderContainer head-type="subpage" :article-data="articleData" />

    <div>
      <h2 class="breadcrumb">
        <article>
          <NuxtLink to="/">
            Home
          </NuxtLink>
          ->
          {{ theme.title }}
        </article>
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
      title: this.articleData.title,
      meta: [
        { hid: 'description', name: 'description', content: 'POST_DESC' },
        { hid: 'og:title', property: 'og:title', content: this.articleData.title },
        { hid: 'og:site_name', property: 'og:site_name', content: this.articleData.title },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'THIS_URL' },
        { hid: 'og:image', property: 'og:image', content: 'FEATURE_IMAGE_LINK' },
        { hid: 'og:description', property: 'og:description', content: 'POST_DESC' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: 'FEATURE_IMAGE_DESC' },
        { hid: 'twitter:title', name: 'twitter:title', content: this.articleData.title },
        { hid: 'twitter:description', name: 'twitter:description', content: 'POST_DESC' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'FEATURE_IMAGE_LINK' },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'FEATURE_IMAGE_DESC' },
        { hid: 'itemprop:description', itemprop: 'description', content: 'POST_DESC' },
        { hid: 'itemprop:image', itemprop: 'image', content: 'FEATURE_IMAGE_LINK' }
      ]
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

.page-enter,
.page-leave-active {
  opacity: 0.5;
  transform: translateX(+100%);
}

.breadcrumb {
  font-family: $baseFont;
  font-size: 60%;

  color: #5d4e01;
  a {
    color: #5d4e01;
  }
  padding: 0;
  article{
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
