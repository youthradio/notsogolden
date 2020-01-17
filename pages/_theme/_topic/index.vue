<template>
  <div class="player">
    <h2>
      <NuxtLink to="/">
        THE TOPIC
      </NuxtLink>
    </h2>
    <div>
      {{ topic }}
    </div>
  </div>
</template>

<script>

export default {
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
    return { topic }
  },
  // validate ({ params }) {
  //   return !isNa(+params.theme)
  // },
  mounted () {
    console.log(this.$route.params)
    console.log('TESTING')
  },
  head () {
    return {
      title: this.name
    }
  }
}
</script>

<style scoped>
.player {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
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
