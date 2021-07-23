function Questions({ data }) {
  const categories = () => {
    return data.scholarship.faqs.categories.map((categorie, i) => {
      return (
        <option value="categorie" key={i}>
          {categorie}
        </option>
      );
    });
  };

  const items = () => {
    return data.scholarship.faqs.items.sort().map((item, i) => {
      return (
        <>
          <dt>{item.type}</dt>
          <dt>{item.question}</dt>
          {item.answer.map((answer) => (
            <dd>{answer.data}</dd>
          ))}
        </>
      );
    });
  };

  return (
    <>
      {Object.keys(data).length ? (
        <>
          <h1>Frequently asked questions</h1>
          <label htmlFor="categories">Filter by:</label>
          <select id="categories">{categories()}</select>
          <dl>{items()}</dl>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Questions;
