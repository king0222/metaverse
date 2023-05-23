<template>
  <div class="bg-slate-100">
    <header-nav headerBg="/imgs/146.webp"></header-nav>
    <section class="overflow-hidden clear-both p-4 lg:max-w-6xl lg:mx-auto">
      <section class="lg:w-3/4 lg:float-left">
        <div class="bg-white p-4">
          <ul>
            <li class="block p-2 mb-4 rounded-sm bg-white shadow-lg" v-for="article of articles" :key="article.slug">
              <NuxtLink :to="{ name: '3d-slug', params: { slug: article.slug, cat: '3d' } }">
                <div class="article-bg bg-no-repeat bg-center bg-cover w-full h-40" style="background-image: url('/imgs/146.webp');"></div>
                <!-- <img :src="article.img" /> -->
                <div>
                  <h2 class=" text-2xl font-bold">{{ article.title }}</h2>
                  <p>by {{ article.author.name }}</p>
                  <p>{{ article.description }}</p>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </section>
      <section class="lg:pl-4 lg:w-1/4 lg:float-left">
        <div class="bg-white p-4">
          <ul>
            <li class="block p-2 mb-4 rounded-sm shadow" v-for="article of articles" :key="article.slug">
              <NuxtLink :to="{ name: '3d-slug', params: { slug: article.slug } }">
                <div>
                  <h2>{{ article.title }}</h2>
                  <p class="font-thin text-sm text-slate-400">by {{ article.author.name }}</p>
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
      const articles = await $content('articles/3d')
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>