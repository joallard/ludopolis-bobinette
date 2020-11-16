<template lang="pug">
  div
    hero-section
    //- (:overrides="overrides")

    footer.green.section(style="padding: 4em 0"): .container: .columns
      section.column
        | 5605, Avenue de Gaspé #106, <br>
        | Montréal, Québec  H2T 2A4
      section.column.has-text-centered 514-473-1279
      section.column.has-text-right info@ludopolis.ca

    //- .modify
      div: a(href="#" @click.prevent="toggleModify") ⇲
      .cont: table(v-show="modifyOpen"): tr.item(v-for="layer in overrides")
        td: span {{layer.name}}
        td: input(v-model="layer.p" :placeholder="layer.defaultP")

    div
</template>

<script>
import HeroSection from "~/components/HeroSection.vue"

var ModifyMixin, modifyOpen, scene;

modifyOpen = (function() {
  var data;
  if (!(data = localStorage.getItem("ludo.modifyOpen"))) {
    return true;
  }
  return JSON.parse(data);
})();

ModifyMixin = {
  data: () => ({
    overrides: [],
    modifyOpen
  }),

  mounted: function() {
    return this.overrides = this.$children.map((c) => {
      return {
        name: c.name,
        p: null,
        defaultP: c.p
      };
    });
  },
  methods: {
    toggleModify: function() {
      this.modifyOpen = !this.modifyOpen;
      return localStorage.setItem("ludo.modifyOpen", this.modifyOpen);
    }
  }
};


window.scene = scene;

export default {
  components: {HeroSection},
  // mixins: [ModifyMixin],

  metaInfo: {
    title: 'Codepen Hero'
  }
}


</script>

<style lang="sass">
@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/_all"
@import "~bulma/sass/grid/columns"

*
  box-sizing: border-box

body
  padding: 0
  margin: 0
  background: hsl(23.9, 100%, 81.8%)
  font-family: sans-serif

.container
  max-width: 45em

footer
  color: rgba(white, 0.6)
  font-size: 0.9em

  // > .container
  //   display: flex
  //   justify-content: space-between
  //
  // section
  //   display: block
  //   max-width: 12em

$green: hsla(140.6, 28.3%, 46.5%, 1)

.green.section, .hero
  $green: hsla(140.6, 28.3%, 46.5%, 1)
  background: $green
  // background-image: url("~/images/noise-20.svg"), linear-gradient($green, $green)

// .hero
//   background: $green

.modify
  position: fixed
  bottom: 0
  right: 0
  font-size: 0.8em
  background: rgba(255,255,255,0.1)
  padding: 0.5em
  min-width: 3em

  .cont
    max-height: 10em
    overflow-y: auto

  input
    width: 5em
</style>
