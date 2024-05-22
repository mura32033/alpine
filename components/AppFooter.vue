<script lang="ts" setup>
const alpine = useAppConfig().alpine
</script>

<template>
  <footer
    :class="[
      alpine.footer.alignment
    ]"
  >
    <NuxtLink v-if="alpine.footer?.credits?.enabled" class="credits" :to="alpine.footer.credits.repository">
      {{ alpine.footer?.credits?.text }}
    </NuxtLink>

    <div v-if="alpine.footer.navigation" class="navigation">
      <MainNav />
    </div>

    <p v-if="alpine.footer?.message" class="message">
      {{ alpine.footer.message }}
    </p>

    <div class="icons">
      <div v-if="alpine.socials && Object.entries(alpine.socials)" class="social">
        <SocialIcons :socials="alpine.socials" />
      </div>
      <div class="color-mode-switch">
        <ColorModeSwitch />
      </div>
    </div>
  </footer>
</template>
