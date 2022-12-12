<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-custom-blue" :class="{ 'pt-2 pb-2': myLocation == 'Others'}" v-if="this.routeName == 'employer'">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <svg width="112" height="32" viewBox="0 0 112 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="112" height="32" fill="url(#pattern0)"/>
                        <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_11269_28298" transform="translate(-0.116071 -0.157656) scale(0.00616071 0.0215625)"/>
                        </pattern>
                        <image id="image0_11269_28298" width="200" height="61" xlink:href="data:image/png;base64,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"/>
                        </defs>
                     </svg>
                </a>
                <button class="navbar-toggler" id="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav nav-menu-left">
                    <li class="nav-item cursor-pointer" v-for="(menu) in employerMenu" :key="menu.id">
                        <router-link class="nav-link" active-class="active-menu" v-if="!isLogin && myLocation != ''" v-on:click="selectMenu(menu.id)" v-bind:class="{ 'active-menu': (menu.id === activeMenuId) }"  :data-bs-toggle=" menu.menuName != 'Candidate Database' ? 'modal': ''" :href=" menu.menuName != 'Candidate Database' ? '#LoginModal': ''" :to="menu.route">{{menu.menuName}}</router-link>
                        <router-link class="nav-link" active-class="active-menu" v-if="isLogin && myLocation != ''"  v-on:click="selectMenu(menu.id)" v-bind:class="{ 'active-menu': (menu.id === activeMenuId) }" :to="menu.route">{{menu.menuName}}</router-link>
                    </li>    
                    <!-- <li>                        
                        <router-link class="nav-link" v-if="!isLogin && myLocation != 'Philippines'"  to="/employer/candidate-db-table" v-on:click="selectMenu(20)" v-bind:class="{ 'active-menu': (20 === activeMenuId) }">Candidate Database</router-link>
                    </li>   -->
                    <li>                        
                        <router-link class="nav-link"  to="/about-axpara" v-if="myLocation != ''" v-on:click="selectMenu(22)" v-bind:class="{ 'active-menu': (activeMenuId == 22) }">About Axpara</router-link>
                    </li>                
                </ul>
                <ul class="navbar-nav ms-auto nav-menu-right">
                    <li class="nav-item">
                        <a class="nav-link p-y-f-0" href="https://wa.me/6582003305" target="_blank">
                            <button class="btn btn-sm btn-dark-green header-btn btn-header-whats-up">
                                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path d="M5.04402 14.412L5.64735 14.7645C6.6648 15.3579 7.82201 15.6694 8.99985 15.667C10.3184 15.667 11.6073 15.276 12.7037 14.5435C13.8 13.8109 14.6545 12.7697 15.159 11.5515C15.6636 10.3334 15.7957 8.99293 15.5384 7.69972C15.2812 6.40652 14.6462 5.21863 13.7139 4.28628C12.7815 3.35393 11.5937 2.71899 10.3005 2.46176C9.00725 2.20452 7.6668 2.33654 6.44863 2.84113C5.23045 3.34571 4.18926 4.2002 3.45672 5.29652C2.72418 6.39285 2.33318 7.68178 2.33318 9.00033C2.33318 10.197 2.64735 11.3445 3.23652 12.3537L3.58818 12.957L3.04402 14.9578L5.04402 14.412ZM0.669848 17.3337L1.79652 13.1937C1.05413 11.921 0.664095 10.4737 0.666515 9.00033C0.666515 4.39783 4.39735 0.666992 8.99985 0.666992C13.6023 0.666992 17.3332 4.39783 17.3332 9.00033C17.3332 13.6028 13.6023 17.3337 8.99985 17.3337C7.52716 17.336 6.0804 16.9463 4.80818 16.2045L0.669848 17.3337ZM5.99235 5.09033C6.10402 5.08199 6.21652 5.08199 6.32818 5.08699C6.37318 5.09033 6.41818 5.09533 6.46318 5.10033C6.59568 5.11533 6.74152 5.19616 6.79068 5.30783C7.03902 5.87116 7.28068 6.43866 7.51402 7.00783C7.56568 7.13449 7.53485 7.29699 7.43652 7.45533C7.36889 7.56239 7.29573 7.66586 7.21735 7.76533C7.12318 7.88616 6.92068 8.10783 6.92068 8.10783C6.92068 8.10783 6.83818 8.20616 6.86985 8.32866C6.88152 8.37533 6.91985 8.44283 6.95485 8.49949L7.00402 8.57866C7.21735 8.93449 7.50402 9.29533 7.85402 9.63533C7.95402 9.73199 8.05152 9.83116 8.15652 9.92366C8.54652 10.2678 8.98818 10.5487 9.46485 10.757L9.46902 10.7587C9.53985 10.7895 9.57568 10.8062 9.67902 10.8503C9.73068 10.872 9.78402 10.8912 9.83818 10.9053C9.89416 10.9196 9.95311 10.9169 10.0076 10.8976C10.062 10.8783 10.1095 10.8433 10.144 10.797C10.7473 10.0662 10.8023 10.0187 10.8073 10.0187V10.0203C10.8493 9.98123 10.8991 9.95156 10.9534 9.93331C11.0077 9.91505 11.0653 9.90864 11.1223 9.91449C11.1723 9.91783 11.2232 9.92699 11.2698 9.94783C11.7123 10.1503 12.4365 10.4662 12.4365 10.4662L12.9215 10.6837C13.0032 10.7228 13.0773 10.8153 13.0799 10.9045C13.0832 10.9603 13.0882 11.0503 13.069 11.2153C13.0423 11.4312 12.9773 11.6903 12.9123 11.8262C12.8678 11.9189 12.8088 12.0038 12.7374 12.0778C12.6533 12.1661 12.5612 12.2465 12.4623 12.3178C12.4282 12.3435 12.3934 12.3685 12.3582 12.3928C12.2545 12.4586 12.148 12.5198 12.039 12.5762C11.8245 12.6901 11.5875 12.7556 11.3448 12.7678C11.1907 12.7762 11.0365 12.7878 10.8815 12.7795C10.8749 12.7795 10.4082 12.707 10.4082 12.707C9.22339 12.3954 8.12767 11.8115 7.20818 11.002C7.01985 10.8362 6.84568 10.6578 6.66735 10.4803C5.92568 9.74283 5.36568 8.94699 5.02568 8.19533C4.85166 7.8264 4.75765 7.42483 4.74985 7.01699C4.74641 6.51103 4.9118 6.01838 5.21985 5.61699C5.28068 5.53866 5.33818 5.45699 5.43735 5.36283C5.54318 5.26283 5.60985 5.20949 5.68235 5.17283C5.77874 5.12452 5.8839 5.09617 5.99152 5.08949L5.99235 5.09033Z" fill="white"/>
                                </svg>
                                <span class="ms-2">
                                    Whatsapp Us
                                </span>
                            </button>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link p-y-f-0" href="https://telegram.me/+6582003305" target="_blank">
                            <button class="btn btn-sm btn-white btn-telegram header-btn">
                                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.99984 15.667C10.7679 15.667 12.4636 14.9646 13.7139 13.7144C14.9641 12.4641 15.6665 10.7684 15.6665 9.00033C15.6665 7.23222 14.9641 5.53652 13.7139 4.28628C12.4636 3.03604 10.7679 2.33366 8.99984 2.33366C7.23173 2.33366 5.53604 3.03604 4.28579 4.28628C3.03555 5.53652 2.33317 7.23222 2.33317 9.00033C2.33317 10.7684 3.03555 12.4641 4.28579 13.7144C5.53604 14.9646 7.23173 15.667 8.99984 15.667ZM8.99984 17.3337C4.39734 17.3337 0.666504 13.6028 0.666504 9.00033C0.666504 4.39783 4.39734 0.666992 8.99984 0.666992C13.6023 0.666992 17.3332 4.39783 17.3332 9.00033C17.3332 13.6028 13.6023 17.3337 8.99984 17.3337ZM6.40817 9.97533L4.3265 9.32616C3.8765 9.18866 3.874 8.87866 4.42734 8.65616L12.5382 5.52283C13.009 5.33116 13.2757 5.57366 13.1232 6.18116L11.7423 12.6978C11.6457 13.162 11.3665 13.2728 10.979 13.0587L8.85317 11.4853L7.86234 12.442C7.76067 12.5403 7.67817 12.6245 7.5215 12.6453C7.36567 12.667 7.23734 12.6203 7.14317 12.362L6.41817 9.96949L6.40817 9.97616V9.97533Z" fill="#2C91FF"/>
                                </svg>
                                <span>
                                    Telegram Us
                                </span>
                            </button>
                        </a>
                    </li>
                    
                    <li class="nav-item ">
                        <a class="nav-link login p-y-f-0" href="#">
                            <button class="btn btn-sm btn-outline-white btn-login header-btn" data-bs-toggle="modal" data-bs-target="#LoginModal">
                                <span>
                                  Login
                                </span>
                            </button>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <LoginModal v-if="this.routeName == 'employer'"></LoginModal>
        <nav class="navbar navbar-expand-lg navbar-dark bg-custom-blue" v-if="this.routeName != 'employer'">
            <div class="container-fluid">
                <a class="navbar-brand" href="/client">
                    <svg width="112" height="32" viewBox="0 0 112 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <rect width="112" height="32" fill="url(#pattern0)"/>
                        <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_11269_28298" transform="translate(-0.116071 -0.157656) scale(0.00616071 0.0215625)"/>
                        </pattern>
                        <image id="image0_11269_28298" width="200" height="61" xlink:href="data:image/png;base64,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"/>
                        </defs>
                     </svg>
                </a>
                <button class="navbar-toggler" id="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav nav-menu-left">
                    <li class="nav-item cursor-pointer" v-for="(menu) in menus" :key="menu.id">
                        <router-link class="nav-link" active-class="active-menu" v-on:click="selectMenu(menu.id)" v-bind:class="{ 'active-menu': (menu.id === activeMenuId) }" :to="menu.route">{{menu.menuName}}</router-link>
                    </li>                    
                </ul>
                <ul class="navbar-nav ms-auto nav-menu-right">
                    <li class="nav-item">
                        <a class="nav-link user-email nav-link-not-click" href="#">axpara@gmail.com</a>
                    </li>
                    <li class="nav-item separator">
                        <a class="nav-link " href="#">
                            <svg width="1" height="24" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.5" width="1" height="24" fill="white"/>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link logout" href="#">Logout</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import LoginModal from '../modals/LoginModal.vue';
export default {
    name: 'Header',
    props: {
    msg: String
    },
    data() {
        return{
            menus:[
                {id: 1, menuName: 'My Dashboard', route: '/client/dashboard/persona1'},
                {id: 2, menuName: 'My Talent', route: '/client/my-talent'},
                {id: 3, menuName: 'My Orders', route: '/client/my-orders'},
                {id: 4, menuName: 'My Interviews', route: '/client/my-interview'},
                {id: 5, menuName: 'Skill Scanner', route: '/client/skillscanner'},
                {id: 6, menuName: 'Candidate Database', route: '/client/candidate-db'},
                {id: 7, menuName: 'My Account', route: '/client/my-account'},
            ],
            employerMenu:[
                {id: 1, menuName: 'My Dashboard', route: '/dashboard/persona1'},
                {id: 2, menuName: 'My Talent', route: '/my-talent'},
                {id: 3, menuName: 'My Orders', route: '/my-orders'},
                {id: 4, menuName: 'My Interviews', route: '/my-interview'},
                {id: 5, menuName: 'Skill Scanner', route: '/skillscanner'},
                {id: 6, menuName: 'Candidate Database', route: '/candidate-db-table'},
                {id: 7, menuName: 'My Account', route: '/my-account'},
            ],
            activeMenuId: 0,
            routeName: 'employer',
            routeName1: '',
            myLocation: ''
        }
    },
    components:{
        LoginModal
    },
    methods:{
        selectMenu(id){          
            setTimeout(this.scrollToBottom, 200);           
            this.activeMenuId = id;
            var toggleButton = document.getElementById('navbar-toggler');
            toggleButton.click();

        },
        scrollToBottom(){
           
            if(this.routeName1[2] == 'about-axpara'){
                const element = document.getElementById("about-axpara");
                element.scrollIntoView();         
            } 
        }
    },
    created(){
     
    },
    mounted(){
        this.myLocation  =  localStorage.getItem('location');
        this.routeName1 = window.location.pathname.split('/');
        if(this.routeName1[1] == 'client'){
            this.routeName = this.routeName1[1]
        }else{
            this.routeName = 'employer'
        }
    }
 
}
</script>
<style>
   
    @media screen and (max-width: 1622px) {
        body {
            zoom:90%
        }
    }
    
    @media screen and (max-width: 1450px) {
        body {
            zoom:80%
        }
    }
    @media screen and (max-width: 1440px) {
        body {
            zoom:75%
        }
    }
    @media screen and (max-width: 1030px) {
        .header-btn{
            width: 100% !important;
            margin: 5px;
        }
    }
     @font-face {
        font-family: "RubikLight";
        src: local("Rubik"),
        url(../../assets/Rubik/Rubik-Light.ttf) format("truetype");
    }
    .nav-link-not-click:hover, .nav-link-not-click:focus{
        color:white !important;
    }
   
    .bg-custom-blue{
        background-color: rgba(44, 145, 255, 1);
        padding-top:0px !important;
        padding-bottom:0px !important;
    }
    .navbar-nav li a{
        color:white;
        padding-top:18px ;
        padding-bottom:18px ;      
    } 
    .navbar-nav li{
        padding-left: 5px;
        padding-right: 5px;
    } 
    .nav-menu-right li{
        padding-left: 1px;
        padding-right: 1px;
    }
    .container-fluid{
        padding-left: 24px !important;
        padding-right: 24px !important;       
    }
    .nav-menu-left{
        margin-left: 35px !important;
        font-family: RubikLight;
    }
    .logout{
        padding-right: 0px !important;
    }
    .active-menu{
        border-bottom:2px solid white;
        font-weight: 600 !important;
    }
    .active-menu:hover{
       color: white !important;
    }
    .active-menu:focus{
       color: white !important;
    }
    .user-email{
        font-weight: 600 !important;
    }
    .btn-header-whats-up{
        font-weight: 500;
        font-size: 12px;
        align-items: center;
        color: #FFFFFF !important;
        font-family: RubikMedium !important;
        
    }
    .btn-telegram{
        font-weight: 500;
        font-size: 12px;
        align-items: center;
        color: #2C91FF !important;
        font-family: RubikMedium !important;
    }
    .btn-login{
        font-weight: 500;
        font-size: 12px;
        width: 110px;
        align-items: center;
        color: #FFFFFF !important;
        font-family: RubikMedium !important;
        height: 31.5px;
    }
</style>
