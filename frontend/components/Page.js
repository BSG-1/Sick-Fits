import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled from 'styled-components';

//theme object
const theme = {

}

class Page extends Component {
    render() {
        return (
            <StyledPage>
                <Meta />
                <Header />
                <Inner>
                    {this.props.children}
                </Inner>
            </StyledPage>
        );
    }
}

export default Page;