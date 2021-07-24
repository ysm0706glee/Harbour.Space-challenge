import { Container, Row, Col } from "react-bootstrap";

function About({ data }) {
  return (
    <>
      {Object.keys(data).length ? (
        <>
          <Container className="mt-5">
            <Row>
              <Col className="col-md-8">
                <img
                  className="personImg mb-3"
                  src={data.scholarship.program.photos[0].src}
                  width="200"
                  height="200"
                  alt="person"
                ></img>
              </Col>
              <Col className="text-center">
                <h1 className="subTitle">About the apprenticeship</h1>{" "}
                <p className="mb-5">{data.scholarship.about[0].data}</p>
              </Col>
            </Row>
            <Row>
              <Col className="border mx-5 col-md-8">
                <div className="subTitle">Scholarship value</div>
                <div className="mb-5">
                  €{data.scholarship.total_value.toLocaleString()}
                </div>
                <div className="subTitle">Tuition covered</div>
                <div>€{data.scholarship.tuition.toLocaleString()}</div>
                <div className="subTitle">Remaining</div>
                <div>€{data.scholarship.remaining.toLocaleString()}</div>
                <div className="subTitle">Living stipend</div>
                <div>
                  €{data.scholarship.stipend_per_month.toLocaleString()}
                </div>
              </Col>
              <Col className="border mx-5 col-md-8 my-3">
                <div className="subTitle mb-1">Study commitment</div>
                <div className="mb-3">
                  {data.scholarship.study_commitment} hours / day
                </div>
                <div>{data.scholarship.study_commitment_text}</div>
              </Col>
              <Col className="border mx-5 col-md-8">
                <div className="subTitle mb-1">Work commitment</div>
                <div className="mb-3">
                  {data.scholarship.internship_commitment} hours / day
                </div>
                <div>{data.scholarship.internship_commitment_text}</div>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default About;
