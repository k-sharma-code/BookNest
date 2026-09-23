const sendBtn = document.getElementById("sendBtn");
const popup = document.getElementById("thankyouPopup");
const closeBtn = document.getElementById("closePopup");

sendBtn.addEventListener("click", function() {
    popup.classList.add("active");
});

closeBtn.addEventListener("click", function() {
    popup.classList.remove("active");
});
