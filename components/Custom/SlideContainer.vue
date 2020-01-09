<template>
  <div class="row">
    <div class="img-container slide-container">
      <img class="slide-content" src="https://picsum.photos/400">
    </div>
    <div class="slide-container">
      <p class="slide-content">
        {{ slideTitle }}
      </p>
    </div>
    <div class="slide-container">
      <p class="slide-content">
        {{ slideTitle }}
      </p>
    </div>
    <div class="slide-container">
      <p class="slide-content">
        {{ slideTitle }}
      </p>
    </div>
    <div class="blank-block slide-container" />
    <div class="slide-container">
      <p class="slide-content">
        {{ slideTitle }}
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
    slidePictureURL: {
      type: String,
      require: true,
      default: null
    },
    slideTitle: {
      type: String,
      require: true,
      default: null
    },
    slideURL: {
      type: String,
      require: true,
      default: null
    }
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {
  },
  asyncData (ctx) {
    return {
    }
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

.row{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  @include breakpoint(medium){
    }
}

.container {
  padding: 0 0 0 1rem;
  width: 100%;
}
.title{
  font-family: $baseFont;
  font-size: 3rem;
}

.img-container{
  img{
  position: relative;
  width: 9rem;
  float: left;
  }
}

.slide-content {
  border-top: 8px $green solid;
  max-width: 9rem;
  margin-top: 1rem;
  @include breakpoint(medium){
        margin: 0 1rem 0 1rem;
    }
}

.slide-container{
  display: inline-block;
  font-weight: 600;
  width: 50%;
    @include breakpoint(medium){
        width: 25%
    }
}
.slide-container:nth-last-child(1){
}
.blank-block{
    border: none;
    display: none;
    @include breakpoint(medium){
        display: inline;
    }
}
/*
.slide-container:nth-last-child(3){
    margin-top: 1rem;
}*/
</style>
