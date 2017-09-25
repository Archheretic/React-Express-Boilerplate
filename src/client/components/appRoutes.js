import React from "react";
import { Route, Switch } from "react-router-dom";
import FirstComponent from "./firstComponent";

export const AppRoutes = () => (
    <div className="AppRoutes">
        <Switch>
            <Route exact path="/" component={FirstComponent} />
        </Switch>
    </div>
);

export default AppRoutes;