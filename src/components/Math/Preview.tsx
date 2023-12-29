import { Component, JSX } from "solid-js";

const Preview: Component<{ children: JSX.Element }> = (props) => (
  <div id="preview-content">{props.children}</div>
);

export default Preview;
