document.addEventListener("DOMContentLoaded", function () {

  const filterButtons = document.querySelectorAll(".project-filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach((button) => {

    button.addEventListener("click", function () {

      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      projectItems.forEach((item) => {

        const itemCategory = item.getAttribute("data-category");

        if (filterValue === "all" || filterValue === itemCategory) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }

      });

    });

  });

  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {

    counter.innerText = "0";

    const updateCounter = () => {

      const target = Number(counter.getAttribute("data-target"));

      const current = Number(counter.innerText);

      const increment = Math.ceil(target / 40);

      if (current < target) {

        counter.innerText = current + increment;

        setTimeout(updateCounter, 40);

      } else {

        if (target === 100) {
          counter.innerText = "100%";
        } else if (target === 24) {
          counter.innerText = "24/7";
        } else {
          counter.innerText = target + "+";
        }

      }

    };

    updateCounter();

  });

  const contactForm = document.getElementById("portfolioContactForm");

  if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

      e.preventDefault();

      alert("Thank you! Your message has been sent successfully.");

      contactForm.reset();

    });

  }

  console.log("Portfolio Day 2 JS Loaded Successfully!");

});