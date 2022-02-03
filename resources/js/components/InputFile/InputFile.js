import React, {createRef, useState} from 'react';
import s from "../../../sass/components/InputFile/InputFile.module.scss";
import link from "../../../assets/img/ic-link.png";
import {useDispatch} from "react-redux";
import {setErrorsAction} from "../../reducers/errorsReducer";

const InputFile = ({placeholder, inputHandler = null, isRequired = false}) => {
    const dispatch = useDispatch()
    let btn = createRef();
    const [value, setValue] = useState('')

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
            let width = 0
            let height = 0
            const file = e.target.files[0]
            const img = new Image();
            img.onload = function () {
                // console.log('image width', this.width)
                width = this.width
                height = this.height
                if (width > 128) {
                    dispatch(setErrorsAction({message: `too big width of image ${width}`}))
                    setValue('')
                    return
                }

                if (height > 128) {
                    dispatch(setErrorsAction({message: `too big height of image ${height}`}))
                    setValue('')
                    return
                }

                const fd = new FormData();
                fd.set('image', file);

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
            };
            img.src = URL.createObjectURL(file)

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
            {
                isRequired ?
                    <input
                        type="text"
                        className={s.input}
                        value={value}
                        placeholder={placeholder}
                        onChange={filePathHandler}
                        required
                    />
                    :
                    <input
                        type="text"
                        className={s.input}
                        value={value}
                        placeholder={placeholder}
                        onChange={filePathHandler}
                    />
            }
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
