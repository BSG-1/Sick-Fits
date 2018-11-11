import React, { Component } from 'react';
//allows us to push data and actually make a change
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';

class CreateItem extends Component {
    render() {
        return (
            <Form>
                <h2>Sell an Item.</h2>
            </Form>
        );
    }
}

export default CreateItem;