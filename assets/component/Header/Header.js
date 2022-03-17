export default function () {
  let header = `
<div class="shadow-sm">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="https://kupidr.com"
              ><img src="./assets/images/kupidr.svg" alt="" height="50"
            /></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span><i class="fas fa-bars"></i></span>
            </button>
            <div
              class="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"
                    >Home</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>
  `;
  document.querySelector("header").innerHTML = header;
}
