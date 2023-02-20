const bookRoom = document.getElementById("book-room");
const bookingForm = document.getElementById("booking-form");

bookRoom.addEventListener("click", (e) => {
  e.preventDefault();
  const bookRoom=bookingForm.value
  alert("Room Book Successfully !!");
  location.replace("/");

});
