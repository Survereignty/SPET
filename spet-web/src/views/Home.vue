<template>
  <h1>Hello world
  <router-link
    to="/students"
  >
    Students
  </router-link>
    <router-link
    to="/comps"
  >
    Comps
  </router-link>
    <router-link
    to="/docs"
  >
    Docs
  </router-link>
  </h1>
</template>

<script>

export default {
  name: 'Home',
}
</script>
