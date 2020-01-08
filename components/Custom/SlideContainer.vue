<template>
  <div class="row">
    <div class="img-container">
      <img src="https://picsum.photos/200">
    </div>
    <div>
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
      <div class="slide-container">
        <p class="slide-content">
          Tuition Costs (graphic)
        </p>
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
  margin: 0 0 1rem 0rem;
  width: 100%;
}

.container {
  padding: 0 0 0 1rem;
  width: 100%;
}

.slide-parent{
  width: 50%;
  margin: 0 1.0rem 0 0.0rem;
  @include breakpoint(medium){
    width: 100%;
    }
}
.slide-content {
}

.title{
  font-family: $baseFont;
  font-size: 3rem;
}

.img-container{
  border-top: 8px $green solid;
  img{
  position: relative;
  width: 7rem;
  }
}

.slide-container{
  display: inline-block;
  border-top: 8px $green solid;
  font-weight: 600;
  padding: 0 1rem 0 0rem;
  margin: 0 0.0rem 3rem 0.5rem;
  white-space: nowrap;
  cursor: pointer;
    @include breakpoint(medium){
    }
}
/*
.slide-container:nth-last-child(3){
    margin-top: 1rem;
}*/
</style>
