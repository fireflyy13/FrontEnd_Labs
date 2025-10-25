firstEl = document.getElementById("first");
secondEl = document.querySelector("#second");
plusSize = document.createElement("button");
plusSize.textContent = "Збільшити зображення";
plusSize.style.margin = "5px";
minusSize = document.createElement("button");
minusSize.textContent = "Зменшити зображення";
minusSize.style.margin = "5px";
addPicture = document.createElement("button");
addPicture.textContent = "Додати зображення";
addPicture.style.margin = "5px";
deletePicture = document.createElement("button");
deletePicture.textContent = "Видалити зображення";
deletePicture.style.margin = "5px";
imgLink = document.querySelector("a");

document.body.append(plusSize, minusSize, addPicture, deletePicture);

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

firstEl.addEventListener("click", () => {
  firstEl.style.color = getRandomColor();
  firstEl.style.backgroundColor = getRandomColor();
});

secondEl.addEventListener("click", () => {
  secondEl.style.color = getRandomColor();
  secondEl.style.backgroundColor = getRandomColor();
});

plusSize.addEventListener("click", () => {
  const img = document.querySelector(".picture");
  if (!img) return;
  const imgHeight = parseInt(getComputedStyle(img).height);
  img.style.height = imgHeight + 30 + "px";
});

minusSize.addEventListener("click", () => {
  const img = document.querySelector(".picture");
  if (!img) return;
  const imgHeight = parseInt(getComputedStyle(img).height);
  img.style.height = imgHeight - 30 + "px";
});

addPicture.addEventListener("click", () => {
  newPic = document.createElement("img");
  newPic.src = "kono-miasto-krolow.-krakow.jpg";
  newPic.style.height = "350px";
  newPic.style.width = "auto";
  newPic.style.margin = "20px";
  newPic.className = "picture";
  breakeL = document.createElement("br");
  imgLink.append(breakeL);
  imgLink.append(newPic);
});

deletePicture.addEventListener("click", () => {
  const img = document.querySelector(".picture");
  if (!img) return;
  img.remove();
});
