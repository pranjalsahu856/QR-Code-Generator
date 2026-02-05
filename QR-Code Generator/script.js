let link = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let qrText = document.getElementById("qrText");
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.setAttribute("src", link + qrText.value);
    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setInterval(() => {
      qrText.classList.remove("error");
    }, 2000);
  }
}
let btn = document.querySelector("button");
btn.addEventListener("click", generateQR);

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    generateQR();
  }
});
