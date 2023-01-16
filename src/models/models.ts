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
