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
       SCROLL REVEAL
    ========================= */

    const revealElements =
      document.querySelectorAll(
        ".reveal"
      );


    const revealObserver =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(
            function (entry) {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "show"
                );


                revealObserver.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: 0.15
        }
      );


    revealElements.forEach(
      function (element) {

        revealObserver.observe(
          element
        );

      }
    );



    /* =========================
       SUB NAVIGATION
    ========================= */

    const subLinks =
      document.querySelectorAll(
        ".sub-navigation a"
      );


    const sections =
      document.querySelectorAll(
        "#company, #philosophy, #history"
      );



    subLinks.forEach(
      function (link) {

        link.addEventListener(
          "click",
          function (event) {

            event.preventDefault();


            const targetId =
              link.getAttribute(
                "href"
              );


            const target =
              document.querySelector(
                targetId
              );


            if (
              target
            ) {

              const headerHeight =
                header.offsetHeight;


              const subNavigation =
                document.querySelector(
                  ".sub-navigation"
                );


              const subNavigationHeight =
                subNavigation.offsetHeight;


              const targetPosition =
                target.offsetTop
                - headerHeight
                - subNavigationHeight;


              window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
              });

            }

          }
        );

      }
    );



    /* =========================
       SUB NAVIGATION ACTIVE
    ========================= */

    function updateSubNavigation() {

      const scrollPosition =
        window.scrollY
        + header.offsetHeight
        + 120;


      sections.forEach(
        function (section) {

          const sectionTop =
            section.offsetTop;


          const sectionBottom =
            sectionTop
            + section.offsetHeight;


          if (
            scrollPosition >= sectionTop
            &&
            scrollPosition < sectionBottom
          ) {

            const sectionId =
              section.getAttribute(
                "id"
              );


            subLinks.forEach(
              function (link) {

                link.classList.remove(
                  "active"
                );


                if (
                  link.getAttribute(
                    "href"
                  )
                  ===
                  "#"
                  + sectionId
                ) {

                  link.classList.add(
                    "active"
                  );

                }

              }
            );

          }

        }
      );

    }


    window.addEventListener(
      "scroll",
      updateSubNavigation
    );


    updateSubNavigation();


  }
);