import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const styles ={
    active: {
        textDecoration: 'none',
        fontWeight: 'bold',
        color: 'black',
    }
}

const NavBar = ( {history} ) => (
    <nav>
        <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
        {' '}
        <NavLink activeStyle={styles.active} to='/about'>About</NavLink>
        {' '}
        <NavLink activeStyle={styles.active} to="/menu">Menu</NavLink>
    </nav>
)



export default withRouter(NavBar);
