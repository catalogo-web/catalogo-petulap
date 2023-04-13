// ========== ad4... ==========

let ad4 = /*html*/ `<!--  -->
<!-- ad4... -->

    <article class="ad4">
      <style>
        .ad4 {
          background-color: var(--color-1);
          padding: 0;
          background-image: url(ads/ad4a.webp);
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
        .ad4 h3 {
          max-width: 30ch;
          margin: auto;
        }
        .ad4::before {
          content: "";
          position: absolute;
          background: linear-gradient(90deg, #040c3c, #0000);
          inset: 0;
          z-index: -1;
        }
        .ad4 aside {
          padding: 1em;
          position: relative;
          flex: 1 1 30%;
          width: 100%;
          height: 100%;
        }

        .ad4 .logo {
          height: 7em;
          position: absolute;
          top: 15em;
          font-size: 1em;
        }
        .ad4 h2 {
          font-size: 3em;
        }
        .ad4 .pay {
          display: flex;
          /* align-items: center; */
          justify-content: flex-end;
          /* gap: 2em; */
          /* margin: 0 2em; */
          margin-right: 10em;
        }
        .ad4 .pay .icon {
          height: 6em;
          display: inline;
        }
        .ad4 .pay span {
          background-color: #5168e5;
          padding: 0.5em 1em;
          border-radius: 2em;
          font-size: 2em;
          font-weight: 700;
          margin: 0.5em;
          /* text-align: right; */
          min-width: 7em;
        }
        .ad4 .pay i {
          /* background-color: #5168e5; */
          /* padding: 0.5em 1em; */
          /* border-radius: 2em; */
          font-size: 2em;
          font-weight: 700;
        }
        .ad4 .icon-pay {
          height: 4em;
          margin: 1em;
          display: inline;
        }
        .ad4 .foot {
          margin-left: -1em;
        }
        .ad4 .text {
          position: absolute;
          right: -15em;
          /* left: 30em; */
          bottom: 2em;
          max-width: 25ch;
          transform: rotate(-7deg);
          font-size: 1em;
        }
        .ad4 .map {
          width: 100%;
        }
        .ad4 .peru {
          width: 30em;
          /* border: 1px solid #000; */
        }
        .ad4 a {
          font-size: 2em;
        }
        .ad4 .socials {
          display: flex;
          gap: 2em;
          font-size: 1.2em;
          margin-top: 1em;
          /* text-align: center; */
          /* align-items: center; */
          justify-content: center;
        }
        .ad4 .windows {
          display: flex;
          justify-content: center;
          gap: 1em;
        }
        .ad4 p {
          font-size: 2em;
        }
        .ad4 .windows-icon {
          height: 2em;
        }
        @media (min-width: 40rem) {
          .ad4 {
            /* margin: 1.5em; */
            font-size: 0.7vw;
            margin: 2em;
          }
        }
        @media (min-width: 65rem) {
          .ad4 {
            /* margin: 1.7em; */
            font-size: 0.5vw;
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
          <img src="ads/windows-10.svg" alt="" class="windows-icon" />
          <p>Windows 10</p>
        </div>
      </aside>
      <aside>
        <img src="svg/petulap-dark.svg" alt="" class="logo" />
      </aside>
    </article><!--  -->
`;

// ========== ad4. ==========
//