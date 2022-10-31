<template>
  <div class="bg-gray pt-0">
    <div class="container-fluid app-container">
        <div class="content-container dashboard padding-24">
            <HelloHeader></HelloHeader>

            <div class="col-12 padding-top-24">
                <PendingClientReview></PendingClientReview>
            </div>

            <div class="row">

                <div class="col padding-top-24">
                    <Schedule />
                </div>

                <div class="col padding-top-24">
                    <NotificationCard />
                </div>

                <div class="col padding-top-24">
                    <div class="card card-contact-img">
                        <img src="../../../assets/images/mytalents/persona3/callcenter.png" alt="Banner" class="card-img-top">
                        <div class="card-body">
                            <h3>Need assistance with your orders? We can help!</h3>
                        </div>
                        <div class="card-footer border-top-0 bg-transparent d-flex justify-content-end align-items-center">
                            <a href="https://wa.me/6582003305" target="_blank">
                              <button type="button" class="btn btn-white">Chat via Whatsapp</button>
                            </a>
                            <a href="mailto:keith@axpara.com">
                              <button type="button" class="btn btn-white email-button">Email Us</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <StartInterview></StartInterview>
            </div>         
        </div>
    </div>
    <Persona2Modal></Persona2Modal>
    <SkillScannerModal></SkillScannerModal>  
  </div>
</template>

<script>
import Schedule from './components/Schedule';
import NotificationCard from './components/NotificationCard';
import StartInterview from './components/StartInterview';
import HelloHeader from './components/HelloHeader';
import PendingClientReview from './components/PendingClientReview';
import Persona2Modal from '@/components/modals/Persona2Modal.vue';
import SkillScannerModal from '../../modals/SkillScannerModal.vue';
export default {
    name: 'Persona3',
    components: {
        NotificationCard,
        StartInterview,
        HelloHeader,
        PendingClientReview,
        Schedule,
        Persona2Modal,
        SkillScannerModal
    },
}
</script>

<style>
    @font-face {
        font-family: "RubikMediumr";
        src: local("Rubik"),
            url(../../../assets/Rubik/Rubik-Medium.ttf) format("truetype");
    }
    .card-footer{
        padding:14px;
    }
    .card-footer .btn-white{
        height:40px;
        padding-left: 15px;
        padding-right: 15px;
    }

    .btn-white.email-button{
        margin-right:0px !important;
    }
    .dashboard{
        background: #f5f5f5 !important;
    } 
    .list-group .list-group-item{
        cursor: pointer;
    }
  
    .padding-24{
        padding: 24px;
    } 
   
    .w-480{
        max-width: 480px;
        width: 480px;
    }

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
        font-weight: 600;
        font-size: 16px;
        font-family: RubikLight;
    } 
    
    /* End pending client review */
    /* Card Image */
    .card-contact-img {
        background-color: #2C91FF;
        height: 498px;
        padding: 8px;
        border:none;
    }
    .card-contact-img h3 {
        font-family: RubikRegular;
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        color: #FFFFFF;
    }
    .btn-white {
        font-family: RubikRegular !important;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        margin-right: 12px !important;
        color:#2c91ff !important;
        border-radius: 2px !important;
        background-color: #fff !important;
    }
    /* end Card Image */
    
</style>