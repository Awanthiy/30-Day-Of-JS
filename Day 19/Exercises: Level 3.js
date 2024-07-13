class PersonAccount {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = new Set();
    this.expenses = new Set();
  }

  totalIncome() {
    let total = 0;
    for (const income of this.incomes) {
      total += income[1]; // Access income amount from the tuple
    }
    return total;
  }

  totalExpense() {
    let total = 0;
    for (const expense of this.expenses) {
      total += expense[1]; // Access expense amount from the tuple
    }
    return total;
  }

  accountInfo() {
    console.log(`Account Information for: ${this.firstName} ${this.lastName}`);
    console.log(`Total Income: $${this.totalIncome()}`);
    console.log(`Total Expense: $${this.totalExpense()}`);
  }

  addIncome(description, amount) {
    this.incomes.add([description, amount]); // Add income as a tuple
  }

  addExpense(description, amount) {
    this.expenses.add([description, amount]); // Add expense as a tuple
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
}

//
