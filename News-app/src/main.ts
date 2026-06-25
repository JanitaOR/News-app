import "./style.css";
import { getNews, postNews } from "./api";
import type { News, NewsCategorys, NewCategoryType } from "./type";

let app = document.getElementById("app") as HTMLDivElement;
let newsFeedContainer = document.createElement("div");
newsFeedContainer.id = "news-feed-container";
const btnContainer = document.createElement("div");
/*
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
*/
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

async function newsTitle(news: NewsCatagorys[]) {
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

/* ---------------------- */

/*
Oppgave 1-2
Du skal nå utvide løsningen med filtrering basert på 
nyhetskategori. Du skal bruke responsen fra APIet til 
å finne ut hvilke kategorier den inneholder, og for 
hver av disse skal du lage en knapp på siden. 
Når en bruker trykker på knappen, skal kun nyheter 
fra den valgte kategorien vises på siden.
*/

/* ----------- code til 1.2 ------------ */
/*

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

  const articles =
    news[
      btnCategory
    ]; */ /*------ finn ut hvordan jeg kan få vekk denne feilmeldingen-----*/ /*
  console.log(articles);

  console.log(Object.keys(news));

  renderArticles(articles);
}

function renderArticles(articles: News[]) {
  newsFeedContainer.innerHTML = "";
  articles.forEach((article) => {
    newsFeedContainer.innerHTML += `<li><a href=${article.link}><h2>${article.title}</h2></a></li>
      `;
  });
}
*/
/* ---------------------- */

/*
Oppgave 1-3
ok.surf-APIet har to endepunkter som lar oss hente 
nyheter på en mer fingranulær måte: /news-section-names 
lar oss hente navnet på nyhetskategoriene som finnes, 
og /news-section lar oss hente nyhetene i den valgte 
kategorien. Du skal nå endre løsningen fra å gjøre et 
API-kall som henter alle nyheter før de filtreres, 
til å gjøre API-kallet først når brukeren trykker på 
knappen til den ønskede kategorien. Du skal bruke 
/news-section-names-endepunktet når siden laster 
inn for å hente ut kategoriene og lage knappene 
dynamisk, og /news-section-endepunktet til å hente 
nyhetene på knappetrykk.

PS: merk at /news-section-endepunktet bruker POST, 
ikke GET, og du må endre løsningen din deretter.
*/

/* ----------- code til 1.3 ------------ */

const newsCategory = await postNews();

console.log(newsCategory);

/* ---------------------- */

/*
Oppgave 1-4
Du skal nå fullføre TypeScript-implementasjonen 
av appen din. Du skal lage egne typer for alle 
data du får fra APIet slik at appen vet hvilken 
struktur dataene kommer på. Alle typer du lager 
skal ligge i egne filer og eksporteres, slik at 
de kan importeres der de trengs. Du skal også 
bruke riktige typer for alle variabler og 
returverdier i funksjoner du lager.
*/

/* ----------- code til 1.4 ------------ */

/* ---------------------- */

/*
Oppgave 1-5
Du skal lage en funksjon som gjør at det er mulig 
å lage bokmerker for nyhetssaker i appen. Disse 
bokmerkene skal persisteres (lagres) ved å bruke 
CrudOps-APIet.

Du skal først lage en kopi av CrudOps-APIet som 
skal brukes kun til dette formålet. Dette gjør du 
ved å klone CrudOps-prosjektet på GitHub til din maskin, 
og deretter kan du endre navnet på mappen til for 
eksempel "news-bookmark-api" for å ikke blande det 
med APIet dere bruker i gruppearbeidet.

Deretter skal du lage en egen template som du bytter 
til, kalt "bookmarks.json". Templaten skal bare 
inneholde et tomt array med navnet "bookmarks". 
Sett opp APIet til å bruke riktig template og 
angi en API-nøkkel. Kjør opp APIet og test at det 
fungerer.

Du skal nå utvide nyhetsappen din der du legger en 
bokmerkeknapp ved siden av tittelen på nyhetssaken. 
Når knappen trykkes på, skal det sendes et API-kall 
til CrudOps-APIet du satte opp slik at den lagrer 
nyhetssaken i bookmarks-arrayet i databasen.
*/

/* ----------- code til 1.5 ------------ */

/* ---------------------- */

/*
Oppgave 1-6
Du skal utvide siden til å vise de 10 siste 
bokmerkene brukeren har laget i en liste over 
de vanlige nyhetssakene som brukeren henter inn. 
Du må lage egen styling slik at denne seksjonen 
fremstår annerledes.
*/

/* ----------- code til 1.6 ------------ */

/* ---------------------- */

/*
Oppgave 1-7 (ekstra utfordrende)
Du skal utvide bokmerkefunksjonaliteten slik at 
dersom bokmerket allerede er lagret i APIet, skal 
den slette det eksisterende bokmerket i stedet 
for å lage et nytt. Knappen i grensesnittet skal ha 
forskjellig tekst basert på om den vil lagre eller 
slette bokmerket. Det er opp til deg å avgjøre 
hvordan denne funksjonen skal implementeres.
*/

/* ----------- code til 1.7 ------------ */

/* ---------------------- */
