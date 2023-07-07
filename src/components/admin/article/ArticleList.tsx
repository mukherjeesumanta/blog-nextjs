'use client'

import { FC, MouseEventHandler, ReactNode, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import moment from 'moment'
import { ArticleType } from '@/types'
import 'ag-grid-community/styles//ag-grid.css'
import 'ag-grid-community/styles//ag-theme-alpine.css'
import styles from '@/components/admin/article/ArticleList.module.css'
import { RowClassParams } from 'ag-grid-community'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/globalRedux/admin/store'
import { setArticleListDashboard } from '@/globalRedux/admin/features/articleListDashBoardSlice'

type ActionRendererProps = {
    value: string
    deleteHandler: (articleId: string) => void
    publishHandler: (articleId: string) => void
}
const ActionCellRenderer: FC<ActionRendererProps> = (props) => {
    const getActionHandler = (action: string) => {
        let handler: MouseEventHandler<HTMLAnchorElement> = () => {
            console.log('No action found!')
        }
        switch (action) {
            case 'delete':
                handler = () => {
                    props.deleteHandler(props.value)
                }
                break
            case 'publish':
                handler = () => {
                    props.publishHandler(props.value)
                }
                break
        }

        return handler
    }

    return (
        <div className="space-x-4">
            <Link
                href={`/admin/article/edit-article/${props.value}`}
                className="text-blue-600"
            >
                Edit
            </Link>
            <Link
                href="#"
                className="text-blue-600"
                onClick={getActionHandler('delete')}
            >
                Hide
            </Link>
            <Link
                href="#"
                className="text-blue-600"
                onClick={getActionHandler('publish')}
            >
                Publish
            </Link>
        </div>
    )
}

interface ArticleListProps {
    title: string
    articleListProp: ArticleType[]
}

const ArticleList: FC<ArticleListProps> = ({ title, articleListProp }) => {
    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(setArticleListDashboard(articleListProp))
    }, [articleListProp, dispatch])

    const articleList = useSelector((state: RootState) => state.articleListDashBoard)

    const deleteHandler = async (articleId: string) => {
        const res = await fetch(`/api/admin/article/delete`, {
            method: 'DELETE',
            body: JSON.stringify({ _id: articleId }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })

        if (res.ok) {
            const newArticleList = articleList.filter((article) => article._id !== articleId)
            dispatch(setArticleListDashboard(newArticleList))
        }
    }
    const publishHandler = (articleId: string) => {
        alert('publish: ' + articleId)
    }

    const usrRenderer = (props: { value: ReactNode }) => {
        return <p>{props.value}</p>
    }
    const dateRenderer = (props: { value: ReactNode }) => {
        const date = new Date(props.value as string)
        return <p>{moment(date).format('D-MMM-YYYY')}</p>
    }
    const publishRenderer = (props: { value: ReactNode }) => {
        return <p>{String(props.value)}</p>
    }
    const columnDefs = [
        {
            headerName: 'Title',
            /* autoHeight: true, */
            /* field: 'articleTitleEn', */
            flex: 1.5,
            resizable: true,
            cellRenderer: (props: { data: ArticleType }) => {
                return (
                    <>
                        <p className={`${styles['arial']}`}>
                            {props.data.enTitle}
                        </p>
                        <p className={`${styles['noto']}`}>
                            {props.data.arTitle}
                        </p>
                    </>
                )
            }
        },
        {
            headerName: 'Meta Description',
            /* autoHeight: true, */
            /* field: 'metaDescriptionEn', */
            flex: 1.5,
            resizable: true,
            cellRenderer: (props: { data: ArticleType }) => {
                //console.log(props)
                return (
                    <>
                        <p className={`${styles['arial']}`}>
                            {props.data.enMetaDesc}
                        </p>
                        <p className={`${styles['noto']}`}>
                            {props.data.arMetaDesc}
                        </p>
                    </>
                )
            }
        },
        {
            headerName: 'Created By',
            field: 'createdBy',
            flex: 1.5,
            resizable: true,
            cellRenderer: usrRenderer
        },
        {
            headerName: 'Created At',
            field: 'createdAt',
            flex: 1,
            resizable: true,
            cellRenderer: dateRenderer
        },
        {
            headerName: 'Status',
            field: 'isPublished',
            flex: 0.8,
            resizable: true,
            cellRenderer: publishRenderer
        },
        {
            headerName: 'Action',
            field: '_id',
            flex: 1.3,
            cellRenderer: ActionCellRenderer,
            cellRendererParams: {
                deleteHandler,
                publishHandler
            }
        }
    ]

    const getRowStyle = (params: RowClassParams<ArticleType, any> /* { node: { rowIndex: number } } */) => {
      const rowIndex = params.node.rowIndex as number
        if (rowIndex % 2 !== 0) {
            return { background: 'rgba(217, 217, 217, 0.27)' }
        }
    }
    return (
        <div
            className="ag-theme-alpine"
            style={{
                height: '700px',
                width: 'auto'
            }}
        >
            <AgGridReact
                rowHeight={65}
                columnDefs={columnDefs}
                rowData={articleList}
                className={styles['aggrid-articles']}
                getRowStyle={getRowStyle}
            ></AgGridReact>
        </div>
    )
}

export default ArticleList
