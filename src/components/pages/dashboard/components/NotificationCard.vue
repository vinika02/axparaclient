<template>
      <div class="notification">
        <div class="d-flex m-bottom-14">
            <div class="flex-fill text-orange-b-18">
                Notifications
            </div>
            <div class="flex-fill w-38"  :class="{ 'notification-badge-orange': elementMenu == 'all' }"  @click="setNotifBadgeActive('all')">
               <div class="all-sched text-center">
                    <span class="cursor-pointer"  >
                        All
                    </span>
               </div>
            </div>
            <div class="flex-fill w-95 cursor-pointer  me-1 p-x-2"  :class="{ 'notification-badge-orange': elementMenu == 'urgent' }" @click="setNotifBadgeActive('urgent')">
                <div class="urgent text-end ">
                    Urgent 
                    <span class="badge-red font-light">
                        02
                    </span>
                </div>
            </div>
            
            <div class="flex-fill w-95 cursor-pointer p-x-2"  :class="{ 'notification-badge-orange': elementMenu == 'others' }" @click="setNotifBadgeActive('others')">
                <div class="others text-end">
                    Others
                    <span class="badge-red font-light">
                        05
                    </span>
                </div>
            </div>

        </div>
       
        <div class="notification-list ">
            <ul class="list-group">
                <li class="list-group-item active-item">
                    <div class="d-flex">
                        <div class="">
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_12065_26132)">
                                <rect x="6" y="6" width="42" height="42" rx="21" fill="white" shape-rendering="crispEdges"/>
                                <path d="M27 36.1667C28.0083 36.1667 28.8333 35.3417 28.8333 34.3333H25.1667C25.1667 35.3417 25.9917 36.1667 27 36.1667ZM32.5 30.6667V26.0833C32.5 23.2692 31.0058 20.9133 28.375 20.29V19.6667C28.375 18.9058 27.7608 18.2917 27 18.2917C26.2392 18.2917 25.625 18.9058 25.625 19.6667V20.29C23.0033 20.9133 21.5 23.26 21.5 26.0833V30.6667L19.6667 32.5V33.4167H34.3333V32.5L32.5 30.6667ZM30.6667 31.5833H23.3333V26.0833C23.3333 23.81 24.7175 21.9583 27 21.9583C29.2825 21.9583 30.6667 23.81 30.6667 26.0833V31.5833Z" fill="#FF9A2C"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_12065_26132" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="3"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.603922 0 0 0 0 0.172549 0 0 0 0.2 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12065_26132"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12065_26132" result="shape"/>
                                </filter>
                                </defs>
                            </svg>

                        </div>
                        <div class="ps-2 mt-1">
                            <div class="text-black fw-medium">
                                Recommendation for Order: Beauty Writer
                            </div>
                            <div class="sub-text-gray">
                                Talent ID: WD-38202
                            </div>
                        </div>
                        <div class="align-self-center text-end flex-fill me-2 x-button">
                            <span class="">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6667 4.27333L11.7267 3.33333L8.00001 7.06L4.27334 3.33333L3.33334 4.27333L7.06001 8L3.33334 11.7267L4.27334 12.6667L8.00001 8.94L11.7267 12.6667L12.6667 11.7267L8.94001 8L12.6667 4.27333Z" fill="#FF9A2C"/>
                                </svg>

                            </span>
                        </div>
                    </div>
                </li> 
                <li class="list-group-item">
                    <div class="d-flex">
                        <div>
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_12065_26143)">
                                <rect x="6" y="6" width="42" height="42" rx="21" fill="white" shape-rendering="crispEdges"/>
                                <path d="M27 21.5C28.0083 21.5 28.8333 22.325 28.8333 23.3333C28.8333 24.3417 28.0083 25.1667 27 25.1667C25.9917 25.1667 25.1667 24.3417 25.1667 23.3333C25.1667 22.325 25.9917 21.5 27 21.5ZM27 30.6667C29.475 30.6667 32.3167 31.8492 32.5 32.5H21.5C21.7108 31.84 24.5342 30.6667 27 30.6667ZM27 19.6667C24.9742 19.6667 23.3333 21.3075 23.3333 23.3333C23.3333 25.3592 24.9742 27 27 27C29.0258 27 30.6667 25.3592 30.6667 23.3333C30.6667 21.3075 29.0258 19.6667 27 19.6667ZM27 28.8333C24.5525 28.8333 19.6667 30.0617 19.6667 32.5V34.3333H34.3333V32.5C34.3333 30.0617 29.4475 28.8333 27 28.8333Z" fill="#FF9A2C"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_12065_26143" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="3"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.603922 0 0 0 0 0.172549 0 0 0 0.2 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12065_26143"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12065_26143" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                        <div class="ps-2 mt-1">
                            <div class="text-black fw-medium">
                                Leave Request: Alyssa Alilin
                            </div>
                            <div class="sub-text-gray">
                                16 Jun - 20 Jun
                            </div>
                        </div>
                        <div class="align-self-center text-end flex-fill me-2 x-button">
                            <span class="">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6667 4.27333L11.7267 3.33333L8.00001 7.06L4.27334 3.33333L3.33334 4.27333L7.06001 8L3.33334 11.7267L4.27334 12.6667L8.00001 8.94L11.7267 12.6667L12.6667 11.7267L8.94001 8L12.6667 4.27333Z" fill="#FF9A2C"/>
                                </svg>

                            </span>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="d-flex">
                        <div>
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_12090_26154)">
                                <rect x="6" y="6" width="42" height="42" rx="21" fill="white" shape-rendering="crispEdges"/>
                                <path d="M27 36.1667C28.0083 36.1667 28.8333 35.3417 28.8333 34.3333H25.1667C25.1667 35.3417 25.9917 36.1667 27 36.1667ZM32.5 30.6667V26.0833C32.5 23.2692 31.0058 20.9133 28.375 20.29V19.6667C28.375 18.9058 27.7608 18.2917 27 18.2917C26.2392 18.2917 25.625 18.9058 25.625 19.6667V20.29C23.0033 20.9133 21.5 23.26 21.5 26.0833V30.6667L19.6667 32.5V33.4167H34.3333V32.5L32.5 30.6667ZM30.6667 31.5833H23.3333V26.0833C23.3333 23.81 24.7175 21.9583 27 21.9583C29.2825 21.9583 30.6667 23.81 30.6667 26.0833V31.5833Z" fill="#FF9A2C"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_12090_26154" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="3"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.603922 0 0 0 0 0.172549 0 0 0 0.2 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12090_26154"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12090_26154" result="shape"/>
                                </filter>
                                </defs>
                            </svg>

                        </div>
                        <div class="ps-2 mt-1">
                            <div class="text-black fw-medium">
                                SkillScanner Match: HTML
                            </div>
                            <div class="sub-text-gray">
                                Talent ID: KR-45678
                            </div>
                        </div>
                        <div class="align-self-center text-end flex-fill me-2 x-button">
                            <span class="">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6667 4.27333L11.7267 3.33333L8.00001 7.06L4.27334 3.33333L3.33334 4.27333L7.06001 8L3.33334 11.7267L4.27334 12.6667L8.00001 8.94L11.7267 12.6667L12.6667 11.7267L8.94001 8L12.6667 4.27333Z" fill="#FF9A2C"/>
                                </svg>

                            </span>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="d-flex">
                        <div>
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_12090_26154)">
                                <rect x="6" y="6" width="42" height="42" rx="21" fill="white" shape-rendering="crispEdges"/>
                                <path d="M27 36.1667C28.0083 36.1667 28.8333 35.3417 28.8333 34.3333H25.1667C25.1667 35.3417 25.9917 36.1667 27 36.1667ZM32.5 30.6667V26.0833C32.5 23.2692 31.0058 20.9133 28.375 20.29V19.6667C28.375 18.9058 27.7608 18.2917 27 18.2917C26.2392 18.2917 25.625 18.9058 25.625 19.6667V20.29C23.0033 20.9133 21.5 23.26 21.5 26.0833V30.6667L19.6667 32.5V33.4167H34.3333V32.5L32.5 30.6667ZM30.6667 31.5833H23.3333V26.0833C23.3333 23.81 24.7175 21.9583 27 21.9583C29.2825 21.9583 30.6667 23.81 30.6667 26.0833V31.5833Z" fill="#FF9A2C"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_12090_26154" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="3"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.603922 0 0 0 0 0.172549 0 0 0 0.2 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12090_26154"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12090_26154" result="shape"/>
                                </filter>
                                </defs>
                            </svg>

                        </div>
                        <div class="ps-2 mt-1">
                            <div class="text-black w-300 text-truncate fw-medium">
                                Recommendation for Order:  Software Engineer (May 2020)
                            </div>
                            <div class="sub-text-gray">
                                Talent ID: CBP-12930
                            </div>
                        </div>
                        <div class="align-self-center text-end flex-fill me-2 x-button">
                            <span class="">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6667 4.27333L11.7267 3.33333L8.00001 7.06L4.27334 3.33333L3.33334 4.27333L7.06001 8L3.33334 11.7267L4.27334 12.6667L8.00001 8.94L11.7267 12.6667L12.6667 11.7267L8.94001 8L12.6667 4.27333Z" fill="#FF9A2C"/>
                                </svg>

                            </span>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="d-flex">
                        <div>
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_12094_39650)">
                                <rect x="6" y="6" width="42" height="42" rx="21" fill="#FF5B5B" shape-rendering="crispEdges"/>
                                <path d="M26.0833 29.7497H27.9166V31.583H26.0833V29.7497ZM26.0833 22.4163H27.9166V27.9163H26.0833V22.4163ZM26.9908 17.833C21.9308 17.833 17.8333 21.9397 17.8333 26.9997C17.8333 32.0597 21.9308 36.1663 26.9908 36.1663C32.06 36.1663 36.1666 32.0597 36.1666 26.9997C36.1666 21.9397 32.06 17.833 26.9908 17.833ZM27 34.333C22.9483 34.333 19.6666 31.0513 19.6666 26.9997C19.6666 22.948 22.9483 19.6663 27 19.6663C31.0516 19.6663 34.3333 22.948 34.3333 26.9997C34.3333 31.0513 31.0516 34.333 27 34.333Z" fill="white"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_12094_39650" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="3"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.356863 0 0 0 0 0.356863 0 0 0 0.2 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12094_39650"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12094_39650" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                        <div class="ps-2 mt-1">
                            <div class="text-red w-300 text-truncate fw-medium">
                                Pending Feedback: Interview
                            </div>
                            <div class="sub-text-gray">
                                Talent ID: CSP-09876
                            </div>
                        </div>
                        <div class="align-self-center text-end flex-fill me-2 x-button">
                            <span class="">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6667 4.27333L11.7267 3.33333L8.00001 7.06L4.27334 3.33333L3.33334 4.27333L7.06001 8L3.33334 11.7267L4.27334 12.6667L8.00001 8.94L11.7267 12.6667L12.6667 11.7267L8.94001 8L12.6667 4.27333Z" fill="#FF9A2C"/>
                                </svg>

                            </span>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="d-flex">
                        <div>
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_12094_39650)">
                                <rect x="6" y="6" width="42" height="42" rx="21" fill="#FF5B5B" shape-rendering="crispEdges"/>
                                <path d="M26.0833 29.7497H27.9166V31.583H26.0833V29.7497ZM26.0833 22.4163H27.9166V27.9163H26.0833V22.4163ZM26.9908 17.833C21.9308 17.833 17.8333 21.9397 17.8333 26.9997C17.8333 32.0597 21.9308 36.1663 26.9908 36.1663C32.06 36.1663 36.1666 32.0597 36.1666 26.9997C36.1666 21.9397 32.06 17.833 26.9908 17.833ZM27 34.333C22.9483 34.333 19.6666 31.0513 19.6666 26.9997C19.6666 22.948 22.9483 19.6663 27 19.6663C31.0516 19.6663 34.3333 22.948 34.3333 26.9997C34.3333 31.0513 31.0516 34.333 27 34.333Z" fill="white"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_12094_39650" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="3"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.356863 0 0 0 0 0.356863 0 0 0 0.2 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12094_39650"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12094_39650" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                        <div class="ps-2 mt-1">
                            <div class="text-red w-300 text-truncate fw-medium">
                                Pending Review: CVs
                            </div>
                            <div class="sub-text-gray">
                                2x Backend Developer
                            </div>
                        </div>
                        <div class="align-self-center text-end flex-fill me-2 x-button">
                            <span class="">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6667 4.27333L11.7267 3.33333L8.00001 7.06L4.27334 3.33333L3.33334 4.27333L7.06001 8L3.33334 11.7267L4.27334 12.6667L8.00001 8.94L11.7267 12.6667L12.6667 11.7267L8.94001 8L12.6667 4.27333Z" fill="#FF9A2C"/>
                                </svg>

                            </span>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="d-flex">
                        <div>
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_12094_39650)">
                                <rect x="6" y="6" width="42" height="42" rx="21" fill="#FF5B5B" shape-rendering="crispEdges"/>
                                <path d="M26.0833 29.7497H27.9166V31.583H26.0833V29.7497ZM26.0833 22.4163H27.9166V27.9163H26.0833V22.4163ZM26.9908 17.833C21.9308 17.833 17.8333 21.9397 17.8333 26.9997C17.8333 32.0597 21.9308 36.1663 26.9908 36.1663C32.06 36.1663 36.1666 32.0597 36.1666 26.9997C36.1666 21.9397 32.06 17.833 26.9908 17.833ZM27 34.333C22.9483 34.333 19.6666 31.0513 19.6666 26.9997C19.6666 22.948 22.9483 19.6663 27 19.6663C31.0516 19.6663 34.3333 22.948 34.3333 26.9997C34.3333 31.0513 31.0516 34.333 27 34.333Z" fill="white"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_12094_39650" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="3"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.356863 0 0 0 0 0.356863 0 0 0 0.2 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12094_39650"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12094_39650" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                        <div class="ps-2 mt-1">
                            <div class="text-red w-300 text-truncate fw-medium">
                                Pending Review: CVs
                            </div>
                            <div class="sub-text-gray">
                                5x Backend Developer
                            </div>
                        </div>
                        <div class="align-self-center text-end flex-fill me-2 x-button">
                            <span class="">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6667 4.27333L11.7267 3.33333L8.00001 7.06L4.27334 3.33333L3.33334 4.27333L7.06001 8L3.33334 11.7267L4.27334 12.6667L8.00001 8.94L11.7267 12.6667L12.6667 11.7267L8.94001 8L12.6667 4.27333Z" fill="#FF9A2C"/>
                                </svg>

                            </span>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="d-flex">
                        <div>
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_12094_39650)">
                                <rect x="6" y="6" width="42" height="42" rx="21" fill="#FF5B5B" shape-rendering="crispEdges"/>
                                <path d="M26.0833 29.7497H27.9166V31.583H26.0833V29.7497ZM26.0833 22.4163H27.9166V27.9163H26.0833V22.4163ZM26.9908 17.833C21.9308 17.833 17.8333 21.9397 17.8333 26.9997C17.8333 32.0597 21.9308 36.1663 26.9908 36.1663C32.06 36.1663 36.1666 32.0597 36.1666 26.9997C36.1666 21.9397 32.06 17.833 26.9908 17.833ZM27 34.333C22.9483 34.333 19.6666 31.0513 19.6666 26.9997C19.6666 22.948 22.9483 19.6663 27 19.6663C31.0516 19.6663 34.3333 22.948 34.3333 26.9997C34.3333 31.0513 31.0516 34.333 27 34.333Z" fill="white"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_12094_39650" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="3"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.356863 0 0 0 0 0.356863 0 0 0 0.2 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12094_39650"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12094_39650" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                        <div class="ps-2 mt-1">
                            <div class="text-red w-300 text-truncate fw-medium">
                                Pending Review: CVs
                            </div>
                            <div class="sub-text-gray">
                                3x Backend Developer
                            </div>
                        </div>
                        <div class="align-self-center text-end flex-fill me-2 x-button">
                            <span class="">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6667 4.27333L11.7267 3.33333L8.00001 7.06L4.27334 3.33333L3.33334 4.27333L7.06001 8L3.33334 11.7267L4.27334 12.6667L8.00001 8.94L11.7267 12.6667L12.6667 11.7267L8.94001 8L12.6667 4.27333Z" fill="#FF9A2C"/>
                                </svg>

                            </span>
                        </div>
                    </div>
                </li>
                <li class="list-group-item" v-for="n in 30" :key="n">
                    <div class="d-flex">
                        <div>
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_12094_39650)">
                                <rect x="6" y="6" width="42" height="42" rx="21" fill="#FF5B5B" shape-rendering="crispEdges"/>
                                <path d="M26.0833 29.7497H27.9166V31.583H26.0833V29.7497ZM26.0833 22.4163H27.9166V27.9163H26.0833V22.4163ZM26.9908 17.833C21.9308 17.833 17.8333 21.9397 17.8333 26.9997C17.8333 32.0597 21.9308 36.1663 26.9908 36.1663C32.06 36.1663 36.1666 32.0597 36.1666 26.9997C36.1666 21.9397 32.06 17.833 26.9908 17.833ZM27 34.333C22.9483 34.333 19.6666 31.0513 19.6666 26.9997C19.6666 22.948 22.9483 19.6663 27 19.6663C31.0516 19.6663 34.3333 22.948 34.3333 26.9997C34.3333 31.0513 31.0516 34.333 27 34.333Z" fill="white"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_12094_39650" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset/>
                                <feGaussianBlur stdDeviation="3"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.356863 0 0 0 0 0.356863 0 0 0 0.2 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12094_39650"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12094_39650" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                        <div class="ps-2 mt-1">
                            <div class="text-red w-300 text-truncate fw-medium">
                                Pending Review: CVs
                            </div>
                            <div class="sub-text-gray">
                                4x Backend Developer
                            </div>
                        </div>
                        <div class="align-self-center text-end flex-fill me-2 x-button">
                            <span class="">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.6667 4.27333L11.7267 3.33333L8.00001 7.06L4.27334 3.33333L3.33334 4.27333L7.06001 8L3.33334 11.7267L4.27334 12.6667L8.00001 8.94L11.7267 12.6667L12.6667 11.7267L8.94001 8L12.6667 4.27333Z" fill="#FF9A2C"/>
                                </svg>

                            </span>
                        </div>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
