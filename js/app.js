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

		if(value === '' || value < 0){
this.budgetFeedback.classList.add('showItem');
		this.budgetFeedback.innerHTML = ' Please change it!';
			const self = this;
			setTimeout(function(){
self.budgetFeedback.classList.remove('showItem');
			}, 2000);
		}
		else if(value === '0'){
	this.budgetZero.classList.add('showItem');	
		}
		else{
			this.budgetAmount.textContent = value;
			this.budgetInput.value = '';
			this.showBalance();
		}
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

 });


	//when the expense is clicked
expenseList.addEventListener('submit', function(){
event.preventDefault();

});
}
document.addEventListener('DOMContentLoaded', function(){

eventListeners(); 
});


