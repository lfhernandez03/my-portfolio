document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".section-transition");
  console.log("Sections to observe:", sections);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log("Entry:", entry);
        if (entry.isIntersecting) {
          console.log("Intersecting:", entry.target);
          entry.target.classList.add("section-transition-active");
        } else {
          console.log("Not intersecting:", entry.target);
          entry.target.classList.remove("section-transition-active");
        }
      });
    },
    {
      threshold: 0.3, // Se activa cuando el 30% de la sección es visible
    }
  );

  sections.forEach((section) => {
    console.log("Observing section:", section);
    observer.observe(section);
  });
});
