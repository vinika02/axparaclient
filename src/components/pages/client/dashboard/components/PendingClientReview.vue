<template>
   <div class="pending-client-review">
        <div class="d-flex">
            <div class="flex-fill">
                <div class="">
                    <a href="/my-orders" class="link text-semi-bold-18">Pending Client Review / Feedback</a>                                     
                </div>
                <div class="pending-client-label-details">
                    Summary of all pending actions for you to review on My Orders
                </div>
            </div>
            <div class="flex-fill text-end align-self-center">
                <span class="see-pull-pipe">                                    
                    <a href="/my-orders" class="link text-blue">See Full Pipeline</a>
                </span>
            </div>
        </div>
        <div class="d-flex pending-client-table-container">
            <div class="flex-fill w-296">
                <div class="d-flex p-14 p-b-10 border-bottom">
                    <div class="cv-review heading flex-fill cursor-pointer">
                        CVs for Review
                    </div>
                    <div class="flex-fill text-end  p-0 pt-1 badge">
                        <span class="badge-orange   font-force-light font-12">
                            06
                        </span>
                    </div>
                </div>
                <div class="p-t-14 p-l-14 p-r-4 p-b-14">
                    <div class="cv-review-details cv-reviews">
                        <div class="mb-2">
                            <div class="profession p-x-12 p-y-4">Backend Developer</div>
                            <div class="profession-ids">
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>CV-24618</div>
                                    <div class="text-end">1 day ago</div>
                                </div> 
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>RT-24547</div>
                                    <div class="text-end">2 days ago</div>
                                </div>  
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>RT-24648</div>
                                    <div class="text-end">3 days ago</div>
                                </div>                                                
                            </div>
                        </div>
                        <div class="mb-2">
                            <div class="profession p-x-12 p-y-4">GoLang Developer</div>
                            <div class="profession-ids">
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>CV-24618</div>
                                    <div class="text-end">2 days ago</div>
                                </div> 
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>RT-24547</div>
                                    <div class="text-end">3 days ago</div>
                                </div>  
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>LK-98202</div>
                                    <div class="text-end">4 days ago</div>
                                </div>  
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>ES-49203</div>
                                    <div class="text-end">4 days ago</div>
                                </div>                                                    
                            </div>
                        </div>
                        <div class="mb-2"  v-for="f in 8" :key="f">
                            <div class="profession p-x-12 p-y-4">{{f}}  Frontend Dev</div>
                            <div class="profession-ids">
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>CV-24618</div>
                                    <div class="text-end">2 days ago</div>
                                </div> 
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>RT-24547</div>
                                    <div class="text-end">3 days ago</div>
                                </div>  
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>LK-98202</div>
                                    <div class="text-end">4 days ago</div>
                                </div>  
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>ES-49203</div>
                                    <div class="text-end">4 days ago</div>
                                </div>                                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-fill w-296">                                
                <div class="d-flex p-14 p-b-10 border-bottom">
                    <div class="interview-feedback heading cursor-pointer">
                        Interview Feedback
                    </div>
                    <div class="flex-fill p-0 pt-1 text-end badge">
                        <span class="badge-orange  font-force-light font-12">
                            04
                        </span>
                    </div>
                </div>
                <div class="p-t-14 p-l-14 p-r-4 p-b-14">
                    <div class="cv-review-details intenal-feedback">
                        <div class="mb-2">
                            <div class="profession p-x-12 p-y-4">Backend Developer</div>
                            <div class="profession-ids">
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>CV-24618</div>
                                    <div class="text-end">3 days ago</div>
                                </div> 
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>RT-24547</div>
                                    <div class="text-end">4 days ago</div>
                                </div>                                           
                            </div>
                        </div>
                        <div class="mb-2" v-for="item in 13" :key="item">
                            <div class="profession p-x-12 p-y-4">{{item}}  Software Engineer</div>
                            <div class="profession-ids">
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>CV-24618</div>
                                    <div class="text-end">2 days ago</div>
                                </div> 
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>RT-24547</div>
                                    <div class="text-end">4 days ago</div>
                                </div>  
                                                                                
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="flex-fill w-296">                                   
                <div class="d-flex p-14 p-b-10 border-bottom">
                    <div class="interview-feedback heading cursor-pointer">
                        Assessment Feedback
                    </div>
                    <div class="flex-fill text-end p-0 pt-1 badge">
                        <span class="badge-orange  font-force-light font-12">
                            02
                        </span>
                    </div>
                    </div>
                    <div class="p-t-14 p-l-14 p-r-4 p-b-14">
                    <div class="cv-review-details assesment-feedback">
                        <div class="mb-2">
                            <div class="profession p-x-12 p-y-4">Backend Developer</div>
                            <div class="profession-ids">
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>CV-24618</div>
                                    <div class="text-end">3 days ago</div>
                                </div> 
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>RT-24547</div>
                                    <div class="text-end">4 days ago</div>
                                </div>                                           
                            </div>
                        </div>
                        <div class="mb-2">
                            <div class="profession p-x-12 p-y-4">Software Engineer</div>
                            <div class="profession-ids">
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>CV-24618</div>
                                    <div class="text-end">4 days ago</div>
                                </div>                                                                                                  
                            </div>
                        </div>
                        <div class="mb-2" v-for="item in 13" :key="item">
                            <div class="profession p-x-12 p-y-4"> {{item}} Backend Developer</div>
                            <div class="profession-ids">
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>CV-24618</div>
                                    <div class="text-end">3 days ago</div>
                                </div> 
                                <div class="d-flex id p-x-12 p-y-4">
                                    <div>RT-24547</div>
                                    <div class="text-end">4 days ago</div>
                                </div>                                           
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>       
</template>

