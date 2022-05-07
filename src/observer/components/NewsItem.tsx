import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { INewsItem } from '../interfaces';

function NewsItem({
  link,
  title,
  date,
}:INewsItem) {
  return (
    <Alert variant="secondary">
      <Alert.Link href={link}>{title}</Alert.Link>
      {date.toDateString()}
    </Alert>
  );
}

export default NewsItem;
