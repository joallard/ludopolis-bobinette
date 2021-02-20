<template lang="pug">
  .section-grosse-patate.top
    .z-content.outside
      slot(name="outside")

    .grosse-patate.z-patate

    .z-content.inside
      slot

    .fond-de-poche-de-patate.z-patate
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.top
  position: relative
  z-index: 0

.z-patate
  z-index: -10
  position: relative

.z-content
  z-index: 10
  position: relative
  padding: 6em 2em

.grosse-patate
  background: url("/21_grossepatate.svg") 73% 0%/331% no-repeat
  padding-top: 40%

.fond-de-poche-de-patate
  background: url("/21_grossepatate.svg") 54% 100%/250% no-repeat
  padding-top: 14%

.inside
  background: #FF9776

.image
  margin: auto
  max-width: 50%

h2
  margin-top: 0

@media (min-width: 768px)
  // 48 => (40(1-1.3) + 48(1.3))
  // 35 => 35*1.3
  // bg-pos-x
  // 48vw * 1.3 + (0.4 * 100vw) * ()
  .top
    // grid: 35vw 6vw auto / 48vw auto // BS 100%

    --bg-pos-k: 0.4
    --bg-pos-w: calc(100vw * var(--bg-pos-k))
    --k: 1.4
    --column-w: calc(44vw * var(--k) + var(--bg-pos-w) * (1 - var(--k)))
    display: grid
    grid-template-rows: calc(33.5vw * var(--k)) auto
    grid-template-columns: var(--column-w) auto
    gap: calc(2vw * var(--k))
    min-height: calc(71.5vw * var(--k))


  .grosse-patate
    position: absolute
    background-size: calc(var(--k) * 100%)
    background-position: calc(var(--bg-pos-k) * 100%) 0%
    width: 100%
    top: 0
    bottom: 0
    left: 0
    right: 0

  .inside
    background: transparent
    grid-area: -2 / 1 / auto / -1

  .inside .columns
    padding: 0
    gap: 3vw

    .image
      max-width: 64%

  .columns > *
    margin-top: 0
    margin-bottom: 0
    padding-top: 0

  .inside h2
    --offset: -6.2vw
    --margin: 7vw
    margin: var(--offset) 0 calc(var(--offset) + var(--margin)) auto
    max-width: 45vw

  .inside h4
    margin-top: 0.5em

  .outside > *
    max-width: 25em
    margin: auto
  .inside > *
    max-width: 60em
    margin: auto

  .fond-de-poche-de-patate
    display: none

  .outside
    display: flex
    align-items: center

  .z-content
    padding-top: 0
    padding-bottom: 0

</style>
