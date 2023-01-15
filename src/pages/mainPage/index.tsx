import React from 'react';
import { useSearchArticleQuery } from '../../store/newsApi';

import ArticlesList from '../../components/articlesList';
import Spinner from '../spinner';
import ErrorPage from '../errorPage';

const MainPage: React.FC = () => {
  const { isLoading, isError, data } = useSearchArticleQuery('');

  return (
    <div>
      {isLoading && <Spinner />}
      {data && <ArticlesList />}
      {isError && <ErrorPage />}
    </div>
  );
};

export default MainPage;