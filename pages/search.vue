<template>
  <div class="bg-slate-100">
    <header-nav headerBg="/imgs/146.webp"></header-nav>
    <section class="overflow-hidden clear-both p-4 lg:max-w-6xl lg:mx-auto">
      <section class="cat-holder flex w-full bg-white rounded-sm p-4 justify-between mb-4">
        <a href="/3d" class="block transition duration-150 ease-in-out flex-1 shadow rounded text-center mx-4 pb-2 cursor-pointer hover:bg-info-200">
          <i class="iconfont icon-Flattd-Lego"></i>
          <p class=" text-2xl font-bold text-center">3D</p>
        </a>
        <a href="/ai" class="block transition duration-150 ease-in-out flex-1 shadow rounded text-center mx-4 pb-2 cursor-pointer hover:bg-info-200">
          <i class="iconfont icon-AI"></i>
          <p class=" text-2xl font-bold text-center">AI</p>
        </a>
        <a href="/tool" class="block transition duration-150 ease-in-out flex-1 shadow rounded text-center mx-4 pb-2 cursor-pointer hover:bg-info-200">
          <i class="iconfont icon-gongju"></i>
          <p class=" text-2xl font-bold text-center">工具集</p>
        </a>
      </section>
      <section class="lg:w-3/4 lg:float-left">
        <div class="bg-white p-4">
          <h2>关键字“{{key}}”搜索结果：</h2>
          <ul>
            <li class="block p-2 mb-4 rounded-sm bg-white shadow-lg" v-for="article of articles" :key="article.slug">
              <NuxtLink :to="{ name: '3d-slug', params: { slug: article.slug, cat: article.cat } }">
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
    <!-- <pre>
      {{articles}}
    </pre> -->
    <footer-nav></footer-nav>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            key: this.$route.query.key,
            articles: []
        }
    },

    beforeRouteUpdate(to, from ,next) {
        this.getData(to.query.key)
        this.key = to.query.key
        next()
    },

    created() {
        this.getData()
    },

    methods: {
      async getData(key) {
        const articles = await this.$content('articles')
            .only(['title', 'description', 'img', 'slug', 'author', 'cat'])
            .sortBy('createdAt', 'asc')
            .search(key || this.$route.query.key)
            .fetch()
        console.log('search articles is:', articles)
        
        this.articles = articles
      }
    },

    async asyncData({ $content, params, route }) {
      console.log('param is:', params, route)
      const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author', 'cat'])
        .sortBy('createdAt', 'asc')
        .search(route.query.key)
        .fetch()
      console.log('search articles is:', articles)
      return {
        articles
      }
    }
  }
</script>

<style scoped>
.cat-holder .iconfont {
  font-size: 3em;
}
</style>