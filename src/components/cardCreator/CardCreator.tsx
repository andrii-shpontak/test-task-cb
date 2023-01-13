import React, { FC } from 'react';
import { Box, Card, CardContent, Typography, CardActions, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

import './cardCreator.scss';

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

const CardCreator: FC<Article> =
  ({
    id,
    imageUrl,
    newsSite,
    publishedAt,
    summary,
    title,
    updatedAt,
    url
  }) => {

    const arrOfMonts: string[] = ['January', 'February', 'February', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const pubYear: string = publishedAt.slice(0, 4);
    const pubDay: string = publishedAt.slice(8, 10);
    const pubMonth: string = arrOfMonts[+publishedAt.slice(5, 7) - 1];

    const timeToPublicate: string = `${pubMonth} ${pubDay}th, ${pubYear}`;

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
              {title}
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