import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled from 'styled-components';

//theme object
const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0,09)',
};

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