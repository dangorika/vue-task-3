<template>
  <div class="about">
    <div class="about__entry">
      <div class="l">
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et facere architecto laudantium ducimus neque assumenda facilis deleniti dolor soluta odio eveniet minima quam, quaerat earum aspernatur alias sunt magni officiis.</p>
      </div>
    </div>
  </div>
</template>

<script>
import {PageTransition} from '~/components/mixins/transition'

export default {
  mixins: [PageTransition]
}
</script>

<style scoped lang="sass">
.about
  display: flex
  min-height: 100vh
  background: #fafafa
  &__entry
    margin: auto
    text-align: center
  h1
    font-size: 100px
    margin-bottom: 40px
    text-transform: uppercase
    letter-spacing: .1em
  p
    line-height: 1.6
</style>
