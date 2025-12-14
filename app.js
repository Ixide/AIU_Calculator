const tg = window.Telegram.WebApp;
tg.expand();

/* Автоматическая тема Telegram */
if (tg.colorScheme === "dark") {
    document.body.classList.add("dark");
}

function showExam() {
    document.getElementById("content").innerHTML = `
        <input class="input" type="number" id="rating" placeholder="Рейтинг допуска">
        <input class="input" type="number" id="result" placeholder="Желаемый итоговый балл">
        <button class="btn" onclick="minExam()">Посчитать</button>
        <div class="result" id="output"></div>
    `;
}

function showRK() {
    document.getElementById("content").innerHTML = `
        <input class="input" type="number" id="tk" placeholder="Баллы ТК">
        <input class="input" type="number" id="rating" placeholder="Желаемый рейтинг">
        <button class="btn" onclick="minRK()">Посчитать</button>
        <div class="result" id="output"></div>
    `;
}

/* ЛОГИКА ЭКЗАМЕНА */
function minExam() {
    const rating = Number(document.getElementById("rating").value);
    const result = Number(document.getElementById("result").value);

    let exam = Math.ceil((result - (rating * 0.6)) / 0.4);

    /* Минимум 50 — иначе просто сдача */
    if (exam < 50) exam = 50;

    document.getElementById("output").innerText =
        exam > 100
            ? "Невозможно набрать такой итоговый балл."
            : `Нужно набрать минимум ${exam} баллов на экзамене.`;
}

/* ЛОГИКА РК */
function minRK() {
    const tk = Number(document.getElementById("tk").value);
    const rating = Number(document.getElementById("rating").value);

    let rk = (rating * 2) - tk;

    if (rk < 0) rk = 0;

    document.getElementById("output").innerText =
        rk > 100
            ? "Невозможно набрать столько баллов на РК."
            : `Нужно набрать ${rk} баллов на РК.`;
}
