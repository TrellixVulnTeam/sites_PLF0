import classes from "../classes/About.module.css";
import big_logo from "../img/big_logo.png";

const About = () => {
    return (
        <div className={classes.bg}>
            <div className='container text-center'>
                <div>
                    <h2 className='text-center p-0 pt-3 mb-0 text-uppercase'>Інформаційно-диспетчерська служба "сімка"</h2>
                </div>
                <div className='mx-auto w-50  justify-content-center'>
                    <img
                        className='img-fluid'
                        src={big_logo}
                        alt="Logo"/>
                </div>
                <div className={classes.firstP}>
                    <p>В ці надскладні часи, коли рашистський окупант, ганебно намагається вторгнутися на нашу рідну
                        землю, нещадно бомбить наші міста та вбиває наших мирних побратимів, наша команда працює на
                        своєму фронті. Незважаючи на практичну відсутність та захмарну ціну на паливо, наші водії
                        знаходять вихід, та все одно добросовісно виконують свою роботу.</p>
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
                                <h3>Мобільний додаток</h3>
                                <p>Мобільний та досить зручний додаток за допомогою якого кожен може замовити собі авто
                                    без
                                    дзвінка оператору. Завантажити додаток можна в Play Market</p>
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
                                <h3>Попередні замовлення</h3>
                                <p>Перевага попередніх замовлень в тому, що замовляючи авто заздалегідь ви можете бути
                                    впевненні в тому, що авто вас буде чекати саме в той час, на який ви його
                                    замовили</p>
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
                                <h3>Послуги драйвера</h3>
                                <p>Надаємо послуги драйвера (наш водій доставить вас на вашому авто за вказаною
                                    адресою)</p>
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
                                <h3>Послуги з технічної підтримки</h3>
                                <p>Надаємо послуги з технічної підтримки («прикурювання», доставка палива та інше)</p>
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
                                <h3>Програма лояльності та система знижок</h3>
                                <p>Можливість розрахування банківською карткою</p>
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
                                <h3>Послуги доставки</h3>
                                <p>Надаємо послуги доставки товарів та документів</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;