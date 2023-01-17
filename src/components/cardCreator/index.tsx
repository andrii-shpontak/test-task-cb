import React, { FC } from 'react';
import { Box, Card, CardContent, Typography, CardActions, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { Article, SearchObject } from '../../models/models';
import { useCallback } from 'react';

import './style.scss';
import { useSelector } from 'react-redux';

const HightLight = (props: any) => {
  const { filter, descriptionText } = props;

  if (filter.length === 0) {
    return descriptionText
  }

  const regexp = new RegExp(filter, 'ig')
  const matchValue = descriptionText.match(regexp);

  if (!matchValue) {
    return descriptionText;
  }

  return descriptionText
    .split(regexp)
    .map((rawString: unknown, index: number, arr: any) => {
      if (index >= arr.length - 1) {
        return rawString;
      }

      const highlightedString = matchValue.shift();
      return <>{rawString}<span key={Math.random()} className="hightlight">{highlightedString}</span></>
    })
}

const CardCreator: FC<Article> = (props) => {
  const { id, imageUrl, publishedAt, summary, title } = props;
  const searchValue = useSelector<SearchObject>(state => state.searchBy);

  const arrOfMonts: string[] = ['January', 'February', 'February', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const pubYear: string = publishedAt.slice(0, 4);
  const pubDay: string = publishedAt.slice(8, 10);
  const pubMonth: string = arrOfMonts[+publishedAt.slice(5, 7) - 1];

  const timeToPublicate: string = `${pubMonth} ${pubDay}th, ${pubYear}`;
  const cutSummary: string = summary.length >= 100 ? summary.slice(0, 99) + '...' : summary;

  const light = useCallback((descriptionText: string) => {
    return <HightLight filter={searchValue} descriptionText={descriptionText} />
  }, [searchValue]);

  return (
    <Box className="card">
      <Card>
        <CardMedia
          component='img'
          height='217'
          image={imageUrl}
          alt='card-photo'
        />

        <CardContent className='card__content'>
          <Typography id="time" className='card__content_time'>{timeToPublicate}</Typography>
          <Typography className='card__content_title' gutterBottom variant='h5' component='div'>
            {light(title)}
          </Typography>
          <Typography className='card__content_descr' variant='body2' color='text.secondary'>
            {light(cutSummary)}
          </Typography>
        </CardContent>

        <CardActions className='card__actions'>
          <Link to={`/${id}`} className='card__actions_link'>
            Read more
          </Link>

        </CardActions>
      </Card>
    </Box>
  );
};

export default CardCreator;