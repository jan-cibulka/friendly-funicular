// @refresh reload

import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import Layout from "./components/Layout";
import Math1 from "./components/Math1";

import "./index.css";

const App = () => (
  <>
    <Layout>
      <Router>
        <Route path="/" component={Math1} />
      </Router>
    </Layout>
  </>
);

render(() => <App />, document.getElementById("root"));
