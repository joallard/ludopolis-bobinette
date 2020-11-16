<template lang="pug">
  .hero#hero
    .scene#scenes
      layer-item.layer(
        :key="i"
        :name="layer[0]"
        :p="childP({def: layer[1], index: i})"
        :parent-dy="dy"
        v-for="(layer,i) in layers"
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
    name: String
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
      return `translate3d(0,${this.dy}px,0)`;
    }
  }
};

const layers = [
  ["1_ciel.svg", -0.5],
  ["2_nuage droit.svg", 0.1],
  ["3_nuage gauche.svg", 0],
  ["4_MONTAGNE 1.svg", 0],
  ["5_MONTAGNE 2.svg", 0.2],
  ["6_MONTAGNE 3.svg", 0.3],
  ["7_montagne 4 lodopolis.svg", 1.2],
  ["8_ville 1.svg", 0.45],
  ["9_ville 2.svg", 0.47],
  ["10_ville 3.svg", 0.6],
  ["11_ville 4.svg", 0.7],
  ["12_ville 5.svg", 0.61],
  ["13_superhero volant.svg", -1],
  ["14_building droit.svg", 0.9],
  ["15_building gauche.svg", 1],
  ["16_arbres droits.svg", 0.2],
  ["17_arbre gauche.svg", 0],
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
    overrides: Array
  },

  mounted: function() {
    // return this.mountScroll();
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

    childP: function({index, def}) {
      // +@overrides?[index]?["p"] || def
      if(!(this.overrides && this.overrides[index])){ return def }
      return +this.overrides[index]["p"] || def
    }
  }
}

</script>

<style lang="sass">
.hero
  min-height: 110vh
  // overflow: hidden
.scene
  // position: relative
  width: 100%
  padding-bottom: 110%
  overflow: hidden
  clip-path: ellipse(calc(800px + 60%) 100% at 50% 0%)

.layer
  position: fixed
  // top: 0
  // left: 0
  // min-height: 100vh
  height: 100%
  width: 100%
  background-repeat: no-repeat
  // transform: translate3d(0,0,0)
  // transition: transform 200ms ease-out

  background-position: top center
  background-size: 100%

@media (max-width: 540px)
  .layer
    background-size: 540px
  .scene
    min-height: 100vh



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
