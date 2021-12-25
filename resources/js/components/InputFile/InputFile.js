import React, {createRef, useState} from 'react';
import s from "../../../sass/components/InputFile/InputFile.module.scss";
import link from "../../../assets/img/ic-link.png";
import {useDispatch} from "react-redux";

const InputFile = ({placeholder}) => {
    const dispatch = useDispatch()
    let btn = createRef();
    const [value, setValue] = useState(placeholder)

    const changeHandlerInput = e => {
        console.log('changeHandlerInput', e.target.value)
        /*setGame({
            ...game,
            [inputName]: e.target.value
        })*/
    };

    const changeHandler = e => {
        console.log('changeHandler', e.target.value)
        setValue(e.target.value)

        const fd = new FormData();
        fd.set('image', e.target.files[0])

        /*axios.post('/file-upload', fd)
            .then(res => {
                // console.log(res)
                if (res.data.success) {
                    let filePath = res.data.filepath
                    setGame({
                        ...game,
                        [inputName]: filePath
                    })
                } else {
                    dispatch(setError(res.data.message))
                }
            })
            .catch(err => {
                dispatch(setError(err.response.message))
            });*/
    };

    const uploadFile = e => {
        console.log('uploadFile')
        btn.current.click();
    };

    return (
        <div className={s.container}>
            <input
                type="file"
                ref={btn}
                onChange={changeHandler}
                style={{display: 'none'}}
            />
            <input
                type="text"
                className={s.input}
                value={value}
                placeholder={placeholder}
                onChange={event => setValue(event.target.value)}
            />
            <button
                type="button"
                className={s.button}
                onClick={uploadFile}
            >
                Open
            </button>
        </div>
    );
};

export default InputFile;
