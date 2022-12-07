<template>
        <div class="my-talent ">
            <div class="d-flex p-6 pb-0">
                <div class="flex-fill cursor-pointer" >
                    <a href="/my-talent" class="link text-b-b-18"> My Talents</a>
                </div>
                <div class="flex-fill text-end">
                    <button class="btn btn-sm border-radius-0 talent-present" :class="{ 'active-talent-btn': filterTalent == 'present'}" @click="filterTalentList('present')">
                        <div class="d-flex">
                            <div>
                                <div class="present-dot dot-green">                                
                                </div>
                            </div>
                            <div>
                                <span class="label"> Present</span>
                            </div>
                        </div>
                    </button>
                    <button class="btn btn-sm border-radius-0 talent-leave" :class="{ 'active-talent-btn': filterTalent == 'leave'}"  @click="filterTalentList('leave')">
                        <div class="d-flex">
                            <div>
                                <div class="leave-dot dot-blue">                                
                                </div>
                            </div>
                            <div>
                                <span class="label"> Leave</span>
                            </div>
                        </div>                        
                    </button>
                    <button class="btn btn-sm border-radius-0 talent-holiday" :class="{ 'active-talent-btn': filterTalent == 'holiday'}" @click="filterTalentList('holiday')">
                        <div class="d-flex">
                            <div>
                                <div class="holiday-dot dot-orange">                                
                                </div>
                            </div>
                            <div>
                                <span class="label"> Public Holiday</span>
                            </div>
                        </div>                         
                    </button>
                </div>  
                                        
            </div>
            <div class="talent-list">
                <div class="row m-0">
                    <div class="col-sm-4 p-6 " v-for="talent in talents" :key="talent.id" :class="{ 'show-talent': filterTalent == talent.type || filterTalent == 'all', 'hide-talent': filterTalent != talent.type && filterTalent != 'all' }">
                        <div class="card talent-card " v-bind:class="talent.classColor">
                            <div class="card-body cursor-pointer">
                                <div class="text-center talent-image">           
                                    <img  v-bind:src="require('@/assets/images/mytalents/'+talent.image)" /> 
                                </div>
                                <div class="text-center talent-name font-regular mt-1">           
                                    {{talent.name}}
                                </div>
                                <div class="text-center talent-details font-regular">           
                                    {{talent.details}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-t-6 p-r-10">
                    <a href="/my-talent" class="link"> 
                        <button class="btn btn-primary btn-custom-blue w-100 see-all-talent-btn">
                            See All Talents
                        </button>
                    </a>                    
                </div>
            </div>     
        </div>
</template>
<style>
    /* My talent */
    
    .see-all-talent-btn{
        font-family: RubikRegular;
        height: 40px;
        margin-left: 5px !important;
       
    }
    .see-all-talent-btn:hover{
        color:gray !important;
    }
    .present-dot, .leave-dot, .holiday-dot{
        margin-top: 6px;
    }

    .talent-present.active-talent-btn{
        border-color: #00B600 !important;
    }
    .talent-leave.active-talent-btn{
        border-color: #2C91FF !important;
    }
    .talent-holiday.active-talent-btn{
        border-color: #FFC700 !important;
    }

    .hide-talent{
        display: none;
    }

    .my-talent{
        background: white;
        padding: 8px;
        border-radius: 6px;
        height: 500px;
    }
    .my-talent button .label{
        color: #27304C;
        font-weight: 600;
        font-size: 12px;
        font-family: RubikLight;
        margin-left:6px;
    }
    .my-talent button{
        border: 1px solid #EDEDED;
        margin-left:8px;
    }
    .my-talent button:hover{
        background: rgb(248, 247, 247) !important;
    }
    .talent-card{
        height: 134px;
    }
    .talent-card:hover{
        box-shadow:  0 0 3px gray;
    }
    .talent-name{
        color: #27304C;
        font-weight: 600;
        font-size: 16px;
    }
    .talent-details{
        color: #6D6D6D;
        font-weight: 400;
        font-size: 12px;
    }
    .talent-card .card-body{
        padding:10px;
    }
    .talent-list{
        margin-top:10px;
        height: 430px;
        overflow-y: overlay;
        overflow-x: hidden;
    }
    .talent-list::-webkit-scrollbar{
        width: 6px;
     
    }

    .talent-list::-webkit-scrollbar-track {
        background: transparent; 
    }
    .talent-list::-webkit-scrollbar-thumb {
        background: #C9C9C9; 
        border-radius: 6px;
    }
    .talent-list::-webkit-scrollbar-thumb:hover {
        background: transparent; 
    } 
</style>
    
<script>
    import Scrollbar from 'smooth-scrollbar';
    export default {
        name: 'MyTalentCard',
        data() {
            return {
                filterTalent: 'all',
                talents:[
                    {id: 1, name: "Ronald Richards", image: "ronaldrichards.png", classColor: 'card-yello-green', details:'', type:'present'},
                    {id: 4, name: "Courtney Henry", image: 'ronaldrichards.png', classColor: 'card-yello-green', details:'', type:'present'},
                    {id: 4, name: "Leslie Alexander", image: 'lesliealexander.png', classColor: 'card-sky-blue', details:'', type:'leave'},
                    {id: 5, name: "Cameron Williamson", image: 'ronaldrichards.png', classColor: 'card-yello-green', details:'', type:'present'},
                    {id: 6, name: "Jane Cooper", image: 'janecooper.png', classColor: 'card-sky-orange', details:'Independence....', type:'holiday'},
                    {id: 7, name: "Bessie Cooper", image: 'besiecooper.png', classColor: 'card-sky-white', details:'', type:''},
                    {id: 8, name: "Annette Black", image: 'lesliealexander.png', classColor: 'card-sky-blue', details:'', type:'leave'},
                    {id: 9, name: "Jerome Bell", image: 'ronaldrichards.png', classColor: 'card-yello-green', details:'', type:'present'},
                    {id: 9, name: "Jerome Bell1", image: 'ronaldrichards.png', classColor: 'card-yello-green', details:'', type:'present'},
                    {id: 9, name: "Jerome Bell2", image: 'ronaldrichards.png', classColor: 'card-yello-green', details:'', type:'present'},
                    {id: 9, name: "Jerome Bell3", image: 'ronaldrichards.png', classColor: 'card-yello-green', details:'', type:'present'},
                    {id: 9, name: "Jerome Bell4", image: 'ronaldrichards.png', classColor: 'card-yello-green', details:'', type:'present'},
                    {id: 9, name: "Jerome Bell5", image: 'ronaldrichards.png', classColor: 'card-yello-green', details:'', type:'present'},
                    {id: 9, name: "Jerome Bell6", image: 'ronaldrichards.png', classColor: 'card-yello-green', details:'', type:'present'},
                    {id: 9, name: "Jerome Bell7", image: 'ronaldrichards.png', classColor: 'card-yello-green', details:'', type:'present'},
                    {id: 9, name: "Jerome Bell8", image: 'ronaldrichards.png', classColor: 'card-yello-green', details:'', type:'present'},
                    {id: 9, name: "Jerome Bell9", image: 'ronaldrichards.png', classColor: 'card-yello-green', details:'', type:'present'},
                    {id: 9, name: "Jerome Bell10", image: 'ronaldrichards.png', classColor: 'card-yello-green', details:'', type:'present'},
                    {id: 9, name: "Jerome Bell11", image: 'ronaldrichards.png', classColor: 'card-yello-green', details:'', type:'present'},
                    {id: 9, name: "Jerome Bell12", image: 'ronaldrichards.png', classColor: 'card-yello-green', details:'', type:'present'},
                    {id: 9, name: "Jerome Bell12", image: 'ronaldrichards.png', classColor: 'card-yello-green', details:'', type:'present'},
                    {id: 4, name: "Courtney Henry 1", image: 'lesliealexander.png', classColor: 'card-sky-blue', details:'', type:'leave'},
                    {id: 4, name: "Leslie Alexander 1", image: 'lesliealexander.png', classColor: 'card-sky-blue', details:'', type:'leave'},
                ]
            }
        },
      methods:{
        setNotifBadgeActive(elname){
            this.elementMenu =  elname;
        },
        filterTalentList(type){
            if(this.filterTalent == type){
               this.filterTalent = "all"
            }else{
                this.filterTalent =  type;
            }           
        }
      },
      mounted(){
        
      }
    }
</script>
