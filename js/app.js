class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input"); 
	  this.budgetZero = document.querySelector('.budget-zero');
	  this.budgetAmount = document.getElementById("budget-amount"); 
	  this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
  this.itemID = 0;
  }
	//submit budget method
	submitBudgetForm(){
const value = this.budgetInput.value;
       const self = this;
		if(value === '' || value < 0){
this.budgetFeedback.classList.add('showItem');
		this.budgetFeedback.innerHTML = ' Please change it!';
			setTimeout(function(){
self.budgetFeedback.classList.remove('showItem');
			}, 2000);
		}
		else if(value === '0'){
	this.budgetZero.classList.add('showItem');	
		setTimeout(function(){

self.budgetZero.classList.remove('showItem');
		}, 2500);
		}

		else{
			this.budgetAmount.textContent = value;
			this.budgetInput.value = '';
			this.showBalance();

		}
	}
//Creating a show balance method

	showBalance(){
	const expense = this.totalExpense();
		const total = parseFloat(this.budgetAmount.textContent) - expense;
		this.balanceAmount.textContent = total;
if(total < 0){
this.balance.classList.remove('showGreen', 'showBlack');
	this.balance.classList.add('showRed');
}
else if(total > 0){

this.balance.classList.remove('showRed', 'showBlack');
	this.balance.classList.add('showGreen');
}

else if(total === 0){

this.balance.classList.remove('showGreen', 'showRed');
	this.balance.classList.add('showBlack');
}

	}


	//Total expense

submitExpenseForm(){
	const self = this;
const expenseValue = this.expenseInput.value;
	const amountValue = this.amountInput.value;

	if(expenseValue === '' || amountValue === '' || amountValue < 0)
	{
this.expenseFeedback.classList.add('showItem');


	setTimeout(function() {
self.expenseFeedback.classList.remove('showItem')
	}, 2500);
		

	}

}

	totalExpense(){
let total = 400;
		return total;
	}

}

function eventListeners(){
const budgetForm = document.getElementById('budget-form');
	const expenseForm = document.getElementById('expense-form');
	const expenseList = document.getElementById('expense-list');

// We now make a new instance of UI class

const ui = new UI();

// When the budget form is submitted

budgetForm.addEventListener('submit', function(){
event.preventDefault();
	ui.submitBudgetForm();

});

// when the expense form is submitted
expenseForm.addEventListener('submit', function(){
 event.preventDefault();
ui.submitExpenseForm();
 });


	//when the expense is clicked
expenseList.addEventListener('submit', function(){
event.preventDefault();

});
}
document.addEventListener('DOMContentLoaded', function(){

eventListeners(); 
});


