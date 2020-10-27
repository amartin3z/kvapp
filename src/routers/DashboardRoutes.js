import React from "react";
import { Route, Switch } from "react-router-dom";
import { NavBar } from "../components/ui/NavBar";
// import { NavBar } from ""

export const FakeComponent = () => {
    return (
        <div>
            HOLI
        </div>
    );
}

export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />

            <div className="container mt-3">
                <Switch>
                    <Route exact path="/a" component={ FakeComponent } />
                    <Route exact path="/b" component={ FakeComponent } />
                </Switch>
            </div>
        </>
    )
}