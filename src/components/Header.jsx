import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import VismetLogo from '../assets/images/vismet.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar sticky='top' expand='sm' className='site-header'>
            <NavbarBrand  href='/'>
                <img height='75px' src={VismetLogo} alt='Vista Logo' className='logo-image'/>
                <div>
                    <h1 className='title-text d-none d-md-block md-7' style={{ fontWeight: 'bold' }}>vismet-forms</h1>
                    <h1 className='title-text d-md-none' style={{ fontWeight: 'bold'}}>vismet-forms</h1>
                </div>
            </NavbarBrand>

            <NavbarToggler id='toggler-color' onClick={() => setMenuOpen(!menuOpen)}>
                <FontAwesomeIcon icon={faBars} className="fa-lg" />
            </NavbarToggler>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <Button>
                            <NavLink className='nav-link' to='/'>
                               HOME
                            </NavLink>
                        </Button>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink className='nav-link' to='/change-request-entry'>
                            <i className='fa fa-list fa-lg link-text' /> Entry
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/edit'>
                            <i className='fa fa-info fa-lg link-text' /> Edit
                        </NavLink>
                    </NavItem> */}
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header; 