import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import Header from "./component/Header";
import Title from "./component/Title";
import About from "./component/About";
import Comment from "./component/Comment";
import Questions from "./component/Questions";
import BottomStickyBar from "./component/BottomStickyBar";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        "https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab"
      );
      setData(res.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Title data={data} />
      <About data={data} />
      <Comment />
      <Questions data={data} />
      <BottomStickyBar data={data} />
    </>
  );
}

export default App;
