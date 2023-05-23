<template>
  <div class="bg-slate-100">
    <header-nav></header-nav>
    <section class="overflow-hidden clear-both p-4 lg:max-w-6xl lg:mx-auto">
      <section class="lg:w-3/4 lg:float-left">
        <div class="bg-white p-4">
          <article>
            <AppSearchInput />
            <h1>{{ article.title }}</h1>
            <p>{{ article.description }}</p>
            <img :src="article.img" :alt="article.alt" />
            <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>

            <nuxt-content :document="article" />

            <author :author="article.author" />

            <prev-next :prev="prev" :next="next" />
          </article>
        </div>
      </section>
      <section class="lg:pl-4 lg:w-1/4 lg:float-left">
        <div class="bg-white p-4">
          <ul>
            <li
              class="block p-2 mb-4 rounded-sm shadow"
              v-for="article of articles"
              :key="article.slug"
            >
              <NuxtLink
                :to="{ name: '3d-slug', params: { slug: article.slug } }"
              >
                <div>
                  <h2>{{ article.title }}</h2>
                  <p class="font-thin text-sm text-slate-400">
                    by {{ article.author.name }}
                  </p>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </section>
    </section>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    console.log('params is:', params)
    let path = `articles`
    if (params.cat) {
      path = `${path}/${params.cat}`
    }
    const article = await $content(path, params.slug).fetch()

    const [prev, next] = await $content(path)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
    }
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}

.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}

.nuxt-content p {
  margin-bottom: 20px;
}

.icon.icon-link {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

.nuxt-content-highlight {
  @apply relative;
}

.nuxt-content-highlight .filename {
  @apply absolute right-0 text-gray-600 font-light z-10 mr-2 mt-1 text-sm;
}
</style>