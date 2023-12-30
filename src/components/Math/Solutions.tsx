import { Component, JSX } from "solid-js";

const Solutions: Component<{ children: JSX.Element }> = (props) => (
  <div
    id="solutions-content"
    class="shadow-lg "
    style={{ width: "fit-content" }}
  >
    {props.children}
  </div>
);

export default Solutions;
