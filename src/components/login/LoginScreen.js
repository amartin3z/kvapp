import React from "react";

export const LoginScreen = () => {
    return (
        <section className="section">
            <div className="hero is-fullheight is-primary">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div>
                            <h3 class="title has-text-white">Login</h3>
                            <hr class="login-hr" />
                            <p class="subtitle has-text-white">Please login to see our cool stuff!</p>
                        </div>
                        <div class="column is-8 is-offset-2">
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input" type="email" placeholder="Email" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    <span className="icon is-small is-right">
                                        <i className="fas fa-check"></i>
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input" type="password" placeholder="Password" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </p>
                            </div>
                            <div className="field">
                                <p className="control">
                                    <button className="button is-success">
                                    Login
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};