<template>
  <div class="row">
    <div class="slide-container">
      <img
        :style="borderColor"
        class="img-fluid"
        :src="`${slideContent.featureImage}`"
      >
    </div>
    <div
      v-for="topic in slideContent.topics"
      :key="topic.title"
      class="slide-container"
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
.slide-img{
  border-top: 8px solid;
}
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  @include breakpoint(medium) {
  }
}
//i
.container {
  padding: 0 0 0 1rem;
  width: 100%;
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

.slide-container {
  display: inline-block;
  font-weight: 600;
  width: 50%;
  @include breakpoint(medium) {
    width: 25%;
  }
}
.slide-container:nth-last-child(1) {
}
.blank-block {
  border: none;
  display: none;
  @include breakpoint(medium) {
    display: inline;
  }
}
/*
.slide-container:nth-last-child(3){
    margin-top: 1rem;
}*/
</style>
