function calculator () {
    let year = parseInt(document.getElementById("year").value);
    let month = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);

    const date = new Date();

    const currentYear = parseInt(date.getFullYear());
    const currentMonth = parseInt(date.getMonth() + 1);
    const currentDay = parseInt(date.getDate());

    let totalDays = (currentYear - year) * 365 + (currentMonth - month) * 30 + (currentDay - day);

    // Converting days into years, months, and days
    let years = Math.floor(totalDays / 365);
    let months = Math.floor((totalDays % 365) / 30);
    let days = Math.floor((totalDays % 365) % 30);

    let result = document.getElementById("first");
    result.textContent = years;

    let result2 = document.getElementById("second");
    result2.textContent = months;

    let result3 = document.getElementById("third");
    result3.textContent = days;
}