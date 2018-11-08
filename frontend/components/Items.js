import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

//query from graphql
const ALL_ITEMS_QUERY = gql`
    # name it the same
    query ALL_ITEMS_QUERY {
        # remember with graphql you pull in only exactly what you need
        items {
            id
            title
            price
            description
            image
            largeImage
        }
    }
`;

const Center = styled.div`
    text-align: center;
`;

export default class Items extends Component {
    render() {
        return (
            <Center>
                <p>Items!</p>
                <Query query={ALL_ITEMS_QUERY} >
                    {/* the only child of a query must be a function */}
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error: {error.message}</p>
                        //console.log(data);
                        return <p>I found {data.items.length} items!</p>
                    }}
                </Query>
            </Center>
        );
    }
}
