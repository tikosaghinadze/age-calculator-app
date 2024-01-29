document.addEventListener('DOMContentLoaded', function () {
    // Reset input fields on page load
    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value = "";

    const arrowBtn = document.querySelector(".arrow-svg");

    // Get the original color before any modifications
    const originalColor = window.getComputedStyle(arrowBtn).getPropertyValue("background-color");

    arrowBtn.addEventListener("click", () => {
        // Check if results are already calculated
        const resultsCalculated = document.getElementById("result-year").textContent !== "--";

        if (resultsCalculated) {
            // Reset button color
            arrowBtn.style.backgroundColor = originalColor;

            // Clear input fields
            document.getElementById("day").value = "";
            document.getElementById("month").value = "";
            document.getElementById("year").value = "";

            // Reset results to placeholders
            document.getElementById("result-year").textContent = "--";
            document.getElementById("result-month").textContent = "--";
            document.getElementById("result-day").textContent = "--";

            // Clear errors
            document.querySelector(".error-day").textContent = "";
            document.querySelector(".error-month").textContent = "";
            document.querySelector(".error-year").textContent = "";
        } else {
            // Set button color to black
            arrowBtn.style.backgroundColor = "black";

            /*****************/
            /*age calculate form*/
            /*****************/
            const dayInput = Number(document.getElementById("day").value);
            const monthInput = Number(document.getElementById("month").value);
            const yearInput = Number(document.getElementById("year").value);

            const resultYear = document.getElementById("result-year");
            const resultMonth = document.getElementById("result-month");
            const resultDay = document.getElementById("result-day");

            const errorDay = document.querySelector(".error-day");
            const errorMonth = document.querySelector(".error-month");
            const errorYear = document.querySelector(".error-year");

            // Clear errors
            errorDay.textContent = "";
            errorMonth.textContent = "";
            errorYear.textContent = "";

            // Get current date
            const currentDate = new Date();
            const currentDay = currentDate.getDate();
            const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
            const currentYear = currentDate.getFullYear();

            if (!yearInput || yearInput > currentYear || (yearInput === currentYear && monthInput > currentMonth)) {
                errorYear.textContent = "Must be in the past";
                arrowBtn.style.backgroundColor = originalColor; // Reset color
            } else {
                let resultY = currentYear - yearInput;
                if (monthInput > currentMonth || (monthInput === currentMonth && dayInput > currentDay)) {
                    resultY -= 1;
                }
                resultYear.textContent = resultY;
            }

            if (monthInput < 1 || monthInput > 12) {
                errorMonth.textContent = "Must be a valid month";
                arrowBtn.style.backgroundColor = originalColor; // Reset color
            } else {
                let resultM = currentMonth - monthInput;
                if (resultM < 1) {
                    resultM = resultM + 12;
                    resultMonth.textContent = resultM;
                } else {
                    resultMonth.textContent = resultM;
                }
            }

            if (dayInput < 1 || dayInput > 31) {
                errorDay.textContent = "Must be a valid day";
                arrowBtn.style.backgroundColor = originalColor; // Reset color
            } else {
                let resultD = currentDay - dayInput;
                if (resultD < 1) {
                    resultD = resultD + 31;
                    resultDay.textContent = resultD;
                } else {
                    resultDay.textContent = resultD;
                }
            }
        }
    });
});
