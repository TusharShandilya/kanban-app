import { BrowserRouter as Router } from "react-router-dom";

import { Layout, Routing } from "./components";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routing />
      </Layout>
    </Router>
  );
};

export default App;
