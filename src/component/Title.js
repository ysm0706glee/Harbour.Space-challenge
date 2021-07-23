import Main from "./Main";
import Information from "./Information";

function Title({ data }) {
  return (
    <>
      {Object.keys(data).length ? (
        <>
          <h1>{data.scholarship.name}</h1>
          <Main data={data} />
          <Information data={data} />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Title;
