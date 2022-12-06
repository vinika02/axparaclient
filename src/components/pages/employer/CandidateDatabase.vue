<template>
     <div class="pt-0">
        <div class="">
           <Banner></Banner>
        </div>
       <div class="bg-gray p-b-80 p-t-40">
            <div class="container-fluid app-container bg-gray">
                <div class="content-container dashboard ">
                    <div class="row justify-content-center">
                        <div class="col-10 col-md-6 col-lg-4 pe-2">
                            <div class="text-blue header-card">Hire</div>
                            <div class="sub-text-card sub-text">
                                From software developers to accountants, we use our local expertise to help you hire the right talent for your needs.
                                <br>
                                <br>
                            </div>
                            <div class="mt-4">
                                <div class="d-flex header-panel">
                                    <div>
                                        <div class="dot dot-red"></div>                                        
                                    </div>
                                    <div>
                                        <div class="dot dot-orange ms-2 me-2"></div>                                        
                                    </div>
                                    <div>
                                        <div class="dot dot-green"></div>
                                    </div>
                                </div>
                                <div class="content-panel candidate-content">
                                    <div class="flex-fill candidate-content-details">
                                        <div class="r-title">{{talent.TalentID}} (Alyn)</div>
                                        <div class="r-salary">{{talent.MonthlyRate}}</div>
                                        <div class="p-t-2 candidate-interview-skils-tags d-flex">
                                            <div v-for="skill, index in talent.Skills" :key="index">              
                                                <button class="btn tag-pink" :title="skill" :class="{'tag-pink': index == 0, 'tag-violet': index > 0 }"> {{skill}}</button>                                
                                            </div> 
                                        </div>
                                        <div class="p-t-14">
                                            <span class="candidate-book-interview-label">Book an Interview</span>                                                                                                           
                                        </div>
                                        <div class=" candidate-book-interview p-t-14">
                                            <button class="btn btn-outline-blue see-my-interview  w-100" v-for="slot, index in talent.InterviewSlots" :key="index" data-bs-toggle="modal" data-bs-target="#LoginModal">{{slot.toUpperCase()}}</button>

                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-10 col-md-6 col-lg-4 pe-2 ps-4 manage">
                            <div class="text-blue header-card">Manage</div>
                            <div class="sub-text-card sub-text">
                                We are your in-country HR partner. We handle employee contracting, payroll and statutory payments. <br>
                                <a href="/pdf/axpara.pdf" class="link view-deck" target="_blank"> View Deck</a>
                            </div>
                            <div class="mt-4">
                                <div class="d-flex header-panel">
                                    <div>
                                        <div class="dot dot-red"></div>                                        
                                    </div>
                                    <div>
                                        <div class="dot dot-orange ms-2 me-2"></div>                                        
                                    </div>
                                    <div>
                                        <div class="dot dot-green"></div>
                                    </div>
                                </div>
                                <div class="content-panel candidate-talent-card">
                                    <CandidateTalentCard></CandidateTalentCard>
                                </div>
                            </div>
                        </div>
                        <div class="col-10 col-md-6 col-lg-4 ps-4 build">
                            <div class="text-blue header-card">Build</div>
                            <div class="sub-text-card sub-text1">
                                With projects teams in Vietnam and Ukraine, we build customized software systems to power your enterprise and productivity needs.
                              <br>  <a href="/pdf/AxparaPortfolio.pdf" class="link view-portfolio" target="_blank">  View Portfolio</a>
                                
                            </div>
                            <div class="mt-4">
                                <div class="d-flex header-panel">
                                    <div>
                                        <div class="dot dot-red"></div>                                        
                                    </div>
                                    <div>
                                        <div class="dot dot-orange ms-2 me-2"></div>                                        
                                    </div>
                                    <div>
                                        <div class="dot dot-green"></div>
                                    </div>
                                </div>
                                <div class="content-panel">
                                    <img src="../../../assets/images/candidatedb/FrameImage.svg">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
       </div>
       <div class="p-b-80 p-t-40 bg-white">
            <div class="container-fluid app-container">
                <div class="content-container dashboard p-t-40 pb-40">
                    <div class="row justify-content-center">
                        <div class="col-sm-12 col-md-12 col-lg-4 we-are-now-container">
                            <div class="we-are-now">
                                We are now <br> operational in
                            </div>
                            <div class="we-are-now-coutry">
                                Singapore, Philippines, Indonesia, Vietnam, <br> and Sri Lanka.
                            </div>
                        </div>
                        <div class="col-10 col-md-12 col-lg-8 clock">
                            <div class="time_block">
                                <div class="row">
                                    <div class="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end mb-4">
                                    <div class="align-items-center p-3 d-flex time_block_item">
                                        <div class="img-clock-block">
                                        <div class="clock clock_0 first-item mt-3 mb-3">
                                            <div class="wrap">
                                            <span class="hour"></span>
                                            <span class="minute"></span>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="desc d-block" id="country_0">
                                        <div class="text">Philippines/ Singapore</div>
                                        <div class="time"></div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-12 col-sm-6  mb-4 d-flex justify-content-center justify-content-sm-start">
                                    <div class="align-items-center p-3 d-flex time_block_item">
                                        <div class="img-clock-block">
                                        <div class="clock clock_1 mt-3 mb-3">
                                            <div class="wrap">
                                            <span class="hour"></span>
                                            <span class="minute"></span>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="desc d-block" id="country_1">
                                        <div class="text">Indonesia</div>
                                        <div class="time"></div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end mb-4">
                                    <div class="align-items-center p-3 d-flex time_block_item">
                                        <div class="img-clock-block">
                                        <div class="clock clock_2 mt-3 mb-3">
                                            <div class="wrap">
                                            <span class="hour"></span>
                                            <span class="minute"></span>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="desc d-block" id="country_2">
                                        <div class="text">Vietnam</div>
                                        <div class="time"></div>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="col-12 col-sm-6  mb-4 d-flex justify-content-center justify-content-sm-start">
                                    <div class="align-items-center p-3 d-flex time_block_item">
                                        <div class="img-clock-block">
                                        <div class="clock clock_3 mt-3 mb-3">
                                            <div class="wrap">
                                            <span class="hour"></span>
                                            <span class="minute"></span>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="desc d-block" id="country_3">
                                        <div class="text">Sri Lanka</div>
                                        <div class="time"></div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <section class="map text-center">
                <div id="mapMobileWrap"></div>
                <div class="spotify-playlist">
                    <iframe src="https://open.spotify.com/embed/playlist/4wk6yVwSHuIh8KrpQv0TP3?utm_source=generator" frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" width="300" height="100"
                            style="border-radius:12px"
                    ></iframe>
                </div>
                <div class="zoom_buttons">
                    <div id="zoom_in"><span>+</span></div>
                    <div id="zoom_out"><span>-</span></div>
                </div>
                <div class="text-block">
                    <h3>LIVE MAP</h3>
                    <span class="sub_title">Our Talent Distribution</span>
                </div>
            </section>
        </div>
        <div class=" bg-gray p-b-80 p-t-40">
            <div class="container-fluid app-container">
                <div class="content-container dashboard ">
                    <img src="../../../assets/images/candidatedb/ourteamframe.svg" class="ourteamframe">
                    <div>
                        <div class="our-team text-center" id="about-axpara">
                            Our Team
                        </div>
                        <div class="text-center our-team-sub-text" >
                            We are a family of founders. Each and everyone of our Country Directors is a significant<br>
                            shareholder in our business, which means we collectively work harder for you.
                        </div>
                        <div class="text-center m-t-52">
                            <img src="../../../assets/images/candidatedb/ourteam.png" class="ourteam">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-b-80 p-t-40 bg-white" >
            <div class="container-fluid app-container">
                <div class="content-container dashboard " >
                    <div>
                        <div class="how-we-understand text-center">
                            How We Understand the Emerging Markets
                        </div>
                        <div class="text-center our-team-sub-text">
                            Every emerging market is unique in its own ways - labour laws, taxation systems, culture,<br> customs and more. Yet, there are commonalities.
                        </div>

                        <div class="row emergin-market">
                              <div class="col-sm-12 col-md-6 col-lg-4 pe-2">
                                 <div class="emerging-card">
                                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="66" height="66" rx="4" fill="#E0F9E0"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34.0668 13.918C33.7368 14.0195 31.108 16.5825 30.8802 17.0249C30.7957 17.1891 30.7251 17.4767 30.7227 17.6665C30.7133 18.4366 30.5666 18.267 35.6421 23.3531C40.5873 28.3085 40.7636 28.4654 41.3862 28.4644C42.0452 28.4634 42.1893 28.3652 43.6369 26.9317C44.4777 26.0989 45.074 25.4454 45.1658 25.2558C45.3618 24.851 45.3638 24.2478 45.1705 23.8763C45.0898 23.7211 42.8763 21.4533 40.2065 18.7904C36.0715 14.6663 35.3453 13.9731 35.0861 13.9033C34.7212 13.8052 34.4194 13.8095 34.0668 13.918ZM30.0846 21.1551C29.3999 22.555 28.3048 24.0779 27.4281 24.8494C26.6586 25.5266 25.6779 26.1827 24.6492 26.7085C24.0994 26.9895 23.6493 27.2365 23.6488 27.2574C23.6483 27.2783 25.511 29.1579 27.7882 31.4342L31.9284 35.573L32.3504 34.7174C33.6357 32.1113 35.3605 30.3888 37.9362 29.1388C38.3826 28.9221 38.7478 28.7242 38.7478 28.6989C38.7478 28.6737 36.8845 26.7904 34.607 24.5137L30.4664 20.3744L30.0846 21.1551ZM20.4015 27.5803C20.0839 27.678 17.4445 30.2392 17.234 30.6539C17.0214 31.0726 16.9905 31.4106 17.1231 31.865C17.2395 32.2636 17.394 32.4276 21.9745 37.0154C26.9092 41.958 27.0992 42.1272 27.7121 42.1272C28.3592 42.1272 28.5269 42.0129 29.9715 40.5882C30.8179 39.7536 31.408 39.109 31.5004 38.9181C31.6964 38.5133 31.6984 37.9101 31.5051 37.5386C31.4244 37.3834 29.2109 35.1156 26.5411 32.4527C22.4061 28.3286 21.6799 27.6354 21.4207 27.5656C21.0558 27.4675 20.754 27.4718 20.4015 27.5803ZM37.8233 30.9849C36.7179 31.6147 35.7117 32.471 35.0191 33.3712C34.6156 33.8957 33.9158 35.0407 33.9158 35.1765C33.9158 35.2433 36.9481 38.3254 40.6542 42.0254C46.2405 47.6027 47.4441 48.7693 47.6945 48.849C48.1178 48.9838 48.6514 48.9557 48.9912 48.7807C49.15 48.699 49.8943 48.0091 50.6451 47.2478C51.8422 46.034 52.0223 45.8195 52.1082 45.5054C52.2149 45.1152 52.1724 44.6499 52.0007 44.3271C51.9422 44.2173 48.8597 41.0956 45.1505 37.3901L38.4065 30.6526L37.8233 30.9849ZM17.9333 44.2809C17.2273 44.6327 17.004 45.1878 17.004 46.5909V47.3355H25.0824H33.1609V46.3518C33.1609 45.2764 33.0866 44.9776 32.7227 44.5897C32.6108 44.4703 32.3832 44.3097 32.2171 44.2328C31.9303 44.1001 31.5729 44.093 25.1161 44.0914L18.3171 44.0897L17.9333 44.2809ZM13.833 50.5435V52.1663H25.1202H36.4073V50.5435V48.9206H25.1202H13.833V50.5435Z" fill="#00B600"/>
                                    </svg>
                                    <div class="title-card p-y-14" id="vague-legal">
                                        Vague Legal System
                                    </div>
                                    <div class="sub-label">
                                        Many laws are subject to change frequently. 
                                    </div>
                                    <div class="sub-label pt-2">
                                        To stay competitive, businesses must be nimble enough to respond to changes in laws. 
                                    </div>
                                    <div class="sub-label pt-2">
                                        Deep local knowledge is needed to determine what is essential and what is unnecessary.
                                    </div>
                                 </div>
                              </div>
                              <div class="col-sm-12 col-md-6 col-lg-4 pe-2">
                                <div class="emerging-card">
                                    <svg width="67" height="66" viewBox="0 0 67 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.666992" width="66" height="66" rx="4" fill="#E3E4FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1946 13.9547C22.0346 14.0237 20.9309 15.0648 19.3604 16.6282C17.3726 18.6068 16.7477 19.2737 16.6098 19.563L16.4315 19.9373L16.4308 28.966C16.43 38.3945 16.4252 38.249 16.7522 38.7181C16.9481 38.9992 32.9124 51.7764 33.3433 51.997C33.5472 52.1014 33.8081 52.1663 34.0231 52.1663C34.2381 52.1663 34.499 52.1014 34.7029 51.997C35.1338 51.7764 51.0981 38.9992 51.2941 38.7181C51.621 38.249 51.6162 38.3945 51.6154 28.966L51.6147 19.9373L51.4364 19.563C51.2986 19.2737 50.6735 18.6067 48.6859 16.628C46.966 14.9159 46.0214 14.029 45.8353 13.9516C45.3517 13.7505 44.9052 13.801 44.215 14.1348C41.1451 15.6194 38.0619 15.5972 34.8466 14.0675C34.1624 13.7419 33.8719 13.758 32.9706 14.1711C31.3488 14.9145 30.1251 15.1953 28.4832 15.2004C26.8349 15.2057 25.558 14.9227 23.9965 14.2059C23.113 13.8005 22.6893 13.7414 22.1946 13.9547ZM34.9393 19.2979C37.6735 20.1713 40.3661 20.2794 43.1923 19.6294C44.0703 19.4274 44.3366 19.4351 44.8 19.676C45.1758 19.8713 46.4967 21.2301 46.6347 21.5632C46.7358 21.8072 46.7498 22.708 46.7484 28.8625C46.7468 35.6005 46.741 35.896 46.6044 36.1969C46.4814 36.4678 45.6706 37.1436 40.6488 41.1606C37.4516 43.7182 34.7455 45.8456 34.6353 45.8882C34.5251 45.9309 34.3254 45.9841 34.1917 46.0064C33.5834 46.108 33.5795 46.1053 27.4266 41.1838C22.377 37.1449 21.5651 36.4684 21.442 36.1971C21.3052 35.896 21.2994 35.6023 21.2978 28.8625C21.2964 22.7616 21.311 21.806 21.4095 21.5705C21.5483 21.2381 22.8808 19.8628 23.2462 19.6748C23.7115 19.4352 23.9771 19.4277 24.854 19.6294C27.7001 20.2841 30.4972 20.1632 33.1996 19.2689C33.9258 19.0285 34.1056 19.0315 34.9393 19.2979ZM33.4991 20.8049C32.9097 21.0205 31.7557 21.2931 30.7823 21.4466C30.1731 21.5427 29.5018 21.5792 28.3334 21.58C26.6661 21.5811 25.8381 21.4917 24.5902 21.1759L24.0287 21.0338L23.4111 21.6443L22.7935 22.2548V28.8571V35.4595L28.4132 39.954L34.033 44.4484L39.6429 39.9595L45.2527 35.4706V28.8627V22.2548L44.6351 21.6433L44.0175 21.0319L43.6057 21.1422C41.0718 21.8213 37.7941 21.7543 35.1086 20.9684C33.939 20.6261 33.9772 20.63 33.4991 20.8049ZM38.8147 28.2475L39.8987 29.3334L36.6052 32.6275C34.7939 34.4392 33.2057 35.9719 33.076 36.0335C32.7387 36.1935 32.0567 36.1771 31.718 36.0008C31.5653 35.9213 30.6907 35.104 29.7744 34.1846L28.1085 32.5129L29.2316 31.3917L30.3547 30.2705L31.4032 31.317L32.4519 32.3636L35.0528 29.7626C36.4833 28.3321 37.6711 27.1617 37.6923 27.1617C37.7135 27.1617 38.2186 27.6503 38.8147 28.2475Z" fill="#5D5FEF"/>
                                    </svg>
                                    <div class="title-card p-y-14">
                                        Value of Personal Trust
                                    </div>
                                    <div class="sub-label">
                                        In an environment where vagueness persists, there
                                        is great value placed in personal relationships and
                                        the trust that exists between people.
                                    </div>
                                    <div class="sub-label pt-2">
                                        It is how issues are resolved and business transacted.
                                    </div>
                                </div>
                              </div>
                              <div class="col-sm-12 col-md-12 col-lg-4 pe-2">
                                <div class="emerging-card">
                                    <svg width="67" height="66" viewBox="0 0 67 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.333008" width="66" height="66" rx="4" fill="#FFF8DE"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9624 15.7295V17.626L32.4303 17.5279C32.6877 17.474 33.0162 17.4299 33.1603 17.4299C33.3044 17.4299 33.6329 17.474 33.8903 17.5279L34.3582 17.626V15.7295V13.833H33.1603H31.9624V15.7295ZM32.2645 18.7895C31.7045 19.0045 31.1381 19.5784 30.9257 20.146C30.3303 21.7374 31.4774 23.4163 33.1603 23.4163C34.4814 23.4163 35.5561 22.3417 35.5561 21.0205C35.5561 19.3336 33.8534 18.1796 32.2645 18.7895ZM22.9722 19.9928C22.8332 20.0864 22.6429 20.2768 22.5493 20.4157C22.3811 20.6653 22.379 20.6971 22.379 23.0404V25.4126L19.4194 29.558C17.7915 31.8379 16.4392 33.7851 16.4142 33.8849C16.3356 34.1979 16.4489 35.4071 16.6152 36.0297C16.9561 37.3063 17.6099 38.4074 18.5763 39.3321C19.5739 40.2867 20.5232 40.8316 21.7851 41.1739C22.6993 41.4219 24.4547 41.4219 25.3688 41.1739C26.6379 40.8296 27.6264 40.2635 28.5807 39.3346C29.9074 38.0431 30.6343 36.4773 30.7407 34.6818C30.7761 34.084 30.7615 33.8854 30.6692 33.7085C30.6053 33.5864 29.253 31.667 27.664 29.4434L24.7749 25.4005V23.8095V22.2184H27.2704H29.7658L29.6677 21.7505C29.5445 21.1624 29.5445 20.8786 29.6677 20.2905L29.7658 19.8226H26.4952H23.2248L22.9722 19.9928ZM36.6664 20.3654C36.7741 20.8961 36.728 21.6964 36.5672 22.0874C36.5166 22.2106 36.6626 22.2184 39.0296 22.2184H41.5457V23.8155V25.4126L38.586 29.558C36.9582 31.8379 35.6058 33.7851 35.5808 33.8849C35.5022 34.1979 35.6156 35.4071 35.7819 36.0297C36.1227 37.3063 36.7766 38.4074 37.743 39.3321C38.7406 40.2867 39.6899 40.8316 40.9518 41.1739C41.8659 41.4219 43.6213 41.4219 44.5355 41.1739C45.8046 40.8296 46.7931 40.2635 47.7474 39.3346C49.0741 38.0431 49.801 36.4773 49.9073 34.6818C49.9427 34.084 49.9281 33.8854 49.8358 33.7085C49.772 33.5864 48.4197 31.667 46.8306 29.4434L43.9415 25.4005V23.0344C43.9415 20.6973 43.9394 20.6652 43.7713 20.4157C43.6777 20.2768 43.4874 20.0864 43.3484 19.9928L43.0958 19.8226H39.8261H36.5565L36.6664 20.3654ZM31.9624 34.0979V43.7809H29.091C26.2282 43.7809 26.2188 43.7814 25.967 43.9512C25.828 44.0448 25.6377 44.2351 25.5441 44.374C25.3824 44.614 25.3738 44.6955 25.3738 46.0007V47.3747H33.1603H40.9468V46.0007C40.9468 44.6955 40.9382 44.614 40.7765 44.374C40.6829 44.2351 40.4926 44.0448 40.3536 43.9512C40.1018 43.7814 40.0923 43.7809 37.2296 43.7809H34.3582V34.0979V24.415L33.8903 24.5131C33.6329 24.567 33.3044 24.6111 33.1603 24.6111C33.0162 24.6111 32.6877 24.567 32.4303 24.5131L31.9624 24.415V34.0979ZM27.1707 32.958C27.1707 32.981 25.5535 32.9997 23.577 32.9997C21.6004 32.9997 19.9832 32.9839 19.9832 32.9646C19.9832 32.9327 22.9716 28.7263 23.4044 28.149L23.5889 27.9028L25.3798 30.4096C26.3648 31.7884 27.1707 32.9351 27.1707 32.958ZM46.3374 32.958C46.3374 32.981 44.7202 32.9997 42.7436 32.9997C40.7671 32.9997 39.1499 32.9839 39.1499 32.9646C39.1499 32.9327 42.1382 28.7263 42.5711 28.149L42.7556 27.9028L44.5465 30.4096C45.5315 31.7884 46.3374 32.9351 46.3374 32.958ZM21.7742 48.7428C21.6353 48.8364 21.445 49.0267 21.3514 49.1657C21.1897 49.4057 21.1811 49.4871 21.1811 50.7923V52.1663H33.1603H45.1395V50.7923C45.1395 49.4871 45.1309 49.4057 44.9692 49.1657C44.8756 49.0267 44.6853 48.8364 44.5463 48.7428L44.2937 48.5726H33.1603H22.0269L21.7742 48.7428Z" fill="#FFC700"/>
                                    </svg>
                                    <div class="title-card p-y-14">
                                        Stability is Valued
                                    </div>
                                    <div class="sub-label">
                                        Stability of employment and clarity in job responsibilities are valued.
                                    </div>
                                     <div class="sub-label pt-2">
                                        “Growth opportunities” may appear as instability, chaos, and create fear. It is important to pitch these opportunities in the right way.
                                    </div>
                                 </div>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-sky-blue p-b-80">
            <div class="container-fluid app-container">
                <div class="content-container dashboard ">
                    <div>
                        <div class="manange-talent text-center">
                            We’re making it seamless and convenient to hire<br> and manage talent across the world.
                        </div>
                        <div class="row manange-talent-content">
                              <div class="col-sm-12 col-md-12 col-lg-4 pe-2">
                                <div class="manange-talent-card" @mouseover="showButton('seamless');" @mouseleave="showButton('');">
                                    <div class="bg-hover-blue" v-if="viewDeck == 'seamless'">
                                        <div class="hover-container">                                          
                                            <a href="/pdf/axpara.pdf" target="_blank">                              
                                                <button class="btn btn-white btn-view-deck">
                                                    View Deck
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="manange-talent-card-content">
                                        <div>
                                        <img src="../../../assets/images/candidatedb/Rectangle1.png">
                                        </div>
                                        <div class="manange-talent-details">
                                            We’re making it seamless and convenient to hire and manage talent across the world and we are here to be your on-the-ground human resource team in every country in which you might want to operate.
                                        </div>                                       
                                    </div>                                   
                                </div>
                              </div>
                              <div class="col-sm-12 col-md-12 col-lg-4 pe-2">
                                 <div class="manange-talent-card" @mouseover="showButton('care_everyting');" @mouseleave="showButton('');">
                                    <div class="bg-hover-blue" v-if="viewDeck == 'care_everyting'">
                                        <div class="hover-container">
                                            <a href="/pdf/axpara.pdf" target="_blank">                                
                                                <button class="btn btn-white btn-view-deck">
                                                    View Deck
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="manange-talent-card-content">
                                        <div>
                                          <img src="../../../assets/images/candidatedb/Rectangle2.png">
                                        </div>
                                        <div class="manange-talent-details">
                                            We take care of everything - payroll, taxes, pension fund contributions, private insurance, rice allowance, clothing allowance, facilitation payments to local authorities, office space, laptop and computer equipment, annual dinners, holiday presents, and so on.
                                        </div>                                     
                                    </div>   
                                 </div>
                              </div>
                              <div class="col-sm-12 col-md-12 col-lg-4 pe-2">
                                 <div class="manange-talent-card" @mouseover="showButton('labour');" @mouseleave="showButton('');">
                                    <div class="bg-hover-blue" v-if="viewDeck == 'labour'">
                                        <div class="hover-container">
                                            <a href="/pdf/axpara.pdf" target="_blank">                                                
                                                <button class="btn btn-white btn-view-deck">
                                                    View Deck
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="manange-talent-card-content">
                                        <div>
                                           <img src="../../../assets/images/candidatedb/Rectangle3.png">
                                        </div>
                                        <div class="manange-talent-details">
                                            You don’t need to figure out complex labour laws or local norms and customs. It means you get back more time and energy to focus on whatever it is that you do best - be it product management, sales and marketing, or building your Roman Empire.
                                        </div>                                  
                                    </div>  
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

    /* Begin time clock */  

    .clock .text_block {
        padding-top: 125px;
        padding-left: 25px;
    }

    .clock .text_block_title h1 {
        font-family: 'Rubik-SemiBold';
        font-size: 38px;
        color: #ffffff;
    }

    .clock .text_block_desc {
        color: #EEF3FC;
        font-family: 'Rubik-Medium';
        font-size: 22px;
    }

    .clock .time_block {
        padding-top: 30px;
    }

    .clock .time_block_item {
        background-color: #2C91FF;
        border-radius: 6px;        
        width: 100%;
    }

    .clock .time_block_item .img-clock-block {
         padding-right: 5%;
    }

    .clock .time_block_item .clock {
        background-color: #DAE7FF;
        border-radius: 50%;
    }

    .clock .time_block_item .clock .wrap {
        overflow: hidden;
        position: relative;
        height: 85px;
        width: 85px;
        border-radius: 100%;
        background: white;
    }

    .clock .time_block_item .clock .wrap .minute,
    .clock .time_block_item .clock .wrap .hour {
        position: absolute;
        height: 20px;
        width: 2px;
        margin: auto;
        top: -20%;
        left: 0;
        bottom: 0;
        right: 0;
        background: black;
        transform-origin: bottom center;
        transform: rotate(0deg);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
        z-index: 1;
        border-radius: 15px;
    }

    .clock .time_block_item .clock .wrap .hour {
      opacity: 0.8;
    }

    .clock .time_block_item .clock .wrap .minute {
        position: absolute;
        height: 35px;
        width: 2px;
        top: -40%;
        left: 0;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
        transform: rotate(90deg);
        background-color: rgba(255, 73, 73, 1);
    }

    .clock .time_block_item .desc {
        margin-left: 8px;
    }

    .clock .time_block_item .desc .text {
        color: #FFFFFF;
        font-family: 'RubikMedium';
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
    }

    .clock .time_block_item .desc .time {
        color: #FFFFFF;
        font-size: 16px;
        font-family: 'RubikRegular';
    }

    .clock .time{
        border-bottom: unset;
        padding:unset;
    }

    /* End time clock */
   
    /* Begin Manage Talent */
    .btn-view-deck{
        padding: 12px 36px;
        border-radius: 2px;
        margin:0px auto;
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 145%;
        color: #2C91FF;
        margin-top: 210px;
    }
    .bg-hover-blue .hover-container{
        text-align: center;
        height: 474px;       
    }
    .bg-hover-blue{        
        background: #2c91ffb8;
        width: 450px;
        height: 474px;
        border-radius: 6px;
        position: absolute;
    }
    .manange-talent-card{
        width: 450.67px;
        height: 474px;
        background: #FFFFFF;
        border: 1px solid #EDEDED;
        box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
        border-radius: 6px;      
    }
    .manange-talent-card-content{
        padding: 28px;
        gap: 18px;        
    }
    .manange-talent-details
    {
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
        color: #5A5959;
        margin-top: 14px;
    }
    .manange-talent-content{
        margin-top: 50px;
    }
    /* End Manage Talent */
    /* Begin Emerging Markets */
    .emergin-market{
        margin-top:50px;
    }
    .emergin-market .emerging-card{
        height: 296px;
        background: #FFFFFF;
        border: 1px solid #EDEDED;
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.04);
        border-radius: 8px;
        padding: 24px;
        gap: 14px;
        width: 450.67px;
    }
    .emergin-market .sub-label{
        color: #5A5959;
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
    }
    .emergin-market .title-card{
        color: #0D0C0A;
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        font-size: 23px;
    }
    /* End Emerging Markets */
    /* Begin Our team */
    .ourteamframe{
        position: absolute;
        left: 0px;
        width: 500px;
        margin-top:-119px;
    }
    /* End Our team */

    /* begin map */
    .map {
        background-color: #0D131D;
        position: relative;
    }

    .map #mapMobileWrap {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: transparent;
    }

    .map .spotify-playlist {
        z-index: 124;
        position: absolute;
        right: 45px;
        bottom: 10px;
    }

    .map .zoom_buttons {
        z-index: 124;
        position: absolute;
        right: 45px;
        top: 5%;
        border: 1px solid #2C8AFF;
        border-radius: 3px;
    }

    .map .zoom_buttons #zoom_in, .map .zoom_buttons #zoom_out {
        background-color: #0D131D;
        width: 25px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .circle text{
      font-size: 8px !important;
    }

    .map .zoom_buttons #zoom_in span, .map .zoom_buttons #zoom_out span {
        color: #ffffff;
        font-weight: bold;
    }

    .map .zoom_buttons #zoom_in {
        border-bottom: 3px solid #2C8AFF;
    }

    .map .text-block {
        text-align: right;
        top: 6%;
        z-index: 100;
        position: absolute;
        right: 150px;
        font-family: 'RubikMedium' !important;
    }

    .map .text-block h3 {
        color: #2C8AFF;
        font-size: 22px;
        font-family: 'RubikMedium';
        margin: 0 !important;
    }

    .map .text-block .sub_title {
        font-size: 32px;
        font-family: 'RubikMedium';
        color: #ffffff;
    }

    /* end map */
    /* Begin We are Now */
    .we-are-now{
        color: #2C91FF;
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        font-size: 40px;
        margin-top: 80px;
    }
   .our-team{
        color: #2C91FF;
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        font-size: 40px;
        margin-top: 80px;
    }
    .how-we-understand{
        color: #2C91FF;
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        font-size: 40px;
    }
    .manange-talent{
        color: #2C91FF;
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        font-size: 40px;
        margin-top: 40px;
    }
    .we-are-now-coutry{
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
        color: #5A5959;
        margin-top:14px;
    }
    .our-team-sub-text{
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
        color: #5A5959;
        margin-top:18px;
    }
    /* End We are Now */
    /* Begin Hire Manage Buid */
    .header-card{
        color: #2C91FF;
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        text-align: center;
    }
    .sub-text-card{
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        color: #5A5959;
    }
    .view-deck, .view-portfolio{
        font-family: RubikMedium;
        color: #2C91FF ;
    }
    .view-deck:hover, .view-portfolio:hover{
      text-decoration: underline;
    }
    .header-panel{
        background: #2C91FF;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        padding: 8px;
        padding-left: 14px;
    }
    .content-panel{
        background: #FFFFFF;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        height:428px;        
    }
    
    .candidate-content{
        padding: 28px;;
    }
    .candidate-talent-card{
        padding: 14px;
    }
    .candidate-content-details{
        padding: 20px;;
        background: #FFFFFF;
        border: 1px solid #FAFAFA;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.06);
        border-radius: 6px;
        height: 372px;
    }
    .candidate-content-details .r-title{
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #27304C;
    }
    .candidate-content-details .r-salary{
        font-family: 'RubikMedium';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #2C91FF;
    }
    .candidate-interview-skils-tags .btn{
        margin-right: 10px;
        margin-top: 10px;
        padding:6px 12px;
        font-weight: 400;
        font-family: 'RubikRegular';
        font-size: 14px;
    }
    .candidate-book-interview-label{
        color: #6D6D6D;
        font-family: 'RubikRegular';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
    }
    .candidate-book-interview .btn{
        color: #2C91FF;
        font-family: 'RubikMedium' !important;
        font-style: normal !important;
        font-weight: 500 !important;
        font-size: 16px !important;
        padding-top: 8px;
        padding-bottom: 8px;
        margin-top:8px;
    }
    /* End Hire Manage Buid */
    @media screen and (max-width: 1440px) {
        body {
            zoom:75%
        }
    }

    @media screen and (max-width: 1030px) {
        .we-are-now{
            margin-top: unset;
            text-align: center;
        }
        .we-are-now-coutry{
            text-align: center;
        }
        .emergin-market .emerging-card{
            margin:0px auto;
            margin-bottom: 20px;
        }
        .manange-talent-card{
            margin:0px auto;
            margin-bottom: 20px;
        }
    }
    @media screen and (max-width: 900px) { 
       
        .ourteam{
            width: 100%;
        }            
        .enable-borderless-text{
            font-size: 45px;
        }
        .sub-text-card.sub-text{
            height: 100px;
        }
    }
    @media screen and (max-width: 600px) {
        .build, .manage{
            margin-top:20px;
        }
        .sub-text-card.sub-text{
            height: unset;
        }
    }

    
   
