import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Article } from '../../models/models';

export const newsApi = createApi({
  reducerPath: 'news/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spaceflightnewsapi.net/v3/articles'
  }),
  endpoints: build => ({
    searchArticle: build.query<Article[], string>({
      query: (search: string) => ({
        url: ''
      })
    })
  })
})

export const { useSearchArticleQuery } = newsApi;