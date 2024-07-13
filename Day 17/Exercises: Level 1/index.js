function storeUserInfo() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const country = document.getElementById("country").value;
  const city = document.getElementById("city").value;

  // Validate input (optional, add checks for empty fields, etc.)
  if (!firstName || !lastName || !age || !country || !city) {
    alert("Please fill in all fields!");
    return;
  }

  const user = {
    firstName,
    lastName,
    age,
    country,
    city,
  };

  // Store user object in localStorage as JSON string
  localStorage.setItem("userInfo", JSON.stringify(user));

  alert("User information stored successfully!");
}
