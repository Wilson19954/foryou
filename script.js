let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop; 
        let height = sec.offsetHeight;

        // Verifica se o scroll está dentro da área da seção
        if(top >= offset && top < offset + height) {
            sec.classList.add("show-animate");
        } else {
            sec.classList.remove("show-animate");
        }
    });
}


/*document.addEventListener("DOMContentLoaded", () => {
  const ratin = document.querySelector(".ratin");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        ratin.classList.add("visible");
      } else {
        ratin.classList.remove("visible"); // se quiser sumir ao sair
      }
    });
  });
  observer.observe(ratin);
});*/