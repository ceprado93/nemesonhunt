import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
      </Switch>
    </>
  );
};

export default Routes;
