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
<style>
  .alertCard {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    color: white;
    border: 1px solid #718096;
    border-radius: 0.375rem;
    background-color: #2d374880;
    text-align: center;
  }
  .alertCard-icon {
    margin: auto;
  }
  .warning {
    background-color: #f59e0bc0;
    border-color: #d97706;
  }
  .error {
    background-color: #f56565c0;
    border-color: #c53030;
  }
  .info {
    background-color: #718096c0;
    border-color: #4a5568;
  }
</style>