import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled from 'styled-components';

//back-ticks are tag template literal -->string that has been tagged with this specific style.button
const MyButton = styled.button`
    background: red;
    font-size: 100px;
`;

class Page extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header />
                <MyButton>Click Me</MyButton>
                {this.props.children}
            </div>
        );
    }
}

export default Page;