import React, { Suspense, lazy } from "react";
import RouteConstants from "./RoutesConstant";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//lazy routes
const Homepage = lazy(() => import("../Components/Homepage/index"));
const Error = lazy(() => import("../Components/Global/Error"));

const Routes = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="lds-ripple loader">
            <div></div>
            <div></div>
          </div>
        }
      >
        <Switch>
          <Route
            exact
            path={RouteConstants.homePage}
            render={(props) => <Homepage {...props} />}
          />

          <Route render={(props) => <Error {...props} />} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
