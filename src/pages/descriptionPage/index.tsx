import { Container } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useSearchArticleQuery } from '../../store/newsApi';
import { Article } from '../../models/models';
import { useState, useEffect } from 'react';

import './style.scss';

const DescriptionPage = () => {
  const { isLoading, isError, data } = useSearchArticleQuery('');

  const [article, setArticle] = useState<Article>();

  const mark = useParams();

  useEffect(() => {
    if (typeof (data) !== 'undefined' && typeof (mark.id) !== 'undefined') {

      for (let i = 0; i < data.length; i++) {
        if (data[i].id === +mark.id) {
          setArticle(data[i]);
        }
      }
    }
  }, [data]);

  // const { imageUrl, newsSite, publishedAt, summary, title, updatedAt, url } = article;

  return (
    <div>
      <div className="description__header"><img src={article?.imageUrl} alt="image" /></div>
      <Container className='container'>
        <div className="description__content">
          <h2 className="description__content_title">{article?.title}</h2>
          <div className="description__content_text">{article?.summary}</div>
        </div>
        <Link to={'/'} className="description__link" >Back to homepage</Link>
      </Container>
    </div>
  );
};

export default DescriptionPage;