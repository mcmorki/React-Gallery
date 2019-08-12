import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import key from './config.js';
import Header from './Components/Header.js';
import Container from './Components/Container.js';
import Error from './Error.js';

class App extends Component {

    // the keyCounter variable ensures the route is re-rendered everytime, even if the route is the same
    constructor() {
        super();
        this.keyCounter = 0;
    }
    // passes a key, the word to query and the API key
    routeHandler = ({match}) =>
        <Container
            key={this.keyCounter++}
            keyWord={match.params.query}
            apiKey={key} />

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Switch>
                        <Route
                            path='/search/:query'
                            render={this.routeHandler} />
                        <Route
                            path='/search/'
                            render={this.routeHandler} />
                        <Route
                            exact path='/presets/:query'
                            render={this.routeHandler} />
                
                        <Route
                            exact path='/'
                            render={ () => <Redirect to='/presets/new york interior design' /> } />
                    <Error />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}

export default App;
