import React, { Component } from 'react';
//allows us to push data and actually make a change
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';

class CreateItem extends Component {
    state = {
        title: '',
        description: '',
        image: '',
        largeImage: '',
        price: 0,
    };

    //wouldnt be able to bind a regular function
    handleChange = () => {
        this.setState
    }

    render() {
        return (
            <Form>
                <fieldset>
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
                </fieldset>
            </Form>
        );
    }
}

export default CreateItem;