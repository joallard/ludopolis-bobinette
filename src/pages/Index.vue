<template lang="pug">
layout
  page-section#nav(:class="{'is-active': isNavActive}")
    nav
      a(href="#services") Ce qu'on fait
      a(href="#realisations") Portefolio

      .spacer.has-text-centered: div
        g-image(src="~/images/ludopolis.svg" width="48" :class="{'is-active': isNavActive}")

      a(href="#processus") Processus
      a(href="#contact") Contact

      //- section.social
        social-icon(type="facebook" url="https://www.facebook.com/productionsludopolis/")
        social-icon(type="twitter" url="https://twitter.com/PLudopolis")

  //- page-section#hero(style="height: 1000px")
  hero-section(@update:heroVisible="")
    h2 Ce qu'on fait dans la vie
    .text: p
      | Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
      | nibh euismod tincidunt ut laoreet dolore Lorem ipsum dolor sit amet,
      | consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
      | laoreet dolore.

  page-section#problemes
    h2 Les problèmes qu'on résout

    .problemes.has-text-centered.grid-3x3
      //- .probleme-reve
      section.probleme
        h4 Un projet qui n'inspire personne
        p.
          Votre événement ou produit ne suscite pas l'intérêt qu'il mérite?
      .image: g-image(src="~/images/patate-1.svg" width="200")
      section.reve
        h4 Une expérience ludique pour votre public
        p.
          Proposez des activités qui vous ressemblent et qui vous mettent en valeur

      //- .probleme-reve
      section.probleme
        h4 Un public qui ne répond pas
        p.
          Des clients potentiels ou un public qui ne répondent pas à l'appel, qui n'interagissent pas suffisamment
      .image: g-image(src="~/images/patate-2.svg" width="200")
      section.reve
        h4 Une équipe formée, cohérente et efficace
        p.
          Vous savez où vous allez et vous y allez ensemble!

      //- .probleme-reve
      section.probleme
        h4 Difficile de faire passer votre contenu
        p.
          Vous peinez à générer de l'engouement et à vous démarquer des demandes d'attention
      .image: g-image(src="~/images/patate-3.svg" width="200")
      section.reve
        h4 Des jeux et des outils qui correspondent à vos valeurs
        p.
          Une animation, un jeu en harmonie avec votre mission et votre vision


  section-grosse-patate
    template(v-slot:outside): section#services
      //- page-section#services: section.subsection#le-fun
      .section-title
        h2 Même notre consultation est <em>le fun</em>
        p Pour animer votre quotidien, on met du jeu dans vos vies!


    section#consiste
      h2 Ça consiste en quoi?

      .columns.image-columns
        section.service.column
          .image: g-image(src="~/images/patate-4.svg")
          h4 On rend vos événements le fun
          p.
            Un accompagnement sur mesure pour ludifier vos activités, vos événements et vos espaces

        section.service.column
          .image: g-image(src="~/images/patate-5.svg")
          h4 On invente des jeux et des animations
          p.
            Des jeux et des activités ludiques conçus pour vous, avec vous

        section.service.column
          .image: g-image(src="~/images/patate-6.svg")
          h4 On vous montre ce que c'est que le jeu
          p.
            Des formations pour outiller votre équipe sur le jeu et le jouer

      section.cta
        a.button Voir nos services détaillés

  page-section#realisations
    h2 Ce qu'on a fait pour d'autres

    .columns
      section.realisation.column
        .image.is-3by2: g-image(src="~/images/projet-blocs.jpg" width=600 height=400)
        h3 Festival Montréal joue
        h4 Des événements de jeux
        p.
          Le plus grand festival de jeux au Québec, produit pour les Bibliothèques de Montréal.

      section.realisation.column
        .image.is-3by2: g-image(src="~/images/projet-camp-2.png" width=600 height=400)
        h3 Les voix de la forêt
        h4 Une expérience de camping ludique
        p.
          Locapaq et Ludopolis proposent une expédition ludique avec des jeux adaptés à votre aventure

      section.realisation.column
        .image.is-3by2: g-image(src="~/images/projet-jeu.jpg" width=600 height=400)
        h3 Challenge 24h
        h4 Un jeu pour encourager l'engagement citoyen
        p.
          Un accompagnement avec l'équipe de l'ACAT pour concevoir un jeu sur les enjeux de l'abolition des maltraitances et de la torture

    //- section.cta
      a.button Voir nos autres projets

  page-section#processus
    .section-title
      h2 Les différentes étapes d'un projet Ludopolis
      p En bref, on offre une expertise en ludification. Du service-conseil, mais fun.

    .etapes.columns.is-multiline.has-text-centered
      .column.is-half.is-one-third-desktop.my-0
        section.etape.bulle.image.is-square: .has-ratio: .inside
          h3 Étape 1
          p.
            Une rencontre pour établir vos besoins et définir comment on va travailler ensemble
      .column.is-half.is-one-third-desktop.my-0
        section.etape.bulle.image.is-square: .has-ratio: .inside
          h3 Étape 2
          p.
            Une proposition ludique qui fait rêver!
      .column.is-half.is-one-third-desktop.my-0
        section.etape.bulle.image.is-square: .has-ratio: .inside
          h3 Étape 3
          p.
            Une collaboration étroite pour une ludification sur mesure
      .column.is-half.is-one-third-desktop.my-0
        section.etape.bulle.image.is-square: .has-ratio: .inside
          h3 Étape 4
          p.
            On teste votre activité, votre jeu, votre outil ludique avec vous
      .column.is-half.is-one-third-desktop.my-0
        section.etape.bulle.image.is-square: .has-ratio: .inside
          h3 Étape 5
          p.
            Place au jeu!
      .column.is-half.is-one-third-desktop.my-0
        section.etape.bulle.image.is-square: .has-ratio: .inside
          h3 Étape 6
          p.
            On fait un suivi pour s'assurer du fun vécu

  page-section#contact
    .section-title
      h2 On jase jeu?

    contact-form(data-netlify=true)

  //- page-section#temoignages
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

  page-section#footer
    .columns
      .column.is-one-third
        section.adresse.block
          h4 Ludopolis
          p.
            Temps Libre Mile-End<br>
            5605 av de Gaspé, bur. 106<br>
            Montréal QC  H2T 2A4

          p: strong 514-473-1279

          //- a.cta.button Carte

        section.credits.block.is-size-7
          p.
            @ 2020 Ludopolis
          p.
            Création graphique: gregorybrossat.com<br>
            Production technique: Bouledeneige

      .column.is-one-third
        //- section.newsletter.block
          h4 Inscris-toi à l'infolettre
          .button Infolette!

        section.social.block.is-size-2
          social-icon(type="facebook" url="https://www.facebook.com/productionsludopolis/")
          social-icon(type="twitter" url="https://twitter.com/PLudopolis")

      //- .column.is-one-third
        nav
          div: a Accueil
          div: a Formations
          div: a Portefolio
          div: a Les Lys
  div
