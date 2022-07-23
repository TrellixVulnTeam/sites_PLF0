import classes from '../classes/Home.module.css'
import google from '../img/google_play.png'
import vodafone from '../img/vodafone_icon.png'
import life from '../img/lifecell_logo.png'
import kyivstar from '../img/kyivstar_icon.png'


const Home = () => {
    return (
        <div style={{height: '100%'}}>
            <div style={{position: "relative"}}>
                <div className={classes.bgImage}></div>
                <div className={classes.bgText}>
                    <h1>ІДС «Сімка»</h1>
                    <p>Наша команда - це професійні водії та оператори з багаторічним досвідом роботи в таксі
                        по місту та всьому Васильківському районі, а саме тому їх не потрібно довго чекати. </p>
                </div>
                <div className={classes.imgGoogle}>
                    <p>Завантажити додаток:</p>
                    <a href='https://play.google.com/store/apps/details?id=ua.taxisimka'>
                        <img
                            src={google}
                            alt="google play link"/>
                    </a>
                </div>
                <div className={classes.contacts}>
                    <h2>Контакти</h2>
                    <div style={{position: "relative"}}>
                        <div className={classes.list}>
                            <a href='tel: 0932237070' className={classes.linkS}><p className='contact-single-phone flex'>
                                <img className='d-inline-block'
                                     width='30px'
                                     height='30px'
                                     src={life}
                                     alt='logo'/>
                                093 223 70 70
                            </p></a>
                            <a href='tel: 0982237070' className={classes.linkS}><p className='contact-single-phone flex'>
                                <img className='d-inline-block'
                                     width='30px'
                                     height='30px'
                                     src={kyivstar}
                                     alt='logo'/>
                                098 223 70 70
                            </p></a>
                            <a href='tel: 0952237070' className={classes.linkS}><p className='contact-single-phone flex'>
                                <img className='d-inline-block'
                                     width='30px'
                                     height='30px'
                                     src={vodafone}
                                     alt='logo'/>
                                095 223 70 70
                            </p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;