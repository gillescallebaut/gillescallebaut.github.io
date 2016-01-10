$(window).load(function () {
    if (localStorage.getItem("opslaan") == "ja") {
    }
    else {
        $('#myModal').modal('show');
    }
});



function klikFunctie() {
    if ($('#checkbox').is(":checked")) {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("opslaan", "ja");;
        } else {
            alert("Opslaan is niet mogelijk op jouw computer");
        }
    }
}