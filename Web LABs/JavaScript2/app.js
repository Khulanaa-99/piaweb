let count = 0;
const display = document.querySelector("#count");

function render () { display.textContent = count; }

document.querySelector("#plus").addEventListener("click", () => { count++; render(); });
document.querySelector("#munis").addEventListener("click", () => { count--; render(); });