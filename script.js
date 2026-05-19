const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    const quoteForm = document.querySelector("#quoteForm");

    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });

    quoteForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(quoteForm);
      const message = [
        "Hello Krisha Infotech, I need a service quotation.",
        "",
        `Name: ${formData.get("name") || ""}`,
        `Phone: ${formData.get("phone") || ""}`,
        `Email: ${formData.get("email") || ""}`,
        `Service: ${formData.get("service") || "Not selected"}`,
        `Requirement: ${formData.get("message") || ""}`
      ].join("\n");

      window.open(`https://wa.me/919004244445?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    });

