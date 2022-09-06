import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from '../img/logo.png'
import classes from "../classes/NavBar.module.css";
import '../classes/NavBar.module.css'
import {useState} from "react";
import {useTranslation} from "react-i18next";
import useLocalstorage from "../hooks/use-localstorage";
import i18n from "../i18n";

const NavBar = () => {

    const {t} = useTranslation();
    const [language, setLanguage] = useLocalstorage('language', 'ua')

    const handleLanguageChange = () => {
        if(language==='ua'){
            i18n.changeLanguage('ru');
            setLanguage('ru')
        } else if (language==='ru'){
            i18n.changeLanguage('ua');
            setLanguage('ua')
        }
    }



    const [city, setCity] = useState('Оберіть місто')

    return (
        <Navbar collapseOnSelect expand='md' bg="dark"  variant='dark' className='py-0'>
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


                {/*<select className={classes.selectCity}>*/}
                {/*    <option value="vasylkiv">Васильків</option>*/}
                {/*</select>*/}

                {/*<Nav className=' fs-5 ' >*/}
                {/*    <NavDropdown title={city} >*/}
                {/*        <NavDropdown.Item onClick={()=>setCity('Васильків')}>Васильків</NavDropdown.Item>*/}
                {/*        <NavDropdown.Item onClick={()=>setCity('Київ')}>Київ</NavDropdown.Item>*/}
                {/*        <NavDropdown.Item onClick={()=>setCity('Житомир')}>Житомир</NavDropdown.Item>*/}
                {/*    </NavDropdown>*/}
                {/*</Nav>*/}

                <Navbar.Toggle aria-controls='responsive-navbar-nav' className={classes.navbarToggler}/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='me-auto fs-5 mx-2' style={{color: 'white'}}>
                    <Nav.Link className={classes.navText} href='/'>{t('nav_gol')}</Nav.Link>
                    <Nav.Link className={classes.navText} href='/tariff'>{t('nav_tariffs')}</Nav.Link>
                    <Nav.Link className={classes.navText} href='/drivers'>{t('nav_vakans')}</Nav.Link>
                    <Nav.Link className={classes.navText} href='/contacts'>{t('nav_contacts')}</Nav.Link>
                    <Nav.Link className={classes.navText} href='/about'>{t('nav_about')}</Nav.Link>
                </Nav>
                    {/*<Button onClick={handleLanguageChange}>{language === 'ru' ? t('RU') : t('UA')}</Button>*/}

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default NavBar;