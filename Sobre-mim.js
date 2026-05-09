// animação suave ao carregar
window.addEventListener("load", () => {
    document.querySelector("#texto").classList.add("mostrar");
    document.querySelector(".foto").classList.add("mostrar");
});

// leve movimento na imagem
const foto = document.querySelector(".foto");

foto.addEventListener("mousemove", () => {
    foto.style.transform = "scale(1.02)";
});

foto.addEventListener("mouseleave", () => {
    foto.style.transform = "scale(1)";
});