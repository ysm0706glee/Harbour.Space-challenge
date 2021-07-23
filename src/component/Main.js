function Main({ data }) {
  console.log(data);
  return (
    <>
      <h3>{data.scholarship.description[0].data}</h3>
      <button>Apply Now</button>
    </>
  );
}

export default Main;
