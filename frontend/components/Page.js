import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled from 'styled-components';

//back-ticks are tag template literal
const MyButton = styled.button``;

class Page extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header />
                <button>Click Me</button>
                {this.props.children}
            </div>
        );
    }
}

export default Page;