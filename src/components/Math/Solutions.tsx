import { Component, JSX } from "solid-js";

const Solutions: Component<{ children: JSX.Element }> = (props) => (
  <div id="solutions-content">{props.children}</div>
);

export default Solutions;
