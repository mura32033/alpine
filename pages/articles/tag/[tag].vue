<template>
  <div>
    <NuxtLink
      to="/articles"
      class="back"
    >
      <Icon name="ph:arrow-left" />
      <span>
        Articles
      </span>
    </NuxtLink>
    <Hero>
      <template #title>
        <h1># {{ route.params.tag }}</h1>
      </template>
      <template #description>
        <p>{{ route.params.tag }}に関する記事です</p>
      </template>
    </Hero>
    <TagArticlesList :tag="route.params.tag" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped lang="ts">
css({
  div: {
    '.back': {
      display: 'inline-flex',
      paddingTop: '{space.12}',
      marginBottom: '{space.16}',
      alignItems: 'center',
      fontSize: '{text.lg.fontSize}',
      borderBottom: '1px solid {elements.border.secondary.static}',
      '& :deep(svg)': {
        width: '{size.16}',
        height: '{size.16}',
        marginRight: '{space.2}'
      }
    }
  }
})
</style>