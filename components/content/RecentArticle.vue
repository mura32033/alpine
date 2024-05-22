<script setup lang="ts">
import { withTrailingSlash } from 'ufo'

const props = defineProps({
  path: {
    type: String,
    default: 'articles'
  }
})

// @ts-ignore
const { data: _articles } = await useAsyncData('articles', async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).limit(1).find())

const articles = computed(() => _articles.value || [])
</script>

<template>
  <div v-if="articles?.length" class="articles-list">
    <div class="featured">
      <ArticlesListItem :article="articles[0]" :featured="true" />
    </div>
  </div>
  <div v-else class="tour">
    <p>表示できる記事がありません。</p>
  </div>
</template>
