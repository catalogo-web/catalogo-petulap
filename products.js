// ========== Ramdom whatsapp... ==========
function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}
// let phones = [918221790, 918654055];
let phones = [968767967, 959781385, 942770228];
let numberWA = random_item(phones);
// console.log(numberWA);
// ========== Ramdom whatsapp. ==========

let products = document.querySelector(".products");
let contentHTML = "";

fetch("data.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (items) {
    // console.log(items[0].id);
    // console.log(items[0].name);
    // console.log(items[0].img);

    // for
    // loop...
    for (let [index, item] of items.entries()) {
      let indexNum = ("0" + (index + 1)).slice(-2);
      contentHTML += /*html*/ `<!-- html... -->
<article class="product">
  <aside class="left">
    <div class="head">
      <span class="num"> ${indexNum} </span>
    </div>
    <img src="${item.img1}" alt="${item.id}" loading="lazy" />
  </aside>
  <aside class="right">
    <img src="${item.logo}" alt="${item.id}" loading="lazy" />
    <br />
    <div class="brand">
      <img src="${item.brand}" alt="" loading="lazy" />
      <span class="model">${item.model}</span>
    </div>
    <div class="hardware">
      <h4><i class="icon-compact-disc-solid"></i> ${item.disc}</h4>
      <h4><i class="icon-memory-solid"></i> ${item.memory}</h4>
      <h4><i class="icon-microchip-solid"></i> ${item.microchip}</h4>
      <h4><i class="icon-laptop-solid"></i> ${item.resolution}</h4>
    </div>

    <hr class="bd-black" />
    <h5 class="description">${item.description}</h5>
    <p class="optional">${item.optional}</p>
    <hr class="bd-black" />
    <div class="foot">
      <h4>${item.price_title}</h4>
      <h3 class="btn btn-price bg-red ${item.price_color}">${item.price}</h3>
      <a target="_blank" href="http://wa.me/51${numberWA}?text=¡Hola Petulap!, estoy interesad@ en adquirir una de sus computadoras o laptops...%0a%0a*${indexNum}-${item.id}*" class="info icon-whatsapp btn-price"></a>
      <p class="price_old_title">
        ${item.price_old_title}
        <s>${item.price_old}</s>
      </p>
    </div>
  </aside>
</article>
<hr class="hr100"/>
<!-- html. -->
`;
    }
    // loop.
    // abc1
    products.innerHTML = contentHTML;
    document.querySelectorAll(".hr100")[6].style.display = "none";
    document.querySelectorAll(".product")[7].insertAdjacentHTML("beforebegin", abc1);

    // abc2
    document.querySelectorAll(".hr100")[13].style.display = "none";
    document.querySelectorAll(".product")[14].insertAdjacentHTML("beforebegin", abc2);

    // abc3
    document.querySelectorAll(".hr100")[19].style.display = "none";
    document.querySelectorAll(".product")[20].insertAdjacentHTML("beforebegin", abc3);

    // abc4
    document.querySelectorAll(".hr100")[25].style.display = "none";
    document.querySelectorAll(".product")[26].insertAdjacentHTML("beforebegin", abc4);
  });
