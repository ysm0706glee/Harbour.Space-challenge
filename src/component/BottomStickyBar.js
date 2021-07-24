import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";

function BottomStickyBar({ data }) {
  return (
    <div className="BottomStickyBar">
      {Object.keys(data).length ? (
        <>
          <Container className="col-md-4">
            <Row>
              <Col>
                <strong>Location</strong>
              </Col>
              <Col>
                <strong>Duration</strong>
              </Col>
              <Col>
                <strong>Start date</strong>
              </Col>
              <Col>
                <strong>Application deadline</strong>
              </Col>
              <Col>
                <strong>Application closes in</strong>
              </Col>
            </Row>
            <Row>
              <Col>{data.scholarship.location.name}</Col>
              <Col>{data.scholarship.duration} Year Full-Time</Col>
              <Col>
                {moment(data.scholarship.scholarship_start_date).format(
                  "D MMM YYYY"
                )}
              </Col>
              <Col>
                {moment(data.scholarship.application_end_date).format(
                  "D MMM YYY"
                )}
              </Col>
              <Col>
                {moment(data.scholarship.application_end_date).diff(
                  moment(),
                  "days"
                ) < 0
                  ? "Closed"
                  : moment(data.scholarship.application_end_date).diff(
                      moment(),
                      "days h:mm:ss"
                    )}
              </Col>
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
