import classes from '../classes/Contacs.module.css'
import vodafone from '../img/vodafone_icon.png'
import life from '../img/lifecell_logo.png'
import kyivstar from '../img/kyivstar_icon.png'

import google from "../img/google_play.png";

const Contacts = () => {
    return (
        <section className={classes.bgImgVas}>
            <div className={classes.positionCenter}>
                <div className="container">
                    <div className={classes.text}>
                        <h1>Наші контакти</h1>
                    </div>
                    <div className="row">
                        <div className='col-md-4 col-12 '>
                            <div className='text-center border border-2 border-white rounded p-2 my-md-4 my-3'>
                                <div className={classes.blocks}>
                                    <h3 className=''>Телефон</h3>
                                    <div className={classes.mobiles}>
                                        <a className='link-light text-decoration-none' href='tel:0932237070'><p
                                            className='flex'>
                                            <img className='d-inline-block mx-1'
                                                 width='30px'
                                                 height='30px'
                                                 src={life}
                                                 alt='logo'/>
                                            093 223 70 70
                                        </p></a>
                                        <a className='link-light text-decoration-none' href='tel:0982237070'><p
                                            className=' flex'>
                                            <img className='d-inline-block mx-1'
                                                 width='30px'
                                                 height='30px'
                                                 src={kyivstar}
                                                 alt='logo'/>
                                            098 223 70 70
                                        </p>
                                        </a>
                                        <a className='link-light text-decoration-none' href='tel:0952237070'><p
                                            className=' flex'>
                                            <img className='d-inline-block mx-1'
                                                 width='30px'
                                                 height='30px'
                                                 src={vodafone}
                                                 alt='logo'/>
                                            095 223 70 70
                                        </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className='text-center border border-2 border-white rounded  p-2 my-md-4 my-3 '>
                                <div className={classes.blocks}>
                                    <h3 className=''>Пошта</h3>
                                    <div className={classes.mobiles}>
                                        <p className='flex fbo'>
                                            <a href='mailto: taxisimk@taxi-simka.com' style={{color: 'white'}}><i
                                                className="bi bi-envelope-fill mx-1"></i>
                                                taxisimk@taxi-simka.com</a>
                                        </p>
                                    </div>
                                    <div className={classes.imgGoogle}>
                                        <p>Додаток:</p>
                                        <a href='https://play.google.com/store/apps/details?id=ua.taxisimka'>
                                            <img
                                                className='img-fluid'
                                                src={google}
                                                alt="google play link"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className='text-center border border-2 border-white rounded  p-2 my-md-4 my-3 '>
                                <div className={classes.blocks}>
                                    <h3 className=''>Відділ якості </h3>
                                    <div className={classes.mobiles2}>
                                        <a className='link-light text-decoration-none fs-4' href='tel: 0634952545'><p
                                            className='flex'><br/>
                                            <i className="bi bi-phone mx-1"></i>
                                            063 495 25 45
                                        </p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pb-4">
                        <h4>Працюємо з 5.00 до 23.00</h4>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Contacts;