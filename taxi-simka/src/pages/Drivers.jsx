import React from 'react';
import classes from "../classes/Drivers.module.css";
import google from "../img/google_play.png";
import {Button, Nav} from "react-bootstrap";

const Drivers = () => {
    return (
        <div className={classes.bg}>
            <div className="container text-center">
                <div className='text-center p-0 pt-5 mb-0'>
                    <p>Компанія ІДС «Сімка» пропонує співпрацю водіям з власним авто. Заробляти з нами легко та просто.
                        Ідеальним кандидатом є людина, яка знає специфіку цієї діяльності і має досвід приватного
                        перевезення або роботу в інших службах . Звичайно, водій повинен добре орієнтуватися в місті,
                        щоб,
                        вибираючи оптимальний маршрут руху, економити свій час та час клієнта.
                    </p>
                </div>
                <div className={classes.list}>
                    <dt>Умови роботи:</dt>
                    <dd><i className="bi bi-check-square" style={{color: 'black', marginRight: '5px'}}></i>Вільний
                        графік
                    </dd>
                    <dd><i className="bi bi-check-square" style={{color: 'black', marginRight: '5px'}}></i>Вільний вибір
                        різних категорій додаткових послуг
                    </dd>
                    <dd><i className="bi bi-check-square" style={{color: 'black', marginRight: '5px'}}></i>Секторальна
                        черга (фільтр, за допомогою якого водій може працювати у бажаних районах міста в порядку черги)
                    </dd>
                    <dd><i className="bi bi-check-square" style={{color: 'black', marginRight: '5px'}}></i>Графік
                        чергування (черговий водій має пріоритет в порядку отримання замовлень)
                    </dd>
                    <dd><i className="bi bi-check-square" style={{color: 'black', marginRight: '5px'}}></i>Комфортні
                        умови роботи з мобільним додатком
                    </dd>
                    <dd><i className="bi bi-check-square" style={{color: 'black', marginRight: '5px'}}></i>Низькі та
                        «чисті» комісійні за замовлення
                    </dd>
                    <dd><i className="bi bi-check-square" style={{color: 'black', marginRight: '5px'}}></i>Можливість
                        вибору – підробіток, або стабільний дохід
                    </dd>
                </div>

                <div className={classes.list}>
                    <dt>Вимоги до водія:</dt>
                    <dd><i className="bi bi-check-square" style={{color: 'black', marginRight: '5px'}}></i>Громадянин
                        України, вік від 20 років. Досвід водіння від 2-х років. Наявність водійського посвідчення
                        категорії "В"
                    </dd>
                    <dd><i className="bi bi-check-square" style={{color: 'black', marginRight: '5px'}}></i>Наявність
                        авто від 2005 р.в. класу не нижче «Ланос» (Автомобіль повинен бути чистий, цілий та технічно
                        справний. Не допускається наявність наліпок інших служб таксі. Обов'язковим є наявність
                        страхового полісу на авто)
                    </dd>
                    <dd><i className="bi bi-check-square" style={{color: 'black', marginRight: '5px'}}></i>Наявність мобільного телефону на базі ОС Android вище v. 5.1.</dd>
                    <dd><i className="bi bi-check-square" style={{color: 'black', marginRight: '5px'}}></i>Досвід роботи в таксі (необов’язково, але перевага надається водіям з досвідом)</dd>
                    <dd><i className="bi bi-check-square" style={{color: 'black', marginRight: '5px'}}></i>Знання міста та прилеглих поселень</dd>
                    <dd><i className="bi bi-check-square" style={{color: 'black', marginRight: '5px'}}></i>Вміння користуватися мобільними додатками (робоча програма, навігатор та ін.) </dd>
                    <dd><i className="bi bi-check-square" style={{color: 'black', marginRight: '5px'}}></i>Відсутність шкідливих звичок</dd>
                    <dd><i className="bi bi-check-square" style={{color: 'black', marginRight: '5px'}}></i>Стресостійкість </dd>
                    <dd><i className="bi bi-check-square" style={{color: 'black', marginRight: '5px'}}></i>Комунікативність та охайний зовнішній вигляд</dd>
                    <dd><i className="bi bi-check-square" style={{color: 'black', marginRight: '5px'}}></i>Вміння та бажання працювати в колективі</dd>
                </div>
                <div className={classes.imgGoogle}>
                    <p className='pt-4'>Додаток для водіїв:</p>
                    <a href='https://play.google.com/store/apps/details?id=ua.com.mobilauto.driver'>
                        <img
                            src={google}
                            alt="google play link"/>
                    </a>
                </div>
                <div className='mt-4'>
                    <p>Якщо Вас влаштовують умови роботи та Ви відповідаєте вимогам до водія заповніть будь-ласка форму та очікуйте на відповідь.</p>
                    <Nav.Link href='/feedback'>
                        <Button className='fs-3 p-3 mt-3'>Заповнити форму</Button>
                    </Nav.Link>
                </div>
            </div>
        </div>
    );
};

export default Drivers;