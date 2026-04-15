$(document).ready(function () {
    $("#btnCadastro").click( function () {
        $(".bntCadastro").hide();

        Swal.fire({
            title: "Cadastro realizado!",
            text: "Bem-vindo(a) ao GL Street.",
            icon: "success"
        });
    });
});
