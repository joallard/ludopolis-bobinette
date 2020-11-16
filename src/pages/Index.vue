<template lang="pug">
layout
  page-section#nav
    nav
      a(href="#services") Ce qu'on fait
      a(href="#realisations") Portefolio
      .spacer
      a(href="#processus") Processus
      a(href="#contact") Contact

      //- section.social
        social-icon(type="facebook" url="https://www.facebook.com/productionsludopolis/")
        social-icon(type="twitter" url="https://twitter.com/PLudopolis")

  page-section#hero(style="height: 1000px")
    h2 Ce qu'on fait dans la vie

  page-section#problemes
    h2 Les problèmes qu'on résout

    .columns
      each i in [1,2,3]
        .column
          section.probleme
            h4 La vie, c'est difficile
            p Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          .image.is-square: g-image(src=`~/images/patate-${i}.svg`)
          section.reve
            h4 On a plein d'idées le fun
            p Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy

  page-section#services
    section.subsection#le-fun
      h2
        //- span(style="font-family: Helvetica") En bref
        span
          | En bref,
          | on fait du service conseil,
          | mais le fun!

      p Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore

    section.subsection#consiste
      h2 Ça consiste en quoi?

      .columns
        section.service
          .image: g-image(src="~/images/patate-4.svg")
          h4 On rend vos événements le fun
          p
            | Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            | nonummy nibh euismod tincidunt ut laoreet dolore
        section.service
          .image: g-image(src="~/images/patate-5.svg")
          h4 ON INVENTE DES EXPÉRIENCES LUDIQUES
          p
            | Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            | nonummy nibh euismod tincidunt ut laoreet dolore
        section.service
          .image: g-image(src="~/images/patate-6.svg")
          h4 ON T'APPREND LE JEU
          p
            | Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            | nonummy nibh euismod tincidunt ut laoreet dolore

      section.cta
        a.button Voir nos services détaillés


  page-section#realisations
    h2 Ce qu'on a fait pour d'autres

    .columns
      each r in [1,2,3]
        section.realisation
          .image.is-3by2: g-image(src="~/hutte.jpg")
          h3 Locapaq
          h4 Une expérience plein-air ludique
          p Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore

    section.cta
      a.button Voir nos autres projets

  page-section#processus
    h2 Comment ça se passe?

    section.etape
      h3 On se rencontre
      p ...

  page-section#temoignages
    h2 Témoignages

    section.temoignage
      blockquote
        :markdown
          Avant de les connaître, j'avais peur qu'ils soient un peu
          des tout croches.

          Je me suis vraiment trompé. Ils sont complètement des tout
          croches. Mais ils sont genre agréables, donc c'est ok.

          Mon expérience a été vraiment correcte.

      footer
        :markdown
          Lucie Fer, *Parti Libéral du Québec*.
</template>

<script>

import PageSection from "~/components/PageSection.vue"
import SocialIcon from "~/components/SocialIcon.vue"

export default {
  components: {
    PageSection,
    SocialIcon
  },

  metaInfo: {
    title: 'Ludopolis'
  }
}
</script>

<style lang="sass">
@use "sass:color"

@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/_all"
@import "~bulma/sass/grid/columns"

// @import "assets/golden-gate.woff2"


@font-face
  font-family: "Golden Gate"
  src: url("../assets/golden-gate.woff2") format("woff2")

body
  font-family: Source Sans Pro, sans-serif
  line-height: 1.4

h1,h2,h3,h4,h5,h6
  font-weight: bold
  line-height: 1.4

h2
  font-family: Golden Gate, sans-serif
  font-size-adjust: 0.8
  text-align: center
  color: #111
h2, h3, h4
  text-transform: uppercase
  margin: 1em 0 0.3em
h2
  font-size: 2.20em
h3
  font-size: 1.60em
h4
  font-size: 1.15em
h5
  font-size: 1.10em

.container:not(.is-stupid-bulma)
  max-width: 50em

.column
  margin: 1em 0

.subsection
  margin: 1em 0

.columns > *
  @extend .column

  h3, h4
    text-align: center

.cta .button
  padding: 0.6em 2em
  height: auto
  font-weight: 700
  font-family: Golden Gate
  letter-spacing: 0.05ex
  font-style: normal
  font-size: 1.1em
  border-radius: 0.8em

  &::after
    content: "→"
    margin-left: 1em


#hero
  background: #fcc5a0

$forest: hsl(141,28%,47.5%)
$vertjaune: hsl(85, 60%, 75%)

$rose: #fc9574
$corail: hsl(15, 97%, 70%)
// hsl(15,96%,72%) 44,49,72
// #f28a7b  hcl(34,46,68) hsl(7.56,82.07%,71.57%)

$transition: mix($vertjaune, white, 90%)

=blancnoir
  h3, h4
    color: white
  p
    font-weight: 600

#problemes
  +blancnoir
  background: #579b6f
  background-image: linear-gradient($forest, $vertjaune 90%, $transition)

  h2
    color: adjust-color($vertjaune, $saturation: +8%, $lightness: +4%)

#services
  background-image: linear-gradient($transition, white 50%)

  h2
    color: $forest

#consiste h2
  color: white

$mid: hsl(85.3,59.7%,72.7%)
// #c0e390
#c7e792

=accent-bouton($background, $color)
  .button
    background: $background
    color: $color

#consiste
  background: color.adjust($corail, $whiteness: +10%)
  +accent-bouton(white, $corail)
  +blancnoir

$mauve: #b598d3
// hsl(262, 40%, 71%)

#realisations
  $accent: hsl(262, 40%, 70%)

  h2
    color: $accent
  .button
    background: $accent
    color: white

  h3, h4
    text-align: left

#nav nav
  display: flex
  > .spacer
    flex-grow: 1
  a
    text-transform: uppercase
    padding: 0.4em 0.7em
    font-size: 0.9em
    font-weight: bold

section.cta
  text-align: center
  padding: 1.5em 0


</style>
