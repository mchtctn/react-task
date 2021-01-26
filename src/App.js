import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "./layouts/Header";
import NavBar from "./layouts/NavBar";
import Dashboard from './views/Dashboard';
import './css/layout.css';

const App = () => {
    const [title, setTitle] = useState("Dashboard")

    return ( 
        <div className="layout">
            <NavBar/>
            <div className="content">
                <Header title={title}/>
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            </div>
        </div>
    );
}

export default App;