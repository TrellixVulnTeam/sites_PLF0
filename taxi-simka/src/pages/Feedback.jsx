import React, {useEffect, useState} from 'react';
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import classes from '../classes/Feedback.module.css'
import '../classes/Feedback.module.css'
import {delivery, driver, standart, universal} from "../service/tarifs_Vasil";
import {Button} from "react-bootstrap";
import InputMask from 'react-input-mask'
import {last, upload} from "../service/upload.js";
import {useTranslation} from "react-i18next";
import i18n from "i18next";
import 'firebase/compat/storage'
import firebase from "firebase/compat/app";
import {click} from "@testing-library/user-event/dist/click";

const SERVICE_ID = "taxi-simka";
const TEMPLATE_ID = "template_a0wm0pl";
const USER_ID = "iNXJWN7ii38WJWgYa";

const firebaseConfig = {
    apiKey: "AIzaSyDtNWa3H4JoPvK7BSo0n_Ya8tfemOMtJ7Q",
    authDomain: "fe-upload-fe032.firebaseapp.com",
    projectId: "fe-upload-fe032",
    storageBucket: "fe-upload-fe032.appspot.com",
    messagingSenderId: "193242940421",
    appId: "1:193242940421:web:65378d31e448f0ea94c86c"
};

let checkSur = "Не указали фамилию";
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()

setTimeout(() => upload('#file', {
    multi: true,
    accept: ['.png', '.jpg', '.jpeg', '.gif'],
    require: true,
    onUpload(last) {
        last.forEach(file => {
            const ref = storage.ref(`photo/${checkSur}/${file.name}`)
            const task = ref.put(file)

            task.on('state_changed', snapshot => {
            }, error => {
                console.log(error)
            }, () => {
            })
        })
    }
}), 1000)

