import React from 'react';
import axios from 'axios';

class Menu_Item extends React.Component {
    state = { menu_item: {} }

    componentDidMount() {
        axios.get(`/api/menu_items/${this.props.match.params.id}`)
        .then( res => this.setState({ menu_item: res.data}))
    }

    render() {
        let { menu_item: { name, description, price}} = this.state
        return (
            <div>
                <h1> {name}</h1>
                <h2> {description}</h2>
                <h3> ${price} </h3>
            </div>
        )
    }

}

export default Menu_Item