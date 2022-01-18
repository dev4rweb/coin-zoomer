import React, {createRef, useState} from 'react';
import s from "../../../sass/components/InputFile/InputFile.module.scss";
import link from "../../../assets/img/ic-link.png";
import {useDispatch} from "react-redux";
import {setErrorsAction} from "../../reducers/errorsReducer";

const InputFile = ({placeholder, inputHandler = null}) => {
    const dispatch = useDispatch()
    let btn = createRef();
    const [value, setValue] = useState(placeholder)

    const filePathHandler = e => {
        setValue(e.target.value)
        if (inputHandler) {
            inputHandler(e.target.value)
        }
    };

    const changeHandler = e => {
        console.log('changeHandler', e.target.value)
        setValue(e.target.value)

        if (e.target.files[0].type.includes('image')) {
            const fd = new FormData();
            fd.set('image', e.target.files[0]);

            axios.post('/upload-file', fd)
                .then(res => {
                    console.log(res)
                    if (res.data.success) {
                        dispatch(setErrorsAction({message: 'File Uploaded'}))
                        setValue(res.data.filepath)
                        if (inputHandler) {
                            inputHandler(res.data.filepath)
                        }
                    } else {
                        dispatch(setErrorsAction(res.data.message))
                    }
                })
                .catch(err => {
                    console.log(err)
                    dispatch(setErrorsAction(err.response.message))
                });
        } else {
            setValue('')
            dispatch(setErrorsAction({message: 'incorrect file format'}))
        }
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
                onChange={filePathHandler}
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