</template>

<script>
import HeroSection from "~/components/HeroSection.vue"
import PageSection from "~/components/PageSection.vue"
import SocialIcon from "~/components/SocialIcon.vue"
import SectionGrossePatate from "~/components/SectionGrossePatate.vue"
import ContactForm from "~/components/ContactForm.vue"


export default {
  components: {
    PageSection,
    SocialIcon,
    SectionGrossePatate,
    HeroSection,
    ContactForm,
  },

  metaInfo: {
    title: 'Ludopolis'
  },

  data: () => ({
    isNavActive: false,
  })
}
</script>

<style lang="sass">
@use "sass:color"

@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/_all"
@import "~bulma/sass/grid/columns"

// @import "assets/golden-gate.woff2"

// Lighten
@function tint($color, $percentage)
  @return mix(white, $color, $percentage)

@font-face
  font-family: "Golden Gate"
  src: url("../assets/golden-gate.woff2") format("woff2")

body
  font-family: Source Sans Pro, sans-serif
  line-height: 1.4
  // box-sizing: border-box

h1,h2,h3,h4,h5,h6
  font-weight: bold
  line-height: 1.4

h2
  font-family: Golden Gate, sans-serif
  font-size-adjust: 0.8
  text-align: center
  margin: 1em 0 0.8em

h2, h3, h4
  color: #111
  text-transform: uppercase
  margin: 1em 0 0.3em
h2
  font-size: 2.80em
h3
  font-size: 1.60em
h4
  font-size: 1.25em
h5
  font-size: 1.10em

.container:not(.is-stupid-bulma)
  max-width: 50em
.container:not(.is-max-desktop):not(.is-max-widescreen)
  max-width: 50em

.section
  padding: 6em 1.5em
.subsection
  margin: 1em 0

@media (min-width: 480px)
  .columns
    display: flex
  .is-half
    width: 50%
    flex: none

.columns > *
  @extend .column

  h3, h4
    text-align: center

.column
  margin: 1em 0

.button
  font-family: Golden Gate
  border-radius: 0.6em
  height: auto
  letter-spacing: 0.05ex
  font-style: normal
  border-width: 0.15em
  padding: 0.35em 1.5em

  &.is-large
    padding: 0.7em 2em

.cta .button
  font-weight: 700
  font-size: 1.2em

  &::after
    content: "→"
    margin-left: 1em


