export default function () {
    const preventButtons = document.querySelectorAll(".button-prevent");
    const prevent = (e) => e.preventDefault();
    for(let i = preventButtons.length; i--; ) {
        preventButtons[i].addEventListener('click', prevent);
    } 
};