import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../img/logo.png'
import classes from "../classes/NavBar.module.css";
import "../classes/NavBar.module.css";
import {useState} from "react";
import {useTranslation} from "react-i18next";
import useLocalstorage from "../hooks/use-localstorage";
import i18n from "../i18n";
import Select from "react-select";

const optionsCity = [
    {value: "vasil", label: i18n.t('nav_vasil')},
    {value: "obuh", label: i18n.t('nav_obuh')}
]

const NavBar = () => {

    const {t} = useTranslation();
    const [language, setLanguage] = useLocalstorage('language', 'ua')
    const [cityLocal, setCityLocal] = useLocalstorage('city', 'vasil')
    const [city, setCity] = useState(cityLocal)
    const [lang, setCurrentLang] = useState('ua')



    const options = [
        {value: "ru", label: 'RU'},
        {value: "ua", label: 'UA'}
    ]



    const getValue = () => {
        return city ? optionsCity.find(c => c.value === city) : i18n.t('nav_vasil')
    }

    const onChanges = (newValue) => {
        setCity(newValue.value)
        if (newValue.value === 'vasil') {
            setCityLocal('vasil')
        } else if (newValue.value === 'obuh') {
            setCityLocal('obuh')
        }
        window.location.reload()
    }





    const onChange = (newValue) => {
        setCurrentLang(newValue.value)
        if (newValue.value === 'ru') {
            i18n.changeLanguage('ru');
            setLanguage('ru')
        } else if (newValue.value === 'ua') {
            i18n.changeLanguage('ua');
            setLanguage('ua')
        }
        window.location.reload()
    }

    return (
        <Navbar collapseOnSelect expand='lg' bg="dark" variant='dark' className='py-0'>
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

                {window.screen.width <= 991
                    ? <Select
                        options={options}
                        onChange={onChange}
                        classNamePrefix='langselect'
                        isSearchable={false}
                        placeholder={language.toUpperCase()}
                    />
                    : <div></div>
                }


                {window.screen.width > 450
                    ? <Select
                        classNamePrefix='myselect'
                        isSearchable={false}
                        value={getValue()}
                        onChange={onChanges}
                        options={optionsCity}
                    />
                    : <div></div>
                }



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

                        {window.screen.width <= 450
                            ? <Select
                                classNamePrefix='myselect'
                                isSearchable={false}
                                value={getValue()}
                                onChange={onChanges}
                                options={optionsCity}
                            />
                            : <div></div>
                        }

                        <Nav.Link className={classes.navText} href='/'>{t('nav_gol')}</Nav.Link>
                        <Nav.Link className={classes.navText} href='/tariff'>{t('nav_tariffs')}</Nav.Link>
                        <Nav.Link className={classes.navText} href='/drivers'>{t('nav_vakans')}</Nav.Link>
                        <Nav.Link className={classes.navText} href='/contacts'>{t('nav_contacts')}</Nav.Link>
                        <Nav.Link className={classes.navText} href='/about'>{t('nav_about')}</Nav.Link>
                    </Nav>

                    {window.screen.width > 991
                        ? <Select
                            options={options}
                            classNamePrefix='langselect'
                            onChange={onChange}
                            isSearchable={false}
                            placeholder={language.toUpperCase()}
                        />
                        : <div></div>
                    }



                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default NavBar;

