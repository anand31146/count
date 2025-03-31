function startCountdown() {
    const birthdayInput = document.getElementById("birthday").value;
    if (!birthdayInput) {
        alert("Please select a valid date!");
        return;
    }

    const birthdayDate = new Date(birthdayInput);
    const now = new Date();
    birthdayDate.setFullYear(now.getFullYear()); // Keep it in the same year

    if (birthdayDate < now) {
        birthdayDate.setFullYear(now.getFullYear() + 1);
    }

    function updateCountdown() {
        const now = new Date();
        const timeLeft = birthdayDate - now;

        if (timeLeft <= 0) {
            document.getElementById("countdown").innerHTML = "🎉 Happy Birthday! 🎂";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}
