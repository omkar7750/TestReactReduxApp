import React from 'react';
import {NavLink, Link} from 'react-router-dom';
let Header = (props) => (
<div> 
    <h1> {props.hTitle} </h1>
    <NavLink to='/' exact={true} activeClassName='is-active'>home</NavLink>
    <NavLink to='/create' activeClassName='is-active'>create</NavLink>
    <NavLink to='/edit' activeClassName='is-active'>edit</NavLink>
    <NavLink to='/help' activeClassName='is-active'>help</NavLink>
    
</div>);
export default Header;