export interface Launch {
  id: string;
  provider: string;
}

export interface Event {
  id: number;
  provider: string;
}

export interface ServerResponse {
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
  events: Event[];
}

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