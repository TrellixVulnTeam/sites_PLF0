import React from 'react';
import classes from "../classes/Drivers.module.css";
import google from "../img/google_play.png";
import {Button, Nav} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const Drivers = () => {
    const {t} = useTranslation()
    return (
        <div className={classes.bg}>
            <div className="container text-center">
                <div className='text-center p-0 pt-5 mb-0'>
                    <p>{t('drivers_first_name')}
                    </p>
                </div>
                <div className={classes.list}>
                    <dt>{t('drivers_conditions')}</dt>
                    <dd><i className="bi bi-check"
                           style={{color: 'lime', fontSize: '25px', marginRight: '10px'}}></i> {t('drivers_grafik')}
                    </dd>
                    <dd><i className="bi bi-check"
                           style={{color: 'lime', fontSize: '25px', marginRight: '10px'}}></i> {t('drivers_dopposlug')}
                    </dd>
                    <dd><i className="bi bi-check"
                           style={{color: 'lime', fontSize: '25px', marginRight: '10px'}}></i> {t('drivers_queue')}
                    </dd>
                    <dd><i className="bi bi-check"
                           style={{color: 'lime', fontSize: '25px', marginRight: '10px'}}></i> {t('drivers_grafgueue')}
                    </dd>
                    <dd><i className="bi bi-check"
                           style={{color: 'lime', fontSize: '25px', marginRight: '10px'}}></i> {t('drivers_comfort')}
                    </dd>
                    <dd><i className="bi bi-check"
                           style={{color: 'lime', fontSize: '25px', marginRight: '10px'}}></i> {t('drivers_lowcomm')}
                    </dd>
                    <dd><i className="bi bi-check"
                           style={{color: 'lime', fontSize: '25px', marginRight: '10px'}}></i> {t('drivers_choise')}
                    </dd>
                </div>

                <div className={classes.list}>
                    <dt>{t('drivers_requirements')}</dt>
                    <dd><i className="bi bi-check"
                           style={{color: 'lime', fontSize: '25px', marginRight: '10px'}}></i> {t('drivers_age')}
                    </dd>
                    <dd><i className="bi bi-check"
                           style={{color: 'lime', fontSize: '25px', marginRight: '10px'}}></i> {t('drivers_auto')}
                    </dd>
                    <dd><i className="bi bi-check"
                           style={{color: 'lime', fontSize: '25px', marginRight: '10px'}}></i> {t('drivers_phone')}</dd>
                    <dd><i className="bi bi-check"
                           style={{color: 'lime', fontSize: '25px', marginRight: '10px'}}></i> {t('drivers_experience')}
                    </dd>
                    <dd><i className="bi bi-check"
                           style={{color: 'lime', fontSize: '25px', marginRight: '10px'}}></i> {t('drivers_city')} </dd>
                    <dd><i className="bi bi-check"
                           style={{color: 'lime', fontSize: '25px', marginRight: '10px'}}></i> {t('drivers_expmobile')}
                    </dd>
                    <dd><i className="bi bi-check"
                           style={{color: 'lime', fontSize: '25px', marginRight: '10px'}}></i> {t('drivers_badhabits')}
                    </dd>
                    <dd><i className="bi bi-check"
                           style={{color: 'lime', fontSize: '25px', marginRight: '10px'}}></i> {t('drivers_stressres')}
                    </dd>
                    <dd><i className="bi bi-check" style={{
                        color: 'lime',
                        fontSize: '25px',
                        marginRight: '10px'
                    }}></i> {t('drivers_communicability')} </dd>
                    <dd><i className="bi bi-check"
                           style={{color: 'lime', fontSize: '25px', marginRight: '10px'}}></i> {t('drivers_collective')}
                    </dd>
                </div>
                <div className={classes.imgGoogle}>
                    <p className='pt-4'>{t('drivers_mobilefordrivers')}</p>
                    <a href='https://play.google.com/store/apps/details?id=ua.com.mobilauto.driver'>
                        <img
                            src={google}
                            alt="google play link"/>
                    </a>
                </div>
                <div className='mt-4'>
                    <p>{t('drivers_ifagree')}</p>
                    <Nav.Link href='/feedback'>
                        <Button className='fs-3 p-3 mt-3'>{t('drivers_form')}</Button>
                    </Nav.Link>
                </div>
            </div>
        </div>
    );
};

export default Drivers;