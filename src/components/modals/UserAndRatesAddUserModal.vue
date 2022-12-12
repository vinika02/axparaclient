<template>
    <div>
        <div class="modal fade modal-alert" id="AddUserModal" tabindex="-1"
            aria-labelledby="AddUserModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class=" adduser modal-title" id="exampleModalLabel">Add User</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="user-box">
                            <form class="row g-2">
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="inputEmail4" placeholder="Your Text">
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="inputPassword4" placeholder="Your Text">
                                </div>
                                <div class="col-md-6">
                                    <label for="inputEmail4" class="form-label">Designation</label>
                                    <input type="text" class="form-control" id="inputEmail4" placeholder="Your Text">
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPassword4" class="form-label">Contact Number</label>
                                    <input type="text" class="form-control" id="inputPassword4" placeholder="Your Text">
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Email Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="Your Text">
                                </div>
                            </form>
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
    name: 'UserAndRatesAddUserModal',
    data() {
        return {

        }
    }
}
</script>