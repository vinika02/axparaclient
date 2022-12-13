<template>
    <div class="invoice-box">
        <input type="text" placeholder="Search Invoice" class="input">
        <button class="btn btn-print"><svg top="5px" width="17" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19 8H18V3H6V8H5C3.34 8 2 9.34 2 11V17H6V21H18V17H22V11C22 9.34 20.66 8 19 8ZM8 5H16V8H8V5ZM16 19H8V15H16V19ZM18 15V13H6V15H4V11C4 10.45 4.45 10 5 10H19C19.55 10 20 10.45 20 11V15H18Z"
                    fill="#EDEDED" />
            </svg>
            Print</button>
        <button class="btn btn-print download"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.5 20C5.1 20 4.75 19.85 4.45 19.55C4.15 19.25 4 18.9 4 18.5V14.925H5.5V18.5H18.5V14.925H20V18.5C20 18.9 19.85 19.25 19.55 19.55C19.25 19.85 18.9 20 18.5 20H5.5ZM12 16.175L7.175 11.35L8.25 10.275L11.25 13.275V4H12.75V13.275L15.75 10.275L16.825 11.35L12 16.175Z"
                    fill="white" />
            </svg>
            Download
        </button>
        <button class="date1" data-bs-toggle="modal" data-bs-target="#datepick">20-11-08 <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M21.3217 14.4765L17.088 8.35882C17.0108 8.24714 16.9124 8.15684 16.8002 8.09469C16.688 8.03255 16.5648 8.00017 16.4401 8H14.7673C14.5943 8 14.4988 8.22647 14.6046 8.38235L18.3297 13.7647H2.70652C2.59293 13.7647 2.5 13.8706 2.5 14V15.7647C2.5 15.8941 2.59293 16 2.70652 16H20.6711C21.363 16 21.7476 15.0941 21.3217 14.4765Z"
                    fill="#8C8C8C" />
            </svg>
            20-12-23
            <svg width="24" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7 11H9V13H7V11ZM21 6V20C21 21.1 20.1 22 19 22H5C3.89 22 3 21.1 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4H16V2H18V4H19C20.1 4 21 4.9 21 6ZM5 8H19V6H5V8ZM19 20V10H5V20H19ZM15 13H17V11H15V13ZM11 13H13V11H11V13Z"
                    fill="#8C8C8C" />
            </svg>
        </button>
    </div>
    <div>
        <table class="table invoice-table">
            <thead>
                <tr>
                    <th></th>
                    <th>Date
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.0834 5.83333L7.00004 1.75L2.91671 5.83333L11.0834 5.83333ZM11.0834 8.16667L2.91671 8.16667L7.00004 12.25L11.0834 8.16667Z"
                                fill="#DCDCDC" />
                        </svg>
                    </th>
                    <th>Invoice Number
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.0834 5.83333L7.00004 1.75L2.91671 5.83333L11.0834 5.83333ZM11.0834 8.16667L2.91671 8.16667L7.00004 12.25L11.0834 8.16667Z"
                                fill="#DCDCDC" />
                        </svg>
                    </th>
                    <th>Reference
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.0834 5.83333L7.00004 1.75L2.91671 5.83333L11.0834 5.83333ZM11.0834 8.16667L2.91671 8.16667L7.00004 12.25L11.0834 8.16667Z"
                                fill="#DCDCDC" />
                        </svg>
                    </th>
                    <th>Due Date
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.0834 5.83333L7.00004 1.75L2.91671 5.83333L11.0834 5.83333ZM11.0834 8.16667L2.91671 8.16667L7.00004 12.25L11.0834 8.16667Z"
                                fill="#DCDCDC" />
                        </svg>
                    </th>
                </tr>
            </thead>
            <tbody class="flex">
                <tr v-for="user in invoice" :key="user.id">
                    <td style="width: 40px; height: 38px;" class="checkbox"><input class="form-check-input"
                            type="checkbox" name="flexRadioDefault" id="flexRadioDefault2" checked></td>
                    <td style="width:330px; height: 38px;">{{ (user.date) }}</td>
                    <td style="width:330px; height: 38px;">{{ (user.invoiceNumber) }}</td>
                    <td style="width:330px; height: 38px;">{{ (user.reference) }}</td>
                    <td style="width:330px; height: 38px;">{{ (user.dueDate) }}</td>
                </tr>
            </tbody>
        </table>       
    </div>
    
</template>
<script>


export default {
    
    name: 'Invoices',
    data() {
        return {
            invoice: [
                {
                    id: 1,

                    date: "01 Feb 2020",
                    invoiceNumber: "INV- 0001",
                    reference: "P.O.5117167923",
                    dueDate: "01 Feb 2020"
                },
                {
                    id: 1,
                    date: "04 Feb 2020",
                    invoiceNumber: "INV- 0001",
                    reference: "P.O.5117167923",
                    dueDate: "01 Feb 2020"
                },
                {
                    id: 1,
                    date: "04 Feb 2020",
                    invoiceNumber: "INV- 0001",
                    reference: "P.O.5117167923",
                    dueDate: "01 Feb 2020"
                },
                {
                    id: 1,
                    date: "08 Feb 2020",
                    invoiceNumber: "INV- 0001",
                    reference: "P.O.5117167923",
                    dueDate: "01 Feb 2020"
                },
                {
                    id: 1,
                    date: "12 Feb 2020",
                    invoiceNumber: "INV- 0001",
                    reference: "P.O.5117167923",
                    dueDate: "01 Feb 2020"
                },
                {
                    id: 1,
                    date: "12 Feb 2020",
                    invoiceNumber: "INV- 0001",
                    reference: "P.O.5117167923",
                    dueDate: "01 Feb 2020"
                }
            ],
        }
    },
   
}
</script>
<style>
.invoice-box {
    display: flex;
    gap: 14px;
}

.input::placeholder {
    color: #C9C9C9 !important;
    opacity: 1;

}

.input {
    height: 40px;
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #c9c9c9 !important;
    padding: 9px 12px;
    width: 849px;
    border: 1px solid #EDEDED !important;

}

.date1 {
    display: flex;
    align-items: center;
    width: 248px;
    border: 1px solid #EDEDED;
    padding: 9px 12px;
    gap: 19px;
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
}

.download {
    width: 127px !important;
}

/* table */
.invoice-table {
    margin-top: 14px;
    border: 1px solid #EDEDED;
}

.invoice-table thead {
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #27304C;
    background: #FAFAFA;
}

.invoice-table tbody {
    font-family: 'RubikRegular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #6D6D6D;


}

.form-check-input[type=checkbox] {
    border-radius: 0.25px;

}

/* end table */

/* add user */
.add-user {
    width: 542px;
    height: 366px;
    border: solid 1px #6D6D6D;

    border-radius: 5px;
}

.adduser {
    gap: 18px;
    font-family: 'RubikSemiBold';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #2C91FF;
}

.form-control {
    border: 1px solid #EDEDED;
    border-radius: 2px;
    font-family: 'RubikLight';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #C9C9C9;
}


/* end add user */
</style>