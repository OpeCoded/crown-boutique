import React from 'react';

//connect is a highered order component that lets us modify our component to have access to things related to redux
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg'

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>

    <div className='options'>
    <Link className='option' to='/shop'> SHOP </Link>
    <Link className='option' to='/shop'> CONTACT </Link>
    
    {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>
        ) : (
        <Link className='option' to='/signin'>SIGN IN</Link>
        )}
    </div>
    </div>
)

//this allows us to access our reducers and pull data from it
//state = root-reducer.js
//user = user value in our root-reducer.js
//currentUser = is the property that holds our currently logged in user in user.reducer.js
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

//here we export our connect with the header and pass in some values
//we pass in a function to our connect which allows us to access the states with the state being our root-reducer
export default connect(mapStateToProps)(Header);