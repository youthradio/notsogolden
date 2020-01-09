<template>
  <div class="row">
    <div class="img-container slide-container">
      <img src="https://picsum.photos/200">
    </div>
    <div class="slide-container">
      <p class="slide-content">
        Transportation Costs of Attending College
      </p>
    </div>
    <div class="slide-container">
      <p class="slide-content">
        Homeless Community College Students
      </p>
    </div>
    <div class="slide-container">
      <p class="slide-content">
        Rising Tuition Costs
      </p>
    </div>
    <div class="blank-block slide-container" />
    <div class="slide-container">
      <p class="slide-content">
        Tuition Costs (graphic)
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
        max-width: 40rem;
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
  width: inherit;
  float: left;
  }
}

.slide-content {
}

.slide-container{
  display: inline-block;
  border-top: 8px $green solid;
  font-weight: 600;
  padding: 0 1rem 0 0rem;
  margin: 0 0.0rem 4rem 0.5rem;
  width: 8rem;
    @include breakpoint(medium){
        margin: 0 0.0rem 0rem 0.5rem;
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