const Feedback = () => {

        const {t} = useTranslation()

        const [currentCar, setCurrentCar] = useState('');
        const [surnameInput, setSurnameInput] = useState('');
        const [urlOnFolder, setUrlOnFolder] = useState('https://console.firebase.google.com/project/fe-upload-fe032/storage/fe-upload-fe032.appspot.com/files/~2Fphoto');
        const [deactiveSubmit, setDeactivateSubmit] = useState(false)
        const [appState, changeAppState] = useState({
            activeObject: null,
            objects: [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
        });
        const screenW = window.screen.width;
        const colors = [
            "#000000",
            "#FFFFFF",
            "#BEBEBE",
            "#ff0000",
            "#FFFF00",
            "#FF8000",
            "#008000",
            "#0000FF",
            "#00BFFF",
            "#8000FF"
        ];
        const colorsName = [
            i18n.t('feedback_black'),
            i18n.t('feedback_white'),
            i18n.t('feedback_gray'),
            i18n.t('feedback_red'),
            i18n.t('feedback_yellow'),
            i18n.t('feedback_orange'),
            i18n.t('feedback_green'),
            i18n.t('feedback_blue'),
            i18n.t('feedback_sky_blue'),
            i18n.t('feedback_purple')
        ];
        const [current, setCurrent] = useState('');
        const [hidden, setHidden] = useState(true)


        function toogleActive(index) {
            changeAppState({...appState, activeObject: appState.objects[index]});
        }

        function toogleActiveStyles(index) {
            if (appState.objects[index] === appState.activeObject) {
                return "Feedback_boxActive__01Ik2";
            } else {
                return "boxInactive"
            }
        }

        useEffect(() => {
            checkSur = surnameInput
        }, [surnameInput])


        const animation = (event) => {
            event.preventDefault()
            if (last.length < 13) {
                Swal.fire({
                    icon: 'error',
                    title: 'Невірна кількість фото',
                    text: `Для завантаження потрібно мінімум 13 фото.\n Наразі ${last.length} фото`,
                })
            } else {
     //           guardarArchivo()
                // console.log(last)
                setDeactivateSubmit(true)
                let timerInterval

                Swal.fire({
                    title: 'Завантаження файлів',
                    timer: 100000,
                    allowOutsideClick: false,
                    timerProgressBar: true,
                    html: 'До завершення залишилось <strong></strong> секунд.<br/><br/>',
                    didOpen: () => {
                        Swal.showLoading()
                        timerInterval = setInterval(() => {
                            Swal.getHtmlContainer().querySelector('strong')
                                .textContent = (Swal.getTimerLeft() / 1000)
                                .toFixed(0)
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    if (result.dismiss === Swal.DismissReason.timer) {
                        handleOnSubmit(event)
                    }
                })
            }
        }


        const handleOnSubmit = (e) => {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
                .then((result) => {
                    Swal.fire({
                        icon: 'success',
                        title: i18n.t('feedback_success_mail'),
                        willClose() {
                            setSurnameInput('')
                            window.location.reload()
                        }
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
                            <form onSubmit={animation} className={classes.myForm}>
                                <h1 className='text-center'
                                    style={{color: '#d0d0d9', marginBottom: '64px'}}> {t('feedback_statement')}</h1>
                                <p className={classes.formGroup}>
                                    <label>{t('feedback_surname')} <span style={{color: "#ff0101"}}>*</span></label>
                                    <input type="text"
                                           name='user_surname'
                                        // placeholder="Прізвище"
                                           value={surnameInput}
                                           onChange={e => setSurnameInput(e.target.value)}
                                           required/>
                                </p>

                                <p className={classes.formGroup}>
                                    <label>{t('feedback_name')} <span style={{color: "#da1e1e"}}>*</span></label>
                                    <input type="text"
                                        //placeholder="Ім'я"
                                           name='user_name' required/>
                                </p>

                                <p className={classes.formGroup}>
                                    <label>{t('feedback_patronymic')} <span style={{color: "#da1e1e"}}>*</span></label>
                                    <input type="text"
                                        //placeholder="По-батькові"
                                           name='user_patronymic' required/>
                                </p>

                                <p className={classes.formGroup}>
                                    <label>{t('feedback_dateofbirth')} <span style={{color: "#da1e1e"}}>*</span></label>
                                    <input type="date" name='user_date' required/>
                                </p>

                                <p className={classes.formGroup}>
                                    <label>{t('feedback_tel1')} <span style={{color: "#da1e1e"}}>*</span></label>
                                    <InputMask type="tel"
                                               id='phone'
                                        // placeholder="Основний телефон"
                                               name='user_tel1'
                                               mask='+38(099)999-99-99'
                                               required/>
                                </p>

                                <p className={classes.formGroup}>
                                    <label>{t('feedback_tel2')}  </label>
                                    <InputMask type="tel"
                                               id='phone'
                                        // placeholder="Резервний телефон"
                                               name='user_tel2'
                                               mask='+38(099)999-99-99'
                                    />
                                </p>


                                <p className={classes.formGroup}>
                                    <label>{t('feedback_model')} <span style={{color: "#da1e1e"}}>*</span></label>
                                    <input type="text"
                                        //placeholder="Марка/Модель авто"
                                           name='user_autoModel' required/>
                                </p>

                                <p className={classes.formGroup}>
                                    <label>{t('feedback_number')} <span style={{color: "#da1e1e"}}>*</span></label>
                                    <input type="text"
                                        //placeholder="Державний номер"
                                           name='user_numberAuto' required/>
                                </p>

                                <p className={classes.formGroup}>
                                    <label style={{top: '-30px'}}>{t('feedback_release')} <span
                                        style={{color: "#da1e1e"}}>*</span></label>
                                    <select className="form-select" name='user_dateAuto'
                                            aria-label="Оберіть рік випуску"
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

                                <div className={classes.formGroup}>
                                    <label style={{top: '-30px'}}>{t('feedback_color')} <span
                                        style={{color: "#da1e1e"}}>*</span></label>
                                    <select className="form-select" name='user_colorAuto'
                                            id='test1'
                                            required
                                            onClick={() => setHidden(false)}
                                    >
                                        <option value={colorsName[current]} hidden
                                                defaultValue>{
                                            current !== ''
                                                ? colorsName[current]
                                                : i18n.t('feeback_chooseColor')}
                                        </option>
                                    </select>
                                    {!hidden
                                        ? <div className={classes.forCards}>
                                            {colors.map((color, index) => (
                                                    <div key={index} className={classes.card}>
                                                        <div style={{
                                                            background: color
                                                        }} className={classes.box} onClick={() => {
                                                            setCurrent(index)
                                                            setHidden(true)
                                                        }}/>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        : <div></div>
                                    }
                                </div>

                                <div className={classes.formGroup}>
                                    <label>{t('feedback_typeauto')} <span style={{color: "#da1e1e"}}>*</span></label>
                                    <div className={classes.buttons}>
                                        <div className="row">
                                            <div className="col-md-3 col-12 px-1">
                                                <Button
                                                    key={0}
                                                    className={toogleActiveStyles(0)}
                                                    onClick={() => {
                                                        toogleActive(0);
                                                        setCurrentCar('Седан')
                                                    }}>
                                                    <img
                                                        src={standart.img}
                                                        width="62"
                                                        height="62"
                                                        alt="Car Седан"/>
                                                    <span>Седан</span></Button>
                                            </div>
                                            <div className="col-md-3 col<span>-12 px-1">
                                                <Button
                                                    key={1}
                                                    className={toogleActiveStyles(1)}
                                                    onClick={() => {
                                                        toogleActive(1);
                                                        setCurrentCar('Універсал')
                                                    }}>
                                                    <img
                                                        src={universal.img}
                                                        width="62"
                                                        height="62"
                                                        alt="Car Універсал"/>
                                                    <span>{t('tariff_universal')}</span></Button>
                                            </div>
                                            <div className="col-md-3 col-12 px-1">
                                                <Button
                                                    key={2}
                                                    className={toogleActiveStyles(2)}
                                                    onClick={() => {
                                                        toogleActive(2);
                                                        setCurrentCar('Мінівен');
                                                    }}>
                                                    <img
                                                        src={driver.img}
                                                        width="62"
                                                        height="62"
                                                        alt="Car Мінівен"/>
                                                    <span>{t('tariff_miniven')}</span>
                                                </Button>
                                            </div>
                                            <div className="col-md-3 col-12 px-1">
                                                <Button
                                                    key={3}
                                                    className={toogleActiveStyles(3)}
                                                    onClick={() => {
                                                        toogleActive(3);
                                                        setCurrentCar('Мікроавтобус')
                                                    }}>
                                                    <img
                                                        src={delivery.img}
                                                        width="62"
                                                        height="62"
                                                        alt="Car мікроавтобус"/>
                                                    <span>{t('tariff_microbus')}</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    <input style={{display: "none"}}
                                           value={currentCar}
                                           onChange={e => setCurrentCar(e.target.value)}
                                           name='user_typeAuto'
                                           required
                                    />

                                </div>

                                {screenW >= 768
                                    ? <p className={classes.formGroup}>
                                        <label>{t('feedback_countsited')}<span style={{color: "#da1e1e"}}>*</span></label>
                                        <input type="number"
                                            //placeholder="Кількість місць"
                                               name='user_countSited'
                                               min='1' max='40' required/>
                                    </p>
                                    : <p className={classes.formGroup}>
                                        <label style={{top: '-30px'}}>{t('feedback_countsited')} <span
                                            style={{color: "#da1e1e"}}>*</span></label>
                                        <select className="form-select" name='user_countSited'
                                                aria-label="Оберіть кількість місць"
                                                required>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </p>
                                }

                                <div className={classes.formGroup}>
                                    <label className='position-static'>{t('feedback_photo')} <span
                                        style={{color: "#da1e1e"}}>*</span>
                                        <br/>
                                        {t('feedback_photo_desc')}
                                    </label><br/>
                                    <br/>

                                    {/*ПОСЛЕ ЗАГРУЗКИ СТРАНИЦЫ СОЗДАЕТСЯ КНОПКА ДЛЯ ДОБАВЛЕНИЯ ФАЙЛОВ, ПОСЛЕ ИНПУТА,
                                    КОТОРЫЙ НИЖЕ, ПОЭТОМУ У НЕГО display: none*/}
                                    <input type="file"
                                           id="file"
                                           style={{display: 'none'}}
                                           capture="user"
                                    />

                                    {/*<button*/}
                                    {/*    type='button'*/}
                                    {/*    onClick={(e) => {*/}
                                    {/*        click(document.getElementById('buttonForPhoto'))*/}
                                    {/*    }*/}
                                    {/*    } style={{width: '138px', marginTop: '10px'}}>{t('feedback_attach')}</button>*/}


                                </div>

                                <p className={classes.formGroup}>
                                    <label>{t('feedback_aboutme')} <span style={{color: "#da1e1e"}}>*</span></label><br/>
                                    {t('feedback_aboutme_desc')} <br/>
                                    <textarea
                                        //placeholder="Про себе"
                                        className='mt-2'
                                        name='user_about' required/>
                                </p>


                                <Button type='submit'
                                        disabled={!surnameInput || deactiveSubmit}
                                        onClick={(e) => {
                                            if (last.length === 0) {
                                                alert('Завантажте фото')
                                            }
                                            else if (currentCar === ''){
                                                alert('Виберіть тип авто')
                                            }
                                            else if (current === ''){
                                                alert('Виберіть колір авто')
                                            }
                                            else if (last.length > 12){
                                                click(document.getElementById('buttonForPhoto'))
                                            }
                                        }}
                                >{t('feedback_send')}</Button>

                                {/*<button type='submit' id='theLast' style={{display: "none"}}></button>*/}
                                <h6 style={{
                                    color: '#21252a',
                                    fontWeight: 'bold',
                                    margin: '16px 0px'
                                }}>{t('feedback_requirement')}</h6>
                                <h4 className='text-center pt-5' style={{color: '#0d6cfb'}}>{t('feedback_additional')}<a
                                    href='tel: +380637208050' style={{color: '#0d6cfb'}}>+380637208050</a></h4>


                                <input style={{display: "none"}}
                                       value={urlOnFolder}
                                       onChange={() => setUrlOnFolder('https://console.firebase.google.com/project/fe-upload-fe032/storage/fe-upload-fe032.appspot.com/files/~2Fphoto')}
                                       name='user_photo'
                                />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
;

export default Feedback;



