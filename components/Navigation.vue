<template>
  <nav class="navigation">
    <router-link to="/">Home</router-link>
    <router-link to="contacts">Contacts</router-link>
    <router-link to="about">About</router-link>
  </nav>
</template>

<style scoped lang="sass">
.navigation
  position: fixed
  top: 0
  left: 0
  right: 0
  text-align: center
  padding: 20px 0
  a
    color: #000
    font-size: 14px
    text-transform: uppercase
    text-decoration: none
    margin: 0 20px
    padding: 5px 0
    display: inline-block
    position: relative
    &:before
        content: ""
        position: absolute
        bottom: 0
        left: 0
        width: 100%
        height: 1px
        background: #000
        transform: scaleX(0)
        transition: transform .25s ease-in-out
        transform-origin: 0 0
    &:hover, &.nuxt-link-exact-active
      &:before
        transform: scaleX(1)



</style>
