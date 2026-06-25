export type News = {
  title: string;
  link: string;
  og: string;
  source: string;
  source_icon: string;
};

export type NewsCategorys = {
  Business: News[];
  Entertainment: News[];
  Health: News[];
  Science: News[];
  Sports: News[];
  Technology: News[];
  US: News[];
  World: News[];
};

export type Categorys = {};
export type NewCategoryType = keyof NewsCategorys;
