const myImage = document.querySelector("img");

function imageChange() {
  const source = myImage.getAttribute("src");
  if (source == "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/geranio.png");
  } else if (source == "images/geranio.png") {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
}

myImage.addEventListener("click", imageChange);

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
