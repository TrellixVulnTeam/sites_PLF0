import classes from "../classes/About.module.css";
import big_logo from "../img/big_logo.png";
import {useTranslation} from "react-i18next";

const About = () => {
    const {t} = useTranslation()
    return (
        <div className={classes.bg}>
            <div className='container text-center'>
                <div>
                    <h2 className='text-center p-0 pt-3 mb-0 text-uppercase'>{t('about_name')}</h2>
                </div>
                <div className='mx-auto w-50  justify-content-center'>
                    <img
                        className='img-fluid'
                        src={big_logo}
                        alt="Logo"/>
                </div>
                <div className={classes.firstP}>
                    <p>{t('about_desk')} </p>
                </div>
                <div className={classes.allFor}>
                    <div className="row ">
                        <div className="col-md-4 my-3">
                            <i className="bi bi-phone d-inline-block" style={{
                                width: '80px',
                                height: '80px',
                                background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
                                color: '#fff',
                                padding: '15px 0',
                                borderRadius: '50%',
                                fontSize: '32px',
                                margin: 'auto'
                            }}></i>
                            <div className={classes.serviceDesc}>
                                <h3>{t('about_mobile')}</h3>
                                <p>{t('about_desk_mobile')}</p>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <i className="bi bi-clock d-inline-block" style={{
                                width: '80px',
                                height: '80px',
                                background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
                                color: '#fff',
                                padding: '15px 0',
                                borderRadius: '50%',
                                fontSize: '32px',
                                margin: 'auto'
                            }}></i>
                            <div className={classes.serviceDesc}>
                                <h3>{t('about_popered')}</h3>
                                <p>{t('about_popered_desk')}</p>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <i className="bi bi-car-front d-inline-block" style={{
                                width: '80px',
                                height: '80px',
                                background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
                                color: '#fff',
                                padding: '15px 0',
                                borderRadius: '50%',
                                fontSize: '32px',
                                margin: 'auto'
                            }}></i>
                            <div className={classes.serviceDesc}>
                                <h3>{t('about_driver')}</h3>
                                <p>{t('about_driver_desk')}</p>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <i className="bi bi-person-video3 d-inline-block" style={{
                                width: '80px',
                                height: '80px',
                                background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
                                color: '#fff',
                                padding: '15px 0',
                                borderRadius: '50%',
                                fontSize: '32px',
                                margin: 'auto'
                            }}></i>
                            <div className={classes.serviceDesc}>
                                <h3>{t('about_tech')}</h3>
                                <p>{t('about_tech_desk')}</p>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <i className="bi bi-cart3 d-inline-block" style={{
                                width: '80px',
                                height: '80px',
                                background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
                                color: '#fff',
                                padding: '15px 0',
                                borderRadius: '50%',
                                fontSize: '32px',
                                margin: 'auto'
                            }}></i>
                            <div className={classes.serviceDesc}>
                                <h3>{t('about_loyal')}</h3>
                                <p>{t('about_loyal_desk')}</p>
                            </div>
                        </div>
                        <div className="col-md-4 my-3">
                            <i className="bi bi-truck d-inline-block" style={{
                                width: '80px',
                                height: '80px',
                                background: 'linear-gradient(to right, #6372ff 0%, #5ca9fb 100%)',
                                color: '#fff',
                                padding: '15px 0',
                                borderRadius: '50%',
                                fontSize: '32px',
                                margin: 'auto'
                            }}></i>
                            <div className={classes.serviceDesc}>
                                <h3>{t('about_delivery')}</h3>
                                <p>{t('about_delivery_desk')}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;