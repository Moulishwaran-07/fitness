// document.getElementById("send-button").addEventListener("click", function (event) {
//     event.preventDefault();

//     // Get form fields
//     const name = document.getElementById("name");
//     const email = document.getElementById("email");
//     const subject = document.getElementById("subject");
//     const message = document.getElementById("message");

//     // Get error and success message elements
//     const nameError = document.getElementById("name-error");
//     const emailError = document.getElementById("email-error");
//     const subjectError = document.getElementById("subject-error");
//     const messageError = document.getElementById("message-error");
//     const successMessage = document.getElementById("success-message");

//     let isValid = true;

//     // Validate name
//     if (!name.value.trim()) {
//         nameError.style.display = "block";
//         isValid = false;
//     } else {
//         nameError.style.display = "none";
//     }

//     // Validate email
//     if (!email.value.trim()) {
//         emailError.style.display = "block";
//         isValid = false;
//     } else {
//         emailError.style.display = "none";
//     }

//     // Validate subject
//     if (!subject.value.trim()) {
//         subjectError.style.display = "block";
//         isValid = false;
//     } else {
//         subjectError.style.display = "none";
//     }

//     // Validate message
//     if (!message.value.trim()) {
//         messageError.style.display = "block";
//         isValid = false;
//     } else {
//         messageError.style.display = "none";
//     }

//     // Submit if valid
//     if (isValid) {
//         successMessage.style.display = "block";
//     } else {
//         successMessage.style.display = "none";
//     }
// });























