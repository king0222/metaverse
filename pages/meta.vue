<template>
  <div class="home blog sidebar_no animate-nav mini-sidebar">
    <Sidebar></Sidebar>
    <div class="modal-dialog h-100  sidebar-nav-inner">
      <Header></Header>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MetaPage',
})
</script>

<style src="@/static/css/meta.css">
</style>