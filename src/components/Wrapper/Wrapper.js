import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
  // Single divs do not need parentheses for rendering
  <div className="wrapper">{props.children}</div>
);

export default Wrapper;
