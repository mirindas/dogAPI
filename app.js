let dogArray = []; // array to store picture Urls
let position = -1; // global counter for array position
let mainPage = document.querySelector(".container");
let picture = document.querySelector("img");

// κανε μια function ωστε να εχεις 2 εικονες στο καρουσελ, που να εναλασονται
// if position % 2 load sto 2 pic αλλιως load στο πρωτο


function fetchPicture() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      picture.setAttribute("src", data.message);
      dogArray.push(data.message);
      mainPage.append(picture);
      position = dogArray.length - 1;
    });
}

fetchPicture(); // Call fetchPicture when the page loads so the image element doesnt stay empty

function showPicture() {
  picture.setAttribute("src", dogArray[position]);
  mainPage.append(picture);
}

document.getElementById("previousDog").addEventListener("click", () => {
  if (position <= 0) {
    return;
  }
  position--;
  showPicture();
});

document.getElementById("nextDog").addEventListener("click", () => {
  if (position >= dogArray.length - 1) {
    fetchPicture();
  } else {
    position++;
    showPicture();
  }
});

// document.getElementById("getDog").addEventListener("click", () => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((data) => {
//       picture.setAttribute("src", data.message);
//       dogArray.push(data.message);
//       mainPage.append(picture);
//       position = dogArray.length - 1;
//     });
// });

//        MY ORIGINAL CODE
// document.getElementById("fck").addEventListener("click", () => {
//   fetch('https://dog.ceo/api/breeds/image/random')
//   .then(response => response.json())
//   .then(data => {
//     let smt = document.querySelector("body");
//     let awe = document.querySelector("img")
//     awe.setAttribute("src", data.message)
//     console.log(data.message)
//     smt.append(awe);
//   }
//   )
// });

// document.getElementById("nextDog").addEventListener("click", () => {
//   let mainPage = document.querySelector(".container");
//   let picture = document.querySelector("img");
//   let currentAttr = dogArray[dogArray.length - 1];
//   let currentPic = picture.getAttribute("src");
//   if (currentAttr != currentPic) {
//     picture.setAttribute("src", dogArray[dogArray.length - nextCounter]);
//     mainPage.append(picture);
//     if (nextCounter < dogArray.length) nextCounter--;
//   }
// });
