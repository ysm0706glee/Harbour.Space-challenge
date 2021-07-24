import { Carousel, Container, Row, Col } from "react-bootstrap";

function Comment() {
  return (
    <>
      <Carousel className="my-5 col-md-4" variant="dark">
        <Carousel.Item>
          <Container className="border">
            <Row>
              <Col>
                {" "}
                <div>
                  <strong>Irene Pereyra</strong>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="mb-3">Interaction Design Fellow '19</div>
                <div>
                  <p>
                    This Fellowship was a turning point in my career.<br></br> I
                    wouldn't be where I am today without the financial support
                    and experienced offered through the program.
                  </p>
                  <div>Education ・ B.A. Visual Design</div>
                </div>
              </Col>
              <Col>
                <div>in</div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className="border">
            <Row>
              <Col>
                {" "}
                <div>
                  <strong>Irene Pereyra</strong>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="mb-3">Interaction Design Fellow '19</div>
                <div>
                  <p>
                    This Fellowship was a turning point in my career.<br></br> I
                    wouldn't be where I am today without the financial support
                    and experienced offered through the program.
                  </p>
                  <div>Education ・ B.A. Visual Design</div>
                </div>
              </Col>
              <Col>
                <div>in</div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container className="border">
            <Row>
              <Col>
                {" "}
                <div>
                  <strong>Irene Pereyra</strong>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="mb-3">Interaction Design Fellow '19</div>
                <div>
                  <p>
                    This Fellowship was a turning point in my career.<br></br> I
                    wouldn't be where I am today without the financial support
                    and experienced offered through the program.
                  </p>
                  <div>Education ・ B.A. Visual Design</div>
                </div>
              </Col>
              <Col>
                <div>in</div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Comment;
