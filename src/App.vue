
<script>
  import { RouterLink, RouterView } from 'vue-router';
  import Header from './components/includes/HeaderNav.vue'
    export default {
    name: 'App',
    components: {
      Header
    },
}
</script>

<template>
  <Header></Header>
  <RouterView/>
</template>

<style>
  html, body{
    background-color: #f5f5f5;
  }  
    
  .app-container{         
        width: 1440px;
        max-width: 1440px !important;
  }
  .bg-gray{
      padding-top:24px;
      background-color: #f5f5f5;
  }
  
  
  .cursor-pointer{
      cursor:pointer;
  }
</style>
