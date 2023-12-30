// @refresh reload

import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import Layout from "./components/Layout";
import Math1 from "./components/Math1";

import "./index.css";
import { IdProvider } from "./components/IdContext";

const App = () => (
  <>
    <IdProvider>
      <Layout>
        <Router>
          <Route path="/" component={Math1} />
        </Router>
      </Layout>
    </IdProvider>
  </>
);

render(() => <App />, document.getElementById("root"));
