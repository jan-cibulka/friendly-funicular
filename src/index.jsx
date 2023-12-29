// @refresh reload

import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import Layout from "./components/Layout";
import Math from "./components/Math";

import "./index.css";

const App = () => (
  <>
    <Layout>
      <Router>
        <Route path="/" component={Math} />
      </Router>
    </Layout>
  </>
);

render(() => <App />, document.getElementById("root"));
