import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
// import styled from 'styled-components';

//back-ticks are tag template literal -->string that has been tagged with this specific style.button


class Page extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header />
                {this.props.children}
            </div>
        );
    }
}

export default Page;