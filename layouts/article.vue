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
        fontSize: '{text.sm.fontSize}',
        fontWeight: '{fontWeight.medium}',
        '& :deep(svg)': {
          width: '{size.16}',
          height: '{size.16}',
          marginRight: '{space.2}'
        }
      },
      '.prev': {
        justifySelf: 'end'
      },
      '.next': {
        justifySelf: 'start'
      }
    },
    '.toc': {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid {elements.border.secondary.static}',
      borderRadius: '{borderRadius.md}',
      padding: '{space.4}',
      marginBottom: '{space.12}',
      backgroundColor: '{color.gray.900}',
      '.toc-title': {
        fontSize: '{text.lg.fontSize}',
        fontWeight: '{fontWeight.medium}',
        marginBottom: '{space.2}',
        color: '{color.gray.300}',
      },
      'ul': {
        listStyle: 'none',
        paddingLeft: '{space.4}',
        li: {
          lineHeight: '{text.sm.lineHeight}',
          marginBottom: '{space.2}',
          a: {
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            color: '{color.gray.400}',
            '& :deep(svg)': {
              width: '{size.8}',
              height: '{size.8}',
              marginRight: '{space.1}'
            }
          }
        }
      }
    }
  }
})
</style>