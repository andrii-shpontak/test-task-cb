import React, { FC } from 'react';
import { Box, Card, CardContent, Typography, CardActions, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { Article } from '../../models/models';
import { useCallback } from 'react';
import { SearchObject } from '../../models/models';

import './style.scss';
import { useSelector } from 'react-redux';

const HightLight = (props: any) => {
  const { filter, str } = props;

  if (filter.length === 0) {
    return str
  }

  const regexp = new RegExp(filter, 'ig')
  const matchValue = str.match(regexp);

  if (!matchValue) {
    return str;
  }

  return str.split(regexp).map((s: any, index: number, arr: any) => {
    if (index >= arr.length - 1) {
      return s;
    }

    const c = matchValue.shift();
    return <>{s}<span key={Math.random()} className="hightlight">{c}</span></>
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

  const light = useCallback((str: string) => {
    return <HightLight filter={searchValue} str={str} />
  }, [searchValue]);

  return (
    <Box className="card_box">
      <Card>
        <CardMedia
          component='img'
          height='217'
          image={imageUrl}
          alt='card-photo'
        />

        <CardContent className='card_content'>
          <Typography className='time'>{timeToPublicate}</Typography>
          <Typography className='card_title' gutterBottom variant='h5' component='div'>
            {light(title)}
          </Typography>
          <Typography className='card_descr' variant='body2' color='text.secondary'>
            {summary.length >= 100 ? summary.slice(0, 99) + '...' : summary}
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