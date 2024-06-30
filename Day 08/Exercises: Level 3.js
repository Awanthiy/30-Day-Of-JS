// User Management (users Array)

const users = [
  // ... your users data here (as provided before)
];

function signUp(username, email, password) {
  const existingUser = users.find(user => user.username === username || user.email === email);
  if (existingUser) {
    return "User already exists!";
  }

  const newUser = {
    _id: Math.floor(Math.random() * 100000).toString(), // Generate a unique ID
    username,
    email,
    password,
    createdAt: new Date().toLocaleString(), // Current date and time
    isLoggedIn: false
  };

  users.push(newUser);
  return `User created successfully!`;
}

function signIn(username, password) {
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    user.isLoggedIn = true;
    return `Welcome back, ${user.username}! You are now logged in.`;
  } else {
    return "Invalid username or password.";
  }
}

// Person Account Object

const personAccount = {
  firstName: "",
  lastName: "",
  incomes: new Set(), // Set to avoid duplicates
  expenses: new Set(),
  totalIncome: function() {
    let sum = 0;
    for (const income of this.incomes) {
      sum += income.amount;
    }
    return sum;
  },
  totalExpense: function() {
    let sum = 0;
    for (const expense of this.expenses) {
      sum += expense.amount;
    }
    return sum;
  },
  accountInfo: function() {
    return `Name: ${this.firstName} ${this.lastName}\nTotal Income: ${this.totalIncome()}\nTotal Expense: ${this.totalExpense()}\nAccount Balance: ${this.accountBalance()}`;
  },
  addIncome: function(description, amount) {
    this.incomes.add({ description, amount });
  },
  addExpense: function(description, amount) {
    this.expenses.add({ description, amount });
  },
  accountBalance: function() {
    return this.totalIncome() - this.totalExpense();
  }
};

// Product Management (products Array)

const products = [
  // ... your products data here (as provided before)
];

function rateProduct(productId, userId, rating) {
  const product = products.find(product => product._id === productId);
  if (!product) {
    return "Product not found.";
  }

  const existingRating = product.ratings.find(rating => rating.userId === userId);
  if (existingRating) {
    existingRating.rate = rating;
    return `Rating for product '${product.name}' updated!`;
  } else {
    product.ratings.push({ userId, rate: rating });
    return `Product '${product.name}' rated successfully!`;
  }
}

function averageRating(productId) {
  const product = products.find(product => product._id === productId);
  if (!product) {
    return "Product not found.";
  }

  if (product.ratings.length === 0) {
    return "No ratings yet for this product.";
  }

  const totalRating = product.ratings.reduce((acc, rating) => acc + rating.rate, 0);
  const average = totalRating / product.ratings.length;
  return `Average rating for product '${product.name}': ${average.toFixed(1)}`;
}

function likeProduct(productId, userId) {
  const product = products.find(product => product._id === productId);
  if (!product) {
    return "Product not found.";
  }

  const alreadyLiked = product.likes.includes(userId);
  if (alreadyLiked) {
    product.likes.splice(product.likes.indexOf(userId), 1);
    return `You unliked product '${product.name}'.`;
  } else {
    product.likes.push(userId);
    return `You liked product '${product.name}'.`;
  }
}

// Usage Examples

// Sign Up
console.log(signUp('newuser', 'newuser@example.com', 'newpassword'));

// Sign In
console.log
