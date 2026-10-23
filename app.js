console.log("Develop by SanchitBuilds.com");

const themeBtn = document.querySelector("#themeBtn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});


const calculateBtn = document.querySelector("#calculateBtn")
// console.log(calculateBtn);



calculateBtn.addEventListener("click", function () {
    console.log("Calculate button clicked!");
});



const ctcInput = document.querySelector("#ctcInput");
calculateBtn.addEventListener("click", function () {

    ctcInput.addEventListener("input", function () {
        document.querySelector("#ctcError").textContent = "";
    });

    const ctcError = document.querySelector("#ctcError");

    if (ctcInput.value.trim() === "") {



        // console.log("Please enter your CTC");
        document.querySelector("#ctcError").textContent =
            "Please enter your CTC !";

        resetResults();

        return;
    }

    const ctc = Number(ctcInput.value);
    console.log(ctc);

    function resetResults() {
        document.querySelector("#monthlyCTCResult").textContent = "₹0";
        document.querySelector("#monthlyGrossResult").textContent = "₹0";
        document.querySelector("#monthlyDeductionsResult").textContent = "₹0";
        document.querySelector("#monthlyTakeHomeResult").textContent = "₹0";
    }


    if (!Number.isFinite(ctc) || ctc <= 0) {



        // console.log("Please enter a valid CTC");
        document.querySelector("#ctcError").textContent =
            "Please enter a valid CTC !";

        resetResults();
        return;
    }


    if (ctc > 100000) {
        ctcError.textContent = "Maximum CTC allowed is ₹1,000 crore!";
        resetResults();
        return;
    }


    ctcError.textContent = "";

    // Scroll only after valid input
    document.querySelector("#take-home").scrollIntoView({
        behavior: "smooth"
    });


    const monthlyCTC = (ctc * 100000) / 12;
    // console.log(monthlyCTC);

    const formattedSalary1 = monthlyCTC.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR"
    });

    // console.log(formattedSalary1);
    document.querySelector("#monthlyCTCResult").textContent = formattedSalary1;
    document.querySelector("#monthlyGrossResult").textContent = formattedSalary1;



    const monthlyDeductions = (monthlyCTC * 10) / 100;

    const formattedSalary2 = monthlyDeductions.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR"
    });

    // console.log(formattedSalary2);
    document.querySelector("#monthlyDeductionsResult").textContent = formattedSalary2;


    const monthlyTakehome = (monthlyCTC - monthlyDeductions);

    const formattedSalary3 = monthlyTakehome.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR"
    });

    // console.log(formattedSalary3);
    document.querySelector("#monthlyTakeHomeResult").textContent = formattedSalary3;

    document.querySelector("#take-home").classList.remove("result-animate");

    void document.querySelector("#take-home").offsetWidth;

    document.querySelector("#take-home").classList.add("result-animate");

});

