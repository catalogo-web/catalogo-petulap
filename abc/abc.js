// ========== abc1... ==========

let abc1 = /*html*/ `<!--  -->
<!-- abc1... -->

<article class="abc1">
  <style>
    .abc1 {
      background-color: var(--color-1);
      padding: 0;
      background-image: url(abc/abc1a.webp);
      background-size: cover;
      display: flex;
      color: white;
      text-align: center;
      position: relative;
      z-index: 0;
      font-size: 1.3vw;
      /* margin: 2em; */
    }
    .abc1 h3 {
      max-width: 30ch;
      margin: auto;
    }
    .abc1::before {
      content: "";
      position: absolute;
      background: linear-gradient(90deg, #081872, #0000);
      inset: 0;
      z-index: -1;
    }
    .abc1 aside {
      padding: 1em;
      position: relative;
    }

    .abc1 .logo {
      height: 7em;
    }
    .abc1 h2 {
      font-size: 3em;
    }
    .abc1 .pay {
      display: flex;
      align-items: center;
      /* justify-content: start; */
      gap: 2em;
      margin: 0 2em;
    }
    .abc1 .pay .icon {
      height: 6em;
      display: inline;
    }
    .abc1 .pay span {
      background-color: #5168e5;
      padding: 0.5em 1em;
      border-radius: 2em;
      font-size: 2em;
      font-weight: 700;
    }
    .abc1 .pay i {
      /* background-color: #5168e5; */
      /* padding: 0.5em 1em; */
      /* border-radius: 2em; */
      font-size: 2em;
      font-weight: 700;
    }
    .abc1 .icon-pay {
      height: 4em;
      margin: 1em;
      display: inline;
    }
    .abc1 .foot {
      margin-left: -1em;
    }
    .abc1 .text {
      position: absolute;
      right: -10em;
      /* left: 30em; */
      bottom: 2em;
      max-width: 20ch;
      transform: rotate(-15deg);
      font-size: 2em;
    }

    @media (min-width: 40rem) {
      .abc1 {
        /* margin: 1.5em; */
        font-size: 0.7vw; 
        margin: 2em;
      }
    }
    @media (min-width: 65rem) {
      .abc1 {
        /* margin: 1.7em; */
        font-size: 0.5vw;  
      }
    }
  </style>
  <aside>
    <img src="svg/petulap-dark.svg" alt="" class="logo" />
    <h3>ADQUIERE TU LAPTOP O COMPUTADORA CON NUESTROS</h3>
    <h2>METODOS DE PAGO</h2>
    <div class="pay">
      <img src="abc/cash.svg" alt="" class="icon" />
      <span>EFECTIVO</span>
    </div>
    <div class="pay">
      <img src="abc/mobile.svg" alt="" class="icon" />
      <span>TRANSFERENCIAS</span>
    </div>
    <div class="pay">
      <img src="abc/card.svg" alt="" class="icon" />
      <span>PAGO CON TARJETA</span>
    </div>
    <div class="pay foot">
      <img src="abc/pay.svg" alt="" class="icon-pay" />
      <i>y más</i>
    </div>
    <div class="text">
      <h3>!DESDE CUALQUIER PARTE DEL PERU!</h3>
    </div>
  </aside>
  <aside></aside>
</article>
<!-- abc1. -->
<!--  -->
`;

// ========== abc1. ==========
//
// ========== abc2... ==========

