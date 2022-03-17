function indexFooterAll() {
  let top = `
  <div class="container top">
        <div class="row">
          <div class="col-md-6 text-light">
            <h3 class="text-center">WEB DESIGN</h3>
            <p>
              I'm Kupid R (It's my brand name) professional Web Designer and
              WordPress themes customizer, I have been working as Freelance
              Graphic Designer for 4 years now I'm working on web design and
              development. I'm fortunate that my hobby meets also my profession,
              and I always detail in every work. I always try to make my client
              happy. If you need a skilled and communicative designer, Please
              Contact Me!
            </p>
            <div class="text-center mt-5">
              <a
                href="https://wa.me/+8801319-805503"
                target="_blank"
                class="fs-2 m-2 text-light"
                ><i class="fab fa-whatsapp"></i
              ></a>
              <a
                href="https://m.me/kupidr"
                target="_blank"
                class="fs-2 m-2 text-light"
                ><i class="fab fa-facebook-messenger"></i
              ></a>
              <a
                href="https://www.facebook.com/kupidr"
                target="_blank"
                class="fs-2 m-2 text-light"
                ><i class="fab fa-facebook"></i
              ></a>
              <a
                href="https://www.linkedin.com/in/kupidr/"
                target="_blank"
                class="fs-2 m-2 text-light"
                ><i class="fab fa-linkedin"></i
              ></a>
              <a
                href="https://www.youtube.com/channel/UCl3OWS-r-Ws_-NiNlk6VJKQ"
                target="_blank"
                class="fs-2 m-2 text-light"
                ><i class="fab fa-youtube"></i
              ></a>
              <a
                href="tel:+8801319-805503"
                target="_blank"
                class="fs-2 m-2 text-light"
                ><i class="fas fa-phone-alt"></i
              ></a>
            </div>
          </div>
          <div class="col-md-6">
            <form action="https://formspree.io/f/xdobnnbp" method="post">
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="Name"
                  name="Name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  name="Email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control"
                  name="message"
                  rows="3"
                  placeholder="Message ..."
                  required
                ></textarea>
              </div>
              <div class="mb-3">
                <button type="submit" class="btn mb-3">send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  `;
  let footer = `
  <div class="border-top footer-end">
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <p class="text-light">
          copyright &copy; 2022 by
          <a href="https://kupidr.com" class="text-decoration-none fw-bold">Kupid R</a>
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-end">
          <a href="#" class="text-decoration-none fw-bold">myPortfolio</a>
        </p>
      </div>
    </div>
  </div>
</div>
  `;
  document.querySelector("footer").innerHTML = top + footer;
}
function Footer() {
  let footer = `
  <div class="border-top footer-end">
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-6">
        <p class="text-light">
          copyright &copy; 2022 by
          <a href="https://kupidr.com" class="text-decoration-none fw-bold">Kupid R</a>
        </p>
      </div>
      <div class="col-md-6">
        <p class="text-end">
          <a href="#" class="text-decoration-none fw-bold">myPortfolio</a>
        </p>
      </div>
    </div>
  </div>
</div>
  `;
  document.querySelector("footer").innerHTML = footer;
}
export { indexFooterAll, Footer };
