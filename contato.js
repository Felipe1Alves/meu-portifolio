const formularioContato = document.querySelector(".formulario");

formularioContato?.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const campos = new FormData(formularioContato);
    const destinatario = formularioContato.dataset.emailDestino;
    const assunto = `Mensagem de contato de ${campos.get("nome")}`;
    const corpo = [
        `Nome: ${campos.get("nome")}`,
        `E-mail: ${campos.get("email")}`,
        "",
        campos.get("mensagem")
    ].join("\n");

    window.location.href = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
});
