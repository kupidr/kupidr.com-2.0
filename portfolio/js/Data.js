export default () => {
  let allItems = document.getElementById("all-items");
  const portfolioOne = [
    {
      id: 1,
      heading: "Cleaning Services",
      image: "cleaning-service.webp",
      description:
        "This is my portfolio project named Cleaning Service. This project is created using HTML and CSS.",
      using: "css",
      liveLink: "https://kupidr.github.io/cleaning-service",
      sourceLink: "https://github.com/kupidr/cleaning-service.git",
    },
    {
      id: 2,
      heading: "E-commerce",
      image: "e-commerce-html-css.webp",
      description:
        "This is my portfolio project named E-commerce. This project is created using HTML and CSS.",
      using: "css",
      liveLink: "https://kupidr.github.io/e-commerce",
      sourceLink: "https://github.com/kupidr/e-commerce.git",
    },
    {
      id: 3,
      heading: "Creative-branding",
      image: "creative-branding.webp",
      description:
        "This is my portfolio project named Creative-branding. This project is created using HTML, CSS and SCSS.",
      using: "sass",
      liveLink: "https://kupidr.github.io/creative-branding",
      sourceLink: "https://github.com/kupidr/creative-branding",
    },
    {
      id: 4,
      heading: "E-commerce-brand",
      image: "e-commerce-brand.webp",
      description:
        "This is my portfolio project named E-commerce-brand. This project is created using HTML, CSS and SCSS.",
      using: "sass",
      liveLink: "https://kupidr.github.io/e-commerce-brand",
      sourceLink: "https://github.com/kupidr/e-commerce-brand",
    },
    {
      id: 5,
      heading: "Fast Food",
      image: "fast-food-dzo-1.webp",
      description: "Fast Food one page web page layout using HTML and CSS.",
      using: "css",
      liveLink: "https://kupidr.github.io/fast-food-dzo-1",
      sourceLink: "https://github.com/kupidr/fast-food-dzo-1.git",
    },
    {
      id: 6,
      heading: "Pottery Studio",
      image: "pottery-studio-dzo-2.webp",
      description: "Pottery Studio layout using HTML and CSS.",
      using: "css",
      liveLink: "https://kupidr.github.io/pottery-studio-dzo-2",
      sourceLink: "https://github.com/kupidr/pottery-studio-dzo-2.git",
    },
    {
      id: 7,
      heading: "Elegance",
      image: "elegance-dzo-3.webp",
      description: "Elegance One page web layout using HTML and CSS.",
      using: "css",
      liveLink: "https://kupidr.github.io/elegance-dzo-3",
      sourceLink: "https://github.com/kupidr/elegance-dzo-3.git",
    },
    {
      id: 8,
      heading: "Travel Hunter",
      image: "Travel-Hunter-dzo-4.webp",
      description: "The beautiful Travel Hunter web layout using HTML and CSS.",
      using: "css",
      liveLink: "https://kupidr.github.io/Travel-Hunter-dzo-4",
      sourceLink: "https://github.com/kupidr/Travel-Hunter-dzo-4.git",
    },
    {
      id: 9,
      heading: "Nature Beauty",
      image: "nature-beauty-dzo-05.webp",
      description: "Nature Beauty web layout using HTML and CSS.",
      using: "css",
      liveLink: "https://kupidr.github.io/nature-beauty-dzo-05",
      sourceLink: "https://github.com/kupidr/nature-beauty-dzo-05.git",
    },
    {
      id: 10,
      heading: "Everyday",
      image: "everyday-dzo-06.webp",
      description: "The beautiful one page web layout using HTML and CSS.",
      using: "css",
      liveLink: "https://kupidr.github.io/everyday-dzo-06",
      sourceLink: "https://github.com/kupidr/everyday-dzo-06.git",
    },
    {
      id: 11,
      heading: "Creative Learner",
      image: "creative-learner.webp",
      description: "The Creative Learner web layout using Bootstarp 5.",
      using: "bs",
      liveLink: "https://kupidr.github.io/creative-learner",
      sourceLink: "https://github.com/kupidr/creative-learner.git",
    },
    {
      id: 12,
      heading: "Innovated",
      image: "innovated.webp",
      description: "The Innovated beautiful web page layout using Bootstarp 5.",
      using: "bs",
      liveLink: "https://kupidr.github.io/innovated",
      sourceLink: "https://github.com/kupidr/innovated.git",
    },
    {
      id: 13,
      heading: "Planet",
      image: "planet.webp",
      description: "Planet a beautiful e-commerce landing page using bootstrap 5.",
      using: "bs",
      liveLink: "https://kupidr.github.io/planet",
      sourceLink: "https://github.com/kupidr/planet.git",
    },
  ];
  /*


    {
      id: 0,
      heading: "",
      image: "",
      description: "",
      using: "",
      liveLink: "",
      sourceLink: "",
    },

*/

  // --------------------- data end and output creation ---------------------
  portfolioOne.sort(function (a, b) {
    return b.id - a.id;
  });
  for (let i = 0; i < portfolioOne.length; i++) {
    let item = portfolioOne[i]

    let div = document.createElement("div");
    div.classList.add("col-lg-4");
    div.classList.add("col-md-6");
    div.setAttribute("id", item.using);
    allItems.appendChild(div);
    div.innerHTML = `
      <div class="item">
        <a href="${item.liveLink}" target="_blank">
          <div class="port-img" style="background-image: url(./portfolio_images/${item.image})"></div>
        </a>
        <div class="des">
          <h2>${item.heading} <span>${item.id}</span></h2>
          <p>${item.description}</p>
        </div>
        <div class="port-link">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-md-6 col-sm-6">
              <a href="${item.liveLink}" target="_blank"><i class="fas fa-eye-slash"></i></a>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-md-6 col-sm-6 text-end">
              <a href="${item.sourceLink}" target="_blank"><i class="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>`;
  }
};