<style>
    /* Begin pending client review */

    .pending-client-review{
        background: white;
        padding: 14px;
        border-radius: 6px;
        min-height:430px;
        max-height:430px;
    }
    .looking-for-candidates{
        background: white;
        padding: 14px;
        border-radius: 6px;
        min-height: 428px;
        max-height:428px;
    }
   
    .pending-client-label-details{
        color: #6D6D6D;
        font-weight: 400;
        font-size: 14px;
        font-family: RubikRegular;
    }
    .see-pull-pipe{
        color: #2C91FF;
        font-family: RubikRegular;
        font-weight: 400;
        font-size: 16px;
    }
    .pending-client-table-container, .pending-client-table-container > div {
        border-style: solid;
        border-color: #EDEDED
    }
    .pending-client-table-container{
        border-width: 1px 0 0 1px;
        margin-top:14px;
    }
    .pending-client-table-container div{
        flex: 1 0 auto;
        max-width: 100%;
        box-sizing: border-box;
        margin: 0;
       
        border-width: 0 1px 1px 0;
    }
    .pending-client-table-container .heading{
        color: #FF9A2C;
        font-weight: 500;
        font-size: 16px;
        font-family: RubikMedium;
    } 
    .cv-review-details{
        height: 262px;
        overflow-y: auto;
    }

    .cv-review-details::-webkit-scrollbar{
        width: 6px;
     
    }
    .cv-review-details::-webkit-scrollbar-track {
        background: transparent; 
    }
    .cv-review-details::-webkit-scrollbar-thumb {
        background: #C9C9C9; 
        border-radius: 6px;
    }
    .cv-review-details::-webkit-scrollbar-thumb:hover {
        background: transparent; 
    } 



    .cv-review-details .profession{
        color: #27304C;
        font-weight: 600;
        font-size: 14px;
        font-family: RubikRegular;
        background: #FAFAFA;
    }
    .cv-review-details .profession-ids .id{
        color: #6D6D6D;
        font-weight: 400;
        font-size: 12px;
        font-family: RubikRegular;
        border-bottom: 1px solid #EDEDED;
    }

    /* End pending client review */
</style>

<script>
  export default {
      name: 'PendingClientReview',
      data(){
        return{
        }
      }
  }
</script>