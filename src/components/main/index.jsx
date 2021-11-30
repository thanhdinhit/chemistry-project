import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeComponent from './home';
import HeaderComponent from './header';
import FooterComponent from './footer';
import NotFound from '../nomatch'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        }
    }

    componentWillMount() {
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <main>
                <div className="wrapper">
                    {/* <HeaderComponent /> */}
                    <Switch>
                        <Route exact path='/' component={HomeComponent} />
                        <Route component={NotFound} />
                    </Switch>
                    <FooterComponent />
                </div>
            </main>
        );
    }
}

export default Main;