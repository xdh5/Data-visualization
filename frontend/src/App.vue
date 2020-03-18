<template>
  <div id="app">
    <navMenu>
      <router-view class="body"></router-view>
    </navMenu>
  </div>
</template>

<script>
import navMenu from '@/components/NavMenu'
export default {
  name: 'app',
  components: {
    navMenu
  }
}
</script>
<style>
@import './assets/public.css';
.body{
    margin:0 3vw;
    font-size: 14px
}
</style>
