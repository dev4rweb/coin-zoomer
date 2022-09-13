import React, {useEffect} from 'react';
import {useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextEditorMenu from "./TextEditorMenu";

/*https://tiptap.dev/installation/react*/
const TextEditor = ({content, onChange = null}) => {

    const editor = useEditor({
        extensions: [
            StarterKit,
        ],
        // content: '<p>Hello World!</p>',
        content: content,
    })

    const saveHandler = e => {
        e.preventDefault()
        // console.log('saveHandler', editor.getHTML())
        if (onChange) onChange(editor.getHTML())
    };

    return (
        <div>
            <div className="mb-3 mt-3">
                <TextEditorMenu editor={editor}/>
            </div>
            <div
                style={{
                    border: '1px solid #2b2f56',
                    padding: '5px',
                    background: '#1d2147',
                    color: '#a6b2c6',
                    borderRadius: '2px',
                    marginBottom: '1rem'
                }}
            >
                <EditorContent editor={editor} onInput={saveHandler} />
            </div>
            {/*<button
                onClick={saveHandler}
                className="fill-btn btn btn-info"
            >
                Accept changes
            </button>*/}
        </div>
    );
};

export default TextEditor;
