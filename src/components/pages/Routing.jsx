import { Switch, Route, Redirect } from "react-router-dom";
import BoardPage from "./Board/Board";
import HomePage from "./Home/Home";

export const Routing = () => {
  return (
    <Switch>
      <Route exact strict path="/" component={HomePage} />
      <Route exact strict path="/board/:boardId" component={BoardPage} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routing;
