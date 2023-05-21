// main.js

const memeGeneratorBtn = document.querySelector(".generate-meme");
const memeImage = document.querySelector("#meme-image"); // Updated selector
const memeTitle = document.querySelector(".meme-title");

const updateDetails = (url, name) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = name;
};

const generateMeme = () => {
  fetch("https://api.imgflip.com/get_memes")
    .then((response) => response.json())
    .then((data) => {
      const memes = data.data.memes;
      const randomIndex = Math.floor(Math.random() * memes.length);
      const meme = memes[randomIndex];
      const imageUrl = meme.url;
      const memeName = meme.name;
      updateDetails(imageUrl, memeName);
    });
};

memeGeneratorBtn.addEventListener("click", generateMeme);
