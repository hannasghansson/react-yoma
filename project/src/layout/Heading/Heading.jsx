import React from "react";

function Heading(props) {
  return (
    <section className="mb-5">
      <span>Span</span>
      <h1>{props.Heading}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </section>
  );
}

export default Heading;
