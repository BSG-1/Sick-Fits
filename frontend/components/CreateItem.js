import React, { Component } from 'react';
//allows us to push data and actually make a change
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';

//writing the query for the mutation that captures the data and sends it to server
const CREATE_ITEM_MUTATION = gql`
    # this mutation takes arguments, which will then be able to gather the input data and hold it in the query (createItem), which was specified from our backend in schema.graphql
    mutation CREATE_ITEM_MUTATION(
        $title: String!
        $description: String!
        $price: Int!
        $image: String
        $largeImage: String
    ) {
        createItem(
            title: $title
            description: $description
            price: $price
            image: $image
            largeImage: $largeImage
        ) {
            id
        }
    } 
`;

class CreateItem extends Component {
    state = {
        title: 'Cool Shoes',
        description: 'I love those shoes',
        image: 'dog.jpg',
        largeImage: 'largeDog.jpg',
        price: 1000,
    };

    //wouldnt be able to bind a regular function
    handleChange = e => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        //works for ANY input
        this.setState({ [name]: val });
    }

    render() {
        return (
            // Mutation wraps the entire form tag, exposing data to the query
            <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
                {(createItem, { loading, error }) => (
                    //want to return everything from form implicitly (returns whatever is there without having to use the return keyword ==== closing for function and mutation tag moved to end of form!!!)                     
                    <Form onSubmit={async e => {
                        //stops form from actually submitting; will stop url weirdness
                        e.preventDefault();
                        //call the mutation; await the exposed createItem function from backend
                        const res = await createItem();
                        //change them to the single item page
                        console.log(res);
                        Router.push({
                            pathname: '/item',
                            query: { id: res.data.createItem.id }
                        })
                    }}
                    >
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
                                    value={this.state.title}
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
                                    value={this.state.price}
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
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                />
                            </label>
                            <button type="submit">Submit</button>
                        </fieldset>
                    </Form>
                )}
            </Mutation>
        );
    }
}

export default CreateItem;
//named export using ES6
export { CREATE_ITEM_MUTATION };