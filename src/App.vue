
<script>
  import Header from './components/includes/HeaderNav.vue';
  import Footer from './components/includes/Footer.vue';
  import { mapActions, mapState } from "vuex";
    export default {
    
      name: 'App',
      data(){
        return{
          routeName: '',
          isLogin: false,
        }
      },
      computed:{
            ...mapState("auth", ["auth"]),
      },
      components: {
        Header,
        Footer
      },
      methods:{
        ...mapActions("auth", [ 
            'setLogin'
        ]),
        pageLoad(){
          this.routeName = window.location.pathname.split('/');

          if(this.routeName[2] ==  'v2'){
            this.setLogin(true);
          }else{
            this.setLogin(false);
          }          
        },
        
      },
      mounted(){
        this.pageLoad();
        this.isLogin = this.auth.isLogin;       
      },
      watch: {
        $route (to, from){
          this.pageLoad();
        }          
    },
}
</script>

<template>
  <Header v-if="this.routeName[1] != 'login'"></Header>
  <RouterView/>
  <Footer v-if="this.routeName[1] != '' && this.routeName[1] != 'candidate-db-table' && this.routeName[2] != 'candidate-db-table' && !isLogin"></Footer>
</template>

<style>
  html, body{
    background-color: #f5f5f5;
  }     
  @media only screen and (max-width: 600px){
    body{
      zoom: 40%;
    }
    html, body, #app, .main, .v-body{
      height: 100% !important;
    }
  } 
  .app-container{         
        width: 1440px;
        max-width: 1440px !important;
  }
  .bg-gray{
      padding-top:24px;
      background-color: #f5f5f5;
  }  
  .bg-custom-gray{
      background-color: #f5f5f5;
  }
  .bg-sky-blue{
      padding-top:24px;
      background-color: #F4F9FF
  }  
  .cursor-pointer{
      cursor:pointer;
  }
  @media screen and (max-width: 900px) {
    .app-container{         
          width: 100%;
    }
  }
 
</style>
