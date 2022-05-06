import React from 'react';
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';

type FeedItemProps = {
  feed: string;
  isSelected: boolean;
  remove: (feed: string) => void;
};

function FeedItem({
  feed,
  isSelected,
  remove,
}: FeedItemProps) {
  const theme = isSelected ? 'dark' : 'light';
  const color = isSelected ? 'text-light' : 'text-dark';
  return (
    <Col className="mt-3" lg="4" md="6" xs="12">
      <Toast className="w-100" bg={theme} onClose={() => remove(feed)}>
        <Toast.Header>
          <strong className="me-auto">RSS Reader</strong>
        </Toast.Header>
        <Toast.Body className={`text-uppercase fw-bold ${color}`}>{feed}</Toast.Body>
      </Toast>
    </Col>
  );
}

export default FeedItem;
