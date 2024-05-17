<script setup lang="ts">
definePageMeta({
  layout: 'docs'
})
const route = useRoute()
const { data: page } = await useAsyncData('tag_articles', () => queryContent('articles').where({
  tags: route.params.slug
}).find())
</script>

<template>
  <div>
    {{ page }}
  </div>
</template>