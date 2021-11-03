let firstName = document.getElementById('first_name'),
    lastName = document.getElementById('last_name'),
    annual_income = document.getElementById('annual_income'),
    Account_balance = document.getElementById('currentAmount'),
    loan_request = document.getElementById('Desired_loan'),
    credit_history = document.getElementById('Credit'),
    Deposit = document.getElementById('deposit'),
    Repayment = document.getElementById('Repayy'),
    accountType = document.getElementById('Accounttype'),
    Last_loan_collection = document.getElementById('loan'),
    error1 = document.getElementById('error1'),
    error2 = document.getElementById('error2'),
    error3 = document.getElementById('error3'),
    error4 = document.getElementById('error4'),
    error5 = document.getElementById('error5'),
    error6 = document.getElementById('error6'),
    error7 = document.getElementById('error7'),
    error8 = document.getElementById('error8'),
    error9 = document.getElementById('error9'),
    error10 = document.getElementById('error10'),
    submitBtn = document.getElementById('submitBtn'),
    response = document.getElementById('response'),
    credit_worthiness = 30,
    totalPoint = 0,
    // creditpoint = 0,
    // accountPoint = 0,
    // accountypePoint = 0,
    // repayPoint = 0,
    loanObtainable;



error1.style.color = 'red'
error2.style.color = 'red'
error3.style.color = 'red'
error4.style.color = 'red'
error5.style.color = 'red'
error6.style.color = 'red'
error7.style.color = 'red'
error8.style.color = 'red'
error9.style.color = 'red'
error10.style.color = 'red'

function validateForm() {
    if (firstName.value == '' || firstName.value == null) {
        error1.innerHTML = 'First Name is required';
    } else {
        console.log(firstName.value);
    }
    if (lastName.value == '' || lastName.value == null) {
        error2.innerHTML = 'Last Name is required';
    } else {
        console.log(lastName.value);
    }
    if (annual_income.value == '' || annual_income.value == null) {
        error3.innerHTML = 'Required';
    } else {
        //console.log(annual_income.value);
    }
    if (Account_balance.value == '' || Account_balance.value == null) {
        error4.innerHTML = 'Required';
    } else {
        //console.log(Account_balance.value);
    }
    if (loan_request.value == '' || loan_request.value == null) {
        error5.innerHTML = 'Required';
    } else {
        //console.log(loan_request.value);
    }
    if (credit_history.value == '' || credit_history.value == null) {
        error6.innerHTML = 'Required';
    } else {
        console.log(credit_history.value);
    }
    if (Deposit.value == '' || Deposit.value == null) {
        error7.innerHTML = 'Required';
    } else {
        console.log(Deposit.value);
    }
    if (Last_loan_collection.value == '' || Last_loan_collection.value == null) {
        error8.innerHTML = 'Required';
    } else {
        console.log(Last_loan_collection.value);
    }
    if (Repayment.value == '' || Repayment.value == null) {
        error9.innerHTML = 'Required';
    } else {
        console.log(accountType.value);
    }
    if (accountType.value == '' || accountType.value == null) {
        error10.innerHTML = 'Required';
    } else {
        console.log(accountType.value);
    }
}


