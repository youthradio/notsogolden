<template>
  <div class="auto-margin">
    <template v-if="topicFormat === 'graphic'">
      <img
        :src="topicLink"
        class="img-fluid graphic"
      >
    </template>
    <template v-else-if="topicFormat === 'text'">
      <h2> TITLE</h2>
      <article v-html="topic.text" />
    </template>
    <template v-else-if="topicFormat === 'video'">
      <h2> TITLE</h2>
      <article v-html="topic.text" />
      <vue-plyr>
        <div class="plyr__video-embed">
          <iframe
            :src="`https://www.youtube.com/embed/${topicLink}?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`"
            allowfullscreen
            allowtransparency
            allow="autoplay"
          />
        </div>
      </vue-plyr>
    </template>
    <template v-else-if="topicFormat === 'audio'">
      <h2> TITLE</h2>
      <article v-html="topic.text" />
      <vue-plyr>
        <audio>
          <source
            :src="topicLink"
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
    topicFormat () {
      if (this.topic) {
        return this.topic.format.trim()
      }
      return null
    },
    topicLink () {
      if (this.topic) {
        return this.topic.link.trim()
      }
      return null
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.auto-margin > * {
  display: block;
  width: auto;
  margin: auto;
}
.img-fluid {
  width: 100%;
  height: auto;
}
.graphic {
  max-width: 32rem;
}
.flex {
  display: flex;
}
.center {
  justify-content: center;
}
</style>
