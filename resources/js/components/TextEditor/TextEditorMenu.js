import React from 'react';
import {EditorContent, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const TextEditorMenu = ({editor}) => {

    const toggleBoldHandler = e => {
        e.preventDefault()
        editor.chain().focus().toggleBold().run()
    };

    const toggleItalicHandler = e => {
        e.preventDefault()
        editor.chain().focus().toggleItalic().run()
    };

    const toggleStrikeHandler = e => {
        e.preventDefault()
        editor.chain().focus().toggleStrike().run()
    };

    const toggleCodeHandler = e => {
        e.preventDefault()
        editor.chain().focus().toggleCode().run()
    };

    const unsetAllMarksHandler = e => {
        e.preventDefault()
        editor.chain().focus().unsetAllMarks().run()
    };

    const clearNodesHandler = e => {
        e.preventDefault()
        editor.chain().focus().clearNodes().run()
    };

    const setParagraphHandler = e => {
        e.preventDefault()
        editor.chain().focus().setParagraph().run()
    };

    const toggleHeadingHandler = e => {
        e.preventDefault()
        editor.chain().focus().toggleHeading({level: 1}).run()
    };

    const toggleHeadingOneHandler = e => {
        e.preventDefault()
        editor.chain().focus().toggleHeading({level: 2}).run()
    };

    const toggleHeadingTwoHandler = e => {
        e.preventDefault()
        editor.chain().focus().toggleHeading({level: 3}).run()
    };

    const toggleHeadingThreeHandler = e => {
        e.preventDefault()
        editor.chain().focus().toggleHeading({level: 4}).run()
    };

    const toggleHeadingFourHandler = e => {
        e.preventDefault()
        editor.chain().focus().toggleHeading({level: 5}).run()
    };

    const toggleHeadingFiveHandler = e => {
        e.preventDefault()
        editor.chain().focus().toggleHeading({level: 6}).run()
    };

    if (!editor) {
        return null
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-2">
                <button
                    onClick={toggleBoldHandler}
                    className={editor.isActive('bold') ? 'fill-btn btn btn-info' : 'btn btn-outline-info'}
                >
                    bold
                </button>
                <button
                    onClick={toggleItalicHandler}
                    className={editor.isActive('italic') ? 'fill-btn btn btn-info' : 'btn btn-outline-info'}
                >
                    italic
                </button>
                <button
                    onClick={toggleStrikeHandler}
                    className={editor.isActive('strike') ? 'fill-btn btn btn-info' : 'btn btn-outline-info'}
                >
                    strike
                </button>
                <button
                    onClick={toggleCodeHandler}
                    className={editor.isActive('code') ? 'fill-btn btn btn-info' : 'btn btn-outline-info'}
                >
                    code
                </button>
                <button
                    className="btn btn-outline-info"
                    onClick={unsetAllMarksHandler}
                >
                    clear marks
                </button>
                <button
                    className="btn btn-outline-info"
                    onClick={clearNodesHandler}
                >
                    clear nodes
                </button>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-2">
                <button
                    onClick={setParagraphHandler}
                    className={editor.isActive('paragraph') ? 'fill-btn btn btn-info' : 'btn btn-outline-info'}
                >
                    paragraph
                </button>
                <button
                    onClick={toggleHeadingHandler}
                    className={editor.isActive('heading', {level: 1}) ? 'fill-btn btn btn-info' : 'btn btn-outline-info'}
                >
                    h1
                </button>
                <button
                    onClick={toggleHeadingOneHandler}
                    className={editor.isActive('heading', {level: 2}) ? 'fill-btn btn btn-info' : 'btn btn-outline-info'}
                >
                    h2
                </button>
                <button
                    onClick={toggleHeadingTwoHandler}
                    className={editor.isActive('heading', {level: 3}) ? 'fill-btn btn btn-info' : 'btn btn-outline-info'}
                >
                    h3
                </button>
                <button
                    onClick={toggleHeadingThreeHandler}
                    className={editor.isActive('heading', {level: 4}) ? 'fill-btn btn btn-info' : 'btn btn-outline-info'}
                >
                    h4
                </button>
                <button
                    onClick={toggleHeadingFourHandler}
                    className={editor.isActive('heading', {level: 5}) ? 'fill-btn btn btn-info' : 'btn btn-outline-info'}
                >
                    h5
                </button>
                <button
                    onClick={toggleHeadingFiveHandler}
                    className={editor.isActive('heading', {level: 6}) ? 'fill-btn btn btn-info' : 'btn btn-outline-info'}
                >
                    h6
                </button>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-2">
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'fill-btn btn btn-info' : 'btn btn-outline-info'}
                >
                    bullet list
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'fill-btn btn btn-info' : 'btn btn-outline-info'}
                >
                    ordered list
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editor.isActive('codeBlock') ? 'fill-btn btn btn-info' : 'btn btn-outline-info'}
                >
                    code block
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? 'fill-btn btn btn-info' : 'btn btn-outline-info'}
                >
                    blockquote
                </button>
                <button
                    className="btn btn-outline-info"
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                    horizontal rule
                </button>
                <button
                    className="btn btn-outline-info"
                    onClick={() => editor.chain().focus().setHardBreak().run()}>
                    hard break
                </button>
            </div>

            <div className="d-flex align-items-center mb-3">
                <button
                    className="btn btn-outline-info me-3"
                    onClick={() => editor.chain().focus().undo().run()}>
                    undo
                </button>
                <button
                    className="btn btn-outline-info"
                    onClick={() => editor.chain().focus().redo().run()}>
                    redo
                </button>
            </div>
        </>
    )
};

export default TextEditorMenu;
