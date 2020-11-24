
const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expenseList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Bad data provided';
    alert.subHeader = 'We need correct data to proceed any further, sorry ...';
    alert.message = 'Please provide valid expense reason as well as amount.';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    return alert.present();
}

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
};

confirmBtn.addEventListener("click", () => {
    
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (
        enteredReason.trim().length <= 0 ||
        enteredAmount <= 0 ||
        enteredAmount.trim().length <=0
    ){
        presentAlert();
        return;
    }
        const newItem = document.createElement('ion-item');
        newItem.textContent = enteredReason + ': $' + enteredAmount;
        expenseList.appendChild(newItem);
        totalExpenses += +enteredAmount;
        totalExpensesOutput.textContent = totalExpenses;
        clear();
});

cancelBtn.addEventListener('click', clear);



