const form = document.getElementById("submit-form");
const popup = document.getElementById("popup");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah pengiriman form standar.
  popup.style.display = "block"; // Menampilkan popup.
});
