
<script>
  import Header from './components/includes/HeaderNav.vue'
    export default {
    
      name: 'App',
      data(){
        return{
          routeName: ''
        }
      },
      components: {
        Header
      },
      mounted(){
        this.routeName = window.location.pathname;
      }
}
</script>

<template>
  <Header v-if="this.routeName != '/login' && this.routeName !=  '/'"></Header>
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
