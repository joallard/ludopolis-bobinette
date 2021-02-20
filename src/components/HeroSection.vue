<template lang="pug">
  .hero#hero.background
    #scenes.scene.background
      layer-item(
        v-for="(layer,i) in layers"
        v-bind="layer"
        :key="layer.name"
        :parent-dy="dy"
      )

    .noise
</template>

<script>
const LayerItem = {
  render: function(h){
    return h("div", {class: "layer", style: this.style})
  },

  props: {
    p: Number,
    parentDy: Number,
    name: String,
  },

  computed: {
    dy: function() {
      return (this.p * this.parentDy).toFixed(2);
    },

    style: function() {
      return {
        transform: this.transform,
        "background-image": `url("${this.imageUrl}")`
      }
    },

    imageUrl: function(){
      return this.$url("/hero/" + this.name)
    },

    transform: function() {
      return `translate3d(0px, ${this.dy}px, 0px)`;
    }
  }
};

const layers = [
  {"name": "1_ciel.svg", "p": -0.5},
  {"name": "2_nuage droit.svg", "p": 0.1},
  {"name": "3_nuage gauche.svg", "p": 0},
  {"name": "4_MONTAGNE 1.svg", "p": 0},
  {"name": "5_MONTAGNE 2.svg", "p": 0.2},
  {"name": "6_MONTAGNE 3.svg", "p": 0.3},
  {"name": "7_montagne 4 lodopolis.svg", "p": 1.2},
  {"name": "8_ville 1.svg", "p": 0.45},
  {"name": "9_ville 2.svg", "p": 0.47},
  {"name": "10_ville 3.svg", "p": 0.6},
  {"name": "11_ville 4.svg", "p": 0.7},
  {"name": "12_ville 5.svg", "p": 0.61},
  {"name": "13_superhero volant.svg", "p": -1, id: "superhero"},
  {"name": "14_building droit.svg", "p": 0.9, id: "building-r"},
  {"name": "15_building gauche.svg", "p": 1},
  {"name": "16_arbres droits.svg", "p": 0.2, id: "arbres-r"},
  {"name": "17_arbre gauche.svg", "p": 0, id: "arbres-l"}
  // ["18_fleche.svg", 2]
]


export default {
  components: {LayerItem},

  data: () => ({
    dy: 0,
    factor: 0.5,
    layers
  }),

  props: {
    overrides: Array,
    disabled: {type: Boolean, default: false},
  },

  mounted: function() {
    if(!this.disabled){
      this.mountScroll();
    }
  },

  methods: {
    updateScroll: function(y) {
      return this.dy = y * this.factor;
    },

    onScrollBody: function() {
      return window.requestAnimationFrame(() => {
        return this.updateScroll(window.scrollY);
      });
    },

    mountScroll: function() {
      // setInterval(@onScrollBody, 50)
      return window.addEventListener('scroll', this.onScrollBody);
      // window.addEventListener 'touchmove', @onScrollBody
    },

    // childP: function({index, def}) {
    //   // +@overrides?[index]?["p"] || def
    //   if(!(this.overrides && this.overrides[index])){ return def }
    //   return +this.overrides[index]["p"] || def
    // }
  }
}

</script>

<style lang="sass">

$vert: #579b6f

.hero
  background: $vert
  // min-height: 110vh
  // overflow: hidden
.scene
  width: 100vw
  height: 100vh
  // padding-bottom: 110%
  // overflow: hidden
  clip-path: ellipse(calc(800px + 60%) 100% at 50% 0%)

.stack
  isolation: isolate
  position: relative

.background
  position: relative
  z-index: -1

.layer
  position: fixed
  // top: 0
  // left: 0
  // min-height: 100vh
  width: 100vw
  height: 100vh
  background-repeat: no-repeat
  // transform: translate3d(0,0,0)
  // transition: transform 200ms ease-out
  background-position: top center
  background-size: 100% auto

  @media (max-aspect-ratio: 1/1)
    background-size: auto 100%

// @media (max-width: 540px)
//   .layer
//     background-size: 540px
//   .scene
//     min-height: 100vh

#superhero
  background-position: 20% 12px

@media (max-width: 999px)
  #arbres-r
    background-position: 85% 140px
  #arbres-l
    background-position: 25% top
  #building-r
    background-position: 58% top

// Max size
@media (min-width: 1600px)
  .layer
    background-size: 1600px
  .scene
    padding-bottom: 1600px

.noise
  position: absolute
  top: 0
  left: 0
  bottom: 0
  right: 0
  // opacity: 0.7
  transform: translate3d(0,0,0)
  // background-size: 600px
  // background-image: url("~/images/noise.svg")

</style>
