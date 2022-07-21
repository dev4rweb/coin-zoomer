import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react'
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
            <div className="mb-3">
                <TextEditorMenu editor={editor} />
            </div>
            <EditorContent editor={editor}  />
            <button
                onClick={saveHandler}
                className="fill-btn btn btn-info"
            >
                Accept changes
            </button>
        </div>
    );
};

export default TextEditor;
