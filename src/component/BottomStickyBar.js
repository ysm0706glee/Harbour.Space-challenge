import { Container, Row, Col } from "react-bootstrap";

function BottomStickyBar({ data }) {
  return (
    <div className="BottomStickyBar">
      {Object.keys(data).length ? (
        <>
          <Container>
            <Row>
              <Col>Location</Col>
              <Col>Duration</Col>
              <Col>Start date</Col>
              <Col>Application deadline</Col>
              <Col>Application closes in</Col>
            </Row>
            <Row>
              <Col>{data.scholarship.location.name}</Col>
              <Col>{data.scholarship.duration}</Col>
              <Col>{data.scholarship.scholarship_start_date}</Col>
              <Col>{data.scholarship.application_end_date}</Col>
              <Col>Moment.js</Col>
            </Row>
          </Container>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default BottomStickyBar;
