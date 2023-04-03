let requestUrl = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";

let url = window.location.href;
let i = url.split("=");
id = i[1];

let title = document.querySelector(".title");
let image = document.getElementById("image");
let agentImage = document.getElementById("agentImage");
let descriptionText = document.getElementById("descriptionText");
let roleText = document.getElementById("roleText");
let voice = document.getElementById("voice");
let agentIcon = document.querySelector(".agentIcon");
let info = document.getElementById("info");

async function getData() {
  let data = await fetch(requestUrl);
  let res = await data.json();
  return res;
}

getData().then((values) => {
  values.data.forEach((value) => {
    if (value.uuid == id) {
      displayInfo(value);
    }
  });
});

function displayInfo(v) {
  agentIcon.src = v.displayIcon;
  title.innerHTML = v.displayName;
  image.style.backgroundImage = "url(" + v.background + ")";
  agentImage.src = v.fullPortraitV2;
  descriptionText.innerText = v.description;
  roleText.innerText = v.role.displayName + " : " + v.role.description;
  voice.src = v.voiceLine.mediaList[0].wave;
  voice.load();

  let gradientColors = v.backgroundGradientColors;

  info.style.background =
    "linear-gradient(60deg, " +
    "#" +
    gradientColors[0] +
    " 0%, " +
    "#" +
    gradientColors[1] +
    " 35%," +
    "#" +
    gradientColors[2] +
    " 63%," +
    "#" +
    gradientColors[3] +
    " 100%)";
}
