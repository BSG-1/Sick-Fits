import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';

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

const ItemsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`;

//this is a component for fetching the items from graphql/prisma and looping over them, and also for formatting them (above)
export default class Items extends Component {
    render() {
        return (
            <Center>
                <Query query={ALL_ITEMS_QUERY} >
                    {/* the only child of a query must be a function */}
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error: {error.message}</p>
                        //console.log(data);
                        return <ItemsList>
                            {/* NEEDS A KEY PROP */}
                            {data.items.map(item => <Item item={item}></Item>)}
                        </ItemsList>
                    }}
                </Query>
            </Center>
        );
    }
}
