document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* =========================
       HEADER
    ========================= */

    const header =
      document.querySelector(
        "#header"
      );


    const gnbLinks =
      document.querySelectorAll(
        ".gnb a"
      );


    gnbLinks.forEach(
      function (link) {

        link.addEventListener(
          "click",
          function (event) {

            event.preventDefault();


            gnbLinks.forEach(
              function (item) {

                item.classList.remove(
                  "active"
                );

              }
            );


            link.classList.add(
              "active"
            );

          }
        );

      }
    );



    /* =========================
       HEADER SCROLL
    ========================= */

    function headerScroll() {

      if (
        window.scrollY > 30
      ) {

        header.classList.add(
          "scroll"
        );

      } else {

        header.classList.remove(
          "scroll"
        );

      }

    }


    window.addEventListener(
      "scroll",
      headerScroll
    );


    headerScroll();



    /* =========================
       MAIN VISUAL
    ========================= */

    const visualSlides =
      document.querySelectorAll(
        ".visual-slide"
      );


    const visualDots =
      document.querySelectorAll(
        ".visual-dot"
      );


    let visualIndex = 0;

    let visualTimer;



    function showVisualSlide(
      index
    ) {

      visualSlides.forEach(
        function (slide) {

          slide.classList.remove(
            "active"
          );

        }
      );


      visualDots.forEach(
        function (dot) {

          dot.classList.remove(
            "active"
          );

        }
      );


      visualSlides[index]
        .classList.add(
          "active"
        );


      visualDots[index]
        .classList.add(
          "active"
        );


      visualIndex = index;

    }



    function nextVisualSlide() {

      let nextIndex =
        visualIndex + 1;


      if (
        nextIndex >=
        visualSlides.length
      ) {

        nextIndex = 0;

      }


      showVisualSlide(
        nextIndex
      );

    }



    function startVisualSlider() {

      visualTimer =
        setInterval(
          nextVisualSlide,
          5500
        );

    }



    function resetVisualSlider() {

      clearInterval(
        visualTimer
      );

      startVisualSlider();

    }



    visualDots.forEach(
      function (
        dot,
        index
      ) {

        dot.addEventListener(
          "click",
          function () {

            showVisualSlide(
              index
            );

            resetVisualSlider();

          }
        );

      }
    );


    startVisualSlider();



    /* =========================
       SEARCH
    ========================= */

    const searchInput =
      document.querySelector(
        ".search-box input"
      );


    const searchButton =
      document.querySelector(
        ".search-box button"
      );



    function searchKeyword() {

      const keyword =
        searchInput.value.trim();


      if (
        keyword === ""
      ) {

        searchInput.focus();

        return;

      }


      console.log(
        "검색어:",
        keyword
      );

    }



    searchButton.addEventListener(
      "click",
      searchKeyword
    );


    searchInput.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Enter"
        ) {

          searchKeyword();

        }

      }
    );



    /* =========================
       PRODUCT SLIDER
    ========================= */

    const productSlides =
      document.querySelectorAll(
        ".product-slide"
      );


    const productDots =
      document.querySelectorAll(
        ".product-dot"
      );


    let productIndex = 0;



    function showProduct(
      index
    ) {

      if (
        index < 0
      ) {

        index =
          productSlides.length - 1;

      }


      if (
        index >=
        productSlides.length
      ) {

        index = 0;

      }


      productSlides.forEach(
        function (slide) {

          slide.classList.remove(
            "active"
          );

        }
      );


      productDots.forEach(
        function (dot) {

          dot.classList.remove(
            "active"
          );

        }
      );


      productSlides[index]
        .classList.add(
          "active"
        );


      productDots[index]
        .classList.add(
          "active"
        );


      productIndex = index;

    }



    document.addEventListener(
      "click",
      function (event) {


        const prevButton =
          event.target.closest(
            ".product-prev"
          );


        const nextButton =
          event.target.closest(
            ".product-next"
          );


        if (prevButton) {

          showProduct(
            productIndex - 1
          );

        }


        if (nextButton) {

          showProduct(
            productIndex + 1
          );

        }

      }
    );



    productDots.forEach(
      function (
        dot,
        index
      ) {

        dot.addEventListener(
          "click",
          function () {

            showProduct(
              index
            );

          }
        );

      }
    );


    showProduct(0);


  }
);