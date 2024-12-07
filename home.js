// Sidebar

const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Gallery

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".modal__close");

document.querySelectorAll(".gallery__image").forEach((image) => {
    image.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = image.src;
});
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
    modal.style.display = "none";
}
});







