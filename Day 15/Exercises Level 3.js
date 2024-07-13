class Statistics:
  def __init__(self, data):
    self.data = data

  def count(self):
    """Calculates the number of elements in the data."""
    return len(self.data)

  def sum(self):
    """Calculates the sum of all elements in the data."""
    return sum(self.data)

  def min(self):
    """Finds the minimum element in the data."""
    return min(self.data)

  def max(self):
    """Finds the maximum element in the data."""
    return max(self.data)

  def range(self):
    """Calculates the range (difference between max and min) of the data."""
    return self.max() - self.min()

  def mean(self):
    """Calculates the mean (average) of the data."""
    return self.sum() / self.count()

  def median(self):
    """Calculates the median (middle value) of the data."""
    data_sorted = sorted(self.data)
    mid_index = self.count() // 2
    if self.count() % 2 == 0:
      return (data_sorted[mid_index - 1] + data_sorted[mid_index]) / 2
    else:
      return data_sorted[mid_index]

  def mode(self):
    """Calculates the mode (most frequent value) of the data."""
    data_counts = {}
    for value in self.data:
      data_counts[value] = data_counts.get(value, 0) + 1
    max_count = max(data_counts.values())
    modes = [value for value, count in data_counts.items() if count == max_count]
    if len(modes) == 1:
      return {"mode": modes[0], "count": max_count}
    else:
      return {"mode": "Multiple Modes", "count": max_count}

  def var(self):
    """Calculates the variance of the data."""
    mean = self.mean()
    return sum((x - mean) ** 2 for x in self.data) / self.count()

  def std(self):
    """Calculates the standard deviation of the data (square root of variance)."""
    return math.sqrt(self.var())

  def freqDist(self):
    """Calculates the frequency distribution of the data."""
    data_counts = {}
    for value in self.data:
      data_counts[value] = data_counts.get(value, 0) + 1
    return [(count, value) for value, count in data_counts.items()]

  def describe(self):
    """Prints a summary of the statistical measures of the data."""
    print("Count:", self.count())
    print("Sum: ", self.sum())
    print("Min: ", self.min())
    print("Max: ", self.max())
    print("Range: ", self.range())
    print("Mean: ", self.mean())
    print("Median: ", self.median())
    print("Mode: ", self.mode())
    print("Variance: ", self.var())
    print("Standard Deviation: ", self.std())
    print("Frequency Distribution: ", self.freqDist())


class PersonAccount:
  def __init__(self, first_name, last_name):
    self.first_name = first_name
    self.last_name = last_name
    self.incomes = set()  # Set to store unique income descriptions and amounts
    self.expenses = set()  # Set to store unique expense descriptions and amounts

  def total_income(self):
    """Calculates the total income by summing all income amounts."""
    total = 0
    for income in self.incomes:
      total += income[1]  # Access income amount from the tuple
    return total

  def total_expense(self):
    """Calculates the total expense by summing all expense amounts."""
    total = 0
    for expense in self.expenses:
      total += expense[1]  # Access expense amount from the tuple
    return total

  def account_info(self):
    """Prints the account information including first name, last name, total income, and total expense."""
    print(f
