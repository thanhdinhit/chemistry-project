import React, { Component } from 'react';
import notfound from './notfound.jpg';
import './index.css';
export default class NoMatch extends Component {
    render() {
        return (
            <div className="notfound">
                <img src={notfound} alt="NotFound" className='img-not-found' />
            </div>
        );
    }
}