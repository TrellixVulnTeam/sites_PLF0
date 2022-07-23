import classes from '../classes/Contacs.module.css'
import life from "../img/lifecell_logo.png";
import kyivstar from "../img/kyivstar_icon.png";
import vodafone from "../img/vodafone_icon.png";
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
                        <div className='col-sm-6 col-12 '>
                            <div className='text-center border border-2 border-white rounded  p-2 my-sm-4 '>
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
                        <div className="col-sm-6 col-12">
                            <div
                                className='text-center border border-2 border-white rounded  p-2 my-sm-4 my-4 '>
                                <h3 className=''>Пошта</h3>
                                <div className={classes.mobiles}>
                                    <p className='flex fbo'>
                                        <i className="bi bi-envelope-fill mx-1"></i>
                                        taxisimk@taxi-simka.com
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
                    <div className="text-center">
                        <h4>Працюємо з 5.00 до 23.00</h4>
                    </div>
                </div>
            </div>
        </section>

        // {/*<div className='container'>*/}
        // {/*    <div className='row py-4'>*/}
        // {/*        <div className='col-md-6 col-12'>*/}
        // {/*            <img src={vasilkov_1_0} alt="Фото міста" className='img-fluid img-thumbnail border-dark'/>*/}
        // {/*        </div>*/}
        // {/*        <div className='col-md-6 col-12 d-inline-flex justify-content-center align-content-center align-items-center'>*/}
        // {/*            <div className='text-center border border-2 border-dark rounded  px-md-5 py-md-3 p-5 my-4 my-md-0' >*/}
        // {/*                <h3 className=''>Дзвоніть!</h3>*/}
        // {/*                <div className={classes.mobiles}>*/}
        // {/*                    <p className='contact-single-phone flex'>*/}
        // {/*                        <img className='d-inline-block'*/}
        // {/*                             width='30px'*/}
        // {/*                             height='30px'*/}
        // {/*                             src={life}*/}
        // {/*                             alt='logo'/>*/}
        // {/*                        093 223 70 70*/}
        // {/*                    </p>*/}
        // {/*                    <p className='contact-single-phone flex'>*/}
        // {/*                        <img className='d-inline-block'*/}
        // {/*                             width='30px'*/}
        // {/*                             height='30px'*/}
        // {/*                             src={kyivstar}*/}
        // {/*                             alt='logo'/>*/}
        // {/*                        098 223 70 70*/}
        // {/*                    </p>*/}
        // {/*                    <p className='contact-single-phone flex'>*/}
        // {/*                        <img className='d-inline-block'*/}
        // {/*                             width='30px'*/}
        // {/*                             height='30px'*/}
        // {/*                             src={vodafone}*/}
        // {/*                             alt='logo'/>*/}
        // {/*                        095 223 70 70*/}
        // {/*                    </p>*/}
        // {/*                </div>*/}
        // {/*            </div>*/}
        // {/*        </div>*/}
        // {/*    </div>*/}
        // {/*</div>*/}
    );
};

export default Contacts;