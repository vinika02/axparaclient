<template>
    <div>
       
         <div class="modal fade" id="editPreferencesModal" tabindex="-1" aria-labelledby="editCandidatePreferencesLabel" aria-hidden="true" data-bs-backdrop="static">
            <div class="modal-dialog modal-lg">
                <div class="modal-content edit-preference-modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="edit-preference-label">Edit Your Candidate Preferences</div>                    
                    <button type="button" class="btn-close skill-scan-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body edit-preferences-modal-body">
                    <div class="edit-preferences-container">
                        <div class="d-flex">
                            <div>
                                <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="27" height="26" rx="13" fill="#2C91FF"/>
                                    <path d="M13.878 18C13.7753 18 13.6913 17.9673 13.626 17.902C13.57 17.8367 13.542 17.7573 13.542 17.664V10.412L11.414 12.05C11.33 12.106 11.246 12.1293 11.162 12.12C11.078 12.1013 11.0033 12.05 10.938 11.966L10.35 11.21C10.294 11.126 10.2707 11.0373 10.28 10.944C10.2987 10.8507 10.35 10.776 10.434 10.72L13.57 8.298C13.626 8.25133 13.682 8.22333 13.738 8.214C13.794 8.20467 13.8547 8.2 13.92 8.2H15.152C15.2453 8.2 15.3247 8.23267 15.39 8.298C15.4553 8.36333 15.488 8.44267 15.488 8.536V17.664C15.488 17.7573 15.4553 17.8367 15.39 17.902C15.3247 17.9673 15.2453 18 15.152 18H13.878Z" fill="white"/>
                                </svg>
                            </div>
                            <div class="edit-label">
                                Choose a Primary and Secondary Skill Required From Your Candidate.
                            </div>                           
                        </div>
                        <div class="primary-skills">
                            <div>
                                <span class="primary-label">Primary Skill </span>
                                <span class="asterisk">*</span>
                            </div>
                            <div class="p-t-6">
                                <section class="container-input-content input-tag-container">
                                    <section class="inner" @click="skillScannerModal()">                                      
                                        <div class="tag-field js-tags">
                                        <div class="tag js-tag" data-index="0">HTML<span class="tag-close js-tag-close" data-index="0">×</span></div>
                                        <input class="js-tag-input" disabled id="textInput"/>
                                        </div>
                                    </section>
                                </section>                               
                            </div>
                        </div>
                        <div class="secondary-skills">
                            <div>
                                <span class="secondary-label">Secondary Skill </span>
                                <span class="asterisk">*</span>
                            </div>
                            <div class="p-t-6">
                                <section class="container-input-content input-tag-container">
                                    <section class="inner" @click="skillScannerModal()">                                      
                                        <div class="tag-field js-tags">
                                        <div class="tag js-tag" data-index="0">CSS<span class="tag-close js-tag-close" data-index="0">×</span></div>
                                        <div class="tag js-tag" data-index="1">Javascript<span class="tag-close js-tag-close" data-index="0">×</span></div>
                                        <input class="js-tag-input" disabled  id="textInput"/>
                                        </div>
                                    </section>
                                </section>                               
                            </div>
                        </div>
                        <div class="secondary-skills">
                            <div>
                                <span class="secondary-label">Other Skill </span>
                            </div>
                            <div class="p-t-6">
                                <section class="container-input-content input-tag-container">
                                    <section class="inner" @click="skillScannerModal()">                                      
                                        <div class="tag-field js-tags">
                                        <div class="tag js-tag" data-index="0">React Native<span class="tag-close js-tag-close" data-index="0">×</span></div>
                                        <div class="tag js-tag" data-index="1">WooCommerce<span class="tag-close js-tag-close" data-index="0">×</span></div>
                                        <div class="tag js-tag" data-index="2">Oracle<span class="tag-close js-tag-close" data-index="0">×</span></div>
                                        <!-- <input class="js-tag-input"  id="textInput"/> -->
                                        </div>
                                    </section>
                                </section>                               
                            </div>
                        </div>
                        <div class="d-flex choose-country">
                            <div>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="26" height="26" rx="13" fill="#2C91FF"/>
                                    <path d="M9.466 18C9.37267 18 9.29333 17.9673 9.228 17.902C9.16267 17.8367 9.13 17.7573 9.13 17.664V16.95C9.13 16.866 9.14867 16.768 9.186 16.656C9.23267 16.5347 9.33067 16.4133 9.48 16.292L11.692 14.094C12.308 13.6087 12.8027 13.198 13.176 12.862C13.5587 12.5167 13.834 12.204 14.002 11.924C14.1793 11.6347 14.268 11.35 14.268 11.07C14.268 10.65 14.1513 10.3093 13.918 10.048C13.694 9.78667 13.3347 9.656 12.84 9.656C12.5133 9.656 12.238 9.726 12.014 9.866C11.79 9.99667 11.6127 10.174 11.482 10.398C11.3607 10.622 11.2767 10.8693 11.23 11.14C11.2113 11.2613 11.16 11.3453 11.076 11.392C10.992 11.4387 10.908 11.462 10.824 11.462H9.578C9.494 11.462 9.424 11.434 9.368 11.378C9.312 11.322 9.284 11.2567 9.284 11.182C9.29333 10.7807 9.37733 10.3933 9.536 10.02C9.69467 9.63733 9.92333 9.30133 10.222 9.012C10.53 8.71333 10.9033 8.47533 11.342 8.298C11.7807 8.12067 12.2753 8.032 12.826 8.032C13.6007 8.032 14.24 8.16267 14.744 8.424C15.2573 8.68533 15.64 9.04 15.892 9.488C16.1533 9.936 16.284 10.44 16.284 11C16.284 11.4387 16.2 11.8447 16.032 12.218C15.864 12.582 15.6213 12.9367 15.304 13.282C14.9867 13.618 14.604 13.9633 14.156 14.318L12.168 16.334H16.158C16.2607 16.334 16.34 16.3667 16.396 16.432C16.4613 16.488 16.494 16.5673 16.494 16.67V17.664C16.494 17.7573 16.4613 17.8367 16.396 17.902C16.34 17.9673 16.2607 18 16.158 18H9.466Z" fill="white"/>
                                </svg>

                            </div>
                            <div class="edit-label">
                                Choose a Primary and Secondary Skill Required From Your Candidate.
                            </div>                                                   
                        </div>
                        <div class="edit-country-form">
                            <div class="d-flex p-t-14">
                                <div class="flex-custom">
                                    <div class="form-check">
                                        <input class="normal-radio input-radio" type="radio" name="editanycountryradio" @click="checkCountry(true)" id="Editanycountry" checked>
                                        <label class="form-check-label" for="Editanycountry">
                                            Any Country
                                        </label>
                                    </div>
                                </div>
                                <div class="w-120">
                                    <div class="form-check">
                                        <input class=" normal-check-box check-box" type="checkbox" value="" :disabled="anyCountry" name="editanycountry" id="editIndonesia">
                                        <label class="form-check-label" for="editIndonesia">
                                            Indonesia
                                        </label>
                                    </div>
                                </div>
                                <div class="w-120">
                                    <div class="form-check">
                                        <input class="normal-check-box check-box" type="checkbox" value="" :disabled="anyCountry" name="editanycountry" id="EditPhilippines">
                                        <label class="form-check-label" for="EditPhilippines">
                                            Philippines
                                        </label>
                                    </div>
                                </div>
                            </div>  
                            <div class="d-flex p-t-8">
                                <div class="flex-custom">
                                    <div class="form-check">
                                        <input class=" normal-check-box  normal-radio input-radio" type="radio" @click="checkCountry(false)" name="editanycountryradio" id="EditspecificCountry" >
                                        <label class="form-check-label" for="EditspecificCountry">
                                            Specific Countries
                                        </label>
                                    </div>
                                </div>
                                <div class="w-120">
                                    <div class="form-check">
                                        <input class=" normal-check-box check-box" type="checkbox" value="" :disabled="anyCountry" name="editanycountry" id="EditsriLanka">
                                        <label class="form-check-label" for="EditsriLanka">
                                            Sri Lanka
                                        </label>
                                    </div>
                                </div>
                                <div class="w-120">
                                    <div class="form-check">
                                        <input class="normal-check-box check-box" type="checkbox" value="" :disabled="anyCountry" name="editanycountry" id="EditVietnam">
                                        <label class="form-check-label" for="EditVietnam">
                                            Vietnam
                                        </label>
                                    </div>
                                </div>
                            </div>                                
                        </div>    
                        <div class="d-flex choose-country">
                            <div>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="26" height="26" rx="13" fill="#2C91FF"/>
                                    <path d="M9.466 18C9.37267 18 9.29333 17.9673 9.228 17.902C9.16267 17.8367 9.13 17.7573 9.13 17.664V16.95C9.13 16.866 9.14867 16.768 9.186 16.656C9.23267 16.5347 9.33067 16.4133 9.48 16.292L11.692 14.094C12.308 13.6087 12.8027 13.198 13.176 12.862C13.5587 12.5167 13.834 12.204 14.002 11.924C14.1793 11.6347 14.268 11.35 14.268 11.07C14.268 10.65 14.1513 10.3093 13.918 10.048C13.694 9.78667 13.3347 9.656 12.84 9.656C12.5133 9.656 12.238 9.726 12.014 9.866C11.79 9.99667 11.6127 10.174 11.482 10.398C11.3607 10.622 11.2767 10.8693 11.23 11.14C11.2113 11.2613 11.16 11.3453 11.076 11.392C10.992 11.4387 10.908 11.462 10.824 11.462H9.578C9.494 11.462 9.424 11.434 9.368 11.378C9.312 11.322 9.284 11.2567 9.284 11.182C9.29333 10.7807 9.37733 10.3933 9.536 10.02C9.69467 9.63733 9.92333 9.30133 10.222 9.012C10.53 8.71333 10.9033 8.47533 11.342 8.298C11.7807 8.12067 12.2753 8.032 12.826 8.032C13.6007 8.032 14.24 8.16267 14.744 8.424C15.2573 8.68533 15.64 9.04 15.892 9.488C16.1533 9.936 16.284 10.44 16.284 11C16.284 11.4387 16.2 11.8447 16.032 12.218C15.864 12.582 15.6213 12.9367 15.304 13.282C14.9867 13.618 14.604 13.9633 14.156 14.318L12.168 16.334H16.158C16.2607 16.334 16.34 16.3667 16.396 16.432C16.4613 16.488 16.494 16.5673 16.494 16.67V17.664C16.494 17.7573 16.4613 17.8367 16.396 17.902C16.34 17.9673 16.2607 18 16.158 18H9.466Z" fill="white"/>
                                </svg>

                            </div>
                            <div class="edit-label">
                                Choose the years of experience your candidate should have.
                            </div>                                                   
                        </div>
                        <div class="edit-country-form">
                            <div class="d-flex p-t-14">
                                <div class="flex-custom">
                                    <div class="form-check">
                                        <input class="normal-radio input-radio" type="radio" name="editanylabelradio"  @click="checkLabel(true)" id="EditanyLabelRadio" >
                                        <label class="form-check-label" for="EditanyLabelRadio">
                                            Any Level
                                        </label>
                                    </div>
                                </div>
                                <div class="junior-content">
                                    <div class="form-check">
                                        <input class="normal-check-box check-box" type="checkbox" value="" :disabled="anyLabel" name="editanylabel" id="EditJunior">
                                        <label class="form-check-label" for="EditJunior">
                                            Junior (1-3 Years)
                                        </label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="form-check">
                                        <input class="normal-check-box check-box" type="checkbox" value="" :disabled="anyLabel" name="editanylabel" id="EditSenior">
                                        <label class="form-check-label" for="EditSenior">
                                            Senior (8+ Years)
                                        </label>
                                    </div>
                                </div>
                            </div>  
                            <div class="d-flex p-t-8">
                                <div class="flex-custom">
                                    <div class="form-check">
                                        <input class=" normal-check-box  normal-radio input-radio" type="radio" @click="checkLabel(false)" name="editanylabelradio" id="EditLabelRadio" checked >
                                        <label class="form-check-label" for="EditLabelRadio">
                                            Specific Levels
                                        </label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="form-check">
                                        <input class=" normal-check-box check-box" type="checkbox" value="" :disabled="anyLabel" name="editanylabel" id="EditMidLabel">
                                        <label class="form-check-label" for="EditMidLabel">
                                            Mid-Level (4-7 Years)
                                        </label>
                                    </div>
                                </div>
                            </div>                                
                        </div>
                    </div>
                </div>
                <div class="modal-footer custom-modal-footer">
                    <button type="button" class="btn btn-outline-red btn-lg btn-cancel" data-bs-toggle="modal" data-bs-target="#deleteSkillModal">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00008 15.8333C5.00008 16.75 5.75008 17.5 6.66675 17.5H13.3334C14.2501 17.5 15.0001 16.75 15.0001 15.8333V5.83333H5.00008V15.8333ZM6.66675 7.5H13.3334V15.8333H6.66675V7.5ZM12.9167 3.33333L12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334V3.33333H12.9167Z" fill="#FF4949"/>
                        </svg>

                        Delete
                    </button>
                    <button type="button" class="btn btn-outline-blue btn-lg btn-cancel" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary btn-save-changes btn-lg" data-bs-dismiss="modal">Save Changes</button>
                </div>
                </div>
            </div>
         </div> 
         <div class="modal fade" id="createAnotherSkillScanner" tabindex="-1" aria-labelledby="createAnotherSkillScannerLabel" aria-hidden="true" data-bs-backdrop="static">
            <div class="modal-dialog modal-lg">
                <div class="modal-content edit-preference-modal-content">
                <div class="modal-header">
                    <div class="modal-title" id="edit-preference-label">Create Another SkillScanner Alert</div>                    
                    <button type="button" class="btn-close skill-scan-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body edit-preferences-modal-body">
                    <div class="edit-preferences-container">
                        <div class="d-flex">
                            <div>
                                <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="27" height="26" rx="13" fill="#2C91FF"/>
                                    <path d="M13.878 18C13.7753 18 13.6913 17.9673 13.626 17.902C13.57 17.8367 13.542 17.7573 13.542 17.664V10.412L11.414 12.05C11.33 12.106 11.246 12.1293 11.162 12.12C11.078 12.1013 11.0033 12.05 10.938 11.966L10.35 11.21C10.294 11.126 10.2707 11.0373 10.28 10.944C10.2987 10.8507 10.35 10.776 10.434 10.72L13.57 8.298C13.626 8.25133 13.682 8.22333 13.738 8.214C13.794 8.20467 13.8547 8.2 13.92 8.2H15.152C15.2453 8.2 15.3247 8.23267 15.39 8.298C15.4553 8.36333 15.488 8.44267 15.488 8.536V17.664C15.488 17.7573 15.4553 17.8367 15.39 17.902C15.3247 17.9673 15.2453 18 15.152 18H13.878Z" fill="white"/>
                                </svg>
                            </div>
                            <div class="edit-label">
                                Choose a Primary and Secondary Skill Required From Your Candidate.
                            </div>                           
                        </div>
                        <div class="primary-skills">
                            <div>
                                <span class="primary-label">Primary Skill </span>
                                <span class="asterisk">*</span>
                            </div>
                            <div class="p-t-6">
                                <section class="container-input-content input-tag-container">
                                    <section class="inner" @click="skillScannerModal()">                                      
                                        <div class="tag-field js-tags">
                                        <input class="js-tag-input" disabled  placeholder="Select primary skill" >
                                        </div>
                                    </section>
                                </section>                               
                            </div>
                        </div>
                        <div class="secondary-skills">
                            <div>
                                <span class="secondary-label">Secondary Skill </span>
                                <span class="asterisk">*</span>
                            </div>
                            <div class="p-t-6">
                                <section class="container-input-content input-tag-container">
                                    <section class="inner" @click="skillScannerModal()">                                      
                                        <div class="tag-field js-tags">                                       
                                        <input class="js-tag-input" disabled  placeholder="Select secondary skill" >
                                        </div>
                                    </section>
                                </section>                               
                            </div>
                        </div>
                        <div class="secondary-skills">
                            <div>
                                <span class="secondary-label">Other Skill </span>
                            </div>
                            <div class="p-t-6">
                                <section class="container-input-content input-tag-container">
                                    <section class="inner" @click="skillScannerModal()">                                      
                                        <div class="tag-field js-tags">
                                        <input class="js-tag-input"  disabled placeholder="Select other skill" >
                                        </div>
                                    </section>
                                </section>                               
                            </div>
                        </div>
                        <div class="d-flex choose-country">
                            <div>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="26" height="26" rx="13" fill="#2C91FF"/>
                                    <path d="M9.466 18C9.37267 18 9.29333 17.9673 9.228 17.902C9.16267 17.8367 9.13 17.7573 9.13 17.664V16.95C9.13 16.866 9.14867 16.768 9.186 16.656C9.23267 16.5347 9.33067 16.4133 9.48 16.292L11.692 14.094C12.308 13.6087 12.8027 13.198 13.176 12.862C13.5587 12.5167 13.834 12.204 14.002 11.924C14.1793 11.6347 14.268 11.35 14.268 11.07C14.268 10.65 14.1513 10.3093 13.918 10.048C13.694 9.78667 13.3347 9.656 12.84 9.656C12.5133 9.656 12.238 9.726 12.014 9.866C11.79 9.99667 11.6127 10.174 11.482 10.398C11.3607 10.622 11.2767 10.8693 11.23 11.14C11.2113 11.2613 11.16 11.3453 11.076 11.392C10.992 11.4387 10.908 11.462 10.824 11.462H9.578C9.494 11.462 9.424 11.434 9.368 11.378C9.312 11.322 9.284 11.2567 9.284 11.182C9.29333 10.7807 9.37733 10.3933 9.536 10.02C9.69467 9.63733 9.92333 9.30133 10.222 9.012C10.53 8.71333 10.9033 8.47533 11.342 8.298C11.7807 8.12067 12.2753 8.032 12.826 8.032C13.6007 8.032 14.24 8.16267 14.744 8.424C15.2573 8.68533 15.64 9.04 15.892 9.488C16.1533 9.936 16.284 10.44 16.284 11C16.284 11.4387 16.2 11.8447 16.032 12.218C15.864 12.582 15.6213 12.9367 15.304 13.282C14.9867 13.618 14.604 13.9633 14.156 14.318L12.168 16.334H16.158C16.2607 16.334 16.34 16.3667 16.396 16.432C16.4613 16.488 16.494 16.5673 16.494 16.67V17.664C16.494 17.7573 16.4613 17.8367 16.396 17.902C16.34 17.9673 16.2607 18 16.158 18H9.466Z" fill="white"/>
                                </svg>

                            </div>
                            <div class="edit-label">
                                Choose a Primary and Secondary Skill Required From Your Candidate.
                            </div>                                                   
                        </div>
                        <div class="edit-country-form">
                            <div class="d-flex p-t-14">
                                <div class="flex-custom">
                                    <div class="form-check">
                                        <input class="normal-radio input-radio" type="radio" name="newCountry" @click="checkCountry(true)" id="newCountry" checked>
                                        <label class="form-check-label" for="newCountry">
                                            Any Country
                                        </label>
                                    </div>
                                </div>
                                <div class="w-120">
                                    <div class="form-check">
                                        <input class=" normal-check-box check-box" type="checkbox" value="" :disabled="anyCountry" name="newIndo" id="newIndo">
                                        <label class="form-check-label" for="newIndo">
                                            Indonesia
                                        </label>
                                    </div>
                                </div>
                                <div class="w-120">
                                    <div class="form-check">
                                        <input class="normal-check-box check-box" type="checkbox" value="" :disabled="anyCountry" name="newPH" id="newPH">
                                        <label class="form-check-label" for="newPH">
                                            Philippines
                                        </label>
                                    </div>
                                </div>
                            </div>  
                            <div class="d-flex p-t-8">
                                <div class="flex-custom">
                                    <div class="form-check">
                                        <input class=" normal-check-box  normal-radio input-radio" type="radio" @click="checkCountry(false)" name="newCountry" id="newSpecificCountry" >
                                        <label class="form-check-label" for="newSpecificCountry">
                                            Specific Countries
                                        </label>
                                    </div>
                                </div>
                                <div class="w-120">
                                    <div class="form-check">
                                        <input class=" normal-check-box check-box" type="checkbox" value="" :disabled="anyCountry" name="newSri" id="newSri">
                                        <label class="form-check-label" for="newSri">
                                            Sri Lanka
                                        </label>
                                    </div>
                                </div>
                                <div class="w-120">
                                    <div class="form-check">
                                        <input class="normal-check-box check-box" type="checkbox" value="" :disabled="anyCountry" name="newViet" id="newViet">
                                        <label class="form-check-label" for="newViet">
                                            Vietnam
                                        </label>
                                    </div>
                                </div>
                            </div>                                
                        </div>    
                        <div class="d-flex choose-country">
                            <div>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="26" height="26" rx="13" fill="#2C91FF"/>
                                    <path d="M9.466 18C9.37267 18 9.29333 17.9673 9.228 17.902C9.16267 17.8367 9.13 17.7573 9.13 17.664V16.95C9.13 16.866 9.14867 16.768 9.186 16.656C9.23267 16.5347 9.33067 16.4133 9.48 16.292L11.692 14.094C12.308 13.6087 12.8027 13.198 13.176 12.862C13.5587 12.5167 13.834 12.204 14.002 11.924C14.1793 11.6347 14.268 11.35 14.268 11.07C14.268 10.65 14.1513 10.3093 13.918 10.048C13.694 9.78667 13.3347 9.656 12.84 9.656C12.5133 9.656 12.238 9.726 12.014 9.866C11.79 9.99667 11.6127 10.174 11.482 10.398C11.3607 10.622 11.2767 10.8693 11.23 11.14C11.2113 11.2613 11.16 11.3453 11.076 11.392C10.992 11.4387 10.908 11.462 10.824 11.462H9.578C9.494 11.462 9.424 11.434 9.368 11.378C9.312 11.322 9.284 11.2567 9.284 11.182C9.29333 10.7807 9.37733 10.3933 9.536 10.02C9.69467 9.63733 9.92333 9.30133 10.222 9.012C10.53 8.71333 10.9033 8.47533 11.342 8.298C11.7807 8.12067 12.2753 8.032 12.826 8.032C13.6007 8.032 14.24 8.16267 14.744 8.424C15.2573 8.68533 15.64 9.04 15.892 9.488C16.1533 9.936 16.284 10.44 16.284 11C16.284 11.4387 16.2 11.8447 16.032 12.218C15.864 12.582 15.6213 12.9367 15.304 13.282C14.9867 13.618 14.604 13.9633 14.156 14.318L12.168 16.334H16.158C16.2607 16.334 16.34 16.3667 16.396 16.432C16.4613 16.488 16.494 16.5673 16.494 16.67V17.664C16.494 17.7573 16.4613 17.8367 16.396 17.902C16.34 17.9673 16.2607 18 16.158 18H9.466Z" fill="white"/>
                                </svg>

                            </div>
                            <div class="edit-label">
                                Choose the years of experience your candidate should have.
                            </div>                                                   
                        </div>
                        <div class="edit-country-form">
                            <div class="d-flex p-t-14">
                                <div class="flex-custom">
                                    <div class="form-check">
                                        <input class="normal-radio input-radio" type="radio" name="newAnyLabelRadio"  @click="checkLabel(true)" id="NewAnyLabelRadio" >
                                        <label class="form-check-label" for="NewAnyLabelRadio">
                                            Any Level
                                        </label>
                                    </div>
                                </div>
                                <div class="junior-content">
                                    <div class="form-check">
                                        <input class="normal-check-box check-box" type="checkbox" value="" :disabled="anyLabel" name="newAnyLabel" id="newJunior">
                                        <label class="form-check-label" for="newJunior">
                                            Junior (1-3 Years)
                                        </label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="form-check">
                                        <input class="normal-check-box check-box" type="checkbox" value="" :disabled="anyLabel" name="newAnyLabel" id="EditSenior">
                                        <label class="form-check-label" for="EditSenior">
                                            Senior (8+ Years)
                                        </label>
                                    </div>
                                </div>
                            </div>  
                            <div class="d-flex p-t-8">
                                <div class="flex-custom">
                                    <div class="form-check">
                                        <input class=" normal-check-box  normal-radio input-radio" type="radio" @click="checkLabel(false)" name="newAnyLabelRadio" id="NewSpecific" checked >
                                        <label class="form-check-label" for="NewSpecific">
                                            Specific Levels
                                        </label>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="form-check">
                                        <input class=" normal-check-box check-box" type="checkbox" value="" :disabled="anyLabel" name="newAnyLabel" id="newMidLabel">
                                        <label class="form-check-label" for="newMidLabel">
                                            Mid-Level (4-7 Years)
                                        </label>
                                    </div>
                                </div>
                            </div>                                
                        </div>
                    </div>
                </div>
                <div class="modal-footer custom-modal-footer">
                    <button type="button" class="btn btn-outline-blue btn-lg btn-cancel" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary btn-save-changes btn-lg" data-bs-toggle="modal" data-bs-target="#reachLimitModal">Create Alerts</button>
                </div>
                </div>
            </div>
         </div>

         <div class="modal fade" id="skillScannModal" tabindex="-1" aria-labelledby="skillScannModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header skill-scann-modal-header">
                    <div class="input-group search-skill">
                        <input type="text" class="form-control input-skill-scann" placeholder="Search keywords or select skills" aria-label="Search keywords or select skills" aria-describedby="input-skill-scann">
                        <span class="input-group-text search-icon" id="input-skill-scann">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.9167 9.66667H10.2583L10.025 9.44167C10.8417 8.49167 11.3333 7.25833 11.3333 5.91667C11.3333 2.925 8.90833 0.5 5.91667 0.5C2.925 0.5 0.5 2.925 0.5 5.91667C0.5 8.90833 2.925 11.3333 5.91667 11.3333C7.25833 11.3333 8.49167 10.8417 9.44167 10.025L9.66667 10.2583V10.9167L13.8333 15.075L15.075 13.8333L10.9167 9.66667ZM5.91667 9.66667C3.84167 9.66667 2.16667 7.99167 2.16667 5.91667C2.16667 3.84167 3.84167 2.16667 5.91667 2.16667C7.99167 2.16667 9.66667 3.84167 9.66667 5.91667C9.66667 7.99167 7.99167 9.66667 5.91667 9.66667Z" fill="#EDEDED"/>
                            </svg>
                        </span>
                    </div>
                    
                    <button type="button" class="btn-close skill-scan-close-btn" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body skill-scan-modal-body">
                    <div>
                        <table class="table-scan-form">
                            <tr>
                                <td width="95">
                                    <div class="skill-scan-label">
                                        Primary Skill
                                    </div>
                                </td>
                                <td width="247">
                                    <input type="text"  class="form-control skill-scan-input input-pink skill-scan-custom" disabled placeholder="Select primary skill">
                                </td>
                                <td width="125">
                                    <div class="skill-scan-label secondary-skill-label ">
                                        Secondary Skill
                                    </div>
                                </td>
                                <td width="228"> 
                                    <input type="text"  class="form-control skill-scan-input input-violet skill-scan-custom" disabled placeholder="Select 2 Secondary Skills">
                                </td>
                            </tr>
                        </table> 
                        <table class="table-scan-form table-other-skill">
                            <tr>
                                <td width="95">
                                    <div class="skill-scan-label">
                                        Other Skill
                                    </div>
                                </td>
                                <td colspan="3">
                                    <input type="text"  class="form-control skill-scan-input input-yellow skill-scan-custom" disabled placeholder="Select skill from below">
                                </td>                           
                            </tr>
                        </table> 
                        <div class="skills-suggestion">
                            <div class="row">
                                <div class="col-6">
                                    <div class="">
                                        <div class="d-flex">
                                            <div class="flex-fill suggested-skill-label">
                                                Database & DevOps
                                            </div>
                                            <div class="flex-fill">
                                            </div>
                                        </div>  
                                        <div class="sub-label">
                                            Data Storage / Server / Hosting / Cloud
                                        </div>    
                                        <div class="skill-stack">
                                            <button class="btn btn-sm btn-outline-blue">MongoDB</button>
                                            <button class="btn btn-sm btn-outline-blue">PostgreSQL</button>
                                            <button class="btn btn-sm btn-outline-blue">Oracle</button>
                                            <button class="btn btn-sm btn-outline-blue">MySQL</button>
                                            <button class="btn btn-sm btn-outline-blue">MicrosoftSQL (MSSQL)</button>
                                        </div> 
                                        <div class="sub-label">
                                            Data Query Language (DQL)
                                        </div>    
                                        <div class="skill-stack">
                                            <button class="btn btn-sm btn-outline-blue">Structured Query Language (SQL) </button>
                                            <button class="btn btn-sm btn-outline-blue">Yahoo! Query Language (YQL) </button>
                                        </div>  
                                        <div class="sub-label">
                                            Data Analytics/Data Science
                                        </div>    
                                        <div class="skill-stack">
                                            <button class="btn btn-sm btn-outline-blue">Scala</button>
                                            <button class="btn btn-sm btn-outline-blue">Hadoop</button>
                                            <button class="btn btn-sm btn-outline-blue">QlikView</button>
                                            <button class="btn btn-sm btn-outline-blue">D3.js</button>
                                            <button class="btn btn-sm btn-outline-blue">Apache Spark</button>
                                            <button class="btn btn-sm btn-outline-blue">IBM SPSS</button>
                                            <button class="btn btn-sm btn-outline-blue">Julia</button>
                                        </div>                            
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="">                                  
                                        <div class="d-flex">
                                            <div class="flex-fill suggested-skill-label">
                                                Backend
                                            </div>
                                            <div class="flex-fill text-end">
                                            <span class="see-all-skills cursor-pointer">See All</span>
                                            </div>
                                        </div>   
                                        <div class="sub-label">
                                            Language
                                        </div>  
                                        <div class="skill-stack">
                                            <button class="btn btn-sm btn-outline-blue">Ruby</button>
                                            <button class="btn btn-sm btn-outline-blue">PHP</button>
                                            <button class="btn btn-sm btn-outline-blue">Java</button>
                                            <button class="btn btn-sm btn-outline-blue">Python</button>
                                            <button class="btn btn-sm btn-outline-blue">C#</button>
                                            <button class="btn btn-sm btn-outline-blue">C++</button>
                                            <button class="btn btn-sm btn-outline-blue">Java</button>
                                            <button class="btn btn-sm btn-outline-blue">Golang</button>
                                            <button class="btn btn-sm btn-outline-blue">JavaScript</button>
                                            <button class="btn btn-sm btn-outline-blue">NodeJS</button>
                                            <button class="btn btn-sm btn-outline-blue">Visual Basic</button>
                                            <button class="btn btn-sm btn-outline-blue">C</button>
                                            <button class="btn btn-sm btn-outline-blue">Perl</button>
                                        </div>  
                                        <div class="sub-label">
                                            Frameworks
                                        </div>    
                                        <div class="skill-stack">
                                            <button class="btn btn-sm btn-outline-blue">Django </button>
                                            <button class="btn btn-sm btn-outline-blue">Express.js </button>
                                            <button class="btn btn-sm btn-outline-blue">Ruvy on Rails </button>
                                            <button class="btn btn-sm btn-outline-blue">Laravel </button>
                                            <button class="btn btn-sm btn-outline-blue">CakePHP </button>
                                            <button class="btn btn-sm btn-outline-blue">Phoenix </button>
                                            <button class="btn btn-sm btn-outline-blue">Koa </button>
                                            <button class="btn btn-sm btn-outline-blue">Spring Boot </button>
                                            <button class="btn btn-sm btn-outline-blue">ASP.Net </button>
                                        </div>  
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="">                                  
                                        <div class="d-flex">
                                            <div class="flex-fill suggested-skill-label">
                                                Frontend
                                            </div>
                                            <div class="flex-fill text-end">
                                            <span class="see-all-skills cursor-pointer">See All</span>
                                            </div>
                                        </div>   
                                        <div class="sub-label">
                                            Language
                                        </div>  
                                        <div class="skill-stack">
                                            <button class="btn btn-sm btn-outline-blue">HTML</button>
                                            <button class="btn btn-sm btn-outline-blue">CSS</button>
                                            <button class="btn btn-sm btn-outline-blue">JavaScript</button>
                                            <button class="btn btn-sm btn-outline-blue">SASS</button>
                                            <button class="btn btn-sm btn-outline-blue">Swift</button>
                                            <button class="btn btn-sm btn-outline-blue">Elm</button>
                                            <button class="btn btn-sm btn-outline-blue">Typescript</button>
                                            <button class="btn btn-sm btn-outline-blue">Angular</button>
                                            <button class="btn btn-sm btn-outline-blue">XML</button>
                                        </div>  
                                        <div class="sub-label">
                                            Frameworks
                                        </div>    
                                        <div class="skill-stack">
                                            <button class="btn btn-sm btn-outline-blue">Vue.js </button>
                                            <button class="btn btn-sm btn-outline-blue">Angular </button>
                                            <button class="btn btn-sm btn-outline-blue">Bootstrap</button>
                                            <button class="btn btn-sm btn-outline-blue">React </button>
                                            <button class="btn btn-sm btn-outline-blue">CakePHP </button>
                                            <button class="btn btn-sm btn-outline-blue">Ember.js </button>
                                            <button class="btn btn-sm btn-outline-blue">JQuery </button>
                                            <button class="btn btn-sm btn-outline-blue">Semantic-UI</button>
                                            <button class="btn btn-sm btn-outline-blue">Backbone.js</button>
                                            <button class="btn btn-sm btn-outline-blue">Preact</button>
                                            <button class="btn btn-sm btn-outline-blue">Svelte</button>
                                        </div>  
                                    </div>
                                </div>

                                <div class="col-6">
                                    <div class="">                                  
                                        <div class="d-flex">
                                            <div class="flex-fill suggested-skill-label">
                                                Mobile
                                            </div>
                                            <div class="flex-fill text-end">
                                            <span class="see-all-skills cursor-pointer">See All</span>
                                            </div>
                                        </div>   
                                        <div class="sub-label">
                                            Android
                                        </div>  
                                        <div class="skill-stack">
                                            <button class="btn btn-sm btn-outline-blue">Kotlin</button>
                                            <button class="btn btn-sm btn-outline-blue">Java</button>
                                            <button class="btn btn-sm btn-outline-blue">c</button>
                                            <button class="btn btn-sm btn-outline-blue">C++</button>
                                            <button class="btn btn-sm btn-outline-blue">Eclipse</button>
                                            <button class="btn btn-sm btn-outline-blue">Android Studio</button>
                                            <button class="btn btn-sm btn-outline-blue">Android SDK</button>
                                            <button class="btn btn-sm btn-outline-blue">Mockplus</button>
                                        </div>  
                                        <div class="sub-label">
                                            iOS
                                        </div>  
                                        <div class="skill-stack">
                                            <button class="btn btn-sm btn-outline-blue">Objective-C</button>
                                            <button class="btn btn-sm btn-outline-blue">Swift</button>
                                            <button class="btn btn-sm btn-outline-blue">XCode</button>
                                            <button class="btn btn-sm btn-outline-blue">iOS SDK</button>
                                            <button class="btn btn-sm btn-outline-blue">Cocoa Touch</button>
                                            <button class="btn btn-sm btn-outline-blue">AppCode</button>
                                        </div>  
                                        <div class="sub-label">
                                            Windows Phone
                                        </div>  
                                        <div class="skill-stack">
                                            <button class="btn btn-sm btn-outline-blue">C#</button>
                                            <button class="btn btn-sm btn-outline-blue">Visual Basic</button>
                                            <button class="btn btn-sm btn-outline-blue">Silverlight SDK</button>
                                        </div>                                          
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer custom-modal-footer">
                    <button type="button" class="btn btn-outline-blue btn-lg btn-cancel" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary btn-save-changes btn-lg" data-bs-dismiss="modal">Save</button>
                </div>
                </div>
            </div>
         </div>
        <!-- Modal -->
        <div class="modal fade modal-alert" id="deleteSkillModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    
                </div>
                <div class="modal-body">
                    <div class="text-center bg-orange">
                        <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.3333 55.0002H47.6666V62.3335H40.3333V55.0002ZM40.3333 25.6668H47.6666V47.6668H40.3333V25.6668ZM43.9632 7.3335C23.7233 7.3335 7.33325 23.7602 7.33325 44.0002C7.33325 64.2402 23.7233 80.6668 43.9632 80.6668C64.2399 80.6668 80.6666 64.2402 80.6666 44.0002C80.6666 23.7602 64.2399 7.3335 43.9632 7.3335ZM43.9999 73.3335C27.7933 73.3335 14.6666 60.2068 14.6666 44.0002C14.6666 27.7935 27.7933 14.6668 43.9999 14.6668C60.2066 14.6668 73.3333 27.7935 73.3333 44.0002C73.3333 60.2068 60.2066 73.3335 43.9999 73.3335Z" fill="white"/>
                        </svg>  
                    </div>
                    <div class="confirm-label text-center">
                        Delete Entry?
                    </div>
                    <div class="confirm-sub-label text-center">
                        Are you sure you want to delete this entry
                        from your Searches? 
                    </div>
                </div>
                <div class="modal-footer text-center">
                    <button type="button" class="btn btn-default  btn-outline-gray alert-cancel-btn" data-bs-dismiss="modal">No, cancel!</button>
                    <button type="button" class="btn btn-default btn-custom-green alert-yes-btn"  data-bs-dismiss="modal"> Yes, I'm sure.</button>
                </div>
                </div>
            </div>
        </div>

        <div class="modal fade modal-alert" id="book-interview" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    
                </div>
                <div class="modal-body">
                    <div class="text-center bg-orange">
                        <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.3333 55.0002H47.6666V62.3335H40.3333V55.0002ZM40.3333 25.6668H47.6666V47.6668H40.3333V25.6668ZM43.9632 7.3335C23.7233 7.3335 7.33325 23.7602 7.33325 44.0002C7.33325 64.2402 23.7233 80.6668 43.9632 80.6668C64.2399 80.6668 80.6666 64.2402 80.6666 44.0002C80.6666 23.7602 64.2399 7.3335 43.9632 7.3335ZM43.9999 73.3335C27.7933 73.3335 14.6666 60.2068 14.6666 44.0002C14.6666 27.7935 27.7933 14.6668 43.9999 14.6668C60.2066 14.6668 73.3333 27.7935 73.3333 44.0002C73.3333 60.2068 60.2066 73.3335 43.9999 73.3335Z" fill="white"/>
                        </svg>  
                    </div>
                    <div class="confirm-label text-center">
                        Book Interview?
                    </div>
                    <div class="confirm-sub-label text-center">
                        Book candidate XX-12345 <br>
                        on 12 SEP | 10:35 AM
                    </div>
                    <div class="book-ineterview-option pt-3 pb-2">
                        <select class="form-select" id="inputGroupSelect01">
                            <option selected>(GMT) Philippines Time</option>
                            <option value="1">(GMT -05:00) Eastern Time (US & Canada)</option>
                            <option value="2">(GMT -05:00) Eastern Time (US & Canada)</option>
                            <option value="3">(GMT +5:45) Kathmandu, Pokhara</option>
                            <option value="3">(GMT -2:00) Mid-Atlantic</option>
                            <option value="3">(GMT +5:00) Ekaterinburg, Islamabad....</option>
                            <option value="3">(GMT -10:00) Hawaii</option>
                            <option value="3">(GMT -7:00) Mountain Time (US & Canada)</option>
                            <option value="3">(GMT +12:00) Auckland, Wellington,...</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer text-center mb-2">
                    <button type="button" class="btn btn-default  btn-outline-gray book-interview-no-btn" data-bs-dismiss="modal">NO</button>
                    <button type="button" class="btn btn-default btn-custom-green book-interview-yes-btn"   data-bs-toggle="modal" data-bs-target="#book-interview-done"> YES</button>
                </div>
                </div>
            </div>
        </div>

        <div class="modal fade modal-alert done" id="book-interview-done" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    
                </div>
                <div class="modal-body">
                    <div class="text-center bg-green">
                        <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.3333 55.0002H47.6666V62.3335H40.3333V55.0002ZM40.3333 25.6668H47.6666V47.6668H40.3333V25.6668ZM43.9632 7.3335C23.7233 7.3335 7.33325 23.7602 7.33325 44.0002C7.33325 64.2402 23.7233 80.6668 43.9632 80.6668C64.2399 80.6668 80.6666 64.2402 80.6666 44.0002C80.6666 23.7602 64.2399 7.3335 43.9632 7.3335ZM43.9999 73.3335C27.7933 73.3335 14.6666 60.2068 14.6666 44.0002C14.6666 27.7935 27.7933 14.6668 43.9999 14.6668C60.2066 14.6668 73.3333 27.7935 73.3333 44.0002C73.3333 60.2068 60.2066 73.3335 43.9999 73.3335Z" fill="white"/>
                        </svg>  
                    </div>
                    <div class="confirm-label text-center">
                       Done!
                    </div>
                    <div class="confirm-sub-label done text-center">
                        Your interview has been scheduled!
                    </div>
                    
                </div>
                <div class="modal-footer text-center mb-2">
                   
                    <button type="button" class="btn btn-default btn-custom-blue view-plan-interviews"  data-bs-dismiss="modal"> View Planned Interviews</button>
                </div>
                </div>
            </div>
        </div>



         <!-- Modal -->
         <div class="modal fade modal-alert" id="reachLimitModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="reachLimitModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    
                </div>
                <div class="modal-body">
                    <div class="text-center bg-orange">
                        <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.3333 55.0002H47.6666V62.3335H40.3333V55.0002ZM40.3333 25.6668H47.6666V47.6668H40.3333V25.6668ZM43.9632 7.3335C23.7233 7.3335 7.33325 23.7602 7.33325 44.0002C7.33325 64.2402 23.7233 80.6668 43.9632 80.6668C64.2399 80.6668 80.6666 64.2402 80.6666 44.0002C80.6666 23.7602 64.2399 7.3335 43.9632 7.3335ZM43.9999 73.3335C27.7933 73.3335 14.6666 60.2068 14.6666 44.0002C14.6666 27.7935 27.7933 14.6668 43.9999 14.6668C60.2066 14.6668 73.3333 27.7935 73.3333 44.0002C73.3333 60.2068 60.2066 73.3335 43.9999 73.3335Z" fill="white"/>
                        </svg>  
                    </div>
                    <div class="confirm-label text-center">
                        Reach the Limit
                    </div>
                    <div class="confirm-sub-label text-center">
                        Reach limit of 20 searches. Please delete entries.
                    </div>
                </div>
                <div class="modal-footer text-center">
                    <button type="button" class="btn btn-default btn-custom-green alert-yes-btn w-100" data-bs-dismiss="modal">Okay</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as bootstrap  from 'bootstrap';
    import { mapActions, mapState } from "vuex";
    export default {
      name: 'SkillScannerModal',
       data() {
            return {           
                anyCountry:true,
                anyLabel:false,

            }
        },
        computed:{
            ...mapState("skills", ["skills"]),
        },
        methods:{
            ...mapActions("skills", [ 
                'setSkills'
            ]),
            skillScannerModal(){

               var myModal = new bootstrap.Modal(document.getElementById("skillScannModal"), {});
               myModal.show();
            }
        },
        created(){
            let skills = {
                backend: ['1',2,3],
                fontend: ['1',2,3]
            }
            this.setSkills(skills);

        }
    }
