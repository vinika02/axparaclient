<template>
    <div>
        <div class="modal fade modal-alert" id="deleteModal" tabindex="-1" aria-labelledby="deleteModal"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center bg-orange">
                            <svg width="88" height="88" viewBox="0 0 88 88" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M40.3333 55.0002H47.6666V62.3335H40.3333V55.0002ZM40.3333 25.6668H47.6666V47.6668H40.3333V25.6668ZM43.9632 7.3335C23.7233 7.3335 7.33325 23.7602 7.33325 44.0002C7.33325 64.2402 23.7233 80.6668 43.9632 80.6668C64.2399 80.6668 80.6666 64.2402 80.6666 44.0002C80.6666 23.7602 64.2399 7.3335 43.9632 7.3335ZM43.9999 73.3335C27.7933 73.3335 14.6666 60.2068 14.6666 44.0002C14.6666 27.7935 27.7933 14.6668 43.9999 14.6668C60.2066 14.6668 73.3333 27.7935 73.3333 44.0002C73.3333 60.2068 60.2066 73.3335 43.9999 73.3335Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <div class="confirm-label text-center">
                            Book Interview?
                        </div>
                    </div>
                    <div class="modal-footer buttons">
                        <button type="button" class="btn btn-outline-blue btn-lg btn-cancel"
                            data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary btn-save-changes btn-lg"
                            data-bs-dismiss="modal">Add
                            User</button>
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

.modal-alert .modal-header {
    background-color: #FFAE58 !important;
    border-radius: unset;
    border-bottom: unset;
}
</style>