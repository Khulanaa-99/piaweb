const sizeButtons = document.querySelectorAll(".size-btn");
let selectedSize = null;
sizeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Бүх товчноос сонгогдсон загварыг авна
        sizeButtons.forEach((b) => {
            b.classList.remove("bg-sky-400", "text-slate-950");
        });
        // Дарагдсан товчинд загвар нэмнэ
        btn.classList.add("bg-sky-400", "text-slate-950");
        selectedSize = btn.textContent;
    });
});

const qtyText = document.querySelector("#qty");
let qty = 1;

document.querySelector("#plus")
    .addEventListener("click", () => {
        qty++;
        qtyText.textContent = qty;
    });
document.querySelector("#minus")
    .addEventListener("click", () => {
        if (qty > 1) {
            qty--;
            qtyText.textContent = qty;
        }
    });


const mainImage = document.querySelector("#main-image");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        mainImage.src = thumb.src;
    });
});

const cartCount = document.querySelector("#cart-count");
const message = document.querySelector("#message");
let cart = 0;

document.querySelector("#add-to-cart")
    .addEventListener("click", () => {
        if (selectedSize === null) {
            message.textContent = "Эхлээд хэмжээгээ сонгоно уу.";
            return;
        }
        cart += qty;
        cartCount.textContent = cart;
        message.textContent =
            `${selectedSize} хэмжээтэй ${qty} ширхэг нэмэгдлээ ✓`;
    });