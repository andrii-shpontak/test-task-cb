import { Container } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { Article } from '../../models/models';
import { useState, useEffect, useMemo } from 'react';
import Spinner from '../spinner';
import ErrorPage from '../errorPage';

import './style.scss';

const DescriptionPage = () => {

  const [article, setArticle] = useState<Article>();

  const mark = useParams();

  // useEffect(() => {
  //   if (typeof (data) !== 'undefined' && typeof (mark.id) !== 'undefined') {

  //     for (let i = 0; i < data.length; i++) {
  //       if (data[i].id === +mark.id) {
  //         setArticle(data[i]);
  //       }
  //     }
  //   }
  // }, [data]);

  const renderDescription = useMemo(() => (
    <div>
      <div className="description__header"><img src={article?.imageUrl} alt="image" /></div>
      <Container className='container'>
        <div className="description__content">
          <h2 className="description__content_title">{article?.title}</h2>
          <div className="description__content_text">{article?.summary}</div>
          <a href={article?.url} target='_blank'>{article?.url}</a>
        </div>
        <Link to={'/'} className="description__link" >Back to homepage</Link>
      </Container>
    </div>
  ), [article]);


  // const { imageUrl, newsSite, publishedAt, summary, title, updatedAt, url } = article;

  return (
    <div>
      {/* {isLoading && <Spinner />}
      {isError && <ErrorPage />}
      {data && renderDescription} */}
    </div>
  );
};

export default DescriptionPage;