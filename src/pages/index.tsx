import React from "react";
import { useTitle } from "react-use";
import { navigate } from "gatsby";
// import ApresentationSection from "src/Sections/Apresentation";

const Home: React.FC = () => {
  useTitle("Cutulu | Home");
  navigate("/guides");
  return null;
};

export default Home;
