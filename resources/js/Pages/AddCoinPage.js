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
import ChainItem from "../components/ChainItem/ChainItem";
import {addNewChainAction} from "../reducers/chainReducer";
import {fetchHotNotificationsAction} from "../reducers/hotNotification";

const AddCoinPage = ({currentUser, errors, hotNotifications}) => {
    const coin = useSelector(state => state.coin.addCoin)
    const chains = useSelector(state => state.chains.chains)
    const [chain, setChain] = useState('Select')
    const [contractAddress, setContactAddress] = useState('')

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentUserAction(currentUser))
        dispatch(fetchHotNotificationsAction(hotNotifications))
        // dispatch(setErrorsAction(errors))
    }, []);

    const chainHandler = e => {
        e.preventDefault()
        const value = e.target.getAttribute('title')
        // console.log('chainHandler', value)
        setChain(value)
        setCoin({
            ...coin,
            ['chain']: value
        })
    };

    const addNewChainHandler = e => {
        if (!coin.is_coin_gecko) {
            if (chain.includes('Select')) {
                dispatch(setErrorsAction({message: 'Choose chain'}));
                return;
            }
            if (!chain.includes('miannet') && !contractAddress.length) {
                dispatch(setErrorsAction({message: 'Fill Contract Address field'}));
                return
            }
        }

        const newChain = {
            id: Date.now(),
            chainName: chain,
            chainValue: contractAddress
        }
        // console.log('addNewChainHandler', newChain)
        dispatch(addNewChainAction(newChain))
        setChain('Select')
        setContactAddress('')
    };

    const contractTelegramHandler = value => {
        // console.log('contractTelegramHandler', value)
        setCoin({
            ...coin,
            ['contractTelegram']: value
        })
    };

    const contractTwitterHandler = value => {
        // console.log('contractTwitterHandler', value)
        setCoin({
            ...coin,
            ['contractTwitter']: value
        })
    };

    const contractRedditHandler = value => {
        // console.log('contractRedditHandler', value)
        setCoin({
            ...coin,
            ['contractReddit']: value
        })
    };

    const contractDiscordHandler = value => {
        // console.log('contractDiscordHandler', value)
        setCoin({
            ...coin,
            ['contractDiscord']: value
        })
    };

    const inputFileHandler = filepath => {
        // console.log('inputFileHandler', filepath)
        setCoin({
            ...coin,
            ['logotype']: filepath
        })
    };

    const telegramHandler = value => {
        // console.log('telegramHandler', value)
        setCoin({
            ...coin,
            ['telegram']: value
        })
    };

    const limitTextHandler = e => {
        let words = e.target.value.split(' ').filter(Boolean)
        console.log('limitTextHandler', words)
        if (words.length < 150) {
            setCoin({
                ...coin,
                ['description']: e.target.value
            });
        } else {
            e.target.style.color = 'red'
        }
    };

    const setCoin = coin => {
        dispatch(addCoinAction(coin))
    };

    const submitHandler = e => {
        e.preventDefault()
        if (!coin.is_coin_gecko && chains.length === 0) {
            dispatch(setErrorsAction({message: 'Add chain'}));
            return
        }
        console.log('submitHandler coin', coin);
        axios.post('/add-coin-create', {
            coin: coin,
            chains: chains
        })
            .then(res => {
                console.log(res)
                if (res.data.success) {
                    setErrorsAction({message: res.data.message});
                    // setTimeout(() => {
                    Inertia.visit(PATH_HOME_PAGE)
                    // }, 2000);
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

                                        {/* <InputGroup className="mb-3">
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
                                        </InputGroup>*/}

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                {
                                                    coin.is_presale ?
                                                        <span>*</span> :
                                                        ''
                                                }
                                                Price in USD
                                                {
                                                    coin.is_presale ?
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
                                                        :
                                                        <FormControl
                                                            placeholder="Example: 0.05656"
                                                            className="input-text"
                                                            type="number"
                                                            value={coin.price}
                                                            onChange={e => setCoin({
                                                                ...coin,
                                                                ['price']: e.target.value
                                                            })}
                                                        />
                                                }

                                            </label>
                                        </InputGroup>
                                        <Form.Group className="mb-3">
                                            <Form.Check
                                                type="checkbox"
                                                checked={coin.is_coin_gecko}
                                                onChange={e => setCoin({
                                                    ...coin,
                                                    ['is_coin_gecko']: e.target.checked
                                                })}
                                                label="Is coin listed on CoinGecko?"
                                            />
                                        </Form.Group>
                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                {
                                                    coin.is_coin_gecko ?
                                                        <span>*</span> :
                                                        ''
                                                }
                                                Coingecko link
                                                {
                                                    coin.is_coin_gecko ?
                                                        <FormControl
                                                            placeholder="Example: BTC"
                                                            className="input-text"
                                                            type="text"
                                                            value={coin.coin_gecko_link}
                                                            onChange={e => setCoin({
                                                                ...coin,
                                                                ['coin_gecko_link']: e.target.value
                                                            })}
                                                            required
                                                        />
                                                        :
                                                        <FormControl
                                                            placeholder="Example: BTC"
                                                            className="input-text"
                                                            type="text"
                                                            value={coin.coin_gecko_link}
                                                            onChange={e => setCoin({
                                                                ...coin,
                                                                ['coin_gecko_link']: e.target.value
                                                            })}
                                                        />
                                                }

                                            </label>
                                        </InputGroup>
                                        <Form.Group className="mb-3">
                                            <Form.Check
                                                type="checkbox"
                                                checked={coin.is_presale}
                                                onChange={e => setCoin({
                                                    ...coin,
                                                    ['is_presale']: e.target.checked
                                                })}
                                                label="Presale listing is paid 0.1 BNB"
                                            />
                                        </Form.Group>
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

                                        {
                                            !coin.is_coin_gecko &&
                                            <InputGroup className="mb-3">
                                                <label className="input-label">
                                                    <span>*</span> Approximately Circulating Supply
                                                    <FormControl
                                                        placeholder="Example: 100000000"
                                                        className="input-text"
                                                        type="number"
                                                        value={coin.circulating_supply}
                                                        onChange={e => setCoin({
                                                            ...coin,
                                                            ['circulating_supply']: e.target.value
                                                        })}
                                                        required
                                                    />
                                                </label>
                                            </InputGroup>
                                        }

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

                                <div>
                                    <label className="input-label">
                                        <span>*</span> Coin description, other links and addresses (150 words limit)
                                        <InputGroup className="mb-3">
                                            <FloatingLabel label="">
                                                <Form.Control
                                                    as="textarea"
                                                    value={coin.description}
                                                    onChange={limitTextHandler}
                                                    style={{height: '60px'}}
                                                    required
                                                />
                                            </FloatingLabel>
                                        </InputGroup>
                                    </label>
                                </div>
                                <FormBlockDivider/>

                                <h2 className={s.titleBlock}>Contract addresses</h2>
                                <div>
                                    {
                                        chains && chains.map(
                                            (chain, i) =>
                                                <ChainItem
                                                    chain={chain}
                                                    key={i}
                                                />
                                        )
                                    }
                                    <div className="d-flex justify-content-between w-100">
                                        <label
                                            className="input-label me-5"
                                        >
                                            {
                                                !coin.is_coin_gecko ?
                                                    <span>*</span>:
                                                    ''
                                            } Chain
                                            <InputGroup className="mb-3">
                                                <DropdownButton
                                                    id="dropdown-custom"
                                                    className='dropdown-custom'
                                                    title={chain}
                                                    required={!coin.is_coin_gecko}
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

                                        <InputGroup className="mb-3 me-5">
                                            <label className="input-label">
                                                {
                                                    chain !== 'miannet' ?
                                                        <span>*</span>
                                                        :
                                                        ''
                                                }
                                                Contract address
                                                {
                                                    chain !== 'miannet' ?
                                                        <FormControl
                                                            placeholder="Example: BTC"
                                                            className="input-text"
                                                            type="text"
                                                            value={contractAddress}
                                                            onChange={e => setContactAddress(e.target.value)}
                                                        />
                                                        :
                                                        <FormControl
                                                            placeholder="Example: BTC"
                                                            className="input-text"
                                                            type="text"
                                                            value={contractAddress}
                                                            onChange={e => setContactAddress(e.target.value)}
                                                        />
                                                }

                                            </label>
                                        </InputGroup>
                                        <Button
                                            variant="info"
                                            className={`fill-btn`}
                                            style={{width: '165px', marginTop: '30px'}}
                                            type="button"
                                            onClick={addNewChainHandler}
                                        >
                                            Add
                                        </Button>
                                    </div>
                                </div>
                                <FormBlockDivider/>

                                <h2 className={s.titleBlock}>Coin social media</h2>
                                <div className={s.formBlock}>

                                    <div className={s.side}>

                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Telegram
                                                <InputImage
                                                    imgLink={telegram}
                                                    inputHandler={contractTelegramHandler}
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
                                                <span>*</span> Web Address
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
                                                    required
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
                                                <span>*</span> Logotype
                                                <InputFile
                                                    placeholder={'Png/jpg 128 x 128'}
                                                    inputHandler={inputFileHandler}
                                                    isRequired={true}
                                                />
                                            </label>
                                        </InputGroup>

                                    </div>
                                </div>

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
