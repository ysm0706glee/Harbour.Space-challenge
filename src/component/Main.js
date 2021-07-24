function Main({ data }) {
  return (
    <>
      <p>{data.scholarship.description[0].data}</p>
      <button className="ApplyNowButton2">Apply Now</button>
    </>
  );
}

export default Main;
