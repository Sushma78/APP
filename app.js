import React from "react";
import ReactDOM from "react-dom/client";
//JSX?

const heading3 = (
  <h1 id="1" key="title">
    namasteyyy
  </h1>
); //element

//react component
// 1. functional component - new way
const Com = () => {
  return <h1>namaste jiii</h1>;
};
// 2. class component - old way

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading3);
