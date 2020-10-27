import React from "react";
import { 
    BrowserRouter as Router, 
    Switch,
    // Route,
    // Redirect,
    // Link,

} from 'react-router-dom';

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { DashboardRoutes } from "./DashboardRoutes";
import { LoginScreen } from "../components/login/LoginScreen";


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        component={ LoginScreen }
                        isAuthenticated={ false }
                    />
                    <PrivateRoute
                      path="/"
                      component={ DashboardRoutes }
                      isAuthenticated={ false }
                    />
                </Switch>
            </div>
        </Router>
    )
}