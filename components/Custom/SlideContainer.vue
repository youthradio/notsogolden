<template>
  <div class="temp-container">
    <div class="img-container">
      <h2 class="theme-title">
        {{ slideContent.title }}
      </h2>
      <img
        :style="borderColor"
        class="img-fluid img-slide"
        :src="`${slideContent.featureImage}`"
      >
    </div>
    <div class="grid-container">
      <div
        v-for="topic in slideContent.topics"
        :key="topic.title"
        class="grid-topic"
      >
        <NuxtLink :to="slideContent.slug + '/' + topic.slug">
          <!-- <a
          href=""
          @click.prevent="selectTopic(topic)"
        > -->
          <p
            :style="borderColor"
            class="slide-content"
          >
            {{ topic.title }}
          </p>
          <div class="svg-container">
            <img
              :src="`icon/${topic.format.trim()}.svg`"
              class="ico-fluid"
            >
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  mixins: [
  ],
  props: {
    slideContent: {
      type: Object,
      require: true,
      default: null
    }
  },
  asyncData (ctx) {
    return {
    }
  },
  data () {
    return {
    }
  },
  computed: {
    borderColor () {
      if (this.slideContent) {
        return {
          'border-top-color': this.slideContent.color
        }
      }
      return ''
    },
    borderColorLink () {
      if (this.slideContent) {
        return {
          // 'border-bottom-color': this.slideContent.color
          // needs a hover rule too, not sure how to do it through here
        }
      }
      return ''
    }
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    selectTopic (topic) {
      this.$emit('onTopicChange', topic)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/css/vars";
@import "~@/css/base";
@import "~@/css/mixins";
.img-fluid {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: bottom;
}
.ico-fluid {
  max-height: 50px;
  max-width: 50px;
}

.temp-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;

  @include breakpoint(medium) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
  }
}
/* @include breakpoint(medium) {
  .grid-topic:nth-child(5),
  .grid-topic:nth-child(8) {
    grid-column-start: 2;
  }
}*/
.title {
  font-family: $baseFont;
  font-size: 3rem;
}
.img-slide {
  border-top: 8px $green solid;
  @include breakpoint(medium) {
  }
}
.slide-content {
  border-top: 8px $green solid;
  max-width: 9rem;
  margin-top: 1rem;
  font-weight: 600;
  @include breakpoint(medium) {
    /* margin: 0 1rem 0 1rem; */
  }
}

.svg-container {
  margin: -1.1rem 0rem 0rem 0rem;
  @include breakpoint(medium) {
    /* margin: 0 1rem 0 1rem; */
  }
}
</style>
