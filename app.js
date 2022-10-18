// Arr of all cards
const cards = document.querySelectorAll(".card");

// On default set first element active
cards[0].classList.add("active");

// Current step
let step = 0;

// Event listener for keyboard
window.addEventListener(
  "keydown",
  (event) => {
    // If arrow right clicked
    if (event.key === "ArrowRight") {
      // Remove class active if it exists
      if (document.querySelector(".active") !== null) {
        document.querySelector(".active").classList.remove("active");
      }

      // Increase step by 1
      step++;

      // If it comes to the end, set step equal 0
      if (step === cards.length) {
        step = 0;
      }

      // Add class active to the element
      cards[step].classList.add("active");
    }

    // If arrow left clicked
    else if (event.key === "ArrowLeft") {
      // Remove class active if it exists
      if (document.querySelector(".active") !== null) {
        document.querySelector(".active").classList.remove("active");
      }

      // Decrease step by 1
      step--;

      // If it comes to the end, set step equal array lenght
      if (step === -1) {
        step = cards.length - 1;
      }

      // Add class active to the element
      cards[step].classList.add("active");
    }
  },
  true
);

// On click
// for (const card of cards) {
//   card.addEventListener("click", (e) => {
//     if (document.querySelector(".active") !== null) {
//       document.querySelector(".active").classList.remove("active");
//     }
//     e.target.classList.add("active");
//     console.log(e.key);
//   });
// }
