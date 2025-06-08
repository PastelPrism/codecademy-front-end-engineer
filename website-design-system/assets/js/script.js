document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert(`Yay! Your clicked A random ${button.textContent} button!`);
        });
    });
});