import React from 'react';
import { INewsItem } from '../interfaces';
import NewsItem from './NewsItem';

type NewsProp = {
  news: INewsItem[];
};

function FeedNewsList({ news }: NewsProp) {
  return (
    <div>
      <hr />
      {news.map(({ link, title, date }) => (
        <NewsItem link={link} title={title} date={date} />))}
    </div>
  );
}

export default FeedNewsList;
