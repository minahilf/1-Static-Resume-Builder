var button = document.getElementById("edu-btn");
var education = document.getElementById("education");
button.addEventListener("click", function () {
    if (education.style.display === "none") {
        education.style.display = "block";
        button.textContent = "HIDE EDUCATION";
    }
    else {
        education.style.display = "none";
        button.textContent = "SHOW EDUCATION";
    }
});
