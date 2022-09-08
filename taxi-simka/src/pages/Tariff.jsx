import React, {useState} from 'react';
import classes from '../classes/Tariff.module.css'
import {standart, universal, driver, delivery, miniven, tech} from "../service/tarifs";
import {useTranslation} from "react-i18next";


const Tariff = () => {
    let [car, setCar] = useState(standart)
    const {t} = useTranslation()

    return (
        <div className={classes.bodyBg}>
            <div className="container border-dark">
                <h1 className='text-center fw-bold'>{t('tariff_name')}</h1>
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
                                    <span className={classes.desc}>{t('tariff_min')}
                                    <br/></span>
                                    <span className={classes.desc}>{t('tariff_var')}
                                    <br/></span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6 mb-3 my-md-4 my-2">
                                <span className={classes.numbers}>{car.minVid}</span>
                                <div>
                                    <span className={classes.desc}>{t('tariff_vid')}
                                    <br/></span>
                                    <span className={classes.desc}>{t('tariff_vid2')}
                                    <br/></span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6 mb-3 my-md-4">
                                <span className={classes.numbers}>{car.varPoMist} </span>
                                <div>
                                    <span className={classes.desc}>{t('tariff_varkm')}
                                    <br/></span>
                                    <span className={classes.desc}>{t('tariff_pomist')}
                                    <br/></span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6 mb-3 my-md-4">
                                <span className={classes.numbers}>{car.varZaMist} </span>
                                <div>
                                    <span className={classes.desc}>{t('tariff_varkm')}
                                    <br/></span>
                                    <span className={classes.desc}>{t('tariff_zamist')}
                                    <br/></span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6 mb-3">
                                <span className={classes.numbers}>{car.freeWait}</span>
                                <div>
                                    <span className={classes.desc}>{car.forDelivery}
                                        <br/></span>
                                    <span className={classes.desc}>{t('tariff_wait')}
                                    <br/></span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6 mb-3">
                                <span className={classes.numbers}>{car.varSt}</span>
                                <div>
                                    <span className={classes.desc}>{t('tariff_varsolo')}
                                    <br/></span>
                                    <span className={classes.desc}>{t('tariff_prostoy')}
                                    <br/></span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6 mb-5">
                                <span className={classes.numbers}>3 </span>
                                <div>
                                    <span className={classes.desc}>{t('tariff_podacha')}
                                    <br/></span>
                                    <span className={classes.desc}>{t('tariff_zamistslash')}
                                    <br/></span>
                                </div>
                            </div>

                            <div className="col-md-3 col-6 mb-5">
                                <span className={classes.numbers}>+{car.value1}</span>
                                <div>
                                    <span className={classes.desc}>{car.desc1}
                                    <br/></span>
                                    <span className={classes.desc}>{car.desc2}
                                    <br/></span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={classes.buttons}>
                        <div className="row">
                            <div className="col-md-4 col-6">
                                <button onClick={() => setCar(car = standart)}>Стандарт</button>
                            </div>
                            <div className="col-md-4 col-6">
                                <button onClick={() => setCar(car = universal)}>{t('tariff_universal')}</button>
                            </div>
                            <div className="col-md-4 col-6">
                                <button onClick={() => setCar(car = miniven)}>{t('tariff_miniven')}</button>
                            </div>
                            <div className="col-md-4 col-6">
                                <button onClick={() => setCar(car = driver)}>Драйвер</button>
                            </div>
                            <div className="col-md-4 col-6">
                                <button onClick={() => setCar(car = delivery)}>Доставка</button>
                            </div>
                            <div className="col-md-4 col-6">
                                <button onClick={() => setCar(car = tech)}>{t('tariff_tech')}</button>
                            </div>
                        </div>
                    </div>
                    <div className='pb-5 fw-bold fs-2'>
                        <span> {t('tariff_type')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tariff;