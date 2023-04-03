const url = "https://valorant-api.com/v1/agents?isPlayableCharacter=true";

let agentsGrid = document.querySelector(".agentsGrid");

async function getData() {
  let data = await fetch(url);
  let res = await data.json();
  return res;
}

getData().then((values) => {
  values.data.forEach((value) => {
    renderInfo(value);
  });
});

function renderInfo(v) {
  let d = document.createElement("div");
  d.classList.add("agent");
  d.style.backgroundImage = "url(" + v.fullPortrait + ")";
  let n = document.createElement("h1");
  n.classList.add("name");
  n.innerText = v.displayName;
  d.appendChild(n);
  d.addEventListener("click", () => {
    window.open("viewer.html?id=" + v.uuid, "_self");
  });
  agentsGrid.appendChild(d);
}
