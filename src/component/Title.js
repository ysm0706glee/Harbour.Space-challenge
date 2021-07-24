import { Container, Row, Col } from "react-bootstrap";

import Main from "./Main";
import Information from "./Information";

function Title({ data }) {
  return (
    <>
      {Object.keys(data).length ? (
        <div className="col-md-4">
          <h1 className="my-5 title">{data.scholarship.name}</h1>
          <Container>
            <Row>
              <Col>
                <Main data={data} />
              </Col>
              <Col>
                <Information data={data} />
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Title;
