import React from 'react';
import Row from 'react-bootstrap/Row';
import FeedItem from './FeedItem';

type FeedsListProps = {
  feeds: string[];
  selectedFeed: string;
  removeFeed: (feed: string) => void;
};

function FeedsList({
  feeds,
  selectedFeed,
  removeFeed,
}: FeedsListProps) {
  return (
    <Row className="mx-0">
      {feeds.map((feed) => {
        const isSelected = feed === selectedFeed;
        const key = Math.random().toString(16);
        return <FeedItem key={key} feed={feed} isSelected={isSelected} remove={removeFeed} />;
      })}
    </Row>
  );
}

export default FeedsList;
