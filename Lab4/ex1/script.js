(function() {

    const input = document.getElementById("inputActivitate");
    const btn = document.getElementById("btnAdauga");
    const lista = document.getElementById("listaActivitati");

    const luniRo = [
        "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
        "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
    ];

    function adaugaActivitate() {
        const activitate = input.value.trim();

        if (!activitate) {
            alert("Introduceti o activitate inainte de a o adauga!");
            return;
        }

        const azi = new Date();
        const zi = azi.getDate();
        const luna = luniRo[azi.getMonth()];
        const an = azi.getFullYear();

        const dataFormata = `${zi} ${luna} ${an}`;

        // creare <li>
        const li = document.createElement("li");
        li.textContent = `${activitate} — adaugat la: ${dataFormata}`;

        lista.appendChild(li);

        // reset input
        input.value = "";
        input.focus();
    }

    btn.addEventListener("click", adaugaActivitate);

})();