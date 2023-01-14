import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerResponse, Article } from '../../models/models';

export const newsApi = createApi({
  reducerPath: 'news/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spaceflightnewsapi.net/'
  }),
  endpoints: build => ({
    searchArticle: build.query<Article[], string>({
      query: (search: string) => ({
        url: 'v3/articles'
      }),
      // transformResponse: (response: ServerResponse) => response.items
    })
  })
})

export const { useSearchArticleQuery } = newsApi;