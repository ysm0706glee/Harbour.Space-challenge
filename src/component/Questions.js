import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Questions({ data }) {
  const [cliked, setClicked] = useState(false);
  const [selectedCategorie, setSelectedCategorie] = useState("");

  const categories = () => {
    return data.scholarship.faqs.categories.map((categorie, i) => {
      return (
        <option value={categorie} key={i}>
          {categorie}
        </option>
      );
    });
  };

  const items = () => {
    if (selectedCategorie !== "") {
      return data.scholarship.faqs.items
        .filter((item) => item.type === selectedCategorie)
        .sort()
        .map((item) => {
          return (
            <>
              <dt className="subTitle mt-3">{item.type}</dt>
              <dt className="mb-3">{item.question}</dt>
              <button
                className="detailButton"
                onClick={() => (cliked ? setClicked(false) : setClicked(true))}
              >
                {cliked ? "-" : "+"}
              </button>
              {cliked === true ? (
                item.answer.map((answer) => <dd>{answer.data}</dd>)
              ) : (
                <></>
              )}
            </>
          );
        });
    }

    return data.scholarship.faqs.items.sort().map((item) => {
      return (
        <div>
          <dt className="subTitle mt-3">{item.type}</dt>
          <dt className="mb-3">{item.question}</dt>
          <button
            className="detailButton"
            onClick={() => (cliked ? setClicked(false) : setClicked(true))}
          >
            {cliked ? "-" : "+"}
          </button>
          {cliked === true ? (
            item.answer.map((answer) => <dd>{answer.data}</dd>)
          ) : (
            <></>
          )}
        </div>
      );
    });
  };

  return (
    <>
      {Object.keys(data).length ? (
        <>
          <Container>
            <Row>
              <Col>
                <h1 className="subTitle">
                  Frequently asked<br></br> questions
                </h1>
              </Col>
              <Col>
                <label htmlFor="categories">Filter by: </label>
                <select
                  className="mb-5 filter py-2"
                  id="categories"
                  onChange={(e) => {
                    setSelectedCategorie(e.target.value);
                  }}
                >
                  {categories()}
                </select>
              </Col>
              <Row>
                <Col>
                  <dl>{items()}</dl>
                </Col>
              </Row>
            </Row>
          </Container>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Questions;
