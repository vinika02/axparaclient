<template>
    <div class="bg-gray  pt-0">
        <div class="container-fluid app-container">
            <div class="content-container dashboard padding-24">
                <div class="d-flex persona-header">
                    <div class="flex-fill persona-1 w-420">Hello, Leslie Alexander</div>
                    <div class="flex-fill text-end">
                        <button class="btn btn-outline-blue btn-lg btn-dashboard-date">1 June 2022, Wed | 1:23 pm
                        </button>
                    </div>
                </div>
                <div class="lets-get-started">
                    <div class="started">
                        Let's get started!
                    </div>
                    <div class="find-the-right-talent">
                        Find the right talent for your team at Axpara.com. For concerns, you can contact our talent team
                        or even our CEO via WhatsApp!
                    </div>
                    <img src="../../../assets/images/mytalents/Frame.svg" alt="" class="framesvg">
                </div>
                <div class="Table-1">
                    <div class="Search-from-our-Candidate-Database">
                        Search from our Candidate Database
                    </div>
                 
                    <div class="input-group search-skill">
                        <input type="text" class="form-control input-skill-scann" placeholder="Search keywords or select skills" aria-label="Search keywords or select skills" aria-describedby="input-skill-scann">
                        <span class="input-group-text search-icon" id="input-skill-scann">
                           <img src="../../../assets/images/mytalents/Vector.svg">
                    
                        </span>
                    </div>
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
    created() {

    },
    mounted() {
    },
    methods: {
    }
}
</script>
<style>
@font-face {
    font-family: "RubikMediumr";
    src: local("Rubik"),
        url(../../../assets/Rubik/Rubik-Medium.ttf) format("truetype");
}

@font-face {
    font-family: "RubikRegular";
    src: local("Rubik"),
        url(../../../assets/Rubik/Rubik-Regular.ttf) format("truetype");
}

.dashboard {
    background: #f5f5f5 !important;
    height: 100vh;
}

.list-group .list-group-item {
    cursor: pointer;
}

.dashboard .btn-dashboard-date {
    background: #E3F1FF;
    width: 209px;
    height: 42px;
    padding: 10px;
    font-weight: 600;
    font-size: 14px;
}

.padding-24 {
    padding: 24px;
}

.persona-header {
    color: #27304C;
    font-family: RubikRegular;
    font-weight: bold;
    font-size: 22px;
    padding-bottom: 24px;
}

.w-480 {
    max-width: 480px;
    width: 480px;
}

.lets-get-started {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 0px 0px 24px;
    gap: 62px;

    width: 1392px;
    height: 138px;

    /* Color/primary/Blue01 */

    background: #2C91FF;
    border-radius: 6px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}

.started {
    width: 109px;
    height: 72px;
    font-size: 26px;
    color: #FFFFFF;
    font-family: RubikMediumr !important;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.find-the-right-talent {
    width: 946.2px;
    height: 60px;
    color: #FFFFFF;
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 136%;
}

.Chat-via-Whatsapp {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 9px 16px;
    gap: 8px;
    width: 157px;
    height: 40px;
    background: #FFFFFF;
    border-radius: 2px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.Table-1 {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 14px;
    width: 1392px;
    height: 544px;
    background: #FFFFFF;
    box-shadow: 0px 8px 15px #F3F4F5;
    border-radius: 6px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.Search-from-our-Candidate-Database {
    width: 1360px;
    height: 26px;

    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 145%;

    display: flex;
    align-items: center;
    color: #2C91FF;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}

.search-keyword {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 14px;
    width: 1360px;
    height: 40px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}
.input-skill-scann{
        border-right:none !important;
        border-top-left-radius: 3px !important;
        border-bottom-left-radius: 3px !important;
        padding:10px !important;
        font-size: 14px !important;
        font-family: RubikRegular;
        font-weight: 400 !important;
        color: #C9C9C9 !important;
        box-shadow: none !important;
        border-color: #EDEDED !important;
    }

.form-control {
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    /* or 22px */

    display: flex;
    align-items: center;

    /* Color/Natural/09 */

    color: #C9C9C9;


    /* Inside auto layout */


}
</style>