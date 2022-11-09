// Change Background

let myLanding = document.querySelector(".landing");
let myImage = ["1.jpg", "2.jpg"];

setInterval(() => {
  let RandomNumber = Math.floor(Math.random() * myImage.length);
  myLanding.style.backgroundImage =
    'url("image/background/' + myImage[RandomNumber] + '")';
}, 5000);

// Add Class Active To Li OnClick

let myLi = document.querySelectorAll(".navbar .nav-link");

myLi.forEach((el) => {
  el.addEventListener("click", (e) => {
    myLi.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

let myToggle = (document.getElementById("toggle").onclick = function () {
  if (this.classList.contains("fa-bars")) {
    this.classList.replace("fa-bars", "fa-xmark");
  } else {
    this.classList.replace("fa-xmark", "fa-bars");
  }
});

let myBoxes = document.querySelectorAll(".choose .box");
let myTexts = document.querySelectorAll(".choose .text");
let myP = document.querySelectorAll(".choose .box .desciption");

myTexts.forEach((text) => {
  text.addEventListener("click", function (e) {
    console.log(20);
    myTexts.forEach((text) => {
      text.classList.remove("active");
    });
    text.classList.add("active");
    myP.forEach((p) => {
      p.style.display = "none";
      document.querySelectorAll(e.target.dataset.open).forEach((text) => {
        text.style.display = "block";
      });
    });
  });
});

let myBigImage = document.querySelector(".choose .box .image img");
let mySmImage = document.querySelectorAll(".choose .box .sm-image img");

mySmImage.forEach((smImg) => {
  smImg.addEventListener("click", (img) => {
    mySmImage.forEach((img) => {
      img.classList.remove("active");
    });
    img.target.classList.add("active");
  });
});

console.log(mySmImage);

mySmImage.forEach((myImage) => {
  myImage.addEventListener("click", function () {
    myBigImage.src = this.src;
  });
});

let mySection = document.querySelector(".section");
let mySpans = document.querySelectorAll(".count-spn");
let started = false;

window.onscroll = function () {
  if (window.scrollY > mySection.offsetTop - 400) {
    if (started == false) {
      mySpans.forEach((span) => myCounter(span));
    }
    started = true;
  }
};

function myCounter(el) {
  let count = el.dataset.count;
  let myCounter = setInterval(() => {
    el.textContent++;
    if (el.textContent === count) {
      clearInterval(myCounter);
    }
  }, 3000 / count);
}
