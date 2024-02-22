import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
    // c="guni"

    state = {
        progress: 0
    }

    setProgress = (progress) => {
        this.setState({ progress: progress })
    }

    apiKey = "274899c3793549f1be628ec235e465c3"
        // apiKey=process.env.REACT_APP_API_KEY

    pagesize = 30
    render() {
        // let c="Gurleen"
        return ( <
            div >
            <
            LoadingBar color = '#f11946'
            progress = { this.state.progress }
            height = { 4 }
            /> <
            Router > { /* <h1>This is a newsapp to remain updated</h1> */ } <
            NavBar / >
            <
            Routes >
            <
            Route exact path = "/"
            element = { < News setProgress = { this.setProgress }
                apiKey = { this.apiKey }
                key = "general"
                pageSize = { this.pagesize }
                country = "in"
                category = "general" / >
            }
            /> <
            Route exact path = "/business"
            element = { < News setProgress = { this.setProgress }
                apiKey = { this.apiKey }
                key = "business"
                pageSize = { this.pagesize }
                country = "in"
                category = "business" / >
            }
            /> <
            Route exact path = "/entertainment"
            element = { < News setProgress = { this.setProgress }
                apiKey = { this.apiKey }
                key = "entertainment"
                pageSize = { this.pagesize }
                country = "in"
                category = "entertainment" / >
            }
            /> <
            Route exact path = "/general"
            element = { < News setProgress = { this.setProgress }
                apiKey = { this.apiKey }
                key = "general"
                pageSize = { this.pagesize }
                country = "in"
                category = "general" / >
            }
            /> <
            Route exact path = "/health"
            element = { < News setProgress = { this.setProgress }
                apiKey = { this.apiKey }
                key = "health"
                pageSize = { this.pagesize }
                country = "in"
                category = "health" / >
            }
            /> <
            Route exact path = "/science"
            element = { < News setProgress = { this.setProgress }
                apiKey = { this.apiKey }
                key = "science"
                pageSize = { this.pagesize }
                country = "in"
                category = "science" / >
            }
            /> <
            Route exact path = "/sports"
            element = { < News setProgress = { this.setProgress }
                apiKey = { this.apiKey }
                key = "sports"
                pageSize = { this.pagesize }
                country = "in"
                category = "sports" / >
            }
            /> <
            Route exact path = "/technology"
            element = { < News setProgress = { this.setProgress }
                apiKey = { this.apiKey }
                key = "technology"
                epageSize = { this.pagesize }
                country = "in"
                category = "technology" / >
            }
            /> < /
            Routes > <
            /Router> < /
            div >
        )
    }
}