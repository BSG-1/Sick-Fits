import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';

export default class Item extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
    };

    render() {
        const { item } = this.props;
        return <ItemStyles>
            <Title>
                {/* two curly braces for passing an object literal in href */}
                <Link href={{}}>
                    <a>{item.title}</a>
                </Link>
            </Title>
        </ItemStyles>

    }
}
