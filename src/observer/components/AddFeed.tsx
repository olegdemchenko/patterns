import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

type AddProps = {
  add: (feed: string) => void;
};

function AddFeed({ add }: AddProps) {
  const [link, setLink] = useState('');
  return (
    <Row className="mx-0 bg-dark rounded-bottom">
      <Col className="p-0" lg={{ span: 8, offset: 2 }}>
        <Form onSubmit={(e) => {
          e.preventDefault();
          add(link);
        }}
        >
          <Row className="p-4 pb-5">
            <Col lg="9">
              <FloatingLabel controlId="rssLinkInput" label="Enter RSS channel adress here">
                <Form.Control
                  type="text"
                  placeholder="https://somesite.com/rss.xml"
                  name="rss link"
                  onChange={(e) => setLink(e.target.value)}
                  value={link}
                />
              </FloatingLabel>
            </Col>
            <Col className="mt-3 mt-lg-0" lg={{ span: 3, offset: 0 }} xs={{ span: 4, offset: 4 }}>
              <Button type="submit" variant="primary" className="h-100 w-100">Add</Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default AddFeed;
