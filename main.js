const contactImage = document.getElementById("contacticons");
const message = document.getElementById("message");

contactImage.addEventListener("click", function() {
  message.textContent = "Thanks for reaching out! We'll speak soon!";
});