$forest: hsl(141,28%,47.5%)
$vertjaune: hsl(85, 60%, 75%)
$mauve: hsl(270, 32%, 28%)
$mauve-pale: change-color($mauve, $lightness: 70%)

$rose: #fc9574
$corail: hsl(15, 97%, 70%)
// hsl(15,96%,72%) 44,49,72
// #f28a7b  hcl(34,46,68) hsl(7.56,82.07%,71.57%)
// background: color.adjust($corail, $whiteness: +10%)

.grid-3x3
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-auto-flow: column
  grid-template-rows: auto 1fr auto
  grid-column-gap: 1em

@media (max-width: 767px)
  .grid-3x3
    grid-auto-rows: auto
    // grid-template-rows: repeat(2, auto auto)
    grid-template-columns: 48% 48%
    // grid-template-columns: 1fr 1fr
    grid-auto-flow: row dense
    // grid-template-areas: "i i" "p r" "i i"

    .image
      grid-column: 1 / span 2
      > img
        max-width: 200px
        margin: auto
    .probleme
      grid-column-start: 1
    .reve
      grid-column-start: 2

=blancnoir
  h3, h4
    color: white
  p
    font-weight: 600

=transparent-hover($color)
  &:hover, &:focus
    background: transparent
    color: $color

=button-color($background, $color)
  background: $background
  border-color: $background
  color: $color

=accent-bouton($background, $color)
  .button
    +button-color($background, $color)
    +transparent-hover($background)

.section-title
  text-align: center
  margin-bottom: 4em

.image-columns
  text-align: center

  .column
    margin-top: 2em

  .columns .image
    max-width: 14em
    margin: auto
    @media (max-width: 480px)
      max-width: 50%

$transition: mix($vertjaune, white, 90%)

#problemes
  +blancnoir
  background: #579b6f
  background-image: linear-gradient($forest, $vertjaune 90%, $transition)

  h2
    color: adjust-color($vertjaune, $saturation: +8%, $lightness: +4%)



.section-grosse-patate
  background-image: linear-gradient($transition, white 50%)

#services h2
  color: $forest

#consiste h2
  color: white


$mid: hsl(85.3,59.7%,72.7%)

#processus
  background: #fbd3ce

.etapes .column
  max-width: 20em

.bulle
  background: url("../images/etape-shape.svg")
  background-size: 100%
  font-size: 0.9em

  h3, *
    color: white
  h3
    margin-top: 0

  > *
    padding: 2em
    display: flex
    align-items: center
    justify-content: center


#consiste
  +accent-bouton(white, $corail)
  +blancnoir

#realisations
  $accent: $mauve-pale
  +accent-bouton($accent, white)
  background: white

  h2
    color: $accent

  h3, h4
    text-align: left

  // .realisation
  //   display: flex
  //   flex-direction: column

  h3
    // flex-grow: 1
    line-height: 1.2

  h3::after
    content: ""
    display: block
    background: $accent
    height: 0.2em
    border-radius: 2px
    width: 1.5em
    margin-top: 0.3em

  h4
    text-transform: none
    font-size: 1.1em
    line-height: 1.3

#temoignages
  footer
    font-family: Golden Gate
    font-size: 1.3em
    color: #111
    margin-top: 1em
    text-align: center

#contact
  $background: #f89083
  background: $background

  .form
    max-width: 40em
    margin: auto

    .label
      color: mix(black, $background, 60%)

    .select select, .taginput .taginput-container.is-focusable, .textarea, .input
      background-color: rgba(255,255,255,0.2)
      border-color: mix(black, $background, 10%)

      &:focus, &:active
        $color: mix(white, $background, 50%)
        // border-color: $color
        box-shadow: 0 0 2px 0.1em rgba(255,255,255,0.3)

#nav
  padding: 1.2rem 1rem
  // position: fixed
  position: absolute
  width: 100%
  top: 0
  z-index: 50

  &.is-active
    background: $mauve
    padding: 0.5rem 1rem

  img:not(.is-active)
    visibility: hidden

#nav nav
  display: flex
  align-items: center

  > .spacer
    flex-grow: 1
    > *
      display: inline-block
      // background: white
      border-radius: 1.5em
      width: 54px
      text-align: center

#nav a
  text-transform: uppercase
  padding: 0.5em 0.7em
  font-size: 0.9em
  font-weight: bold
  color: white
  display: inline-block

section.cta
  text-align: center
  padding: 1.5em 0

#footer
  background: $mauve
  $button-bg: change-color($mauve, $saturation: 15%, $lightness: 45%)
  +accent-bouton($button-bg, white)

  h3, h4
    text-align: left

  h3, h4, a, p, strong, &
    color: white


</style>
