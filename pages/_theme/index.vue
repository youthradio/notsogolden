<template>
  <div class="player">
    <h2>
      <NuxtLink to="/">
        Topics
      </NuxtLink>
    </h2>
    <ul class="players">
      <li
        v-for="topic in theme.topics"
        :key="topic.title"
      >
        <NuxtLink :to="$route.params.theme + '/' + topic.slug">
          {{ topic.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  // validate ({ env, params }) {
  //   // validade is input params thems is in avalable list
  //   return env.ArticleData.content.themes.map(t => t.slug).includes(params.theme)
  //   // return true
  // },
  asyncData ({ params, env, error }) {
    const theme = env.ArticleData.content.themes.find(theme => theme.slug === params.theme)
    // if (!theme) {
    // return error({ message: 'Theme not found', statusCode: 404 })
    // }
    return { theme }
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
