import React from 'react';
import {Button} from "semantic-ui-react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import classes from '../classes/Feedback.module.css'
import '../classes/Feedback.module.css'

const SERVICE_ID = "taxi-simka";
const TEMPLATE_ID = "template_a0wm0pl";
const USER_ID = "iNXJWN7ii38WJWgYa"


const Feedback = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };

    return (
        <div className={classes.bg}>
            <div className='container'>
                <div className="py-5">
                    <div className={classes.App}>
                        <form onSubmit={handleOnSubmit} className={classes.myForm}>
                            <h1 className='text-center' style={{color: '#d0d0d9', marginBottom: '64px'}}>Заява на
                                вакансію водія</h1>
                            <h6 style={{color: '#d0d0d9', marginBottom: '32px'}}>( * поля обов’язкові для заповнення
                                )</h6>
                            <p className={classes.formGroup}>
                                <label>Прізвище: <span style={{color: "#ff0101"}}>*</span></label>
                                <input type="text" name='user_surname'
                                    // placeholder="Прізвище"
                                       required/>
                            </p>

                            <p className={classes.formGroup}>
                                <label>Ім'я: <span style={{color: "#da1e1e"}}>*</span></label>
                                <input type="text"
                                    //placeholder="Ім'я"
                                       name='user_name' required/>
                            </p>

                            <p className={classes.formGroup}>
                                <label>По-батькові: <span style={{color: "#da1e1e"}}>*</span></label>
                                <input type="text"
                                    //placeholder="По-батькові"
                                       name='user_patronymic' required/>
                            </p>

                            <p className={classes.formGroup}>
                                <label>Дата народження: <span style={{color: "#da1e1e"}}>*</span></label>
                                <input type="date" name='user_date' required/>
                            </p>

                            <p className={classes.formGroup}>
                                <label>Тел. Основний (з вайбер): <span style={{color: "#da1e1e"}}>*</span></label>
                                <input type="tel" size="20" minLength="10" maxLength="20"
                                    //placeholder="Основний телефон"
                                       name='user_tel1' required/>
                            </p>

                            <p className={classes.formGroup}>
                                <label>Тел. Резервний: </label>
                                <input type="tel" size="20" minLength="10" maxLength="20"

                                    //placeholder="Резервний телефон"
                                       name='user_tel2'/>
                            </p>

                            <p className={classes.formGroup}>
                                <label>Марка/Модель авто: <span style={{color: "#da1e1e"}}>*</span></label>
                                <input type="text"
                                    //placeholder="Марка/Модель авто"
                                       name='user_autoModel' required/>
                            </p>

                            <p className={classes.formGroup}>
                                <label>Державний номер: <span style={{color: "#da1e1e"}}>*</span></label>
                                <input type="text"
                                    //placeholder="Державний номер"
                                       name='user_numberAuto' required/>
                            </p>

                            <p className={classes.formGroup}>
                                <label>Рік випуску: <span style={{color: "#da1e1e"}}>*</span></label>
                                <select className="form-select" name='user_dateAuto' aria-label="Оберіть рік випуску"
                                        required>
                                    <option value="2005">2005</option>
                                    <option value="2006">2006</option>
                                    <option value="2008">2008</option>
                                    <option value="2009">2009</option>
                                    <option value="2010">2010</option>
                                    <option value="2011">2011</option>
                                    <option value="2012">2012</option>
                                    <option value="2013">2013</option>
                                    <option value="2014">2014</option>
                                    <option value="2015">2015</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                </select>
                            </p>

                            <p className={classes.formGroup}>
                                <label>Колір: <span style={{color: "#da1e1e"}}>*</span></label>
                                <input type="text"
                                    //placeholder="Колір автомобіля"
                                       name='user_colorAuto' required/>
                            </p>

                            <p className={classes.formGroup}>
                                <label>Тип авто: <span style={{color: "#da1e1e"}}>*</span></label>
                                <select className="form-select" name='user_typeAuto' aria-label="Оберіть тип авто"
                                        required>
                                    <option value="Седан">Cедан</option>
                                    <option value="Універсал">Універсал</option>
                                    <option value="Мінівен">Мінівен</option>
                                    <option value="Мікроавтобус">Мікроавтобус</option>
                                </select>
                            </p>

                            <p className={classes.formGroup}>
                                <label>Кількість місць: <span style={{color: "#da1e1e"}}>*</span></label>
                                <input type="number"
                                    //placeholder="Кількість місць"
                                       name='user_countSited'
                                       min='1' max='40' required/>
                            </p>

                            <p className={classes.formGroup}>
                                <label>Про себе: <span style={{color: "#da1e1e"}}>*</span></label><br/>
                                Досвід роботи (де, коли, тривалість), знання міста, «чому саме я?» та ін. <br/>
                                <textarea
                                    //placeholder="Про себе"
                                    name='user_about' required/>
                            </p>

                            <p className={classes.formGroup}>
                                <label className='position-static'>Фото авто та документів: <span
                                    style={{color: "#da1e1e"}}>*</span>
                                    <br/>
                                    (авто: перед-зад, ліва-права сторони, салон - спереду та ззаду, паспорт 1,2
                                    стор. <br/>та
                                    прописка, водійське посвідчення – дві сторони, техпаспорт – дві сторони)
                                </label><br/>
                                <br/>
                                <input type='file' multiple name='user_photo'
                                    //required
                                />
                            </p>


                            <Button type='submit'>Відправити</Button>
                            <h4 className='text-center pt-5'>За додатковою інформацією звертатися за номером <a
                                href='tel: +380637208050'>+380637208050</a></h4>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;