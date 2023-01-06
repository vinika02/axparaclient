<template>
    <div>
        <div class="row">
            <div class="col-sm-10">
                <div class="user-access-label">
                    User Access
                </div>
                <div class="details">
                    Give view and edit access to any of your orders to other users. They will be automatically added as
                    a secondary point of contact across any orders you create.
                </div>
            </div>
            <div class="col-sm-2 align-self-end text-end">
                <button class="btn btn-large btn-custom-blue btn-add-user " data-bs-toggle="modal"
                    data-bs-target="#AddUserModal">
                    Add User
                </button>
            </div>
        </div>
        <div>
            <table class="table users-table">
                <thead>
                    <tr>
                        <th>Full Name
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.0834 5.83333L7.00004 1.75L2.91671 5.83333L11.0834 5.83333ZM11.0834 8.16667L2.91671 8.16667L7.00004 12.25L11.0834 8.16667Z"
                                    fill="#DCDCDC" />
                            </svg>
                        </th>
                        <th>Designation
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.0834 5.83333L7.00004 1.75L2.91671 5.83333L11.0834 5.83333ZM11.0834 8.16667L2.91671 8.16667L7.00004 12.25L11.0834 8.16667Z"
                                    fill="#DCDCDC" />
                            </svg>
                        </th>
                        <th>Contact Number
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.0834 5.83333L7.00004 1.75L2.91671 5.83333L11.0834 5.83333ZM11.0834 8.16667L2.91671 8.16667L7.00004 12.25L11.0834 8.16667Z"
                                    fill="#DCDCDC" />
                            </svg>
                        </th>
                        <th>Email Address
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.0834 5.83333L7.00004 1.75L2.91671 5.83333L11.0834 5.83333ZM11.0834 8.16667L2.91671 8.16667L7.00004 12.25L11.0834 8.16667Z"
                                    fill="#DCDCDC" />
                            </svg>
                        </th>
                        <th width="170">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in usersData" :key="index">
                        <td>{{ (user.fname) }} {{ (user.lname) }}</td>
                        <td>{{ (user.designation) }}</td>
                        <td>{{ (user.contact) }}</td>
                        <td>{{ (user.email) }}</td>
                        <td>
                            <button class="btn btn-sm btn-outline-blue w-70 me-2" @click="edit(index)">
                                Edit
                            </button>
                            <button class="btn btn-sm btn-outline-blue w-70" data-bs-toggle="modal"
                                data-bs-target="#deleteModal" @click="deleterow(index)">
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" class="form-control form-control-sm" placeholder="Full Name"
                                v-model="editInput.lname">
                        </td>
                        <td>
                            <input type="text" class="form-control form-control-sm" placeholder="Designation"
                                v-model="editInput.designation">
                        </td>
                        <td>
                            <input type="text" class="form-control form-control-sm" placeholder="Contact number"
                                v-model="editInput.contact">
                        </td>
                        <td>
                            <input type="text" class="form-control form-control-sm" placeholder="Email address"
                                v-model="editInput.email">
                        </td>
                        <td>
                            <button class="btn btn-sm btn-outline-blue w-70 me-2" @click="update()">
                                Save
                            </button>
                            <button class="btn btn-sm btn-outline-blue w-70" @click="resetInput">
                                Cancel
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <div class="row">
                <div class="col-sm-10">
                    <div class="rates-label">
                        Rates
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card rates">
                        <div class="card-header">
                            Management Fee
                        </div>
                        <div class="card-body">
                            <table class="table table-management-fee">
                                <thead class="bg-gray">
                                    <th style="width:324px">No. of Talents under Management</th>
                                    <th style="width:324px">Management Fee</th>
                                </thead>
                                <tbody>
                                    <tr v-for="(user) in managementFee" :key="user.id">
                                        <td>{{ (user.days) }}</td>
                                        <td>{{ (user.fee) }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card rates">
                        <div class="card-header">
                            Talent Acquisition Fee
                        </div>
                        <div class="card-body">
                            <table class="table table-acquisition-fee">
                                <thead class="bg-gray">
                                    <th style="width:324px">No. of Talents under Management</th>
                                    <th style="width:324px">Management Fee</th>
                                </thead>
                                <tbody>
                                    <tr v-for="user in managementFee" :key="user.id">
                                        <td>{{ (user.days) }}</td>
                                        <td>{{ (user.fee) }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- add user modal -->
        <div>
            <div class="modal fade modal-alert" id="AddUserModal" tabindex="-1" aria-labelledby="AddUserModal"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
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
                                        <input type="text" class="form-control" id="fname" placeholder="Your Text"
                                            v-model="input.fname">
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputPassword4" class="form-label">Last Name</label>
                                        <input type="text" class="form-control" id="lname" placeholder="Your Text"
                                            v-model="input.lname">
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputEmail4" class="form-label">Designation</label>
                                        <input type="text" class="form-control" id="designation" placeholder="Your Text"
                                            v-model="input.designation">
                                    </div>
                                    <div class="col-md-6">
                                        <label for="inputPassword4" class="form-label">Contact Number</label>
                                        <input type="text" class="form-control" id="contact" placeholder="Your Text"
                                            v-model="input.contact">
                                    </div>
                                    <div class="col-12">
                                        <label for="inputAddress" class="form-label">Email Address</label>
                                        <input type="text" class="form-control" id="email" placeholder="Your Text"
                                            v-model="input.email">
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer buttons">
                            <button type="button" class="btn btn-outline-blue btn-lg btn-cancel"
                                data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary btn-save-changes btn-lg"
                                data-bs-dismiss="modal" @click="add">Add
                                User</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end adduser modal -->
        <!-- start delete modal -->
        <div>
            <div class="modal fade modal-alert delete-alert" id="deleteModal" data-bs-backdrop="static"
                data-bs-keyboard="false" tabindex="-1" aria-labelledby="deleteModal" aria-hidden="true">
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
                                Delete User?
                            </div>
                            <div class="confirm-sub-label text-center">
                                Are you sure you want to delete this user? <br>
                            </div>
                        </div>
                        <div class="modal-footer footer-delete text-center mb-2">
                            <button type="button" class="btn btn-default  btn-outline-gray book-interview-no-btn"
                                data-bs-dismiss="modal">No, cancel!</button>
                            <button type="button" class="btn btn-default btn-custom-green book-interview-yes-btn"
                                data-bs-toggle="modal" data-bs-target="#deleteModal"
                                @click="usersData.splice(editIndex, 1)">
                                YES</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end start -->
    </div>

</template>

<script>
export default {

    name: 'UserAndRates',

    data() {
        return {
            editIndex: null,
            usersData: [
                {
                    id: 1,
                    fname: 'Annette',
                    lname: 'Black',
                    designation: 'Senior Developer',
                    contact: '+62 878 66253820',
                    email: 'nevaeh.simmons@example.com',
                },
                {
                    id: 1,
                    fname: 'Guy',
                    lname: 'Hawkins',
                    designation: 'UX Designer',
                    contact: '+62 851 77629086',
                    email: 'dolores.chambers@example.com',
                },
                {
                    id: 1,
                    fname: 'Darlene',
                    lname: ' Robertson',
                    designation: 'Front End Developer',
                    contact: '+62 811 09998263',
                    email: 'sara.cruz@example.com',
                },
                {
                    id: 1,
                    fname: 'Bessie',
                    lname: 'Cooper',
                    designation: 'Chief Executive Officer',
                    contact: '+62 899 00192732',
                    email: 'deanna.curtis@example.com',
                },
                {
                    id: 1,
                    fname: 'Robert',
                    lname: 'Fox',
                    designation: 'Human Resource Manager',
                    contact: '+62 822 35327889',
                    email: 'tim.jennings@example.com',
                },
                {
                    id: 1,
                    fname: 'Cody',
                    lname: 'Fisher',
                    designation: 'Chief Executive Officer',
                    contact: '+62 899 00192732',
                    email: 'willie.jennings@example.com',
                }
            ],
            managementFee: [
                {
                    id: 1,
                    days: ' 0 to 3rd',
                    fee: '150 USD',

                },
                {
                    id: 1,
                    days: '4 to 7th',
                    fee: ' 140 USD',

                },
                {
                    id: 1,
                    days: '4 to 7th',
                    fee: '140 USD',

                },
                {
                    id: 1,
                    days: '13+',
                    fee: '120 USD',

                },
            ],
            input: {
                fname: "",
                lname: "",
                designation: '',
                contact: '',
                email: "",
            },
            editIndexx: 0,
            editInput: {
                fname: '',
                lname: "",
                designation: '',
                contact: '',
                email: '',
            }
        }
    },
    methods: {
        // reset input field
        resetInput() {
            this.editInput.fname = "";
            this.editInput.lname = "";
            this.editInput.designation = "";
            this.editInput.contact = "";
            this.editInput.email = "";
        },
        //function to add data to table
        add: function () {
            this.usersData.push({
                fname: this.input.fname,
                lname: this.input.lname,
                designation: this.input.designation,
                contact: this.input.contact,
                email: this.input.email,
            });
        },
        //function to handle data edition
        edit: function (index) {
            this.editInput.fname = this.usersData[index].fname;
            this.editInput.lname = this.usersData[index].lname;
            this.editInput.designation = this.usersData[index].designation;
            this.editInput.contact = this.usersData[index].contact;
            this.editInput.email = this.usersData[index].email;


        },
        //function to update data
        update: function () {
            this.usersData.splice(this.editIndexx, 1);
            this.usersData.push({
                fname: this.editInput.fname,
                lname: this.editInput.lname,
                designation: this.editInput.designation,
                contact: this.editInput.contact,
                email: this.editInput.email,

            });
            for (var key in this.editInput) {
                this.editInput[key] = "";
            }
        },
        //function to defintely delete data
        deleterow: function (index) {
            this.editIndex = index

        }
    },
    components: { },
}
</script>
<style>
.table-management-fee,
.table-acquisition-fee {
    border: 1px solid #EDEDED;
    margin-top: -10px;
}

.table-management-fee thead,
.table-acquisition-fee thead {
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #27304C;
    background: #FAFAFA;
    border: 1px solid #EDEDED;
}

.rates {
    border-radius: unset;
    border: 1px solid #EDEDED;
    width: 672px;
}

.rates .card-header {
    border-bottom: unset;
    color: #6D6D6D;
    font-family: 'RubikMedium';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    margin-top: 5px;
}

.users-table {
    margin-top: 14px;
    border: 1px solid #EDEDED;
}

.users-table .form-control-sm {
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
}

.users-table .form-control-sm::placeholder {
    color: #C9C9C9 !important;
}

.users-table thead {
    font-family: 'RubikRegular' !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 12px !important;
    color: #27304C !important;
    background: #FAFAFA !important;

}

.users-table thead th {
    padding-top: 12px;
    padding-bottom: 12px;
}

.users-table tbody {
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #6D6D6D;
}

.users-table td {
    vertical-align: middle;
}

.users-table tbody tr:nth-child(even) {
    background: #FAFAFA;
}


.user-access-label,
.rates-label {
    font-family: 'RubikMedium';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #2C91FF;
}

.table-management-fee tbody tr:nth-child(even) {
    background: #FAFAFA;
}

.table-acquisition-fee tbody tr:nth-child(even) {
    background: #FAFAFA;
}

.table-management-fee,
.table-acquisition-fee tbody {
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #6D6D6D;
}

.table-acquisition-fee th {
    padding: 9px 9px 9px 12px;


}

.table-management-fee thead {
    background: #FAFAFA;
    border: 1px solid #EDEDED;
}

.table-management-fee th {
    padding: 9px 9px 9px 12px;
}
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