submitBtn.onclick = function () {
   
    validateForm();
   
    loanObtainable = 0.45 * parseFloat(annual_income.value);
    console.log(loanObtainable)

    if (parseFloat(Account_balance.value) < parseFloat(loan_request.value)) {
        totalPoint -= 10
    }
    else if (parseFloat(Account_balance.value) > parseFloat(loan_request.value)) {
        totalPoint += 10
    }

    if (credit_history.value == "yes") {
        totalPoint += 10
    }
    else {
        totalPoint += 0
    }

    var choosenDate = new Date(Deposit.value)
    var currentDate = new Date();

    var diff_in_months = (currentDate.getFullYear() * 12 + currentDate.getMonth()) - (choosenDate.getFullYear() * 12 + choosenDate.getMonth())
    console.log(diff_in_months)

    if(parseInt(diff_in_months) <= 1){
        totalPoint += 5
    } else if(parseInt(diff_in_months) > 1) {
        totalPoint += 0
    }

    var choosenDate = new Date(Last_loan_collection.value)
    var currentDate = new Date();
    var diff_in_months = (currentDate.getFullYear() * 12 + currentDate.getMonth()) - (choosenDate.getFullYear() * 12 + choosenDate.getMonth())
    console.log(diff_in_months)
    if(parseInt(diff_in_months) > 6){
        totalPoint += 10
    } else if(parseInt(diff_in_months) <= 6) {
        totalPoint += 0
    }
    
    var choosenDate = new Date(Repayment.value)
    var currentDate = new Date();
    var diff_in_months = (currentDate.getFullYear() * 12 + currentDate.getMonth()) - (choosenDate.getFullYear() * 12 + choosenDate.getMonth())
    console.log(diff_in_months)
    if(parseInt(diff_in_months) < 6){
        totalPoint += 5
    } else if(parseInt(diff_in_months) >= 6) {
        totalPoint += 0
    }

    
    if (accountType.value == "current") {
        totalPoint += 10
    }
    else if (accountType.value == "savings") {
        totalPoint += 5
    }

    console.log(totalPoint)

    if(totalPoint >= credit_worthiness){
        response.innerHTML = `
            <h3 style="margin-bottom: 15px; font-size: 16px; font-weight:500;">Dear ${firstName.value} ${lastName.value}, </h3>

            <p style="margin-bottom: 15px;">
                Congratulations, after careful evaluations and a thorough review of what you submitted
                to us, we are pleased to inform you that you qualify to recieve a loan from us at this time.
            </p>
            <ul style="margin-bottom: 15px;">
                <li>You are qualified to receive a loan of ${loanObtainable} naira.</li>
            </ul>
            <p style="margin-bottom: 15px;">
                Should be inclined to accept this loan, please visit our bank to accept the terms of
                the loan and disbursement.
            </p>
            <p style="margin-bottom: 15px;">
                Congratulaions, once again.
            </p>
            <h6 style="margin-bottom: 8px;">Signed,</h6>
            <h5>Management</h5>
        `
    }
    else if(totalPoint < credit_worthiness){
        response.innerHTML = `
        <h3 style="margin-bottom: 15px; font-size: 16px; font-weight:500;">Dear ${firstName.value} ${lastName.value}, </h3>

        <p style="margin-bottom: 15px;">
            Sorry, after careful evaluations and a thorough review of what you submitted
            to us, we regret to inform you that you do not qualify to recieve a loan from us at this time.
        </p>
        <p style="margin-bottom: 15px;">
            This decision was made on a fair basis and due to the limited amount of loans available, we immplore that
            you try us again at another time.
        </p>
        <p style="margin-bottom: 15px;">
            Thanks.
        </p>
        <h6 style="margin-bottom: 8px;">Signed,</h6>
        <h5>Management</h5>
        `
    }
}


// var choosenDate = new Date(Deposit.value)
// var currentDate = new Date();

// var diff_in_months = (currentDate.getFullYear() * 12 + currentDate.getMonth()) - (choosenDate.getFullYear() * 12 + choosenDate.getMonth())
// console.log(diff_in_months)
// function getLoanAmount() {
//     loanObtainable =  0.45 * parseFloat(annual_income.value);
//     console.log = (loanObtainable)
// }

// function checkAccBal() {
//     if (Account_balance.value < loan_request.value) {
//         accountPoint = -10
//     }
//     else {
//         accountPoint = 10
//     }
//     //console.log(accountPoint);
// }

// function checkCreditHistory() {
//     if (credit_history.value <= 6) {
//         creditpoint = 10
//     }
//     else {
//         creditpoint = 0
//     }
//     //console.log(creditpoint);
// }

// function checkLastDeposit() {

// }

// function checkLoanRepayHistory() {
//     if (Repayment.value <= 5) {
//         repayPoint = 5
//     } else {
//         repayPoint = 0
//     }
// }
// //console.log(repayPoint);
// function checkAccType() {
//     if (accountType.value = 'Savings Account') {
//         accountypePoint = 5
//     } else {
//         accountypePoint = 10
//     }
// }
// //console.log(accountypePoint);
// function checkLoanWorthiness() {

// }