function checkAge() {
    // Retrieve the user's age input
    let age = document.getElementById('ageInput').value;

    // Convert input to a number
    age = Number(age);

    let category;

    // Categorize the age
    if (isNaN(age) || age < 0) {
        category = "Invalid age. Please enter a valid number.";
    } else if (age >= 0 && age <= 12) {
        category = "Child";
    } else if (age >= 13 && age <= 19) {
        category = "Teenager";
    } else {
        category = "Adult";
    }

    document.getElementById('result').innerText = `You are a(n): ${category}`;

}
