<template>
  <div class="grid-container">
    <div class="grid-image">
      <img
        :style="borderColor"
        class="img-fluid"
        :src="`${slideContent.featureImage}`"
      >
    </div>
    <div
      v-for="topic in slideContent.topics"
      :key="topic.title"
      class="grid-topic"
    >
      <p
        :style="borderColor"
        class="slide-content"
      >
        {{ topic.title }}
      </p>
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
    }
  },
  watch: {
  },
  mounted () {
  },
  methods: {
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
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;

  @include breakpoint(medium) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
  }
}
@include breakpoint(medium) {
  .grid-topic:nth-child(5) {
    grid-column-start: 2;
  }
}
.title {
  font-family: $baseFont;
  font-size: 3rem;
}

.slide-content {
  border-top: 8px $green solid;
  max-width: 9rem;
  margin-top: 1rem;
  @include breakpoint(medium) {
    margin: 0 1rem 0 1rem;
  }
}
</style>
