import React from 'react';
import Container from 'react-bootstrap/Container';

type ContainerProps = {
  children: JSX.Element[]
};

function AppContainer({ children }: ContainerProps) {
  return (
    <Container className="h-100 px-0 shadow-lg rounded">
      {children}
    </Container>
  );
}

export default AppContainer;
