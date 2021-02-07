import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Page: React.FC<{
  wide?: boolean;
}> = ({ wide, children }) => (
  <Container fluid>
    <Row>
      <Col sm="12" md={{ size: wide ? 12 : 8, offset: wide ? 0 : 2 }}>
        {children}
      </Col>
    </Row>
  </Container>
);
export default Page;
