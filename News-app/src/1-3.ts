import "./style.css";
import { getNewsCategorys, postNews } from "./api";

let app = document.getElementById("app") as HTMLDivElement;
let newsFeedContainer = document.createElement("div");
newsFeedContainer.id = "news-feed-container";
const btnContainer = document.createElement("div");

app.append(btnContainer, newsFeedContainer);

const newsCategorys = await getNewsCategorys();
console.log(newsCategorys);

newsCategorys.forEach((btnText) => {
  const btn = document.createElement("button") as HTMLButtonElement;
  btn.textContent = btnText;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(btnText);
    getNewsInCategory(btnText);
  });
  btnContainer.append(btn);
});

async function getNewsInCategory(btnText) {
  const newsPosts = await postNews({ sections: [btnText] });

  console.log(newsPosts);
  Object.entries(newsPosts).forEach(([btnText, posts]) => {
    console.log(btnText);
    renderPosts(posts);
  });

  function renderPosts(posts) {
    newsFeedContainer.innerHTML = "";
    posts.forEach((post) => {
      newsFeedContainer.innerHTML += `<li><a href=${post.link}><h2>${post.title}</h2></a></li>
      `;
    });
  }
}
