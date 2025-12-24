function openImage(img) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "flex";
  modalImg.src = img.src;
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}
