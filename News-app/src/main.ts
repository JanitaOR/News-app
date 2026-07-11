import "./style.css";
import { getNews } from "./api";
import type { NewsCategorys } from "./type";

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
/* 
Oppgave 1-1
Du skal bruke ok.surf sitt nyhets-API i denne oppgaven. 
Lag et nytt Vite-prosjekt og sett det opp slik du pleier. 
Lag en enkel HTML-side som henter de siste nyhetene fra APIet, 
og deretter viser nyhetsoverskriftene i en liste på denne siden. 
Hver overskrift skal også være en lenke til nyhetssaken. 
Du finner både overskrift og URL i APIets data. 
Du skal bruke /news-feed-endepunktet til å hente dataene.

https://ok.surf/api/v1/cors/news-feed

Selve funksjonaliteten for å hente data fra APIet skal være isolert 
i en egen funksjon. Denne skal ligge i en egen fil og eksporteres, 
slik at den kan importeres der den trengs. 
*/

/* ----------- code til 1.1 ------------ */

async function getNewsFromApi() {
  const news = await getNews();
  console.log(news);
  newsTitle(news);
}

async function newsTitle(news: NewsCategorys[]) {
  console.log(news);
  Object.entries(news).forEach(([category, articles]) => {
    console.log(category);

    articles.forEach((article) => {
      //console.log(article.title);
      newsFeedContainer.innerHTML += `<li><a href=${article.link}><h2>${article.title}</h2></a></li>
      `;
    });
  });
}
getNewsFromApi();
