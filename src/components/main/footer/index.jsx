import React, { Component } from 'react';
import './index.css';

class FooterComponent extends Component {
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
                <div className="wrapper footer-style">
                    Copyright © 2021 TienTuyetGroup. All Rights Reserved
                </div>
        );
    }
}

export default FooterComponent;