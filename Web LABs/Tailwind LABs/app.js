// product.html хуудасны JavaScript
// Санаа: JS нь Tailwind-ийн class-уудыг нэмж / хасаж загварыг өөрчилнө.

// ---------- АЛХАМ 8: Хэмжээ сонгох ----------
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

// TODO: товч бүрт "click" сонсогч нэм.
//   1. Бүх товчноос "bg-sky-400", "text-slate-950" class-ыг хас
//   2. Дарагдсан товчинд тэр хоёр class-ыг нэм
//   3. selectedSize-д товчны текстийг хадгал


// ---------- АЛХАМ 9: Тоо ширхэг ----------
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

// TODO: #plus дарахад qty нэгээр нэмэгдэж, дэлгэцэнд шинэчлэгдэнэ

// TODO: #minus дарахад qty нэгээр хасагдана (1-ээс бага болохгүй)


// ---------- АЛХАМ 9: Жижиг зураг дарахад том зураг солигдох ----------
const mainImage = document.querySelector("#main-image");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
        mainImage.src = thumb.src;
    });
});

// TODO: жижиг зураг бүрт "click" сонсогч нэм.
//   1. mainImage.src-д дарагдсан зургийн src-ийг өг
//   2. Хүрээний өнгийг соль: "border-sky-400" ба "border-transparent"


// ---------- АЛХАМ 10: Сагслах ----------
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
// TODO: #add-to-cart дарахад:
//   - хэмжээ сонгоогүй бол "Эхлээд хэмжээгээ сонгоно уу." гэж бич
//   - сонгосон бол cart-д qty-г нэмж, сагсны тоо болон мэдэгдлийг шинэчил
