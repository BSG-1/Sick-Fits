import React, { Component } from 'react';
//allows us to push data and actually make a change
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';

//writing the queries for the mutations that capture the data and sends it to server
const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY($id: ID!){
        item(where: { id: $id }){
            id
            title
            description
            price
        }
    }
`;

const UPDATE_ITEM_MUTATION = gql`
    # this mutation takes arguments, which will then be able to gather the input data and hold it in the query (createItem), which was specified from our backend in schema.graphql
    mutation UPDATE_ITEM_MUTATION(
        $title: String!
        $description: String!
        $price: Int!
    ) {
        createItem(
            title: $title
            description: $description
            price: $price
        ) {
            id
            title
            description
            price
        }
    } 
`;

//Update Item
class UpdateItem extends Component {
    state = {};

    //wouldnt be able to bind a regular function
    handleChange = e => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        //works for ANY input
        this.setState({ [name]: val });
    };
    updateItem = (e, updateItemMutation) => {
        e.preventDefault();
        console.log('Updating Item!!');
        console.log(this.state);
    };

    render() {
        return (
            <Query
                query={SINGLE_ITEM_QUERY}
                variables={{
                    id: this.props.id,
                }}
            >
                {({ data, loading }) => {
                    if (loading) return <p>Loading...</p>
                    return (
                        // Mutation wraps the entire form tag, exposing data to the query
                        <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
                            {(updateItem, { loading, error }) => (
                                //want to return everything from form implicitly (returns whatever is there without having to use the return keyword ==== closing for function and mutation tag moved to end of form!!!)                     
                                <Form onSubmit={e => this.updateItem(e, updateItem)}>
                                    <Error error={error} />
                                    <fieldset disabled={loading} aria-busy={loading}>
                                        <label htmlFor="title">
                                            Title
                                <input
                                                type="text"
                                                id="title"
                                                name="title"
                                                placeholder="Title"
                                                required
                                                defaultValue={data.item.title}
                                                onChange={this.handleChange}
                                            />
                                        </label>

                                        <label htmlFor="price">
                                            Price
                                <input
                                                type="number"
                                                id="price"
                                                name="price"
                                                placeholder="Price"
                                                required
                                                defaultValue={data.item.price}
                                                onChange={this.handleChange}
                                            />
                                        </label>

                                        <label htmlFor="description">
                                            Description
                                <textarea
                                                id="description"
                                                name="description"
                                                placeholder="Enter A Description"
                                                required
                                                defaultValue={data.item.description}
                                                onChange={this.handleChange}
                                            />
                                        </label>
                                        <button type="submit">Save Changes</button>
                                    </fieldset>
                                </Form>
                            )}
                        </Mutation>
                    );
                }}
            </Query>
        );
    }
}

export default UpdateItem;
//named export using ES6
export { UPDATE_ITEM_MUTATION };