</script>
<style>

    /* Book interview */
        .book-interview-no-btn{
            color: #27304C;
            font-weight: 500;
            width: 146px;
            font-size: 14px;
            font-family: RubikMedium !important;
        }
        .book-interview-yes-btn{
            color: #FFFFFF;
            font-weight: 500;
            width: 146px;
            font-size: 14px;
        }
        .book-ineterview-option{
            padding-left:20px;
            padding-right:20px;
        }
        .book-ineterview-option select{
            font-weight: 400;
            font-size: 14px;
            border: 1px solid #EDEDED;
            border-radius: 2px;
        }
        .view-plan-interviews{
            font-weight: 400;
            font-size: 14px;
            color: #FFFFFF;
            text-align: center;
            width: 200px;
            height: 38px;       
      
        }
    /* end Book interview */
    
    /* Begin Modal Alert */
    .modal-alert .modal-footer {
        justify-content: center;
        border-top:unset;
    }
    .modal-alert .modal-content {
        border-radius:unset;
        max-width: 350px;
        width: 350px;
        margin:0px auto;
    }
    .modal-alert .alert-cancel-btn {
        font-weight: 600;
        font-size: 14px;
        padding-left: 32px;
        padding-right: 32px;
    }
    .modal-alert .alert-yes-btn {
        font-weight: 500;
        font-size: 14px;
        color:white;
        padding-left: 32px;
        padding-right: 32px;
    }
    .modal-alert .btn-close{
        font-size:12px;
        background: transparent url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23ffff%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e') center/1em auto no-repeat !important;
    }
    .modal-alert .modal-header{
        background-color: #FFAE58 !important;
        border-radius: unset;
        border-bottom: unset;     
    } 
    .modal-alert.done .modal-header{
        background: #47C9A2 !important;
        border-radius: unset;
        border-bottom: unset;     
    }
    .modal-alert .modal-body{
        padding:unset;
    }
    .modal-alert .modal-body .confirm-label{
        font-weight: 600 !important;
        font-size: 22px;
        color: #27304C;
        font-family: RubikRegular !important;
        margin-top:20px;
        margin-bottom:10px;
    }
    .modal-alert .modal-body .confirm-sub-label{
        font-weight: 400;
        font-size: 14px;
        color: #6D6D6D;
        font-family: RubikRegular !important;
        margin-top:20px;
        margin-bottom:10px;
        padding-left:25px;
        padding-right:25px;
    }
    .modal-alert .modal-body .confirm-sub-label.done{
        font-weight: 400;
        font-size: 16px;
        color: #626F7A;
    }
    .modal-alert .modal-body .bg-orange{
        background-color: #FFAE58 !important;
        border-radius: unset;
        padding-bottom:30px;
    } 
    .modal-alert.done .modal-body .bg-green{
        background-color:#47C9A2 !important;
        border-radius: unset;
        padding-bottom:30px;
    }

    /* End Modal Alert */


    /* begin edit preferences modal */
    .edit-preference-modal-content{
            height: 864px;
        }
        .junior-content{
            width: 190px;
        }
        .edit-country-form .form-check-label{
            color: #27304C;
            font-weight: 400;
            font-size: 14px !important;
            font-family: RubikRegular !important;
            padding-left:10px;
        }
        .edit-country-form .normal-check-box{
            background-color: #fff !important;
        }
        .edit-country-form .normal-radio, .edit-country-form .normal-check-box{
            accent-color: #2C91FF;
            -ms-transform: scale(1.4); /* IE 9 */
            -webkit-transform: scale(1.4); /* Chrome, Safari, Opera */
            transform: scale(1.4);
        }
        .edit-country-form {
            padding-left: 10px;
            padding-right: 10px;
        }
        .edit-country-form .flex-custom{
            width: 200px;
        }

        .choose-country{
            padding-top:18px;
        }
        .primary-skills .asterisk, .secondary-skills .asterisk, .other-skills .asterisk{
            font-weight: 500;
            font-family: RubikRegular !important;
            color: #FF4949;
            font-size: 14px;
        }
        .primary-skills .primary-label, .secondary-skills .secondary-label, .other-skills .other-label{
            font-weight: 600;
            font-family: RubikRegular !important;
            color: #27304C;
            font-size: 14px;
        }
        .primary-skills{
            padding-top:14px;
            padding-left:32px;
            padding-right:32px;
        }
        .secondary-skills{
            padding-top:12px;
            padding-left:32px;
            padding-right:32px;
        } 
        .other-skills{
            padding-bottom:14px;
            padding-top:12px;
            padding-left:32px;
            padding-right:32px;
        }
        .edit-preferences-modal-body{
            padding:0px !important;
        }
        .edit-preferences-container .edit-label{
            color: #27304C;
            font-weight: 600;
            font-size: 14px;
            font-family: RubikRegular !important;
            margin-top: 4px;
            margin-left: 5px;
        }
        .edit-preferences-container{
            padding:18px;
        }
        #edit-preference-label{
            color: #2C91FF !important;
            font-weight: 600 !important;
            font-size: 18px !important;
            font-family: RubikRegular !important;
        }

        
    /* end edit preferences modal */

    .custom-modal-footer{
        border-top:none !important;
    }
    .skill-stack button{
        margin-right: 6px;
        margin-top: 6px;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 3px  !important;
        padding-bottom: 3px !important;

    }
    .see-all-skills{
        color: #2C91FF;
        font-weight: 400;
        font-size: 12px;
    }
    .skills-suggestion{
        padding-left:14px;
        padding-right:14px;
    }
    .skills-suggestion .col-6{
        padding-top:14px;
        padding-left: 8px;
        padding-right: 8px;
    }
    .suggested-skill-label{
        color: black !important;
        font-weight: 500;
        font-size: 16px;
    }
    .sub-label{
        margin-top:8px;
        color: #6D6D6D;
        font-weight: 400;
        font-size: 12px;
    }
    .table-other-skill{
        margin-top:14px;
    }
    
    .skill-scan-custom{
        padding:10px !important;
    }

    .skill-scan-input{
        border-radius:0px !important;
    }
    .table-scan-form{
        width: 100%;
    }
    .secondary-skill-label{
        padding-left: 14px;
    }
    .skill-scan-label{
        color: #6D6D6D;
        font-weight: 500;
        font-size: 14px;
    }
    .modal-lg, .modal-xl {
       --bs-modal-width: 736px !important;
    }   
    .skill-scan-modal-body{
        padding-top:18px !important;
        padding-left:18px  !important;
        padding-right:18px  !important;
        padding-bottom:0px  !important;
    }
    .skill-scann-modal-header{
        padding: 14px !important
    }
    .search-skill{
        margin-right:15px;
    }
    .skill-scan-close-btn{
        margin-right: 5px !important;
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
  
    .search-icon{
        background: white !important;
        border-left: unset;
        border-top-right-radius: 3px !important;
        border-bottom-right-radius: 3px !important;
        border-color: #EDEDED !important;
    }
    .skillScannModal{
        font-family: RubikRegular !important;
    }
    .input-pink::placeholder, .input-violet::placeholder{
        color: #8C8C8C !important;
    }    

    .input-skill-scann::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #C9C9C9 !important;
        opacity: 1; /* Firefox */
    }

    .input-skill-scann:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #C9C9C9 !important;
    }

    .input-skill-scann::-ms-input-placeholder { /* Microsoft Edge */
      color: #C9C9C9 !important;
    }

    /* End modal css */
</style>