let abc2 = /*html*/ `<!--  -->
<!-- abc2... -->

    <article class="abc2">
      <style>
        .abc2 {
          background-color: var(--color-1);
          padding: 0;
          background-image: url(abc/abc2a.webp);
          background-size: cover;
          display: flex;
          color: white;
          text-align: center;
          position: relative;
          z-index: 0;
          font-size: 1.3vw;
          /* margin: 2em; */
          align-items: center;
        }
        .abc2 h3 {
          max-width: 30ch;
          margin: auto;
        }
        .abc2::before {
          content: "";
          position: absolute;
          background: linear-gradient(-90deg, #040c3c, #0000);
          inset: 0;
          z-index: -1;
        }
        .abc2 aside {
          padding: 1em;
          position: relative;
          flex: 1 1 30%;
        }

        .abc2 .logo {
          height: 7em;
        }
        .abc2 h2 {
          font-size: 3em;
        }
        .abc2 .pay {
          display: flex;
          align-items: center;
          /* justify-content: start; */
          gap: 2em;
          margin: 0 2em;
        }
        .abc2 .pay .icon {
          height: 6em;
          display: inline;
        }
        .abc2 .pay span {
          background-color: #5168e5;
          padding: 0.5em 1em;
          border-radius: 2em;
          font-size: 2em;
          font-weight: 700;
          margin: .5em auto;
        }
        .abc2 .pay i {
          /* background-color: #5168e5; */
          /* padding: 0.5em 1em; */
          /* border-radius: 2em; */
          font-size: 2em;
          font-weight: 700;
        }
        .abc2 .icon-pay {
          height: 4em;
          margin: 1em;
          display: inline;
        }
        .abc2 .foot {
          margin-left: -1em;
        }
        .abc2 .text {
          position: absolute;
          right: -13em;
          /* left: 30em; */
          bottom: 2em;
          max-width: 25ch;
          transform: rotate(-7deg);
          font-size: 1.2em;
        }
        .abc2 .map {
          width: 100%;
        }
        .abc2 .peru {
          width: 30em;
          /* border: 1px solid #000; */
        }
        @media (min-width: 40rem) {
          .abc2 {
            /* margin: 1.5em; */
            font-size: 0.5vw;
            margin: 2em;
          }
        }
        @media (min-width: 65rem) {
          .abc2 {
            /* margin: 1.7em; */
            font-size: 0.4vw;
          }
        }
      </style>
      <aside></aside>

      <aside>
        <img src="svg/petulap-dark.svg" alt="" class="logo" />
        <h2>
          ENVIOS A TODO <br />
          EL PERU
        </h2>
        <div class="pay">
          <span>SEGURIDAD EN LA ENTREGA</span>
        </div>
        <div class="pay">
          <span>PAGO CONTRA ENTREGA</span>
        </div>
        <h2>
          ENVIO 100% <br />
          GARANTIZADO
        </h2>
        <div class="text">
          <h3>!EN CUALQUIER PARTE DEL PERU COMPRA CON SEGURIDAD!</h3>
        </div>
      </aside>
      <aside class="map">
        <img src="abc/peru2.svg" alt="" class="peru">
      </aside>
    </article>
<!-- abc2. -->
<!--  -->
`;

// ========== abc2. ==========
//
// ========== abc3... ==========

let abc3 = /*html*/ `<!--  -->
<!-- abc3... -->

    <article class="abc3">
      <style>
        .abc3 {
          background-color: var(--color-1);
          padding: 0;
          background-image: url(abc/abc3a.webp);
          background-size: cover;
          display: flex;
          color: white;
          text-align: center;
          position: relative;
          z-index: 0;
          font-size: 1.1vw;
          /* margin: 2em; */
          align-items: center;
        }
        .abc3 h3 {
          max-width: 30ch;
          margin: auto;
        }
        .abc3::before {
          content: "";
          position: absolute;
          background: linear-gradient(-90deg, #040c3c, #0000);
          inset: 0;
          z-index: -1;
        }
        .abc3 aside {
          padding: 1em;
          position: relative;
          flex: 1 1 30%;
        }

        .abc3 .logo {
          height: 7em;
        }
        .abc3 h2 {
          font-size: 3em;
        }
        .abc3 .pay {
          display: flex;
          align-items: center;
          /* justify-content: start; */
          gap: 2em;
          margin: 0 2em;
        }
        .abc3 .pay .icon {
          height: 6em;
          display: inline;
        }
        .abc3 .pay span {
          background-color: #5168e5;
          padding: 0.5em 1em;
          border-radius: 2em;
          font-size: 2em;
          font-weight: 700;
          margin: 0.5em auto;
        }
        .abc3 .pay i {
          /* background-color: #5168e5; */
          /* padding: 0.5em 1em; */
          /* border-radius: 2em; */
          font-size: 2em;
          font-weight: 700;
        }
        .abc3 .icon-pay {
          height: 4em;
          margin: 1em;
          display: inline;
        }
        .abc3 .foot {
          margin-left: -1em;
        }
        .abc3 .text {
          position: absolute;
          right: -15em;
          /* left: 30em; */
          bottom: 2em;
          max-width: 25ch;
          transform: rotate(-7deg);
          font-size: 1em;
        }
        .abc3 .map {
          width: 100%;
        }
        .abc3 .peru {
          width: 30em;
          /* border: 1px solid #000; */
        }
        .abc3 a {
          font-size: 2em;
        }
        .abc3 .socials {
          display: flex;
          gap: 2em;
          font-size: 1.2em;
          margin-top: 1em;
          /* text-align: center; */
          /* align-items: center; */
          justify-content: center;
        }
        @media (min-width: 40rem) {
          .abc3 {
            /* margin: 1.5em; */
            font-size: 0.7vw;
            margin: 2em;
          }
        }
        @media (min-width: 65rem) {
          .abc3 {
            /* margin: 1.7em; */
            font-size: 0.5vw;
          }
        }
      </style>

      <aside>
        <h2>
          BENEFICIOS DE <br />
          COMPRAR EN PETULAP
        </h2>
        <img src="svg/petulap-dark.svg" alt="" class="logo" />
        <section>
          <div class="pay">
            <span>GARANTIA 6 MESES</span>
            <span>INSTALACION DE PROGRAMAS</span>
          </div>
          <div class="pay">
            <span>SOPORTE 3 AÑOS GRATIS </span>
            <span>PRODUCTO EN CAJA</span>
          </div>
          <div class="pay">
            <span>REGALOS POR SU COMPRA</span>
            <span>BOLETA O FACTURA</span>
          </div>
        </section>
        <h2>OFRECEMOS CALIDAD Y EL MEJOR SERVICIO PARA TI</h2>
        <div>
          <a href="#">www.petulap.com</a>
        </div>
        <div class="socials">
          <a href="https://instagram.com/petulap_computadoras/"><i class="icon-instagram"></i></a>
          <a href="https://facebook.com/PetulapComputadoras"><i class="icon-facebook"></i></a>
          <a href="#"><i class="icon-whatsapp"></i></a>
        </div>
      </aside>
    </article><!-- abc3. -->
<!--  -->
`;

