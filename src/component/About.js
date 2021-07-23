function About({ data }) {
  return (
    <>
      <h1>About the apprenticeship</h1>
      {Object.keys(data).length ? (
        <>
          <h2>{data.scholarship.about[0].data}</h2>
          <h2>Scholarship value</h2>
          <h2>{data.scholarship.total_value}</h2>
          <h2>Tuition covered</h2>
          <h2>{data.scholarship.tuition}</h2>
          <h2>Remaining</h2>
          <h2>{data.scholarship.remaining}</h2>
          <h2>Living stipend</h2>
          <h2>{data.scholarship.stipend_per_month}</h2>
          <h2>Study commitment</h2>
          <h2>{data.scholarship.study_commitment}</h2>
          <h2>{data.scholarship.study_commitment_text}</h2>
          <h2>Work commitment</h2>
          <h2>{data.scholarship.internship_commitment}</h2>
          <h2>{data.scholarship.internship_commitment_text}</h2>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default About;
