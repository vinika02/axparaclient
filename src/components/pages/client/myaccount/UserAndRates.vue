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
                <button class="btn btn-large btn-custom-blue btn-add-user " data-bs-toggle="modal" data-bs-target="#AddUserModal">
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
                    <tr v-for="user in usersData" :key="user.id">
                        <td>{{ (user.name) }}</td>
                        <td>{{ (user.designation) }}</td>
                        <td>{{ (user.contact) }}</td>
                        <td>{{ (user.email) }}</td>
                        <td>
                            <button class="btn btn-sm btn-outline-blue w-70 me-2">
                                Edit 
                            </button>
                            <button class="btn btn-sm btn-outline-blue w-70" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" class="form-control form-control-sm" placeholder="Full Name">
                        </td>
                        <td>
                            <input type="text" class="form-control form-control-sm" placeholder="Designation">
                        </td>
                        <td>
                            <input type="text" class="form-control form-control-sm" placeholder="Contact number">
                        </td>
                        <td>
                            <input type="text" class="form-control form-control-sm" placeholder="Email address">
                        </td>
                        <td>
                            <button class="btn btn-sm btn-outline-blue w-70 me-2">
                                Save
                            </button>
                            <button class="btn btn-sm btn-outline-blue w-70">
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
                                    <tr v-for="user in managementFee" :key="user.id">
                                        <td>{{ (user.days) }}</td>
                                        <td >{{ (user.fee) }}</td>
                                     
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
                                        <td >{{ (user.days) }}</td>
                                        <td >{{ (user.fee) }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <UserAndRatesAddUserModal></UserAndRatesAddUserModal>
    <deleteModal></deleteModal>
</template>

<script>
import UserAndRatesAddUserModal from '@/components/modals/UserAndRatesAddUserModal.vue';
import deleteModal from '@/components/modals/deleteModal.vue';

export default {
    
    name: 'UserAndRates',
            
    data() {
        return {
            usersData: [
                {
                    id: 1,
                    name: 'Annette Black',
                    designation: 'Senior Developer',
                    contact: '+62 878 66253820',
                    email: 'nevaeh.simmons@example.com',
                },
                {
                    id: 1,
                    name: 'Guy Hawkins',
                    designation: 'UX Designer',
                    contact: '+62 851 77629086',
                    email: 'dolores.chambers@example.com',
                },
                {
                    id: 1,
                    name: 'Darlene Robertson',
                    designation: 'Front End Developer',
                    contact: '+62 811 09998263',
                    email: 'sara.cruz@example.com',
                },
                {
                    id: 1,
                    name: 'Bessie Cooper',
                    designation: 'Chief Executive Officer',
                    contact: '+62 899 00192732',
                    email: 'deanna.curtis@example.com',
                },
                {
                    id: 1,
                    name: 'Robert Fox',
                    designation: 'Human Resource Manager',
                    contact: '+62 822 35327889',
                    email: 'tim.jennings@example.com',
                },
                {
                    id: 1,
                    name: 'Cody Fisher',
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
        }
    },
    components:{ UserAndRatesAddUserModal,deleteModal },
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
    font-family: 'RubikRegular'!important;
    font-style: normal!important;
    font-weight: 500!important;
    font-size: 12px!important;
    color: #27304C!important;
    background: #FAFAFA!important;

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
.table-management-fee tbody tr:nth-child(even){
    background: #FAFAFA;
}
.table-acquisition-fee tbody tr:nth-child(even){
    background: #FAFAFA;
}
.table-management-fee,
.table-acquisition-fee tbody{
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #6D6D6D;
}

.table-acquisition-fee th {
   padding:9px 9px 9px 12px;
   
   
}
.table-management-fee thead{
    background: #FAFAFA;
    border: 1px solid #EDEDED;
}
.table-management-fee th{
    padding:9px 9px 9px 12px;
}
</style>