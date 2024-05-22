<script setup lang="ts">
defineProps<{
  type?: string
}>()
</script>
<template>
  <div :class="`alertCard ${type}`">
    <div class="alertCard-icon">
      <Icon v-if="type === 'error'" name="mdi:alert-circle-outline" size="24" />
      <Icon v-else-if="type === 'warning'" name="mdi:alert" size="24" />
      <Icon v-else name="mdi:information-outline" size="24" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
