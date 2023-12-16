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
        <div class="prev" v-if="prev">
          <NuxtLink v-if="prev.layout != 'page'" :to="prev._path">
            <Icon name="material-symbols:arrow-left" /> {{ prev.title }}
          </NuxtLink>
        </div>
        <div class="next" v-if="next">
          <NuxtLink v-if="next.layout != 'page'" :to="next._path">
            {{ next.title }} <Icon name="material-symbols:arrow-right" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
const { page, prev, next } = useContent()
const route = useRoute()
const alpine = useAppConfig().alpine

console.log(prev)
console.log(next)

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

<style scoped lang="ts">
css({
  article: {
    maxWidth: '{alpine.readableLine}',
    mx: 'auto',
    py: '{space.4}',
    '@sm': {
      py: '{space.12}',
    },
    '.back': {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '{text.lg.fontSize}',
      borderBottom: '1px solid {elements.border.secondary.static}',
      '& :deep(svg)': {
        width: '{size.16}',
        height: '{size.16}',
        marginRight: '{space.2}'
      }
    },
    header: {
      marginTop: '{space.16}',
      marginBottom: '{space.12}',
    },
    '.title': {
      fontSize: '{text.5xl.fontSize}',
      lineHeight: '{text.5xl.lineHeight}',
      fontWeight: '{fontWeight.semibold}',
      marginBottom: '{space.4}'
    },
    time: {
      color: '{elements.text.secondary.color.static}'
    },
    '.prose': {
      '.back-to-top': {
        color: '{elements.text.secondary.color.static}',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        a: {
          cursor: 'pointer',
          fontSize: '{text.lg.fontSize}'
        }
      },
      '& :deep(h1)': {
        display: 'none'
      },
    },
    '.divider': {
      border: 'none',
      borderBottom: '1px solid {elements.border.secondary.static}',
      marginTop: '{space.12}',
      marginBottom: '{space.6}'
    },
    '.pagination': {
      color: '{elements.text.secondary.color.static}',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      justifyContent: 'space-between',
      a: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '{text.lg.fontSize}',
        fontWeight: '{fontWeight.medium}',
        '& :deep(svg)': {
          width: '{size.16}',
          height: '{size.16}',
          marginRight: '{space.2}'
        }
      },
      '.prev': {
        justifySelf: 'start'
      },
      '.next': {
        justifySelf: 'end'
      }
    }
  }
})
</style>