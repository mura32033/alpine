<template>
  <article ref="article">
    <NuxtLink
      :to="parentPath"
      class="back"
    >
      <Icon name="ph:arrow-left" />
      <span>
        戻る
      </span>
    </NuxtLink>
    <header>
      <h1
        v-if="page?.title"
        class="title"
      >
        {{ page.title }}
      </h1>
      <time
        v-if="page?.date"
        :datetime="page.date"
      >
        {{ formatDate(page.date) }}
      </time>
    </header>

    <div v-if="toc.links.length > 0" class="toc">
      <div class="toc-title">
        記事の目次
      </div>
      <ul>
        <li v-for="link in toc.links" :key="link.text">
          <a :href="`#${link.id}`">
            <Icon name="mdi:circle" size="8" /> {{ link.text }}
          </a>
        </li>
      </ul>
    </div>

    <div class="prose">
      <slot />
      <div
        v-if="alpine?.backToTop"
        class="back-to-top"
      >
        <ProseA @click.prevent.stop="onBackToTop">
          {{ alpine?.backToTop?.text || 'Back to top' }}
          <Icon :name="alpine?.backToTop?.icon || 'material-symbols:arrow-upward'" />
        </ProseA>
      </div>
      <hr class="divider">
      <div class="pagination">
        <div class="next">
          <NuxtLink v-if="next && next.layout != 'page'" :to="next._path">
            <Icon name="material-symbols:arrow-left" /> {{ next.title }}
          </NuxtLink>
        </div>
        <div class="prev">
          <NuxtLink v-if="prev.layout != 'page'" :to="prev._path">
            {{ prev.title }} <Icon name="material-symbols:arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const { page, prev, next, toc } = useContent()
const route = useRoute()
const alpine = useAppConfig().alpine
const article = ref<HTMLElement | null>(null)

if (page.value && page.value.cover) {
  useHead({
    meta: [
      { property: 'og:image', content: page.value.cover }
    ]
  })
}

const parentPath = computed(
  () => {
    const pathTabl = route.path.split('/')
    pathTabl.pop()
    return pathTabl.join('/')
  }
)

const onBackToTop = () => {
  article.value?.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>
