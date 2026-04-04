//heros slider script
const slider = document.getElementById("heroSlider");
const dots = document.querySelectorAll(".dot");

let index = 0;
const totalSlides = dots.length;

function updateSlider(){

  slider.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot=>{
    dot.classList.remove("bg-black/70");
    dot.classList.add("bg-transparent");
  });

  dots[index].classList.remove("bg-transparent");
  dots[index].classList.add("bg-black/70");

}

dots.forEach((dot,i)=>{

  dot.addEventListener("click",()=>{
    index = i;
    updateSlider();
  });

});

function autoSlide(){

  index++;

  if(index >= totalSlides){
    index = 0;
  }

  updateSlider();

}

setInterval(autoSlide,5000);

//WHY CHOOSE US SECTION SCRIPT
     //============Why choose us animation==================
      document.addEventListener("DOMContentLoaded", () => {
        const cards = document.querySelectorAll("#why-choose .opacity-0");

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry, i) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  entry.target.classList.remove("opacity-0", "translate-y-10");
                }, i * 200); // delay for row-by-row effect
              }
            });
          },
          { threshold: 0.1 }
        );

        cards.forEach((card) => observer.observe(card));
      });
   

      // Counter Animation
       const counters = document.querySelectorAll('.counter');
  let started = false;

  const startCounter = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;

      const update = () => {
        const increment = target / 40; // speed

        if (count < target) {
          count += increment;
          counter.innerText = Math.floor(count) + (counter.innerText.includes('%') ? '%' : '+');
          requestAnimationFrame(update);
        } else {
          counter.innerText = target + (counter.innerText.includes('%') ? '%' : '+');
        }
      };

      update();
    });
  };

  // Trigger on view
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !started) {
        startCounter();
        started = true;
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(document.querySelector('.counter').parentElement);

  //boune effect for heading

