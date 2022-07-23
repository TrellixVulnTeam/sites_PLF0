import React, {useState} from 'react';
import classes from '../classes/Tariff.module.css'
import {standart, universal, driver, delivery} from "../service/tarifs";


const Tariff = () => {
    let [car, setCar] = useState(standart)
    if (car === driver) {

    }

    return (
        <div className={classes.bodyBg}>
            <div className="container border-dark">
                <h1 className='text-center fw-bold'>Вартість та класи авто</h1>
                <div className={classes.boxChoise}>
                    <div className={classes.header}>
                        <img
                            src={car.img}
                            width="56"
                            height="56"
                            alt="Car Стандарт"/>
                        <div className={classes.classSpan}>
                            <span>Клас</span>
                            <h2>{car.name}</h2>
                        </div>
                        <div className={classes.h2h4}>
                            <h4 className='px-4'>{car.desc}</h4>
                        </div>
                    </div>
                    <div className={classes.bottom}>
                        <div className="row">
                            <div className="col-md-3 col-6 mb-3 my-md-4 my-2">
                                <span className={classes.numbers}>{car.minVar} </span>
                                <div>
                                    <span className={classes.desc}>мінімальна
                                    <br/></span>
                                    <span className={classes.desc}>вартість, грн
                                    <br/></span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6 mb-3 my-md-4 my-2">
                                <span className={classes.numbers}>{car.minVid}</span>
                                <div>
                                    <span className={classes.desc}>мінімальна
                                    <br/></span>
                                    <span className={classes.desc}>відстань, km
                                    <br/></span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6 mb-3 my-md-4">
                                <span className={classes.numbers}>{car.varPoMist} </span>
                                <div>
                                    <span className={classes.desc}>вартість за km
                                    <br/></span>
                                    <span className={classes.desc}>по місту, грн
                                    <br/></span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6 mb-3 my-md-4">
                                <span className={classes.numbers}>{car.varZaMist} </span>
                                <div>
                                    <span className={classes.desc}>вартість за km
                                    <br/></span>
                                    <span className={classes.desc}>за містом, грн
                                    <br/></span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6 mb-3">
                                <span className={classes.numbers}>{car.freeWait}</span>
                                <div>
                                    <span className={classes.desc}>{car.forDelivery}
                                        <br/></span>
                                    <span className={classes.desc}>очікування, хв
                                    <br/></span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6 mb-3">
                                <span className={classes.numbers}>{car.varSt}</span>
                                <div>
                                    <span className={classes.desc}>вартість
                                    <br/></span>
                                    <span className={classes.desc}>простою, грн\хв
                                    <br/></span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6 mb-5">
                                <span className={classes.numbers}>3 </span>
                                <div>
                                    <span className={classes.desc}>Подача авто
                                    <br/></span>
                                    <span className={classes.desc}>за місто, грн/км
                                    <br/></span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6 mb-5">
                                <span className={classes.numbers}>+20</span>
                                <div>
                                    <span className={classes.desc}>вартість до тарифу
                                    <br/></span>
                                    <span className={classes.desc}>за кожну тварину, грн
                                    <br/></span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={classes.buttons}>
                        <div className="row">
                            <div className="col-md-3 col-6">
                                <button onClick={() => setCar(car = standart)}>Стандарт</button>
                            </div>
                            <div className="col-md-3 col-6">
                                <button onClick={() => setCar(car = universal)}>Універсал</button>
                            </div>
                            <div className="col-md-3 col-6">
                                <button onClick={() => setCar(car = driver)}>Драйвер</button>
                            </div>
                            <div className="col-md-3 col-6">
                                <button onClick={() => setCar(car = delivery)}>Доставка</button>
                            </div>
                        </div>
                    </div>
                    <div className='pb-5 fw-bold fs-2'>
                        <span> Оберіть тип вище для перегляду цін</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tariff;