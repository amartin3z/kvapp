import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
    isAuthenticated,
    component:Component,
    ...rest
}) => {

    const { location: { pathname = '/', search = '' } } = rest;
    
    localStorage.setItem('lastPath', `${pathname}${search}`);

    return (
        <Route 
            {...rest}
            component={ (props) =>(
                    (isAuthenticated) ? 
                        <Component {...props} />
                        : 
                        <Redirect to="/login" />
                )
            }
        />
    )
}