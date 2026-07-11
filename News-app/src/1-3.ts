import "./style.css";
import { getNews, postNews } from "./api";

let app = document.getElementById("app") as HTMLDivElement;
let newsFeedContainer = document.createElement("div");
newsFeedContainer.id = "news-feed-container";
const btnContainer = document.createElement("div");

app.append(btnContainer, newsFeedContainer);
