import React, {useEffect} from 'react';
import s from '../../sass/pages/AddAirDropPage/AddAirDropPage.module.scss'
import Layout from "../components/Layout";
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import {Button, Container, DropdownButton, FloatingLabel, FormControl, InputGroup} from "react-bootstrap";
import CustomAlert from "../components/UI/CustomAlert/CustomAlert";
import BannerBlock from "../components/BannerBlock/BannerBlock";
import Medal from "../components/Medal/Medal";
import OutlineBtn from "../components/UI/OutlineBtn/OutlineBtn";
import LeadersSubscribeBlock from "../components/LeadersSubscribeBlock/LeadersSubscribeBlock";
import CustomForm from "../components/CustomForm/CustomForm";
import FormBlockDivider from "../components/UI/FormBlockDivider/FormBlockDivider";
import DropdownItem from "react-bootstrap/DropdownItem";
import InputImage from "../components/InputImage/InputImage";
import telegram from "../../assets/img/ic-telegram.png";
import twitter from "../../assets/img/ic-twitter.png";
import reddit from "../../assets/img/ic-reddit.png";
import discord from "../../assets/img/ic-discord.png";
import InputFile from "../components/InputFile/InputFile";
import Form from "react-bootstrap/Form";
import InputCheckBoxBtn from "../components/InputCheckBoxBtn/InputCheckBoxBtn";

const AddAirDropPage = ({currentUser, errors}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        // dispatch(setErrorsAction(errors))
    }, []);

    return (
        <Layout>
            <div className={s.addAirDropPage}>
                <Container style={{marginTop: '30px'}}>
                    <CustomAlert/>
                    <BannerBlock/>
                    <section className={s.faqSection}>
                        <Medal>
                            <p className={s.medalText}>Add Airdrops</p>
                        </Medal>
                        <div className={s.faqSide}>
                            <p className={s.question}>
                                Do you have any questions? <br/>
                                Visit the FAQ page
                            </p>
                            <OutlineBtn
                                maxWith={'140px'}
                            >
                                FAQ
                            </OutlineBtn>
                        </div>
                    </section>
                    <section className={s.formWrapper}>
                        <CustomForm title={
                            <p>
                                The field marked with <span style={{color: '#f14b4e'}}>*</span> must be filled in!
                            </p>
                        }>
                            <div className={s.addCoinForm}>
                                <h2 className={s.titleBlock}>More info</h2>
                                <div className={s.formBlock}>

                                    <div className={s.side}>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> Name
                                                <FormControl
                                                    placeholder="Example: Tripcoin"
                                                    className="input-text"
                                                    type="text"
                                                />
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> Short Project Description <b
                                                style={{color: 'white', fontWeight: '500'}}>(up to 1000 symbols)</b>
                                                <FloatingLabel label="0/1000" style={{color: '#0dcaf0'}}>
                                                    <Form.Control
                                                        as="textarea"
                                                        placeholder="Message"
                                                        style={{height: '60px'}}
                                                    />
                                                </FloatingLabel>
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> Reward
                                                <FormControl
                                                    placeholder="Example: 100 Tokens"
                                                    className="input-text"
                                                    type="text"
                                                />
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> Distribution date (DD.MM.YYYY)
                                                <FormControl
                                                    placeholder="Example: 15.05.2021"
                                                    className="input-text"
                                                    type="date"
                                                />
                                            </label>
                                        </InputGroup>

                                    </div>

                                    <div className={s.side}>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> Link to Airdrop
                                                <FormControl
                                                    placeholder="Http://"
                                                    className="input-text"
                                                    type="url"
                                                />
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> Airdrop Description
                                                <FloatingLabel label="0/1000" style={{color: '#0dcaf0'}}>
                                                    <Form.Control
                                                        as="textarea"
                                                        placeholder="Message"
                                                        style={{height: '60px'}}
                                                    />
                                                </FloatingLabel>
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> End date (DD.MM.YYYY)
                                                <FormControl
                                                    placeholder="Example: 15.05.2021"
                                                    className="input-text"
                                                    type="date"
                                                />
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Logo
                                                <InputFile placeholder={'Png/jpg/gif/tif/WebM'}/>
                                            </label>
                                        </InputGroup>

                                    </div>
                                </div>
                                <FormBlockDivider/>

                                <h2 className={s.titleBlock}>Requirements & Link options</h2>
                                <div className={s.formBlock}>
                                    <div className={s.side}>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> Website
                                                <FormControl
                                                    placeholder="Http://"
                                                    className="input-text"
                                                    type="url"
                                                />
                                            </label>
                                        </InputGroup>


                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Twitter
                                                <InputCheckBoxBtn placeholder={''} imgLink={twitter}/>
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Reddit
                                                <InputCheckBoxBtn placeholder={''} imgLink={reddit}/>
                                            </label>
                                        </InputGroup>
                                    </div>

                                    <div className={s.side}>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Telegram
                                                <InputCheckBoxBtn placeholder={''} imgLink={telegram}/>
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Discord
                                                <InputCheckBoxBtn placeholder={''} imgLink={discord}/>
                                            </label>
                                        </InputGroup>
                                    </div>
                                </div>

                                <div className={s.btnWrapper}>
                                    <Button
                                        variant="info"
                                        className={`fill-btn`}
                                        style={{width: '165px'}}
                                    >
                                        Submit
                                    </Button>

                                </div>
                            </div>
                        </CustomForm>
                    </section>
                </Container>
                <LeadersSubscribeBlock/>
            </div>
        </Layout>
    );
};

export default AddAirDropPage;
