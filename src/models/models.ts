export type Article = {
  id: number;
  imageUrl: string;
  newsSite: string;
  publishedAt: string;
  summary: string;
  title: string;
  updatedAt: string;
  url: string;
};

export type GetArticlesResponse = Article[];

export type SearchObject = { searchBy: string };

export interface Launch {
  id: string;
  provider: string;
}

export interface IArticle {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: Date;
  updatedAt: Date;
  featured: boolean;
  launches: Launch[];
  events: any[];
}

export interface MainState {
  searchBy: string;
  articlesData: IArticle[];
};
