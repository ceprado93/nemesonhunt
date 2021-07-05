import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

import "./Pages.css";

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>nemeson</div>
    </>
  );
};

export default Home;
