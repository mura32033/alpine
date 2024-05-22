<script lang="ts" setup>
const alpine = useAppConfig().alpine

const show = ref(false)
</script>

<template>
  <header :class="alpine.header.position || 'left'">
    <div class="menu">
      <button @click="(show = !show)" aria-label="Navigation Menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17q0-.425.288-.712T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12q0-.425.288-.712T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7q0-.425.288-.712T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8z"/></svg>
      </button>
    </div>

    <div class="overlay" :class="[show && 'show']">
      <MainNav @link-click="show = !show" />
    </div>

    <div class="logo">
      <NuxtLink v-if="alpine.header.logo" to="/">
        <!-- TODO: width/height doesn't make much sense here, but Lighthouse requires it. 
        Used current Alpine logo ratio, will break on enduser logo -->
        <NuxtImg class="dark-img" :src="alpine.header.logo.pathDark" :alt="alpine.header.logo.alt" width="89" height="31" />
        <NuxtImg class="light-img" :src="alpine.header.logo.path" :alt="alpine.header.logo.alt" width="89" height="31" />
      </NuxtLink>
      <NuxtLink v-else to="/" class="fallback">
        {{ alpine.title }}
      </NuxtLink>
    </div>

    <div class="main-nav">
      <MainNav />
    </div>
  </header>
</template>
