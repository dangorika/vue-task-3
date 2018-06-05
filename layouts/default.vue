<template>
  <div>
    <navigation />
    <nuxt/>
  </div>
</template>

<script>

import Navigation from '~/components/Navigation'

export default {
  components: {
    Navigation
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 20px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.l {
  max-width: 950px;
  margin: 0 auto;
}
.letter {
  display: inline-block;
}
</style>
