<template>
    <div class="bg-gray  pt-0">
        <div class="container-fluid app-container">
            <div class="content-container dashboard padding-24">
               <div class="d-flex persona-header">
                    <div class="flex-fill persona-1 w-420">Hello, Leslie Alexander</div>
                    <div class="flex-fill text-end">
                        <button class="btn btn-outline-blue btn-lg btn-dashboard-date">1 June 2022, Wed  |   1:23 pm </button>
                    </div>
               </div>
               <div>

                   Start make a content here..


               </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'Persona2',
    data() {
        return {
        }
    },
    created(){       

    },
    mounted(){
    },
    methods:{    
    }
}
</script>
<style> 
    .dashboard{
        background: #f5f5f5 !important;
        height: 100vh;
    } 
    .list-group .list-group-item{
        cursor: pointer;
    }
    .dashboard .btn-dashboard-date{
        background: #E3F1FF;
        width: 209px;
        height: 42px;
        padding: 10px;
        font-weight: 600;
        font-size: 14px;
    }
    .padding-24{
        padding: 24px;
    } 
    .persona-header{
        color: #27304C;
        font-family: RubikRegular;
        font-weight: bold;
        font-size: 22px;
    }
    .w-480{
        max-width: 480px;
        width: 480px;
    }

   
    
</style>