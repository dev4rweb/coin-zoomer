import React, {useEffect, useState} from 'react';
import s from '../../sass/pages/AddCoinPage/AddCoinPage.module.scss'
import Layout from "../components/Layout";
import LeadersSubscribeBlock from "../components/LeadersSubscribeBlock/LeadersSubscribeBlock";
import {Button, Container, DropdownButton, FloatingLabel, FormControl, InputGroup} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
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
import {addCoinAction} from "../reducers/coinReducer";
import {setErrorsAction} from "../reducers/errorsReducer";
import {Inertia} from "@inertiajs/inertia";
import {PATH_HOME_PAGE} from "../utils/routesPath";

const AddCoinPage = ({currentUser, errors}) => {
    const coin = useSelector(state => state.coin.addCoin)
    const [chain, setChain] = useState('Select')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        // dispatch(setErrorsAction(errors))
    }, []);

    const chainHandler = e => {
        e.preventDefault()
        const value = e.target.getAttribute('title')
        console.log('chainHandler', value)
        setChain(value)
        setCoin({
            ...coin,
            ['chain']: value
        })
    };

    const contractTelegramHandler = value => {
        console.log('contractTelegramHandler', value)
        setCoin({
            ...coin,
            ['contractTelegram']: value
        })
    };

    const contractTwitterHandler = value => {
        console.log('contractTwitterHandler', value)
        setCoin({
            ...coin,
            ['contractTwitter']: value
        })
    };

    const contractRedditHandler = value => {
        console.log('contractRedditHandler', value)
        setCoin({
            ...coin,
            ['contractReddit']: value
        })
    };

    const contractDiscordHandler = value => {
        console.log('contractDiscordHandler', value)
        setCoin({
            ...coin,
            ['contractDiscord']: value
        })
    };

    const inputFileHandler = filepath => {
        console.log('inputFileHandler', filepath)
        setCoin({
            ...coin,
            ['logotype']: filepath
        })
    };

    const telegramHandler = value => {
        console.log('telegramHandler', value)
        setCoin({
            ...coin,
            ['telegram']: value
        })
    };

    const setCoin = coin => {
        dispatch(addCoinAction(coin))
    };

    const submitHandler = e => {
        e.preventDefault()
        console.log('submitHandler coin', coin)
        axios.post('/add-coin-create', coin)
            .then(res => {
                console.log(res)
                if (res.data.success) {
                    setErrorsAction({message: res.data.message});
                    setTimeout(() => {
                        Inertia.visit(PATH_HOME_PAGE)
                    }, 2000);
                } else {
                    setErrorsAction({message: 'Something wrong! Try again later'});
                }
            })
            .catch(err => {
                console.log(err)
                setErrorsAction({message: 'Something wrong!'});
            });
    };

    return (
        <Layout>
            <div className={s.addCoinPage}>
                <Container style={{marginTop: '30px'}}>
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
                            <form
                                onSubmit={submitHandler}
                                className={s.addCoinForm}
                            >
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
                                                    name='name'
                                                    value={coin.name}
                                                    onChange={e => setCoin({
                                                        ...coin,
                                                        ['name']: e.target.value
                                                    })}
                                                    required
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
                                                    value={coin.description}
                                                    onChange={e => setCoin({
                                                        ...coin,
                                                        ['description']: e.target.value
                                                    })}
                                                    required
                                                />
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> Price in USD
                                                <FormControl
                                                    placeholder="Example: 0.05656"
                                                    className="input-text"
                                                    type="number"
                                                    value={coin.price}
                                                    onChange={e => setCoin({
                                                        ...coin,
                                                        ['price']: e.target.value
                                                    })}
                                                    required
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
                                                    value={coin.symbol}
                                                    onChange={e => setCoin({
                                                        ...coin,
                                                        ['symbol']: e.target.value
                                                    })}
                                                    required
                                                />
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> Market Cap in USD
                                                <FormControl
                                                    placeholder="Example: 15955000"
                                                    className="input-text"
                                                    type="number"
                                                    value={coin.market_cap}
                                                    onChange={e => setCoin({
                                                        ...coin,
                                                        ['market_cap']: e.target.value
                                                    })}
                                                    required
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
                                                    value={coin.launch_date}
                                                    onChange={e => setCoin({
                                                        ...coin,
                                                        ['launch_date']: e.target.value
                                                    })}
                                                    required
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
                                                    title={chain}
                                                    required
                                                >
                                                    <DropdownItem
                                                        onClick={chainHandler}
                                                        as="button"
                                                        title={'eth'}
                                                    >
                                                        eth
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        onClick={chainHandler}
                                                        as="button"
                                                        title={'bsc'}
                                                    >
                                                        bsc
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        onClick={chainHandler}
                                                        as="button"
                                                        title={'fantom'}
                                                    >
                                                        fantom
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        onClick={chainHandler}
                                                        as="button"
                                                        title={'mumbai'}
                                                    >
                                                        mumbai
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        onClick={chainHandler}
                                                        as="button"
                                                        title={'polygon'}
                                                    >
                                                        polygon
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        onClick={chainHandler}
                                                        as="button"
                                                        title={'avalanche'}
                                                    >
                                                        avalanche
                                                    </DropdownItem>
                                                    <DropdownItem
                                                        onClick={chainHandler}
                                                        as="button"
                                                        title={'miannet'}
                                                    >
                                                        miannet
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
                                                    value={coin.address}
                                                    onChange={e => setCoin({
                                                        ...coin,
                                                        ['address']: e.target.value
                                                    })}
                                                    required
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
                                                <InputImage
                                                    imgLink={telegram}
                                                    inputHandler={contractTelegramHandler}
                                                    required={true}
                                                />
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Twitter
                                                <InputImage
                                                    imgLink={twitter}
                                                    inputHandler={contractTwitterHandler}
                                                />
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Reddit
                                                <InputImage
                                                    imgLink={reddit}
                                                    inputHandler={contractRedditHandler}
                                                />
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
                                                    pattern="https://.*" size="30"
                                                    value={coin.contractWeb}
                                                    onChange={e => setCoin({
                                                        ...coin,
                                                        ['contractWeb']: e.target.value
                                                    })}
                                                />
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Discord
                                                <InputImage
                                                    imgLink={discord}
                                                    inputHandler={contractDiscordHandler}
                                                />
                                            </label>
                                        </InputGroup>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Logotype
                                                <InputFile
                                                    placeholder={'Png/jpg/gif/tif/WebM/links'}
                                                    inputHandler={inputFileHandler}
                                                />
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
                                                value={coin.contractAdditional}
                                                onChange={e => setCoin({
                                                    ...coin,
                                                    ['contractAdditional']: e.target.value
                                                })}
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
                                                    value={coin.email}
                                                    onChange={e => setCoin({
                                                        ...coin,
                                                        'email': e.target.value
                                                    })}
                                                    required
                                                />
                                            </label>
                                        </InputGroup>
                                    </div>

                                    <div className={s.side}>
                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Contact Telegram
                                                <InputImage
                                                    imgLink={telegram}
                                                    inputHandler={telegramHandler}
                                                />
                                            </label>
                                        </InputGroup>
                                    </div>
                                </div>

                                <div className={s.btnWrapper}>
                                    <Button
                                        variant="info"
                                        className={`fill-btn`}
                                        style={{width: '165px'}}
                                        type="submit"
                                    >
                                        Submit
                                    </Button>

                                </div>
                            </form>
                        </CustomForm>
                    </section>
                </Container>
                <LeadersSubscribeBlock/>
            </div>
        </Layout>
    );
};

export default AddCoinPage;
