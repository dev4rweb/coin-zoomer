import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {Button, Card, Container, FormControl, InputGroup} from "react-bootstrap";
import s from "../../sass/pages/AdminPage/AdminPage.module.scss";
import AdminSidebar from "../components/UI/AdminSidebar/AdminSidebar";
import AdminCoinTable from "../components/UI/Tables/AdminCoinTable/AdminCoinTable";
import Layout from "../components/Layout";
import BannerCard from "../components/UI/BannerCard/BannerCard";
import CustomForm from "../components/CustomForm/CustomForm";
import Form from "react-bootstrap/Form";
import InputFile from "../components/InputFile/InputFile";
import {setErrorsAction} from "../reducers/errorsReducer";
import {Inertia} from "@inertiajs/inertia";
import {PATH_ADMIN_BANNER_PAGE} from "../utils/routesPath";
import {Head} from '@inertiajs/inertia-react'

const AdminBannerPage = ({currentUser, banners, errors}) => {
    const dispatch = useDispatch();
    const [ban, setBan] = useState(banners)
    const [isShowList, setShowList] = useState(true)
    const [isShowCreateForm, setShowCreateForm] = useState(false)
    const [isShowEditForm, setShowEditForm] = useState(false)
    const [createBanner, setCreateBanner] = useState({
        title: '',
        img_path: '',
        link: '',
        is_show: false
    })
    const [editBanner, setEditBanner] = useState(null)

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        // dispatch(setErrorsAction(errors))
        // console.log('AdminBannerPage banners', banners)
    }, []);

    const inputFileHandler = filepath => {
        // console.log('inputFileHandler', filepath)
        setCreateBanner({
            ...createBanner,
            ['img_path']: filepath
        })
    };

    const inputEditFileHandler = filepath => {
        // console.log('inputEditFileHandler', filepath)
        setEditBanner({
            ...editBanner,
            ['img_path']: filepath
        })
    };

    const createBannerHandler = e => {
        e.preventDefault()
        // console.log('createBannerHandler', createBanner)
        axios.post('/api/banners', createBanner)
            .then(res => {
                // console.log('createBannerHandler res', res)
                if (res.data.success)
                    dispatch(setErrorsAction({message: res.data.message}))
            }).catch(err => {
            // console.log('createBannerHandler err', err)
            dispatch(setErrorsAction({message: "Something wrong"}))
        }).finally(() => Inertia.visit(PATH_ADMIN_BANNER_PAGE));
    };

    const showCreateFormHandler = e => {
        // console.log('showCreateFormHandler')
        setShowCreateForm(true)
        setShowList(false)
    };

    const editBannerHandler = (e) => {
        e.preventDefault()
        // console.log('editBannerHandler', editBanner)
        axios.post(`/api/banners/${editBanner.id}`, {
            _method: 'PUT',
            title: editBanner.title,
            img_path: editBanner.img_path,
            link: editBanner.link,
            is_show: editBanner.is_show,
        })
            .then(res => {
                // console.log('editBannerHandler res', res)
                if (res.data.success)
                    dispatch(setErrorsAction({message: res.data.message}))
            }).catch(err => {
            // console.log('editBannerHandler err', err)
            dispatch(setErrorsAction({message: "Something wrong"}))
        }).finally(() => Inertia.visit(PATH_ADMIN_BANNER_PAGE));
    };

    const showEditFormHandler = banner => {
        // console.log('showEditFormHandler', banner)
        setEditBanner(banner)
        setShowEditForm(true)
        setShowList(false)
    };

    const removeBannerHandler = bannerId => {
        // console.log('removeBannerHandler', bannerId)
        axios.post(`/api/banners/${bannerId}`, {
            _method: 'DELETE'
        }).then(res => {
            // console.log('removeBannerHandler res', res)
            if (res.data.success)
                dispatch(setErrorsAction({message: res.data.message}))
        }).catch(err => {
            // console.log('removeBannerHandler err', err)
            dispatch(setErrorsAction({message: "Something wrong"}))
        }).finally(() => Inertia.visit(PATH_ADMIN_BANNER_PAGE));
    };

    return (
        <Layout>
            <Head>
                <title>CoinZoomer.com - Your The best Crypto Browser!</title>
                <meta name="description"
                      content="CoinZoomer.com is innovative crypto voting and coin browsers platform. You can promote your coin or find the best coins to invest"/>
            </Head>
            <Container className={s.adminPage}>
                <div className={`mt-3 ${s.adminSideBar}`}>
                    <AdminSidebar/>
                </div>
                <div className="mt-5">
                    <div className="d-flex justify-content-between align-items-start">
                        <h1>Banner Page</h1>
                        <Button
                            variant="outline-info"
                            onClick={showCreateFormHandler}
                        >
                            Add New
                        </Button>
                    </div>
                    {
                        isShowCreateForm &&
                        <CustomForm
                            title={
                                <h2>Create Banner</h2>
                            }
                        >
                            <form
                                onSubmit={createBannerHandler}
                            >
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        type="checkbox"
                                        checked={createBanner.is_show}
                                        onChange={e => setCreateBanner({
                                            ...createBanner,
                                            ['is_show']: e.target.checked
                                        })}
                                        label={createBanner.is_show ? 'SHOW ON WEBSITE' : 'NOT SHOWED'}
                                    />
                                </Form.Group>
                                <InputGroup className="mb-3">
                                    <label className="input-label">
                                        Image
                                        <InputFile
                                            name={'img_path'}
                                            content={createBanner.img_path}
                                            inputHandler={inputFileHandler}
                                            isRequired={true}
                                            isNeedSmallImage={false}
                                        />
                                    </label>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <label className="input-label">
                                        Title
                                        <FormControl
                                            className="input-text"
                                            type="text"
                                            name='name'
                                            value={createBanner.title}
                                            onChange={e => setCreateBanner({
                                                ...createBanner,
                                                ['title']: e.target.value
                                            })}
                                            required
                                        />
                                    </label>
                                </InputGroup>
                                <label className="input-label">
                                    Link
                                    <FormControl
                                        placeholder="Http://"
                                        className="input-text"
                                        type="url"
                                        pattern="https://.*" size="30"
                                        value={createBanner.link}
                                        onChange={e => setCreateBanner({
                                            ...createBanner,
                                            ['link']: e.target.value
                                        })}
                                        required
                                    />
                                </label>
                                <div className="mt-3 d-flex justify-content-end">
                                    <Button
                                        type="submit"
                                        variant="success"
                                    >
                                        Create
                                    </Button>
                                </div>
                            </form>
                        </CustomForm>
                    }
                    {
                        isShowEditForm && editBanner &&
                        <CustomForm
                            title={
                                <h2>Edit Banner</h2>
                            }
                        >
                            <form
                                onSubmit={editBannerHandler}
                            >
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        type="checkbox"
                                        checked={editBanner.is_show}
                                        onChange={e => setEditBanner({
                                            ...editBanner,
                                            ['is_show']: e.target.checked
                                        })}
                                        label={editBanner.is_show ? 'SHOW ON WEBSITE' : 'NOT SHOWED'}
                                    />
                                </Form.Group>
                                <InputGroup className="mb-3">
                                    <label className="input-label">
                                        Image
                                        <InputFile
                                            name={'img_path'}
                                            content={editBanner.img_path}
                                            inputHandler={inputEditFileHandler}
                                            isRequired={true}
                                            isNeedSmallImage={false}
                                        />
                                    </label>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <label className="input-label">
                                        Title
                                        <FormControl
                                            className="input-text"
                                            type="text"
                                            name='name'
                                            value={editBanner.title}
                                            onChange={e => setEditBanner({
                                                ...editBanner,
                                                ['title']: e.target.value
                                            })}
                                            required
                                        />
                                    </label>
                                </InputGroup>
                                <label className="input-label">
                                    Link
                                    <FormControl
                                        placeholder="https://"
                                        className="input-text"
                                        type="url"
                                        pattern="https://.*" size="30"
                                        value={editBanner.link}
                                        onChange={e => setEditBanner({
                                            ...editBanner,
                                            ['link']: e.target.value
                                        })}
                                        required
                                    />
                                </label>
                                <div className="mt-3 d-flex justify-content-end">
                                    <Button
                                        variant="warning"
                                        className="me-3"
                                        onClick={event => Inertia.visit(PATH_ADMIN_BANNER_PAGE)}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="success"
                                    >
                                        Change
                                    </Button>
                                </div>
                            </form>
                        </CustomForm>
                    }
                    {
                        isShowList &&
                        <div className="d-flex justify-content-between align-items-start flex-wrap">
                            {
                                ban && ban.length &&
                                ban.map(i => <BannerCard
                                    banner={i}
                                    key={i.id}
                                    editHandler={showEditFormHandler}
                                    deleteHandler={removeBannerHandler}
                                />)
                            }
                        </div>
                    }
                </div>
            </Container>
        </Layout>
    );
};

export default AdminBannerPage;
