$(document).ready(function () {
    $("#btnLogin").click( function () {
        $(".bntlogin").hide();

        Swal.fire({
            title: "Login realizado!",
            text: "Bem-vindo(a) ao GL Street.",
            icon: "success"
        });
    });
});
