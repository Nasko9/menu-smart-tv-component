const cards = document.querySelectorAll(".card");
let indexRight = -1;
let indexLeft = cards.length;

// for (const card of cards) {
//   card.addEventListener("click", (e) => {
//     if (document.querySelector(".active") !== null) {
//       document.querySelector(".active").classList.remove("active");
//     }
//     e.target.classList.add("active");
//     console.log(e.key);
//   });
// }

window.addEventListener(
  "keydown",
  (event) => {
    if (event.key === "ArrowRight") {
      if (document.querySelector(".active") !== null) {
        document.querySelector(".active").classList.remove("active");
      }
      indexRight++;

      if (indexRight === cards.length) {
        indexRight = 0;
      }

      cards[indexRight].classList.add("active");
    } else if (event.key === "ArrowLeft") {
      if (document.querySelector(".active") !== null) {
        document.querySelector(".active").classList.remove("active");
      }
      indexLeft--;

      if (indexLeft === -1) {
        indexLeft = cards.length - 1;
      }
      console.log(indexLeft);
      cards[indexLeft].classList.add("active");
    }
  },
  true
);
//! Mana ovakvog pristupa je da on ne yna na kojoj je kartici trenutno jer npr ide desno desno i onda kada se pritisne levo vrati se na kraj jer od kraja krece mora da se razradi da bi on mogao da ide levo desno
//Todo: Potrebno je da pamti na kojoj je trenutno kartici tako da se napravi i preko toga lefo je minus 1 a desno je plus jedan
//Todo: To ce se saznati da li ima aktivnu klasu ako ima onda se brise
// id mora da se gadja sa korakom u kome se nalazi