// ========== abc3. ==========
//
// ========== abc4... ==========

let abc4 = /*html*/ `<!--  -->
<!-- abc4... -->

    <article class="abc4">
      <style>
        .abc4 {
          background-color: var(--color-1);
          padding: 0;
          background-image: url(abc/abc4a.webp);
          background-size: cover;
          display: flex;
          color: white;
          text-align: center;
          position: relative;
          z-index: 0;
          font-size: 0.8vw;
          /* margin: 2em; */
          align-items: center;
        }
        .abc4 h3 {
          max-width: 30ch;
          margin: auto;
        }
        .abc4::before {
          content: "";
          position: absolute;
          background: linear-gradient(90deg, #040c3c, #0000);
          inset: 0;
          z-index: -1;
        }
        .abc4 aside {
          padding: 1em;
          position: relative;
          /* flex: 1 1 30%; */
          /* width: 100%; */
          /* height: 100%; */
        }

        .abc4 .logo {
          height: 7em;
          /* position: absolute; */
          /* top: 15em; */
          /* font-size: 1em; */
        }
        .abc4 h2 {
          font-size: 3em;
        }
        .abc4 .pay {
          display: flex;
          /* align-items: center; */
          justify-content: flex-end;
          /* gap: 2em; */
          /* margin: 0 2em; */
          margin-right: 10em;
        }
        .abc4 .pay .icon {
          height: 6em;
          display: inline;
        }
        .abc4 .pay span {
          background-color: #5168e5;
          padding: 0.5em 1em;
          border-radius: 2em;
          font-size: 2em;
          font-weight: 700;
          margin: 0.5em;
          /* text-align: right; */
          min-width: 7em;
        }
        .abc4 .pay i {
          /* background-color: #5168e5; */
          /* padding: 0.5em 1em; */
          /* border-radius: 2em; */
          font-size: 2em;
          font-weight: 700;
        }
        .abc4 .icon-pay {
          height: 4em;
          margin: 1em;
          display: inline;
        }
        .abc4 .foot {
          margin-left: -1em;
        }
        .abc4 .text {
          position: absolute;
          right: -15em;
          /* left: 30em; */
          bottom: 2em;
          max-width: 25ch;
          transform: rotate(-7deg);
          font-size: 1em;
        }
        .abc4 .map {
          width: 100%;
        }
        .abc4 .peru {
          width: 30em;
          /* border: 1px solid #000; */
        }
        .abc4 a {
          font-size: 2em;
        }
        .abc4 .socials {
          display: flex;
          gap: 2em;
          font-size: 1.2em;
          margin-top: 1em;
          /* text-align: center; */
          /* align-items: center; */
          justify-content: center;
        }
        .abc4 .windows {
          display: flex;
          justify-content: center;
          gap: 1em;
        }
        .abc4 p {
          font-size: 2em;
        }
        .abc4 .windows-icon {
          height: 2em;
        }
        @media (min-width: 40rem) {
          .abc4 {
            /* margin: 1.5em; */
            font-size: 0.5vw;
            margin: 2em;
          }
        }
        @media (min-width: 65rem) {
          .abc4 {
            /* margin: 1.7em; */
            font-size: 0.35vw;
          }
        }
      </style>

      <aside>
        <h2>
          MEJORA <br />
          LAS CARACTERISTICAS <br />
          DE TU LAPTOP
        </h2>
        <section>
          <div class="pay">
            <span>4GB RAM</span>
            <span>80 SOLES</span>
          </div>
          <div class="pay">
            <span>8GB RAM</span>
            <span>140 SOLES</span>
          </div>
          <div class="pay">
            <span>DISCO SOLIDO 120GB SSD</span>
            <span>75 SOLES</span>
          </div>
          <div class="pay">
            <span>DISCO SOLIDO 256GB SSD</span>
            <span>100 SOLES</span>
          </div>
          <div class="pay">
            <span>DISCO SOLIDO 512GB SSD</span>
            <span>190 SOLES</span>
          </div>
        </section>
        <h2>INSTALACION GRATIS</h2>
        <div class="windows">
          <img src="abc/windows-10.svg" alt="" class="windows-icon" />
          <p>Windows 10</p>
        </div>
      </aside>
      <aside>
        <img src="svg/petulap-dark.svg" alt="" class="logo" />
      </aside>
    </article><!--  -->
`;

// ========== abc4. ==========
//