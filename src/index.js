import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./client/components/appRoutes";
import { BrowserRouter as Router } from "react-router-dom";
//import registerServiceWorker from './registerServiceWorker';

const AppClient = () => (
    <Router>
        <AppRoutes />
    </Router>
);

ReactDOM.render(<AppClient />, document.getElementById("root"));

// Jeg fikk masse cache problemer registerServiceWorker,
// men du kan jo prøve den
//registerServiceWorker();

if (module.hot) {
    module.hot.accept(AppRoutes, () => {
        const NextAppClient = () => (
            <Router >
                <AppRoutes />
            </Router>
        );

        ReactDOM.render(
            <NextAppClient />,
            document.getElementById("root")
        )
    });
}