<template>
  <div class="auto-margin">
    <template v-if="topic.format === 'graphic'" class="template-container">
      <img
        :src="topic.link"
        class="img-fluid graphic"
      >
    </template>
    <template v-else-if="topic.format === 'text'" class="template-container">
      <h2 class="header-title">
        TITLE
      </h2>
      <article v-html="topic.text" />
    </template>
    <template v-else-if="topic.format === 'video'" class="template-container">
      <h2> TITLE</h2>
      <article v-html="topic.text" />
      <vue-plyr>
        <div class="plyr__video-embed">
          <iframe
            :src="`https://www.youtube.com/embed/${topic.link}?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`"
            allowfullscreen
            allowtransparency
            allow="autoplay"
          />
        </div>
      </vue-plyr>
    </template>
    <template v-else-if="topic.format === 'audio'" class="template-container">
      <h2> TITLE</h2>
      <article v-html="topic.text" />
      <vue-plyr>
        <audio>
          <source
            :src="topic.link"
            type="audio/mp3"
          >
        </audio>
      </vue-plyr>
      <img
        :src="topic.featureImage"
        class="img-fluid"
      >
    </template>
  </div>
</template>

<script>
export default {
  props: {
    topic: {
      type: Object,
      require: true,
      default: null
    }
  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.auto-margin > * {
  display: block;
  width: auto;
  padding: 0.2rem 6rem 0rem 6rem;
}
.auto-margin{
  background-color: #C4C4C4 !important;
}
.img-fluid {
  width: 100%;
  height: auto;
}
.header-title{

}
.graphic {
  max-width: 32rem;
  margin: 0 auto;
  text-align: center;
}
.flex {
  display: flex;
}
.center {
  justify-content: center;
}
</style>
