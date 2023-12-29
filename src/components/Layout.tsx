import { Component, JSX, JSXElement } from "solid-js";

const Layout: Component<{ children: JSX.Element }> = (props) => (
  <div>
    <header>
      {/* <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/exam">Generate Exam</a>
          </li>
     
        </ul>
      </nav> */}
    </header>
    <main>{props.children}</main>
  </div>
);

export default Layout;
