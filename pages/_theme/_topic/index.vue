<template>
  <div>
    <HeaderContainer head-type="subpage" :article-data="articleData" />

    <div>
      <h2 class="breadcrumb">
        <article>
          Home ->
          {{ theme.title }}
        </article>
      </h2>
      <CustomFormat :topic="topic" />
      <article>
        <div class="">
          <img class="ico-fluid" src="icon/bridge.svg">
        </div>
        <NuxtLink to="/">
          <div class="return-container">
            Go Back to Series
          </div>
        </NuxtLink>
      </article>
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
        { hid: 'description', name: 'description', content: this.articleData.SEO },
        { hid: 'og:title', property: 'og:title', content: this.articleData.title },
        { hid: 'og:site_name', property: 'og:site_name', content: this.articleData.title },
        { hid: 'og:url', property: 'og:url', content: this.$route.fullPath },
        { hid: 'og:image', property: 'og:image', content: this.articleData.SEOImage },
        { hid: 'og:description', property: 'og:description', content: this.articleData.SEO },
        { hid: 'og:image:alt', property: 'og:image:alt', content: this.articleData.SEOImageDesc },
        { hid: 'twitter:title', name: 'twitter:title', content: this.articleData.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.articleData.SEO },
        { hid: 'twitter:image', name: 'twitter:image', content: this.articleData.SEOImage },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: this.articleData.SEOImageDesc },
        { hid: 'itemprop:description', itemprop: 'description', content: this.articleData.SEO },
        { hid: 'itemprop:image', itemprop: 'image', content: this.articleData.SEOImage }
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
.bcrumb-origin{
  color: $black;
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
.return-container{
  color: $red
}
.ico-fluid {
  max-height: 122px;
  max-width: 130px;
}
</style>
