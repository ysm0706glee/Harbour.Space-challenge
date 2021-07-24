function Main({ data }) {
  return (
    <div>
      <p>{data.scholarship.description[0].data}</p>
      <button className="ApplyNowButton2">Apply Now</button>
    </div>
  );
}

export default Main;