</template>
<style>
    .notification{
        padding: 14px;
        background:#FFF2E3;
        border-radius: 6px;
        height: 500px;       
    }
    .notification .urgent{
        color: #FF9A2C;
        font-weight: 400;
        font-size: 14px;
        margin-top:2.5px;
        font-family: RubikRegular;
    }
    .notification .all-sched{
        color: #FF9A2C;
        font-weight: 400;
        font-size: 14px;
        margin-top:2.5px;
        font-family: RubikRegular;
    }
    .notification .others{
        color: #FF9A2C;
        font-weight: 400;
        font-size: 14px;
        margin-top:2.5px;
        font-family: RubikRegular;
    }
    .notification .list-group{
        border-color: #FF9A2C;
        border-radius: 6px !important;       
    }
    .notification .list-group-item{
        border-color: #FF9A2C;
        padding-left: 6px;
        padding-right: 6px;
    } 
    .notification .sub-text-gray{
        color: #606883 ;
        font-weight: 400;
        font-size: 14px;
        font-family: RubikRegular;
    }

    .notification .text-green{
        color: #00B600;
        font-weight: 500;
        font-size: 14px;
    } 
    .notification .text-orange{
        color: #FF9A2C;
        font-weight: 500;
        font-size: 14px;
    }  
    .notification .text-red{
        color: #FF5B5B;
        font-weight: 500;
        font-size: 14px;
    } 
    .notification .text-black{
        color: #27304C;
        font-weight: 500;
        font-size: 14px;
    }
    .notification-list{
        height: 430px;
        overflow-y: auto;
    } 
    .notification .active-item{
        background: #FFDEB9;
    }
    .notification .x-button{
       margin-top:-8px !important;
    }
    .notification-list .list-group-item:hover{
        background: #FFDEB9;
    }
    
    .notification-badge-orange{
        background: #FF9A2C;     
        border-radius: 50px;
    }
    .notification-badge-orange div{
        font-family: RubikRegular;
        font-weight: 500; 
        color:white !important;
    }

    
    .notification .scrollbar-thumb{
        background: #C9C9C9; 
        margin-top: 10px;
        margin-bottom: 10px;
        width: 6px;
    }
    .notification .scrollbar-track-y{
       right:8px;
       background: transparent;
    }

</style>
<script>
    import Scrollbar from 'smooth-scrollbar';
    export default {
        name: 'NotificationCard',
        data(){
        return{
            elementMenu:'all'
        }
      },
      methods:{
        setNotifBadgeActive(elname){
            this.elementMenu =  elname;
        }
      },
      mounted(){
        let options = {
            alwaysShowTracks:true
        }
        Scrollbar.init(document.querySelector('.notification-list'), options);
      }
    }
</script>