</style>
<script>
import Banner from './components/Banner';
import CandidateTalentCard from './components/CandidateTalentCard';
import * as d3 from '../../../assets/js/d3map/d3.v7.min.js?version=1'
import * as topojson from '../../../assets/js/d3map/topojson.v1.min.js?version=1'
import candidatecsv from '../../../helper/candidatecsv'
export default {
    name: 'Header',
    props: {
    msg: String
    },
    data() {
        return{
            menus:[
                {id: 1, menuName: 'My Dashboard', route: '/dashboard/persona1'},
                {id: 2, menuName: 'My Talent', route: '/my-talent'},
                {id: 3, menuName: 'My Orders', route: '/my-orders'},
                {id: 4, menuName: 'My Interviews', route: '/my-interview'},
                {id: 5, menuName: 'Skill Scanner', route: '/skillscanner'},
                {id: 6, menuName: 'Candidate Database', route: '/candidate-db'},
                {id: 7, menuName: 'My Account', route: '/my-account'},
            ],
            activeMenuId: 0,
            count: 0,
            oldCountry: '',
            svg_map: null,
            zoom: null,
            projection: null,
            viewDeck: '',
            routeName: '',
            talent: [],
            timeZone:['Asia/Manila', 'Asia/Jakarta', 'Asia/Bangkok', 'Asia/Colombo']
        }
    },
    components:{
        CandidateTalentCard,
        Banner
    },
    mounted(){     
        
        let data = candidatecsv.getData();
        this.talent = data[0];

        setTimeout(this.scrollToBottom, 500);        
        const API_URL = 'https://api.axpara.com/api';

        const width = window.innerWidth;
        const height = 600;
        let centered, clicked_point;

        this.projection = d3.geoMercator()


        var drag_map = d3.drag()
            .on("drag", function () {
                drag_map.on("drag", null);
            });


        if (window.innerWidth < 933) {
            this.svg_map = d3.select(".map").append("svg")
                .attr("width", '100%')
                .attr("height", height)
                .attr("class", "map")
                .call(drag_map); // disable drag map
        } else {
            this.svg_map = d3.select(".map").append("svg")
                .attr("width", '100%')
                .attr("height", height)
                .attr("class", "map")
        }

        this.svg_map.append("svg:title").text("World Heat Map of Axpara Talent Distribution")

        var g = this.svg_map.append("g");
        var path = d3.geoPath().projection(this.projection);


        this.zoom = d3.zoom().on('zoom', event => {
            g.attr('transform', event.transform)
        });
        this.svg_map.call(this.zoom).on('wheel.zoom', null).on('dblclick.multiple', null);

        this.clickOutOfCircle();

        d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
            .then(data => {
                const countries = topojson.feature(data, data.objects.countries);
                const _countries = g.selectAll('path')
                    .data(countries.features)
                    .enter().append('path')
                    .attr('class', 'country')
                    .attr('fill', '#2F3D57')
                    .attr('opacity', 0.3)
                    .attr('d', path);

            });

        let self = this;
        d3.json(`${API_URL}/landing/countries/map`)
            .then(data => {
                let circleData = data;

                let maxCnt = 0;
                const maxRadius = 10;
                const minRadius = 3;

                data.forEach(item => {
                    if (item.resumes > maxCnt) {
                        maxCnt = item.resumes;
                    }
                });

                const a = Math.pow(maxCnt, 1 / maxRadius);

                let elem = g
                    .selectAll('circle')
                    .data(circleData)
                    .enter()
                    .append('g')
                    .attr('class', 'circle')
                    .attr('data-id', function (id, index) {
                        return index;
                    })
                    .append('circle')
                    .attr('cx', function (eachCircle) {
                        return self.projection([eachCircle.longitude, eachCircle.latitude])[0];
                    })
                    .attr('cy', function (eachCircle) {
                        return self.projection([eachCircle.longitude, eachCircle.latitude])[1];
                    })
                    .attr('r', function (eachCircle) {
                        const r = self.mathLog(a, eachCircle.resumes);
                        return r > minRadius ? r : minRadius;
                    })
                    .attr('fill', '#2C8AFF')
                    .style('cursor', 'pointer')
                    .style('opacity', '0.5')
                    .attr('class', 'circle-country')                   
                    .on("click", function(event, d){
                        let cx = d3.select(this)._groups[0][0].cx.baseVal.value;
                        let cy = d3.select(this)._groups[0][0].cy.baseVal.value;

                        d3.selectAll("text").remove()
                        d3.selectAll(".circle-country").style('opacity', '0.1')
                        d3.select(this).style('opacity', '0.5')
                        d3.select(this.parentNode).append('text')
                            .attr("dx", cx - 11)
                            .attr('dy', cy - 7)
                            .text(d.country)
                            .style('fill', '#2C8AFF')
                            .style('font-size', '10px')

                        let countryName = d3.select('text')._groups[0][0].__data__.country;

                        if (localStorage.getItem("oldCountry") === null) {
                            this.oldCountry = countryName;
                            this.count = 1;
                            localStorage.setItem('oldCountry', this.oldCountry);
                        } else if (localStorage.getItem("oldCountry") !== countryName) {
                            this.oldCountry = d3.select('text')._groups[0][0].__data__.country;
                            localStorage.setItem('oldCountry', this.oldCountry);
                            this.count = 1;
                        }

                        if (countryName === this.oldCountry) {
                            if (this.count % 2 === 0) {
                                d3.select('text').attr('opacity', '0')
                                d3.select(this).style('opacity', '0.1')
                            } else {
                                d3.select(this).style('opacity', '0.5');
                            }
                        }
                        this.count++;
                    })
                self.recenter();
            });

            /**
             * Zoom in by click
             */
            d3.select("#zoom_in").on("click", function () {
                self.zoom.scaleBy(self.svg_map.transition().duration(750), 1.8);
            });
    
            /**
             * Zoom out by click
             */
            d3.select("#zoom_out").on("click", function () {
                self.zoom.scaleBy(self.svg_map.transition().duration(750), 0.5);
            });

        this.clock();
	    setInterval(this.clock(), 1000);    
        
        this.update();
        setInterval(this.update(), 1000);
    },
  
    methods:{
        update() {
            this.timeZone.forEach((value, index)  =>{
                let date = moment().tz(value).format('h:mm A');
                var country = document.getElementById("country_" + index);
                country.children[1].innerHTML = date;
            })
        },
        clock() {
            this.timeZone.forEach((value, index)  =>{
                let hours = moment().tz(value).format('HH');
                let minutes = moment().tz(value).format('mm');
                let hour = hours * 30;
                let minute = minutes * 6;

                var clocks = document.getElementsByClassName("clock_" + index);
                
                clocks[0].children[0].children[0].style.transform = `rotate(${hour}deg)`
                clocks[0].children[0].children[1].style.transform = `rotate(${minute}deg)`

            });
        },
        scrollToBottom(){
            this.routeName = window.location.pathname.split('/')[1];
            if(this.routeName == 'about-axpara'){
                const element = document.getElementById("about-axpara");
                element.scrollIntoView();         
            } 
        },
        showButton(el){
            this.viewDeck = el;
        },
        selectMenu(id){
            this.activeMenuId =id;
        },

        mathLog(b, n) {
            return Math.log(n) / Math.log(b);
        },

        clickOutOfCircle(){
            this.svg_map.on('click', function (event){
                if(event.target.tagName !== 'circle'){
                    d3.selectAll("text").remove();
                    d3.selectAll(".circle-country").style('opacity', '0.5')
                    localStorage.removeItem('oldCountry');
                }
            })
        },
        recenter() {
            try {
                // get a handle to the transform object, and reset it to the
                // zoom identity (resets to zoom out all the way)
                let d3zoom = this.zoom
                let ztrans = d3zoom.transform
                let t = d3.zoomIdentity
                this.svg_map.transition().duration(1000).call(ztrans, t)

                // get the object and measurements to determine the virtual
                // "bounding" rectangle around the directional extremes of sites
                // i.e., north (topmost), east (rightmost), etc
                let circles = this.svg_map.select('g').selectAll('circle')
                let data = circles.data()
                let long = data.map(o => parseFloat(o.longitude))
                let lat = data.map(o => parseFloat(o.latitude))
                let rightmost = d3.max(long)
                let leftmost = d3.min(long)
                let topmost = d3.max(lat)
                let bottommost = d3.min(lat)
                // convert the lat/long to points in the projection
                let lt = this.projection([leftmost, topmost])
                let rb = this.projection([rightmost, bottommost])
                // calc the gaps (east - west, south - north) in pixels
                let g = rb[0] - lt[0]
                let gh = rb[1] - lt[1]

                // get the dimensions of the panel in which the map sits
                let w = this.svg_map.node().parentElement.getBoundingClientRect().width
                let h = this.svg_map.node().parentElement.getBoundingClientRect().height

                // the goal here is to move the halfway point between leftmost and rightmost
                // on the projection sites to the halfway point of the panel in which the
                // svg element resides, and same for 'y'
                // the scale is the value 90% of the scale factor of either east-west to width
                // or south-north to height, whichever is greater
                let neoScale = 0.9 / Math.max(g / w, gh / h)

                // now recalculate what will be the difference between the current
                // center and the center of the scaled virtual rectangle
                // this finds the difference between the centers
                // the new center of the scaled rectangle is the average of the left and right
                // or top and bottom points
                let neoX = w / 2 - (neoScale * ((lt[0] + rb[0]) / 2))
                let neoY = h / 2 - (neoScale * ((lt[1] + rb[1]) / 2))

                // TRANSLATE FIRST!  then scale.
                t = d3.zoomIdentity.translate(neoX, neoY).scale(neoScale)
                this.svg_map.transition().duration(1000).call(ztrans, t)
            } catch (e) {
                console.log(e)
            }
        }

    }
 
}
</script>