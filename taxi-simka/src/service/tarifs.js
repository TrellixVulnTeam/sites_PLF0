import standartCar from '../img/class_standard.png'
import universalCar from '../img/class_universal.png'
import deliveryCar from '../img/class_express.png'
import driverCar from '../img/class_driver.png'

export const standart = {
    img: standartCar,
    name: 'Стандарт',
    minVar: 55,
    minVid: 2,
    varPoMist: 18,
    varZaMist: 19,
    freeWait: 5,
    varSt: 2,
    forDelivery: 'безкоштовне'
}

export const universal = {
    img: universalCar,
    name: 'Універсал',
    minVar: 65,
    minVid: 2,
    varPoMist: 20,
    varZaMist: 20,
    freeWait: 5,
    varSt: 2,
    forDelivery: 'безкоштовне',
}

export const driver = {
    img: driverCar,
    name: 'Драйвер',
    minVar: 135,
    minVid: 2,
    varPoMist: 45,
    varZaMist: 50,
    freeWait: 5,
    varSt: 4,
    forDelivery: 'безкоштовне',
    desc: '(Послуга діє виключно за попередньою домовленістю з водієм)'
}

export const delivery = {
    img: deliveryCar,
    name: 'Доставка',
    minVar: 120,
    minVid: 3.5,
    varPoMist: 18,
    varZaMist: 19,
    freeWait: 20,
    varSt: 3,
    forDelivery: 'загальне',
    desc: '(Послуга діє виключно за попередньою домовленістю з водієм)'
}