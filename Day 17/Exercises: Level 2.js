function storeStudentInfo() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const skills = document.getElementById("skills").value.split(", "); // Convert comma-separated skills to array
  const country = document.getElementById("country").value;
  const enrolled = document.getElementById("enrolled").checked; // Get checkbox value (boolean)

  // Optional: Validate input (add checks if needed)

  const student = {
    firstName,
    lastName,
    age,
    skills,
    country,
    enrolled,
  };

  localStorage.setItem("studentInfo", JSON.stringify(student));
  alert("Student information stored successfully!");
}

function displayStudentInfo() {
  const studentInfoJSON = localStorage.getItem("studentInfo");
  if (studentInfoJSON) {
    const student = JSON.parse(studentInfoJSON);
    const output = `
      <h2>Student Information</h2>
      <ul>
        <li>First Name: ${student.firstName}</li>
        <li>Last Name: ${student.lastName}</li>
        <li>Age: ${student.age}</li>
        <li>Skills: ${student.skills.join(", ")}</li>  <li>Country: ${student.country}</li>
        <li>Enrolled: ${student.enrolled ? "Yes" : "No"}</li>
      </ul>
    `;
    document.getElementById("studentInfoDisplay").innerHTML = output;
  } else {
    document.getElementById("studentInfoDisplay").innerHTML = "No student information found.";
  }
}
