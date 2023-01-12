import React, { FC } from 'react';
import { Box, Card, CardContent, Typography, CardActions, Link, CardMedia } from '@mui/material';

import './cardCreator.scss';

interface ICardProps {
  imageUrl: string;
  publishedAt: string;
  summary: string;
  title: string;
}

const CardCreator: FC<ICardProps> =
  ({
    imageUrl,
    publishedAt,
    summary,
    title
  }) => {

    // const monthDictionary = {
    //     '01': 'January',
    //     '01': 'January',
    //     '01': 'January',
    //     '01': 'January',
    //     '01': 'January',
    //     '01': 'January',
    //     '01': 'January',
    //     '01': 'January',
    //     '01': 'January',
    //     '01': 'January',
    // }

    // const arrOfMonts: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // const pubYear = publishedAt.slice(0, 4);
    // const pubDay = publishedAt.slice(8, 10);
    // const pubMonthDate = publishedAt.slice(5, 7)
    // const pubMonth = arrOfMonts[+publishedAt.slice(5, 7) - 1];

    // const timeToPublicate: string = `${monthDictionary[pubMonthDate]} ${pubDay}th, ${pubYear}`;

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
            {/* <Typography className='time'>{timeToPublicate}</Typography> */}
            <Typography className='card_title' gutterBottom variant='h5' component='div'>
              {title}
            </Typography>
            <Typography className='card_descr' variant='body2' color='text.secondary'>
              {summary}
            </Typography>
          </CardContent>
          <CardActions className='card__actions'>
            <Link className='card__actions_link' href="#" underline="hover">
              Read more
            </Link>
          </CardActions>
        </Card>
      </Box>
    );
  };

export default CardCreator;