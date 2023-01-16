import { Container } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { IArticle, MainState } from '../../models/models';
import { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import './style.scss';

const DescriptionPage: React.FC = () => {
  const articles = useSelector((state: MainState) => state?.articlesData);
  const [article, setArticle] = useState<IArticle>();

  const mark = useParams();

  useEffect(() => {
    if (typeof (articles) !== 'undefined' && typeof (mark.id) !== 'undefined') {

      for (let i = 0; i < articles.length; i++) {
        if (articles[i].id === +mark.id) {
          setArticle(articles[i]);
        }
      }
    }
  }, [articles]);

  return (
    <div>
      <div className="description__header"><img src={article?.imageUrl} alt="image" /></div>
      <Container className='container'>
        <div className="description__content">
          <h2 className="description__content_title">{article?.title}</h2>
          <div className="description__content_text">{article?.summary}</div>
          <a className='description__content_sourse' href={article?.url} target='_blank'>Open source</a>
        </div>
        <Link to={'/'} className="description__link" >Back to homepage</Link>
      </Container>
    </div>
  );
};

export default DescriptionPage;