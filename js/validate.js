document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting by default

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Perform additional validation if needed

    // Send the form data to the server using an XMLHttpRequest or Fetch API
    // Example using Fetch API
    fetch("/vendor/process_form.php", {
        method: "POST",
        body: JSON.stringify({ name, email, phone, message }),
        headers: {
            "Content-Type": "application/json",
            'X-Requested-With': 'XMLHttpRequest',
        },
    })
    .then((response) => {
        // response.json();console.log(response);
        if(response.ok){
            return response.text()
        }
    })
    .then((data) => {
        // console.log(data);
        if (data.success) {
            // Show success message
            document.getElementById("submitSuccessMessage").classList.remove("d-none");
            document.getElementById("submitErrorMessage").classList.add("d-none");
        } else {
            // Show error message
            document.getElementById("submitSuccessMessage").classList.add("d-none");
            document.getElementById("submitErrorMessage").classList.remove("d-none");
        }
    })
    .catch((error) => {
        console.error("Error:", error);
        // Show error message
        document.getElementById("submitSuccessMessage").classList.add("d-none");
        document.getElementById("submitErrorMessage").classList.remove("d-none");
    });
});