import React, {useEffect} from 'react';
import s from '../../sass/pages/AddCoinPage/AddCoinPage.module.scss'
import Layout from "../components/Layout";
import LeadersSubscribeBlock from "../components/LeadersSubscribeBlock/LeadersSubscribeBlock";
import {Button, Container, DropdownButton, FloatingLabel, FormControl, InputGroup} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {setCurrentUserAction} from "../reducers/currentUserReducer";
import CustomAlert from "../components/UI/CustomAlert/CustomAlert";
import BannerBlock from "../components/BannerBlock/BannerBlock";
import Medal from "../components/Medal/Medal";
import OutlineBtn from "../components/UI/OutlineBtn/OutlineBtn";
import CustomForm from "../components/CustomForm/CustomForm";
import InputTwoImageGroup from "../components/UI/InputTwoImageGroup/InputTwoImageGroup";
import telegram from "../../assets/img/ic-telegram.png";
import twitter from "../../assets/img/ic-twitter.png";
import reddit from "../../assets/img/ic-reddit.png";
import discord from "../../assets/img/ic-discord.png";
import mail from "../../assets/img/ic_email.png";
import DropdownItem from "react-bootstrap/DropdownItem";
import Form from "react-bootstrap/Form";
import FormBlockDivider from "../components/UI/FormBlockDivider/FormBlockDivider";
import InputImage from "../components/InputImage/InputImage";
import InputFile from "../components/InputFile/InputFile";

const AddCoinPage = ({currentUser, errors}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        // dispatch(setErrorsAction(errors))
    }, []);

    return (
        <Layout>
            <div className={s.addCoinPage}>
                <Container>
                    <CustomAlert/>
                    <BannerBlock/>
                    <section className={s.faqSection}>
                        <Medal>
                            <p className={s.medalText}>Ongoing Airdrops</p>
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
                                <h2 className={s.titleBlock}>Coin info</h2>
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
                                                <span>*</span> Description
                                                <FormControl
                                                    placeholder="Example: Bitcoin is a decentralized digital currency"
                                                    className="input-text"
                                                    type="text"
                                                />
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> Price in USD
                                                <FormControl
                                                    placeholder="Example: 0.05656"
                                                    className="input-text"
                                                    type="text"
                                                />
                                            </label>
                                        </InputGroup>

                                    </div>

                                    <div className={s.side}>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> Symbol
                                                <FormControl
                                                    placeholder="Example: BTC"
                                                    className="input-text"
                                                    type="text"
                                                />
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> Market Cap in USD
                                                <FormControl
                                                    placeholder="Example: 15955000"
                                                    className="input-text"
                                                    type="text"
                                                />
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> Launch date (DD.MM.YYYY)
                                                <FormControl
                                                    placeholder="Example: 15.05.2021"
                                                    className="input-text"
                                                    type="date"
                                                />
                                            </label>
                                        </InputGroup>

                                    </div>
                                </div>
                                <FormBlockDivider/>

                                <h2 className={s.titleBlock}>Contract addresses</h2>
                                <div className={s.formBlock}>
                                    <div className={s.side}>
                                        <label className="input-label">
                                            <span>*</span> Chain
                                            <InputGroup className="mb-3">
                                                <DropdownButton
                                                    id="dropdown-custom"
                                                    className='dropdown-custom'
                                                    title="Select">
                                                    <DropdownItem
                                                        onClick={event => event.preventDefault()}
                                                        as="button"
                                                    >
                                                        One Chain
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        onClick={event => event.preventDefault()}
                                                        as="button"
                                                    >
                                                        Two Chain
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        onClick={event => event.preventDefault()}
                                                        as="button"
                                                    >
                                                        Three Chain
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        onClick={event => event.preventDefault()}
                                                        as="button"
                                                    >
                                                        Four Chain
                                                    </DropdownItem>
                                                </DropdownButton>
                                            </InputGroup>
                                        </label>
                                    </div>

                                    <div className={s.side}>
                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> Address
                                                <FormControl
                                                    placeholder="Example: BTC"
                                                    className="input-text"
                                                    type="text"
                                                />
                                            </label>
                                        </InputGroup>
                                    </div>
                                </div>
                                <FormBlockDivider/>

                                <h2 className={s.titleBlock}>Contract addresses</h2>
                                <div className={s.formBlock}>

                                    <div className={s.side}>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> Telegram
                                                <InputImage imgLink={telegram}/>
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Twitter
                                                <InputImage imgLink={twitter}/>
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Reddit
                                                <InputImage imgLink={reddit}/>
                                            </label>
                                        </InputGroup>

                                    </div>

                                    <div className={s.side}>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Web Address
                                                <FormControl
                                                    placeholder="Http://"
                                                    className="input-text"
                                                    type="url"
                                                />
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Discord
                                                <InputImage imgLink={discord}/>
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Logotype
                                                <InputFile placeholder={'Png/jpg/gif/tif/WebM  / links'} />
                                            </label>
                                        </InputGroup>

                                    </div>
                                </div>
                                <label className="input-label">
                                    Additional information, other links and addresses
                                    <InputGroup className="mb-3">
                                        <FloatingLabel label="">
                                            <Form.Control
                                                as="textarea"
                                                style={{height: '60px'}}
                                            />
                                        </FloatingLabel>
                                    </InputGroup>
                                </label>
                                <FormBlockDivider/>

                                <h2 className={s.titleBlock}>Contact info</h2>
                                <div className={s.formBlock}>

                                    <div className={s.side}>
                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> Contact Email
                                                <FormControl
                                                    placeholder="@"
                                                    className="input-text"
                                                    type="email"
                                                />
                                            </label>
                                        </InputGroup>
                                    </div>

                                    <div className={s.side}>
                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Contact Telegram
                                                <InputImage imgLink={telegram}/>
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

export default AddCoinPage;
