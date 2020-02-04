<template>
  <div>
    <NuxtLink to="/">
      <HeaderContainer
        head-type="subpage"
        :article-data="articleData"
      />
    </NuxtLink>
    <div>
      <div class="breadcrumb">
        <article class="a-cleaned">
          <NuxtLink to="/">
            Home ->
            {{ theme.title }}
          </NuxtLink>
        </article>
      </div>
      <CustomFormat :topic="topic" />
      <article>
        <NuxtLink to="/">
          <div class="">
            <img
              class="ico-fluid"
              src="icon/bridge.svg"
            >
          </div>
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
import POSTCONFIG from './../../../post.config'

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
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 27 || e.keyCode === 32) {
        this.$router.back()
      }
    })
  },
  head () {
    return {
      title: this.topic.title,
      meta: [
        { hid: 'description', name: 'description', content: this.topic.SEO },
        { hid: 'og:title', property: 'og:title', content: this.topic.title },
        { hid: 'og:site_name', property: 'og:site_name', content: this.topic.title },
        { hid: 'og:url', property: 'og:url', content: POSTCONFIG.canonicalURL + this.$route.fullPath },
        { hid: 'og:image', property: 'og:image', content: POSTCONFIG.canonicalURL + this.topic.SEOImage },
        { hid: 'og:description', property: 'og:description', content: this.topic.SEO },
        { hid: 'og:image:alt', property: 'og:image:alt', content: this.topic.SEOImageDesc },
        { hid: 'twitter:title', name: 'twitter:title', content: this.topic.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.topic.SEO },
        { hid: 'twitter:image', name: 'twitter:image', content: POSTCONFIG.canonicalURL + this.topic.SEOImage },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: this.topic.SEOImageDesc },
        { hid: 'itemprop:description', itemprop: 'description', content: this.topic.SEO },
        { hid: 'itemprop:image', itemprop: 'image', content: POSTCONFIG.canonicalURL + this.topic.SEOImage }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/css/vars";

.page-enter-active {
  transition: opacity 0.4s, transform 0.4s;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  opacity: 1;
}

.page-enter {
  opacity: 0.5;
  transform: translateX(-100%);
}

.page-leave-active {
  opacity: 0.5;
  transform: translateX(+100%);
}
.bcrumb-origin {
  color: $black;
}
.breadcrumb {
  font-size: 60%;
  color: #5d4e01;
  a {
    color: #5d4e01;
  }
}
.return-container {
  color: $red;
}
.ico-fluid {
  max-height: 122px;
  max-width: 130px;
}
.a-cleaned > a {
  border-bottom: none !important;
}
</style>
