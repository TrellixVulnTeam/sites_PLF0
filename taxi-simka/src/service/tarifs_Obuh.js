import standartCar from '../img/class_standard.png'
import universalCar from '../img/class_universal.png'
import deliveryCar from '../img/class_express.png'
import driverCar from '../img/class_driver.png'
import minivanCar from '../img/class_minivan.png'
import techCar from '../img/class_tech.png'
import i18n from "../i18n";


export const standartO = {
    img: standartCar,
    name: 'Стандарт',
    minVar: 60,
    minVid: 2,
    varPoMist: 18,
    varZaMist: 19,
    freeWait: 5,
    varSt: 2,
    forDelivery: i18n.t('tar_js_price'),
    desc1: i18n.t('tar_js_desc1_var'),
    desc2: i18n.t('tar_js_desc2_animal'),
    value1: '20'
}

export const universalO = {
    img: universalCar,
    name: i18n.t('tariff_universal'),
    minVar: 70,
    minVid: 2,
    varPoMist: 20,
    varZaMist: 20,
    freeWait: 5,
    varSt: 2,
    forDelivery: i18n.t('tar_js_price'),
    desc1: i18n.t('tar_js_desc1_var'),
    desc2: i18n.t('tar_js_desc2_animal'),
    value1: '20'
}

export const driverO = {
    img: driverCar,
    name: 'Драйвер',
    minVar: 145,
    minVid: 2,
    varPoMist: 45,
    varZaMist: 50,
    freeWait: 5,
    varSt: 4,
    forDelivery: i18n.t('tar_js_price'),
    desc: i18n.t('tar_js_desc_posluga'),
    desc1: i18n.t('tar_js_desc1_var'),
    desc2: i18n.t('tar_js_desc2_animal'),
    value1: '20'
}

export const deliveryO = {
    img: deliveryCar,
    name: 'Доставка',
    minVar: 130,
    minVid: 3.5,
    varPoMist: 18,
    varZaMist: 19,
    freeWait: 20,
    varSt: 3,
    forDelivery: i18n.t('tar_js_forDelivery_zag'),
    desc: i18n.t('tar_js_desc_posluga'),
    desc1: i18n.t('tar_js_desc1_var'),
    desc2: i18n.t('tar_js_desc2_animal'),
    value1: '20'
}

export const minivenO = {
    img: minivanCar,
    name: i18n.t('tariff_miniven'),
    minVar: 85,
    minVid: 2,
    varPoMist: 27,
    varZaMist: 30,
    freeWait: 3,
    varSt: 3,
    forDelivery: i18n.t('tar_js_price'),
    desc1: i18n.t('tar_js_desc1_var'),
    desc2: i18n.t('tar_js_desc2_animal'),
    value1: '20'
}

export const techO = {
    img: techCar,
    name: i18n.t('tariff_tech'),
    minVar: 130,
    minVid: 2,
    varPoMist: 30,
    varZaMist: 40,
    freeWait: 5,
    varSt: 3,
    forDelivery: i18n.t('tar_js_price'),
    desc: i18n.t('tar_js_desc_tech'),
    desc1: i18n.t('tar_js_desc1_use'),
    desc2: i18n.t('tar_js_desc2_instrument'),
    value1: ' ---'
}