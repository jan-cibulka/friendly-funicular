import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import Layout from "./components/Layout";
import Home from "./components/Home"; // Create this component for your home page
import Math1 from "./components/Math1"; // Create this component for your exam generator page

// @refresh reload

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
