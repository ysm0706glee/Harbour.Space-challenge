import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";

function Information({ data }) {
  return (
    <>
      <div>
        <div className="PoweredBy">Powered by:</div>
        <div>
          <strong>{data.scholarship.company.name}</strong>
        </div>
      </div>
      <div className="border my-3">
        <div className="subTitle">Application closes in</div>
        <div>
          {moment(data.scholarship.application_end_date).diff(
            moment(),
            "days"
          ) < 0
            ? "Closed"
            : moment(data.scholarship.application_end_date).diff(
                moment(),
                "days h:mm:ss"
              )}
        </div>
      </div>
      <Container className="border">
        <Row>
          <Col className="subTitle">Location</Col>
          <Col className="subTitle">Duration</Col>
        </Row>
        <Row className="mb-3">
          <Col>{data.scholarship.location.name}</Col>
          <Col>{data.scholarship.duration} Year</Col>
        </Row>
        <Row className="subTitle">
          <Col>Start date</Col>
          <Col>End date</Col>
        </Row>
        <Row>
          <Col>
            {moment(data.scholarship.scholarship_start_date).format(
              "D MMM YYYY"
            )}
          </Col>
          <Col>30 Nov 2021</Col>
        </Row>
      </Container>
    </>
  );
}

export default Information;
