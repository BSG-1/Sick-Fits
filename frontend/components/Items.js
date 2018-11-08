import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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

export default class Items extends Component {
    render() {
        return (
            <div>
                <p>Items!</p>
                <Query query={ALL_ITEMS_QUERY} >
                    {/* the only child of a query must be a function */}
                    {(payload) => {
                        console.log(payload);
                        return <p>Hey I'm the child of query</p>
                    }}
                </Query>
            </div>
        );
    }
}
