<template>
  <div
    class="quote-container"
    :style=" randomPos "
  >
    <div
      class="fade"
      :style="fadeStyle"
    >
      <blockquote>
        {{ quoteData.Quote }}
      </blockquote>
      <h4>
        {{ quoteData.Speaker_Name }}, {{ quoteData.Year }}
      </h4>
      <h5>
        {{ quoteData.Title }}
      </h5>
    </div>
  </div>
</template>

<script>
import { Howl } from 'howler'

export default {
  props: {
    quoteData: {
      type: Object,
      defaul: null,
      required: true
    },
    isVisible: {
      type: Boolean,
      defaul: false,
      required: true
    }
  },
  data () {
    return {
      sound: null,
      soundID: null,
      isSoundPlaying: false,
      innerWidth: 0,
      innerHeight: 0
    }
  },
  computed: {
    isActive () {
      return this.quoteData.isActive
    },
    randomPos () {
      const w = this.innerWidth > 500 ? 10 : 0
      return {
        marginTop: `${Math.random() * 30}%`,
        marginLeft: `${-2 * (Math.random() - 0.5) * w}%`
      }
    },
    startTime () {
      const time = this.quoteData.Start.split(':')
      return (+time[1] * 60 + +time[2])
    },
    durationTime () {
      const time = this.quoteData.End.split(':')
      return (+time[1] * 60 + +time[2]) - this.startTime
    },
    fadeStyle () {
      if (!this.isSoundPlaying) {
        return {
          transform: 'scale(0.9)',
          opacity: '0.05'
        }
      }
      return {
        opacity: '0.99',
        transform: 'scale(1)'
        // textShadow: '0px 0px 20px darkgray'
      }
    },
    fileName () {
      // return only file name
      return this.quoteData.File_Name.split('.')[0]
    }
  },
  watch: {
    isVisible () {
      if (this.isVisible) {
        this.sound.load()
      }
    },
    isActive () {
      if (this.isActive) {
        this.playSound()
      } else {
        this.pauseSound()
      }
    }
  },
  mounted () {
    this.innerWidth = window.innerWidth
    this.innerHeight = window.innerHeight
  },
  created () {
    // eslint-disable-next-line no-undef
    this.sound = new Howl({
      autoplay: false,
      volume: 1.0,
      preload: false,
      loop: false,
      src: [`audios/${this.fileName}.webm`, `audios/${this.fileName}.mp3`]
      // sprite: {
      //   quote: [this.startTime * 1000, this.durationTime * 1000]
      // }
    })
    this.sound.once('load', this.soundLoad)
    this.sound.once('play', this.soundPlayed)
    this.sound.once('end', this.soundPaused)
    this.sound.once('pause', this.soundPaused)
  },
  beforeDestroy () {
    this.sound.unload()
  },
  methods: {
    soundLoaded () {
      // eslint-disable-next-line no-console
      console.log(this.quoteData.title, 'LOADED')
    },
    playSound () {
      // this.sound.load()
      if (this.sound.state() === 'loaded' && !this.isSoundPlaying) {
        this.isSoundPlaying = true
        this.soundID = this.sound.play()
      }
    },
    pauseSound () {
      // this.sound.pause()
      this.sound.stop()
      this.isSoundPlaying = false
      this.quoteData.isActive = false
    },
    soundPlayed () {
    },
    soundPaused () {
      this.isSoundPlaying = false
    }
  }
}
</script>

<style lang="scss" scoped>
.quote-container {
  // float:right;
  position: absolute;
  user-select: none;
  max-width: 32em;
}
.fade {
  transition: transform, opacity, text-shadow;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  transform-origin: 50% 50%;
}
h4, h5 {
  padding: 0px;
  margin: 0em;
  margin-left: 1rem;
}
h4:before {
    content: "—";
    // font-size: 2rem;
    // vertical-align: bottom;
    // position: absolute;
    // left: 0px;
    /* margin-right: 4px; */
    /* margin-left: -8px; */
}
blockquote {
  font-weight: 700;
  margin-left: 1rem;
  line-height: 1.8rem;
  margin-bottom: 0.5rem;
  // line-height: 1rem;

  &:before {
    content: "\201C";
    font-size: 2rem;
    vertical-align: bottom;
    // position: absolute;
    // left: 0px;
    /* margin-right: 4px; */
    /* margin-left: -8px; */
  }

  &:after {
    content: "\201D";
    font-size: 2rem;
    vertical-align: bottom;
    position: absolute;
    // right: 0px;
    /* margin-left: 4px; */
    /* margin-right: -8px; */
  }
}
</style>>
