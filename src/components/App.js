import React, { Component } from "react";
import Home from "../components/pages/Home/Home.js";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "../assets/defaults/reset.css";
import "../assets/defaults/default.scss";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../redux/reducers/index.js'

const store = createStore(reducers)

class App extends Component {

    componentDidMount() {}

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="app_container">
                        <Route exact path={'/'} component={() => <Home/>}/>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App;