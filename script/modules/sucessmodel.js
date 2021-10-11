// Obtém o botão close
var closeModal = document.querySelector("#close");

// Obtém o botão finish
let finish = document.querySelector("#finish");

// Obtém o modal
let modal = document.querySelector("#myModal");

// Obtém os content_tab
let content_1tab = document.querySelector("#content_1tab");
let content_2tab = document.querySelector("#content_2tab");
let content_3tab = document.querySelector("#content_3tab");

// Obtém o full name
let fullname = document.querySelector("#fullname");

// Obtém o spam que terá a mensagem de sucesso
let textoSucesso = document.querySelector("#texto-sucesso");

// Obtém o texto tab_certificates que será mudado para sucesso
let textCertificates = document.querySelector("#certificates_id");

// Evento para abrir o modal
finish.addEventListener("click", function (event) {
    event.preventDefault();
    // Remove a classe hide
    modal.classList.remove("hide");
    // Adiciona um hiden nos três content_tab
    // Desta forma, renderiza só o modal de sucesso
    content_1tab.classList.add("hide");
    content_2tab.classList.add("hide");
    content_3tab.classList.add("hide");
    // Modifica o texto de sucesso a ser renderizado
    textoSucesso.innerHTML = fullname.value.concat(", your data has been sent successfully!");
    textCertificates.textContent = "Enviado com Sucesso!";
});

// Evento para fechar o modal
closeModal.addEventListener("click", function (event) {
    // Adiciona a classe hide
    modal.classList.add("hide");
    // Recarrega a página atual sem usar o cache
    document.location.reload(true);
});

/* Arrumar
window.onclick = function (event) {
    console.log(event.target)
    if (event.target == closeModal) {
        document.location.reload(true);
    }
}
*/