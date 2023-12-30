import { Component, JSX } from "solid-js";

const Preview: Component<{ children: JSX.Element }> = (props) => (
  <div id="preview-content" class="shadow-lg " style={{ width: "fit-content" }}>
    {props.children}
  </div>
);

export default Preview;
