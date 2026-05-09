window.addEventListener("load", () => {

    document.querySelector("#titulo").classList.add("mostrar");

    document.querySelector("#texto").classList.add("mostrar");

    const logos = document.querySelectorAll(".logo");

    logos.forEach((logo, index) => {
        setTimeout(() => {
            logo.classList.add("mostrar-logo");
        }, index * 200);
    });

});