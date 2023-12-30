import { Component, JSX, JSXElement } from "solid-js";
import IdComponent from "./IdComponent";

const Layout: Component<{ children: JSX.Element }> = (props) => (
  <div>
    <header>
      <nav class="flex gap-1">
        <IdComponent />
      </nav>
    </header>
    <main>{props.children}</main>
  </div>
);

export default Layout;
