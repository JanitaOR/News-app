import "./style.css";
import { getNews } from "./api";

let app = document.getElementById("app") as HTMLDivElement;
let newsFeedContainer = document.createElement("div");
newsFeedContainer.id = "news-feed-container";
const btnContainer = document.createElement("div");

const btnBusiness = document.createElement("button");
btnBusiness.innerHTML = "Business";
const btnEntertainment = document.createElement("button");
btnEntertainment.innerHTML = "Entertainment";
const btnHealth = document.createElement("button");
btnHealth.innerHTML = "Health";
const btnScience = document.createElement("button");
btnScience.innerHTML = "Science";
const btnSports = document.createElement("button");
btnSports.innerHTML = "Sports";
const btnTechnology = document.createElement("button");
btnTechnology.innerHTML = "Technology";
const btnUS = document.createElement("button");
btnUS.innerHTML = "US";
const btnWorld = document.createElement("button");
btnWorld.innerHTML = "World";

btnContainer.append(
  btnBusiness,
  btnEntertainment,
  btnHealth,
  btnScience,
  btnSports,
  btnTechnology,
  btnUS,
  btnWorld,
);

app.append(btnContainer, newsFeedContainer);

const news = await getNews();

console.log(news);

btnBusiness.addEventListener("click", (e) => {
  e.preventDefault();

  const btnCategory = "Business";

  getCategory(btnCategory);
});

btnEntertainment.addEventListener("click", (e) => {
  e.preventDefault();

  const btnCategory = "Entertainment";

  getCategory(btnCategory);
});

btnHealth.addEventListener("click", (e) => {
  e.preventDefault();

  const btnCategory = "Health";

  getCategory(btnCategory);
});

btnScience.addEventListener("click", (e) => {
  e.preventDefault();

  const btnCategory = "Science";

  getCategory(btnCategory);
});

btnSports.addEventListener("click", (e) => {
  e.preventDefault();

  const btnCategory = "Sports";

  getCategory(btnCategory);
});

btnTechnology.addEventListener("click", (e) => {
  e.preventDefault();

  const btnCategory = "Technology";

  getCategory(btnCategory);
});

btnUS.addEventListener("click", (e) => {
  e.preventDefault();

  const btnCategory = "US";

  getCategory(btnCategory);
});

btnWorld.addEventListener("click", (e) => {
  e.preventDefault();

  const btnCategory = "World";

  getCategory(btnCategory);
});

async function getCategory(btnCategory: string) {
  console.log(btnCategory);

  const articles = news[btnCategory];
  console.log(articles);

  //console.log(Object.keys(news));

  renderArticles(articles);
}

function renderArticles(articles: News[]) {
  newsFeedContainer.innerHTML = "";
  articles.forEach((article) => {
    newsFeedContainer.innerHTML += `<li><a href=${article.link}><h2>${article.title}</h2></a></li>
      `;
  });
}
