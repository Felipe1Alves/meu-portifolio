const elementosRevelacao = document.querySelectorAll("[data-reveal]");
const prefereMovimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !prefereMovimentoReduzido) {
    document.body.classList.add("revelacao-habilitada");

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("revelacao-visivel");
            } else {
                entrada.target.classList.remove("revelacao-visivel");
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px"
    });

    elementosRevelacao.forEach((elemento) => observador.observe(elemento));
}
