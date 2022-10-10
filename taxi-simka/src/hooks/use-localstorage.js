import {useState} from 'react';

const UseLocalstorage = (key, defaultValue) => {
    const [storedValue, setSroratedValue] = useState(() => {
        try {
            const value = localStorage.getItem(key)

            if(value){
                return JSON.parse(value)
            } else {
                localStorage.setItem(key, JSON.stringify(defaultValue))
                return defaultValue
            }
        } catch (error) {
            return defaultValue
        }
    })

    const setValue = (newValue) => {
        try{
            localStorage.setItem(key, JSON.stringify(newValue))
        }catch (error){
            console.log(error)
        }
        setSroratedValue(newValue)
    }

    return [storedValue, setValue]
};

export default UseLocalstorage;