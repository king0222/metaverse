<template>
  <header>
    <!-- Navigation bar -->
    <nav
      class="header-nav sticky top-0 z-40 flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
      data-te-navbar-ref
    >
      <div class="flex w-full flex-wrap items-center justify-between px-3 lg:max-w-6xl lg:mx-auto">
        <div class="flex items-center">
          <!-- Hamburger menu button -->
          <button
            class="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentX"
            aria-controls="navbarSupportedContentX"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <!-- Hamburger menu icon -->
            <span class="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-7 w-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </button>
        </div>

        <!-- Navigation links -->
        <div
          class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContentX"
          data-te-collapse-item
        >
          <img src="/imgs/logo.jpg" class="w-10 h-10 rounded-3xl mx-auto block lg:ml-0 lg:mr-4"/>
          <ul class="mr-auto flex flex-col lg:flex-row" data-te-navbar-nav-ref>
            <li
              class="mb-4 mt-4 pl-1 lg:mb-0 lg:mt-0 lg:hover:bg-info-500 hover:rounded"
              data-te-nav-item-ref
            >
              <a
                class="block text-white transition duration-150 ease-in-out lg:pl-4 lg:pr-4 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href="/"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                >首页</a
              >
            </li>
            <li
              class="mb-4 mt-4 pl-1 lg:mb-0 lg:mt-0 lg:hover:bg-info-500 hover:rounded"
              data-te-nav-item-ref
            >
              <a
                class="block text-white transition duration-150 ease-in-out lg:pl-4 lg:pr-4 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href="/3d"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                >3D</a
              >
            </li>
            <li
              class="mb-4 mt-4 pl-1 lg:mb-0 lg:mt-0 lg:hover:bg-info-500 hover:rounded"
              data-te-nav-item-ref
            >
              <a
                class="block text-white transition duration-150 ease-in-out lg:pl-4 lg:pr-4 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href="/ai"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                >AI</a
              >
            </li>
            <li
              class="mb-4 mt-4 pl-1 lg:mb-0 lg:mt-0 lg:hover:bg-info-500 hover:rounded"
              data-te-nav-item-ref
            >
              <a
                class="block text-white transition duration-150 ease-in-out lg:pl-4 lg:pr-4 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href="/tool"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                >工具</a
              >
            </li>
          </ul>

          <div class="w-full lg:w-60">
            <div class="relative flex w-full flex-wrap items-stretch">
              <input
                type="search"
                v-model="searchQuery"
                class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base text-black font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-info-700 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-info-700"
                placeholder="搜索2"
                aria-label="Search"
                aria-describedby="button-addon1"
                @keyup.enter="search"
              />

              <!--Search button-->
              <button
                class="relative z-[2] flex items-center rounded-r bg-info-700 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-info-800 hover:shadow-lg focus:bg-info-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-info-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero section with background image, heading, subheading and button -->
    <div v-if="headerBg" class="header-bg relative overflow-hidden bg-cover bg-no-repeat" :style="'background-image: url('+headerBg+')'">
      <!-- <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
      >
        <div class="flex h-full items-center justify-center">
          <div class="px-6 text-center text-white md:px-12">
            <h1 class="mb-6 text-5xl font-bold">Heading</h1>
            <h3 class="mb-8 text-3xl font-bold">Subeading</h3>
            <button
              type="button"
              class="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Get started
            </button>
          </div>
        </div>
      </div> -->
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        searchQuery: '',
        articles: []
      }
    },

    props: {
      headerBg: {
        type: String,
        required: false,
      }
    },

    methods: {
      async search () {
        console.log('keyword is:', this.searchQuery)
        this.$router.push(`/search?key=${this.searchQuery}`)
        this.articles = await this.$content('articles')
          .limit(6)
          .search(this.searchQuery)
          .fetch()
        console.log('this articles is:', this.articles)
      }
    }
    
  }
</script>

<style scoped>
.header-nav {
  background-color: rgba(3 158 186 / 75%);
}

.header-bg {
  background-position: 50%;
  height: 350px;
}
</style>