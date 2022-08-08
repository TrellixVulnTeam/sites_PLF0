import standartCar from '../img/class_standard.png'
import universalCar from '../img/class_universal.png'
import deliveryCar from '../img/class_express.png'
import driverCar from '../img/class_driver.png'
import minivanCar from '../img/class_minivan.png'
import techCar from '../img/class_tech.png'

export const standart = {
    img: standartCar,
    name: 'Стандарт',
    minVar: 50,
    minVid: 2,
    varPoMist: 18,
    varZaMist: 19,
    freeWait: 5,
    varSt: 2,
    forDelivery: 'безкоштовне',
    desc1: 'вартість до тарифу',
    desc2: 'за проїзд з твариною, грн',
    value1: '20'
}

export const universal = {
    img: universalCar,
    name: 'Універсал',
    minVar: 60,
    minVid: 2,
    varPoMist: 20,
    varZaMist: 20,
    freeWait: 5,
    varSt: 2,
    forDelivery: 'безкоштовне',
    desc1: 'вартість до тарифу',
    desc2: 'за проїзд з твариною, грн',
    value1: '20'
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
    desc: '(Послуга діє виключно за попередньою домовленістю з водієм)',
    desc1: 'вартість до тарифу',
    desc2: 'за проїзд з твариною, грн',
    value1: '20'
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
    desc: '(Послуга діє виключно за попередньою домовленістю з водієм)',
    desc1: 'вартість до тарифу',
    desc2: 'за проїзд з твариною, грн',
    value1: '20'
}

export const miniven = {
    img: minivanCar,
    name: 'Мінівен',
    minVar: 75,
    minVid: 2,
    varPoMist: 27,
    varZaMist: 30,
    freeWait: 3,
    varSt: 3,
    forDelivery: 'безкоштовне',
    desc1: 'вартість до тарифу',
    desc2: 'за проїзд з твариною, грн',
    value1: '20'
}

export const tech = {
    img: techCar,
    name: 'Техпідтримка',
    minVar: 120,
    minVid: 2,
    varPoMist: 30,
    varZaMist: 40,
    freeWait: 5,
    varSt: 3,
    forDelivery: 'безкоштовне',
    desc: '(«Прикурити», відтягти, надати іншу технічну допомогу)',
    desc1: 'за використання',
    desc2: 'власного інструменту',
    value1: ' ---'
}