import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../img/logo.png'
import classes from "../classes/NavBar.module.css";


const NavBar = () => {


    return (
        <Navbar  collapseOnSelect expand='md' bg="dark"  variant='dark' className='py-0'>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width='100px'
                        height='100px'
                        className='d-inline-block align-top'
                        alt={logo}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='me-auto fs-4 mx-3' style={{color: 'white'}}>
                    <Nav.Link className={classes.navText} href='/'>Головна</Nav.Link>
                    <Nav.Link className={classes.navText} href='/tariff'>Тарифи</Nav.Link>
                    <Nav.Link className={classes.navText} href='/contacts'>Контакти</Nav.Link>
                    <Nav.Link className={classes.navText} href='/about'>Про нас</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavBar;