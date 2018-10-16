import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

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

const StyledPage = styled.div`
    background: white;
    color: black;
`;

const Inner = styled.div`
    /* ES6 interpolation with max-width */
    max-width: ${props => props.theme.maxWidth};
    /* ES6 interpolation with background color */
    background: ${props => props.theme.red};
    margin: 0 auto;
    padding: 2rem;
`;
class Page extends Component {
    render() {
        return (
            //wrap whole application in React Context API
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />
                    <Inner>{this.props.children}</Inner>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;