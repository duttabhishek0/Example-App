import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/UniversityList' activeStyle>
			University List
		</NavLink>
		<NavLink to='/Favourites' activeStyle>
            Favourites
		</NavLink>
        </NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
