<template>
    <div class="d-flex persona-header">
        <div class="flex-fill persona-1 w-420">
            <span v-if="this.routeName != '/client/dashboard/persona2'">Hello, Leslie Alexander </span>
            <span v-if="this.routeName == '/client/dashboard/persona2'">Hello there! </span>
            <router-link class="me-2" to="/client/dashboard/persona1">1</router-link>
            <router-link class="me-2" to="/client/dashboard/persona2">2</router-link>
            <router-link  to="/client/dashboard/persona3">3</router-link>
           
        </div>
        <div class="flex-fill text-end">
            <button class="btn btn-outline-blue btn-lg btn-dashboard-date">1 June 2022, Wed  |   1:23 pm </button>
        </div>
    </div>
</template>

<style>
     .persona-header{
        color: #27304C;
        font-family: RubikRegular;
        font-weight: bold;
        font-size: 22px;
    }
    .dashboard .btn-dashboard-date{
        background: #E3F1FF;
        width: 209px;
        height: 42px;
        padding: 10px;
        font-weight: 500 ;
        font-size: 14px !important;
        font-family: RubikMedium !important;
    }

</style>

<script>
  export default {
      name: 'HelloHeader',
      data(){
        return{
            routeName: ''
        }
      },
      mounted(){
        this.routeName = window.location.pathname;
      }
  }
</script>