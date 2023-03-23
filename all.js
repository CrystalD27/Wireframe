document.addEventListener("DOMContentLoaded", function () {
  "use strict";
  const question1 = document.getElementById("question1");
  const subquestion_A = document.getElementById("subquestion_A");
  const subquestion_A1 = document.getElementById("subquestion_A1");
  const subquestion_B = document.getElementById("subquestion_B");
  const subquestion_B1_1 = document.getElementById("subquestion_B1_1");
  const subquestion_B1_1_2 = document.getElementById("subquestion_B1_1_2");
  const question2 = document.getElementById("question2");

  const formInputLabels = document.querySelectorAll(
    ".form__input-type, .form__input-question"
  );

  function hideAll() {
    for (const label of formInputLabels) {
      label.style.display = "none";
    }
    subquestion_A.closest(".form__input").style.display = "none";
    subquestion_A1.closest(".form__input").style.display = "none";
    subquestion_B.closest(".form__input").style.display = "none";
    subquestion_B1_1.closest(".form__input").style.display = "none";
    subquestion_B1_1_2.closest(".form__input").style.display = "none";
    question2.closest(".form__input").style.display = "none";
  }

  function showElement(element) {
    element.closest(".form__input-question").style.display = "flex";
    element.closest(".form__input-question").nextElementSibling.style.display =
      "flex";
  }
  hideAll();
  showElement(question1);
  //question 1
  question1.addEventListener("blur", function () {
    if (
      question1.value.toLowerCase() !== "yes" &&
      question1.value.toLowerCase() !== "no"
    ) {
      question2.closest(".form__input").style.display = "none";
      subquestion_A.closest(".form__input").style.display = "none";
      document.getElementById("question_1_error").textContent =
        "Please answer either 'yes' or 'no'";
    }
    if (!question1.value.trim()) {
      document.getElementById("question_1_error").textContent =
        "Can't be blank";
    } else if (question1.value.toLowerCase() === "yes") {
      showElement(subquestion_A);
      subquestion_A.closest(".form__input").style.display = "flex";
      question2.closest(".form__input").style.display = "none";
    } else if (question1.value.toLowerCase() === "no") {
      showElement(question2);
      question2.closest(".form__input").style.display = "flex";
      subquestion_A.closest(".form__input").style.display = "none";
      subquestion_A1.closest(".form__input").style.display = "none";
      subquestion_B.closest(".form__input").style.display = "none";
      subquestion_B1_1.closest(".form__input").style.display = "none";
      subquestion_B1_1_2.closest(".form__input").style.display = "none";
    } else {
      console.log("nothing happened");
    }
    question1.addEventListener("input", function () {
      document.getElementById("question_1_error").textContent = "";
    });
  });

  //subquestion_A
  subquestion_A.addEventListener("blur", function () {
    if (!subquestion_A.value.trim()) {
      document.getElementById("subquestion_A_error").textContent =
        "Can't be blank";
    } else if (subquestion_A.value.toLowerCase() === "it") {
      showElement(subquestion_A1);
      document.getElementById("subquestion_A_error").textContent = "";
      subquestion_A1.closest(".form__input").style.display = "flex";
      subquestion_B.closest(".form__input").style.display = "none";
      subquestion_B1_1.closest(".form__input").style.display = "none";
      subquestion_B1_1_2.closest(".form__input").style.display = "none";
      question2.closest(".form__input").style.display = "none";
    } else {
      showElement(subquestion_B);
      document.getElementById("subquestion_A_error").textContent = "";
      subquestion_B.closest(".form__input").style.display = "flex";
      subquestion_A1.closest(".form__input").style.display = "none";
      subquestion_B1_1.closest(".form__input").style.display = "none";
      subquestion_B1_1_2.closest(".form__input").style.display = "none";
      question2.closest(".form__input").style.display = "none";
    }
  });
  subquestion_A.addEventListener("input", function () {
    document.getElementById("subquestion_A_error").textContent = "";
  });

  //subquestion_A1
  subquestion_A1.addEventListener("blur", function () {
    if (!subquestion_A1.value.trim()) {
      document.getElementById("subquestion_A1_error").textContent =
        "can't be blank";
    } else if (subquestion_A1.value) {
      showElement(subquestion_B);
      subquestion_B.closest(".form__input").style.display = "flex";
    }
    subquestion_A1.addEventListener("input", function () {
      document.getElementById("subquestion_A1_error").textContent = "";
    });
  });

  //subquestion_B
  subquestion_B.addEventListener("blur", function () {
    if (!subquestion_B.value.trim()) {
      document.getElementById("subquestion_B_error").textContent =
        "can't be blank";
    } else if (parseInt(subquestion_B.value) >= 4) {
      showElement(subquestion_B1_1);
      subquestion_B1_1.closest(".form__input").style.display = "flex";
      subquestion_B1_1_2.closest(".form__input").style.display = "none";
      question2.closest(".form__input").style.display = "none";
    } else if (
      parseInt(subquestion_B.value) < 4 &&
      parseInt(subquestion_B.value) > 0
    ) {
      showElement(question2);
      question2.closest(".form__input").style.display = "flex";
      subquestion_B1_1.closest(".form__input").style.display = "none";
      subquestion_B1_1_2.closest(".form__input").style.display = "none";
    } else {
      question2.closest(".form__input").style.display = "none";
      subquestion_B1_1.closest(".form__input").style.display = "none";
      document.getElementById("subquestion_B_error").textContent =
        "The number is greater than 0 ";
    }
    subquestion_B.addEventListener("input", function () {
      document.getElementById("subquestion_B_error").textContent = "";
    });
  });

  //subquestion_B1_1
  subquestion_B1_1.addEventListener("blur", function () {
    if (
      subquestion_B1_1.value.toLowerCase() !== "yes" &&
      subquestion_B1_1.value.toLowerCase() !== "no"
    ) {
      subquestion_B1_1_2.closest(".form__input").style.display = "none";
      question2.closest(".form__input").style.display = "none";
      document.getElementById("subquestion_B1_1_error").textContent =
        "Please answer either 'yes' or 'no'";
    }
    if (!subquestion_B1_1.value.trim()) {
      document.getElementById("subquestion_B1_1_error").textContent =
        "can't be blank";
    } else if (subquestion_B1_1.value.toLowerCase() === "no") {
      showElement(subquestion_B1_1_2);
      subquestion_B1_1_2.closest(".form__input").style.display = "flex";
      question2.closest(".form__input").style.display = "none";
    } else if (subquestion_B1_1.value.toLowerCase() === "yes") {
      showElement(question2);
      question2.closest(".form__input").style.display = "flex";
      subquestion_B1_1_2.closest(".form__input").style.display = "none";
    }
    subquestion_B1_1.addEventListener("input", function () {
      document.getElementById("subquestion_B1_1_error").textContent = "";
    });
  });

  //subquestion_B1_1_2
  subquestion_B1_1_2.addEventListener("blur", function () {
    if (
      subquestion_B1_1_2.value.toLowerCase() !== "yes" &&
      subquestion_B1_1_2.value.toLowerCase() !== "no"
    ) {
      question2.closest(".form__input").style.display = "none";
      document.getElementById("subquestion_B1_1_2_error").textContent =
        "Please answer either 'yes' or 'no'";
    }
    if (!subquestion_B1_1_2.value.trim()) {
      document.getElementById("subquestion_B1_1_2_error").textContent =
        "can't be blank";
    } else if (
      subquestion_B1_1_2.value.toLowerCase() === "yes" ||
      subquestion_B1_1_2.value.toLowerCase() === "no"
    ) {
      showElement(question2);
      question2.closest(".form__input").style.display = "flex";
      document.getElementById("subquestion_B1_1_2_error").textContent = "";
    }
  });
});

//qeustion2
question2.addEventListener("blur", function () {
  if (!question2.value.trim()) {
    document.getElementById("question2_error").textContent = "can't be blank";
  } else document.getElementById("question2_error").textContent = "";
});
