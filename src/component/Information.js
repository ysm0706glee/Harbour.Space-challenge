function Information({ data }) {
  return (
    <>
      <h3>Application closes in</h3>
      <h3>Moment.js</h3>
      <div>
        <h3>Location</h3>
        <h3>{data.scholarship.location.name}</h3>
        <h3>Duration</h3>
        <h3>{data.scholarship.duration}</h3>
      </div>
    </>
  );
}

export default Information;
