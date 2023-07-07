'use client'

import React, { FC, useEffect, useState } from 'react'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js'
import dynamic from 'next/dynamic'
import { EditorProps } from 'react-draft-wysiwyg'

const Editor = dynamic<EditorProps>(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
)
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styles from '@/components/admin/my-editor/MyEditor.module.css'
import { setArticleDetails } from '@/globalRedux/admin/features/articlesSlice'
import { useDispatch } from 'react-redux'

type PropsType = {
    initialContent: string
    storeParamToUpdate: string
}

const MyEditor: FC<PropsType> = (props) => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    )
    const dispatch = useDispatch()

    useEffect(() => {
        if (props.initialContent) {
            setEditorState(
                EditorState.createWithContent(
                    convertFromRaw(JSON.parse(props.initialContent))
                )
            )
        }
    }, [props.initialContent])

    useEffect(() => {
        dispatch(
            setArticleDetails({
                [props.storeParamToUpdate]: convertToRaw(
                    editorState.getCurrentContent()
                )
            })
        )
    }, [editorState])

    return (
        <>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbar-class"
                wrapperClassName="wrapper-class"
                editorClassName={styles['editor-class']}
                /* onEditorStateChange={onEditorStateChange} */
                onEditorStateChange={setEditorState}
                // toolbarOnFocus
                toolbar={{
                    options: [
                        'inline',
                        'blockType',
                        'fontSize',
                        'fontFamily',
                        'list',
                        'textAlign',
                        'colorPicker',
                        'link',
                        'embedded',
                        /* 'emoji', */
                        'image',
                        'history'
                    ],
                    inline: {
                        options: [
                            'bold',
                            'italic',
                            'underline',
                            'strikethrough'
                        ]
                    },
                    list: {
                        options: ['unordered', 'ordered']
                    },
                    fontSize: {
                        options: [
                            8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60,
                            72, 96
                        ]
                    },
                    fontFamily: {
                        options: [
                            '"quiche-sans"',
                            '"Poppins"',
                            '"Noto Kufi Arabic"',
                            '"sans-serif"'
                        ]
                    },
                    image: {
                        urlEnabled: true,
                        uploadEnabled: true,
                        uploadCallback: () => {},
                        previewImage: true,
                        alt: { present: false, mandatory: false }
                    }
                }}
                editorStyle={{ height: '600px' }}
            />
        </>
    )
}

export default MyEditor
