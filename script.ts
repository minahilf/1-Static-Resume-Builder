const button = document.getElementById("edu-btn") as HTMLButtonElement
const education = document.getElementById("education") as HTMLElement

button.addEventListener("click", () => {
    if(education.style.display === "none"){
        education.style.display = "block"
        button.textContent = "HIDE EDUCATION"
    } else {
        education.style.display = "none"
        button.textContent = "SHOW EDUCATION"
    }


});