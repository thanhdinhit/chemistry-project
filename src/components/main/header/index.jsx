import React, { Component } from 'react';

class HeaderComponent extends Component {
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
                <div className="wrapper">
                    This is a header
                </div>
        );
    }
}

export default HeaderComponent;