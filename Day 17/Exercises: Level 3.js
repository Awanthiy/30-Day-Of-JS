class PersonAccount {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = new Set();  // Set to store unique income descriptions and amounts
    this.expenses = new Set();  // Set to store unique expense descriptions and amounts
  }

  totalIncome() {
    """Calculates the total income by summing all income amounts."""
    let total = 0;
    for (const income of this.incomes) {
      total += income[1]; // Access income amount from the tuple
    }
    return total;
  }

  totalExpense() {
    """Calculates the total expense by summing all expense amounts."""
    let total = 0;
    for (const expense of this.expenses) {
      total += expense[1]; // Access expense amount from the tuple
    }
    return total;
  }

  accountInfo() {
    """Prints the account information including first name, last name, total income, and total expense."""
    console.log(`Account Information for: ${this.firstName} ${this.lastName}`);
    console.log(`Total Income: $${this.totalIncome()}`);
    console.log(`Total Expense: $${this.totalExpense()}`);
  }

  addIncome(description, amount) {
    """Adds a new income to the account with its description and amount."""
    this.incomes.add([description, amount]); // Add as a tuple to maintain description
  }

  addExpense(description, amount) {
    """Adds a new expense to the account with its description and amount."""
    this.expenses.add([description, amount]); // Add as a tuple to maintain description
  }

  accountBalance() {
    """Calculates and returns the current account balance (total income - total expense)."""
    return this.totalIncome() - this.totalExpense();
  }
}

// Example usage
const person1 = new PersonAccount("John", "Doe");
person1.addIncome("Salary", 5000);
person1.addIncome("Investment", 1000);
person1.addExpense("Rent", 1500);
person1.addExpense("Groceries", 500);

person1.accountInfo();  // Prints account information
console.log(`Account Balance: $${person1.accountBalance()}`);  // Prints account balance
