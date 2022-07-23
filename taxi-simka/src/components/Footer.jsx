import classes from '../classes/Footer.module.css'



const Footer = () => {
    return (
        <footer className='bg-dark' style={{color: 'white'}}>
            <section className={classes.footer}>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-4 col-6">
                            <h4>Інформація</h4>
                            <ul className="list-unstyled">
                                <li><a href="/home">Головна</a></li>
                                <li><a href="/tariff">Тарифи</a></li>
                                <li><a href="/contacts">Контакти</a></li>
                                <li><a href="/about">Про нас</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-6 ">
                            <h4>Контакти</h4>
                            <ul className="list-unstyled">
                                <li><a href="tel: 0932237070"><i className="bi bi-telephone"></i>093 223 70 70</a></li>
                                <li><a href="tel: 0982237070"><i className="bi bi-telephone"></i>098 223 70 70</a></li>
                                <li><a href="tel: 0952237070"><i className="bi bi-telephone"></i>095 223 70 70</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-12">
                            <h4>Ми в мережі</h4>
                            <div className={classes.footerIcons}>
                                <a href="https://www.facebook.com/groups/573451010756112"><i
                                    className="bi bi-facebook"></i></a>
                                <a href="https://www.instagram.com/vasilkiv.taxi"><i
                                    className="bi bi-instagram"></i></a>
                                <a href="https://play.google.com/store/apps/details?id=ua.taxisimka"><i
                                    className="bi bi-google-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;