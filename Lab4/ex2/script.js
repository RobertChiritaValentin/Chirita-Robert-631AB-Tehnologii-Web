window.addEventListener("DOMContentLoaded", () => {

    const boxDetalii = document.getElementById("detalii");
    const btn = document.getElementById("btnDetalii");
    const dataSpan = document.getElementById("dataProdus");

    // ascunde detaliile la incarcare
    boxDetalii.classList.add("ascuns");

    const luniRo = [
        "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
        "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
    ];

    const azi = new Date();
    const zi = azi.getDate();
    const luna = luniRo[azi.getMonth()];
    const an = azi.getFullYear();

    dataSpan.textContent = `${zi} ${luna} ${an}`;

    // la click pe buton toggle vizibilitate
    btn.addEventListener("click", () => {
        boxDetalii.classList.toggle("ascuns");

        // schimbă textul butonului
        if (boxDetalii.classList.contains("ascuns")) {
            btn.textContent = "Afișează detalii";
        } else {
            btn.textContent = "Ascunde detalii";
        }
    });

});