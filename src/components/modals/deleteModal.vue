<template>
    <div>       
        <div class="modal fade modal-alert delete-alert" id="deleteModal" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content content-modal">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>
                    <div class="modal-body body-modal-delete">
                        <div class="text-center bg-orange">
                            <svg width="88" height="88" viewBox="0 0 88 88" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M40.3333 55.0002H47.6666V62.3335H40.3333V55.0002ZM40.3333 25.6668H47.6666V47.6668H40.3333V25.6668ZM43.9632 7.3335C23.7233 7.3335 7.33325 23.7602 7.33325 44.0002C7.33325 64.2402 23.7233 80.6668 43.9632 80.6668C64.2399 80.6668 80.6666 64.2402 80.6666 44.0002C80.6666 23.7602 64.2399 7.3335 43.9632 7.3335ZM43.9999 73.3335C27.7933 73.3335 14.6666 60.2068 14.6666 44.0002C14.6666 27.7935 27.7933 14.6668 43.9999 14.6668C60.2066 14.6668 73.3333 27.7935 73.3333 44.0002C73.3333 60.2068 60.2066 73.3335 43.9999 73.3335Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <div class="confirm-label text-center">
                            Delete asdhf?
                        </div>
                        <div class="confirm-sub-label text-center">
                            Are you sure you want to delete this user? <br>                           
                        </div>                      
                    </div>
                    <div class="modal-footer footer-delete text-center mb-2">
                        <button type="button" class="btn btn-default  btn-outline-gray book-interview-no-btn"
                            data-bs-dismiss="modal">No, cancel!</button>
                        <button type="button" class="btn btn-default btn-custom-green book-interview-yes-btn"
                            data-bs-toggle="modal" data-bs-target="#book-interview-done" > YES</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'deleteModal',
    data() {
        return {

        }
    }
}
</script>
<style>
.delete {
    align-items: center;
    display: flex;
    background: #FFAE58;
    width: 350px;
    height: 164px;
    justify-content: center;

}

.delete-user {
    padding: 12px;
    display: flex;
    justify-content: center;
    font-family: 'RubikMedium';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
}

.delete-con {
    display: flex;
    justify-content: center;
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #6D6D6D;
}

.delete-body {
    gap: 12px;
    padding: 22px;
    align-items: center;
    width: 350px;
}

#inputGroupSelect01 {
    font-family: RubikRegular;
}

/* Book interview */
.book-interview-no-btn {
    color: #27304C;
    font-weight: 500;
    width: 146px;
    font-size: 14px;
    font-family: RubikMedium !important;
}

.book-interview-yes-btn {
    color: #FFFFFF;
    font-weight: 500;
    width: 146px;
    font-size: 14px;
}

.book-ineterview-option {
    padding-left: 20px;
    padding-right: 20px;
}

.book-ineterview-option select {
    font-weight: 400;
    font-size: 14px;
    border: 1px solid #EDEDED;
    border-radius: 2px;
}

.view-plan-interviews {
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
    width: 200px;
    height: 38px;

}

/* end Book interview */

/* Begin Modal Alert */
.delete-alert .footer-delete {
    justify-content: center;
    border-top: unset;
}

.delete-alert .content-modal {
    border-radius: unset;
    max-width: 350px;
    width: 350px;
    margin: 0px auto;
}

.delete-alert .alert-cancel-btn {
    font-weight: 600;
    font-size: 14px;
    padding-left: 32px;
    padding-right: 32px;
}

.delete-alert .alert-yes-btn {
    font-weight: 500;
    font-size: 14px;
    color: white;
    padding-left: 32px;
    padding-right: 32px;
}

.delete-alert .btn-close {
    font-size: 12px;
    background: transparent url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23ffff%27%3e%3cpath d=%27M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z%27/%3e%3c/svg%3e') center/1em auto no-repeat !important;
}

.delete-alert .modal-header {
    background-color: #FFAE58 !important;
    border-radius: unset;
    border-bottom: unset;
}

.delete-alert.done .modal-header {
    background: #47C9A2 !important;
    border-radius: unset;
    border-bottom: unset;
}

.modal-alert .body-modal-delete {
    padding: unset;
}

.modal-alert  .body-modal-delete .confirm-label {
    font-weight: 600 !important;
    font-size: 22px;
    color: #27304C;
    font-family: RubikRegular !important;
    margin-top: 20px;
    margin-bottom: 10px;
}

.modal-alert  .body-modal-delete .confirm-sub-label {
    font-weight: 400;
    font-size: 14px;
    color: #6D6D6D;
    font-family: RubikMedium !important;
    margin-top: 14px;
    margin-bottom: 6px;
    padding-left: 25px;
    padding-right: 25px;
}

.modal-alert  .body-modal-delete .confirm-sub-label.done {
    font-weight: 400;
    font-size: 16px;
    color: #626F7A;
}

.modal-alert  .body-modal-delete .bg-orange {
    background-color: #FFAE58 !important;
    border-radius: unset;
    padding-bottom: 30px;
}

.modal-alert.done  .body-modal-delete .bg-green {
    background-color: #47C9A2 !important;
    border-radius: unset;
    padding-bottom: 30px;
}
</style>