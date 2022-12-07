<template>
   <div>
     <div class="bg-gray">
        <div class="container-fluid app-container">
            <div class="content-container">
                <div class="d-flex">
                    <div class="my-acoount-label">
                        My Account
                    </div>
                    <div>
                        <svg class="svg-tab" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 4.5L6.4425 5.5575L9.8775 9L6.4425 12.4425L7.5 13.5L12 9L7.5 4.5Z" fill="#8C8C8C"/>
                        </svg>
                    </div>
                    <div class="active-tab">
                        {{tab}}
                    </div>
                </div>
                <div class="card mt-2 my-account my-account-custom-card">
                    <div class="card-header p-0">
                        <div class="topnav">
                            <a :class="{'active-tab-menu': tab == 'Users & Rates'}" href="#" @click="selectMenu('Users & Rates')">Users & Rates</a>
                            <a :class="{'active-tab-menu': tab == 'Invoices'}" href="#" @click="selectMenu('Invoices')">Invoices</a>
                        </div>
                    </div>
                    <div class="card-body">
                        <UserAndRates v-if="tab == 'Users & Rates'"></UserAndRates>                 
                    </div>
                </div>
            </div>
        </div>
      </div>
   </div>
</template>
<script>
    import UserAndRates from './myaccount/UserAndRates.vue'
    export default {
        name: 'MyAccount',
        data(){
            return{
                tab: 'Users & Rates'
            }
        },
        methods:{
            selectMenu(tab){
                this.tab  = tab;
            }
        },
        components:{
            UserAndRates
        }
    }
</script>
<style>
    .btn-add-user{
        color: #FFFFFF;
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
    }
    .my-account .details{
        color: #6D6D6D;
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
    }
    
    .my-acoount-label{
        color: #8C8C8C;
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
    }
    .active-tab{
        color: #27304C;
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
    }
    
    .svg-tab{
        margin-bottom: 8px;
    }
    .my-account-custom-card .card-header{
        background: #FFFFFF;
    }
    .my-account-custom-card{
        background: #FFFFFF;
        border:unset;
        border-radius: unset;
    }
   
</style>
