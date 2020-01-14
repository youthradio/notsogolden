<template>
  <div>
    <template v-if="format === 'graphic'">
      <img :src="link" class="img-fluid graphic">
    </template>
    <template v-else-if="format === 'video'">
      <vue-plyr>
        <div class="plyr__video-embed">
          <iframe
            src="https://www.youtube.com/embed/bTqVqk7FSmY?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1"
            allowfullscreen
            allowtransparency
            allow="autoplay"
          />
        </div>
      </vue-plyr>
    </template>
    <template v-else-if="format === 'audio'">
      <vue-plyr>
        <audio>
          <source src="https://s3.amazonaws.com/media.youthradio.org/wp-content/uploads/2019/09/24152730/Elise_Male-Allies_KQED.mp3" type="audio/mp3">
        </audio>
      </vue-plyr>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    format: {
      type: String,
      require: true,
      default: null
    },
    link: {
      type: String,
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
.img-fluid{
  width: 100%;
  height: auto;
}
.graphic{
  max-width: 32rem;

}
</style>
