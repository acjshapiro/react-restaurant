import React from 'react';
import axios from 'axios';
import Form from './Form';


class Menu_Item extends React.Component {
    state = { menu_item: {}, edit: false }

    componentDidMount() {
        axios.get(`/api/menu_items/${this.props.match.params.id}`)
        .then( res => this.setState({ menu_item: res.data}))
    }
    toggleEdit = () => {
        this.setState( state => {
          return { edit: !this.state.edit }
        });
      }

      submit = (menu_item) => {
        axios.put(`/api/menu_items/${this.props.match.params.id}`, { menu_item })
          .then( res => this.setState({ menu_item: res.data, edit: false }) );
      }

      edit() {
        return <Form {...this.state.menu_item} submit={this.submit} />
      }
    

    show() {
        let { menu_item: { name, description, price}} = this.state
        return (
            <div>
                <h1> {name}</h1>
                <h2> {description}</h2>
                <h3> ${price} </h3>
            </div>
        )
    }

    render() {
        let { edit } = this.state;
        return (
          <div>
            { edit ? this.edit() : this.show() }
            <button onClick={this.toggleEdit}>{ edit ? 'Cancel' : 'Edit' }</button>
          </div>
        )
      }

}

export default Menu_Item