import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

import './mainPage.scss';
import CardCreator from '../../components/cardCreator/CardCreator';

type Article = {
  id: number;
  imageUrl: string;
  newsSite: string;
  publishedAt: string;
  summary: string;
  title: string;
  updatedAt: string;
  url: string;
};

type GetArticlesResponse = Article[];

const MainPage: React.FC = () => {

  const [articles, setArticles] = useState<GetArticlesResponse>([]);
  const [loading, setLoading] = useState(false);

  async function getArticles() {
    try {
      const { data, status } = await axios.get<GetArticlesResponse>(
        'https://api.spaceflightnewsapi.net/v3/articles',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );

      console.log('response status is: ', status);

      setArticles(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

  useEffect(() => {
    getArticles();
  }, []); //componentDidMount
  // getArticles();

  console.log(articles);

  return (
    <div className='main'>
      <div className="filter">
        <p className="filter__title">Filter by keywords</p>
        <div className="filter__input">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7832 14.3911L20 18.6069L18.6069 20L14.3911 15.7832C12.8224 17.0407 10.8713 17.7246 8.86088 17.7218C3.96968 17.7218 0 13.7521 0 8.86088C0 3.96968 3.96968 0 8.86088 0C13.7521 0 17.7218 3.96968 17.7218 8.86088C17.7246 10.8713 17.0407 12.8224 15.7832 14.3911ZM13.8082 13.6605C15.0577 12.3756 15.7555 10.6532 15.7527 8.86088C15.7527 5.05267 12.6681 1.96909 8.86088 1.96909C5.05267 1.96909 1.96909 5.05267 1.96909 8.86088C1.96909 12.6681 5.05267 15.7527 8.86088 15.7527C10.6532 15.7555 12.3756 15.0577 13.6605 13.8082L13.8082 13.6605Z" fill="#575757" />
          </svg>
          <input type="text" />
        </div>
        <p className="filter__title filter__title_subtitle">Results: 6</p>
        <div className="divider"></div>
      </div>

      <div className="card__field">
        {articles.map(({ ...props }) => {
          return (
            <CardCreator
              key={props.id}
              {...props}
            />)
        })}
      </div>
    </div>
  );
};

export default MainPage;