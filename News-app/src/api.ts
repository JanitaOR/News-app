//https://ok.surf/api/v1/cors/news-feed
import { type News, type NewsCategorys } from "./type";

export async function getNews(): Promise<NewsCategorys[]> {
  try {
    const respones: Response = await fetch(
      "https://ok.surf/api/v1/cors/news-feed",
    );

    if (!respones.ok) {
      throw new Error("Did not find data" + respones.status);
    }
    const data: NewsCategorys[] = await respones.json();

    return data;
  } catch (error) {
    console.log("something vent wrong", error);
    throw error;
  }
}

export async function postNews(newNews: NewsCategorys): Promise<NewsCategorys> {
  try {
    const response: Response = await fetch(
      "https://ok.surf/api/v1/cors/news-section-names",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNews),
      },
    );
    if (!response.ok) {
      throw new Error(
        `Det har oppstått en feil - feilmelding${response.status}`,
      );
    }
    const data: NewsCategorys = await response.json();
    return data;
  } catch (error) {
    console.log("noe gikk galt", error);
    throw error;
  }
}
