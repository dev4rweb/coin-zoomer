import React from 'react';
import {Button, Container, FloatingLabel, FormControl, InputGroup} from "react-bootstrap";
import s from "../../../sass/pages/AdminPage/AdminPage.module.scss";
import c from '../../../sass/pages/AddCoinPage/AddCoinPage.module.scss'
import AdminSidebar from "../../components/UI/AdminSidebar/AdminSidebar";
import Layout from "../../components/Layout";
import {useForm, usePage} from "@inertiajs/inertia-react";
import {Inertia} from "@inertiajs/inertia";
import CustomForm from "../../components/CustomForm/CustomForm";
import {setErrorsAction} from "../../reducers/errorsReducer";
import {PATH_ADD_COIN_PAGE, PATH_ADMIN_COINS_PAGE} from "../../utils/routesPath";
import Form from "react-bootstrap/Form";
import FormBlockDivider from "../../components/UI/FormBlockDivider/FormBlockDivider";
import InputImage from "../../components/InputImage/InputImage";
import telegram from "../../../assets/img/ic-telegram.png";
import twitter from "../../../assets/img/ic-twitter.png";
import reddit from "../../../assets/img/ic-reddit.png";
import discord from "../../../assets/img/ic-discord.png";
import InputFile from "../../components/InputFile/InputFile";

const CoinEdit = ({coin}) => {
    const {data, setData, errors, put, processing} = useForm({
        id: coin.id,
        name: coin.name || '',
        price: coin.price || '',
        coin_gecko_link: coin.coin_gecko_link || '',
        symbol: coin.symbol || '',
        market_cap: coin.market_cap || '',
        launch_date: coin.launch_date || '',
        description: coin.description || '',
        contractTelegram: coin.contractTelegram || '',
        contractTwitter: coin.contractTwitter || '',
        contractReddit: coin.contractReddit || '',
        contractWeb: coin.contractWeb || '',
        contractDiscord: coin.contractDiscord || '',
        logotype: coin.logotype || '',
        telegram: coin.telegram || '',
        email: coin.email || '',
        is_presale: coin.is_presale || false,
        is_coin_gecko: coin.is_coin_gecko || false,
        is_promoted: coin.is_promoted || false
    })
    console.log('CoinEdit', coin)

    const limitTextHandler = e => {
        let words = e.target.value.split(' ').filter(Boolean)
        console.log('limitTextHandler', words)
        if (words.length < 150) {
            setData({
                ...data,
                description: e.target.value
            });
        } else {
            e.target.style.color = 'red'
        }
    };

    const contractTwitterHandler = value => {
        console.log('contractTwitterHandler', value)
        setData({
            ...data,
            ['contractTwitter']: value
        })
    };

    const contractRedditHandler = value => {
        console.log('contractRedditHandler', value)
        setData({
            ...data,
            ['contractReddit']: value
        })
    };

    const contractDiscordHandler = value => {
        console.log('contractDiscordHandler', value)
        setData({
            ...data,
            ['contractDiscord']: value
        })
    };

    const inputFileHandler = filepath => {
        console.log('inputFileHandler', filepath)
        setData({
            ...data,
            ['logotype']: filepath
        })
    };

    const telegramHandler = value => {
        console.log('telegramHandler', value)
        setData({
            ...data,
            ['telegram']: value
        })
    };

    const handleSubmit = e => {
        e.preventDefault()
        console.log('handleSubmit', data)
        axios.post(`/api/coins/${data.id}`, {
            _method: 'PUT',
            name: data.name,
            price: data.price,
            coin_gecko_link: data.coin_gecko_link,
            symbol: data.symbol,
            market_cap: data.market_cap,
            launch_date: data.launch_date,
            description: data.description,
            contractTelegram: data.contractTelegram,
            contractTwitter: data.contractTwitter,
            contractReddit: data.contractReddit,
            contractWeb: data.contractWeb,
            contractDiscord: data.contractDiscord,
            logotype: data.logotype,
            telegram: data.telegram,
            email: data.email,
            is_presale: data.is_presale,
            is_coin_gecko: data.is_coin_gecko,
            is_promoted: data.is_promoted,
            is_fake: false
        }).then(res => {
            console.log(res)
            if (res.data.success) {
                setErrorsAction({message: res.data.message});
                Inertia.visit(PATH_ADMIN_COINS_PAGE);
            } else {
                setErrorsAction({message: 'Something wrong! Try again later'});
            }
        }).catch(err => {
            console.log(err)
            setErrorsAction({message: 'Something wrong!'});
        });
    };

    return (
        <Layout>
            <Container className={s.adminPage}>
                <div className="mt-3">
                    <AdminSidebar/>
                </div>
                <div className={`mt-5 mb-5 ${c.formWrapper}`}>
                    <CustomForm
                        title={
                            <div className="d-flex justify-content-between align-items-center">
                                <h1>{data.name}</h1>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        type="checkbox"
                                        checked={data.is_promoted}
                                        onChange={e => setData({
                                            ...data,
                                            ['is_promoted']: e.target.checked
                                        })}
                                        label={data.is_promoted ? 'PROMOTED' : 'NOT PROMOTED'}
                                    />
                                </Form.Group>
                                <img
                                    style={{width: '126px', height: 'auto'}}
                                    src={data.logotype}
                                    alt="logo"
                                />
                            </div>

                        }
                    >
                        <form onSubmit={handleSubmit} className={c.addCoinForm}>
                            <h2 className={c.titleBlock}>Coin info</h2>
                            <div className={c.formBlock}>
                                <div className={c.side}>
                                    <InputGroup className="mb-3">
                                        <label className="input-label">
                                            <span>*</span> Name
                                            <FormControl
                                                placeholder="Example: Tripcoin"
                                                className="input-text"
                                                type="text"
                                                name='name'
                                                value={data.name}
                                                onChange={e => setData({
                                                    ...data,
                                                    ['name']: e.target.value
                                                })}
                                                required
                                            />
                                        </label>
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <label className="input-label">
                                            {
                                                data.is_presale ?
                                                    <span>*</span> :
                                                    ''
                                            }
                                            Price in USD
                                            {
                                                data.is_presale ?
                                                    <FormControl
                                                        placeholder="Example: 0.05656"
                                                        className="input-text"
                                                        type="number"
                                                        value={coin.price}
                                                        onChange={e => setData({
                                                            ...data,
                                                            ['price']: e.target.value
                                                        })}
                                                        required
                                                    />
                                                    :
                                                    <FormControl
                                                        placeholder="Example: 0.05656"
                                                        className="input-text"
                                                        type="number"
                                                        value={data.price}
                                                        onChange={e => setData({
                                                            ...data,
                                                            ['price']: e.target.value
                                                        })}
                                                    />
                                            }

                                        </label>
                                    </InputGroup>

                                    <Form.Group className="mb-3">
                                        <Form.Check
                                            type="checkbox"
                                            checked={data.is_coin_gecko}
                                            onChange={e => setData({
                                                ...data,
                                                ['is_coin_gecko']: e.target.checked
                                            })}
                                            label="Is coin listed on CoinGecko?"
                                        />
                                    </Form.Group>

                                    <InputGroup className="mb-3">
                                        <label className="input-label">
                                            {
                                                data.is_coin_gecko ?
                                                    <span>*</span> :
                                                    ''
                                            }
                                            Coingecko link
                                            {
                                                data.is_coin_gecko ?
                                                    <FormControl
                                                        placeholder="Example: BTC"
                                                        className="input-text"
                                                        type="text"
                                                        value={data.coin_gecko_link}
                                                        onChange={e => setData({
                                                            ...data,
                                                            ['coin_gecko_link']: e.target.value
                                                        })}
                                                        required
                                                    />
                                                    :
                                                    <FormControl
                                                        placeholder="Example: BTC"
                                                        className="input-text"
                                                        type="text"
                                                        value={data.coin_gecko_link}
                                                        onChange={e => setData({
                                                            ...data,
                                                            ['coin_gecko_link']: e.target.value
                                                        })}
                                                    />
                                            }

                                        </label>
                                    </InputGroup>
                                </div>

                                <div className={c.side}>
                                    <InputGroup className="mb-3">
                                        <label className="input-label">
                                            <span>*</span> Symbol
                                            <FormControl
                                                placeholder="Example: BTC"
                                                className="input-text"
                                                type="text"
                                                value={data.symbol}
                                                onChange={e => setData({
                                                    ...data,
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
                                                value={data.market_cap}
                                                onChange={e => setData({
                                                    ...data,
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
                                                value={data.launch_date}
                                                onChange={e => setData({
                                                    ...data,
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
                                                value={data.description}
                                                onChange={limitTextHandler}
                                                style={{height: '60px'}}
                                                required
                                            />
                                        </FloatingLabel>
                                    </InputGroup>
                                </label>
                            </div>
                            <FormBlockDivider/>

                            <h2 className={c.titleBlock}>Coin social media</h2>

                            <div className={c.formBlock}>

                                <div className={c.side}>

                                    <InputGroup className="mb-3">
                                        <label className="input-label">
                                            Telegram
                                            <FormControl
                                                className="input-text"
                                                type="text"
                                                value={data.contractTelegram}
                                                onChange={e => setData({
                                                    ...data,
                                                    'contractTelegram': e.target.value
                                                })}
                                            />
                                        </label>
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <label className="input-label">
                                            Twitter
                                            <InputImage
                                                name={'contractTwitter'}
                                                content={data.contractTwitter}
                                                imgLink={twitter}
                                                inputHandler={contractTwitterHandler}
                                            />
                                        </label>
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <label className="input-label">
                                            Reddit
                                            <InputImage
                                                name={'contractReddit'}
                                                content={data.contractReddit}
                                                imgLink={reddit}
                                                inputHandler={contractRedditHandler}
                                            />
                                        </label>
                                    </InputGroup>

                                </div>

                                <div className={c.side}>

                                    <InputGroup className="mb-3">
                                        <label className="input-label">
                                            <span>*</span> Web Address
                                            <FormControl
                                                placeholder="Http://"
                                                className="input-text"
                                                type="url"
                                                pattern="https://.*" size="30"
                                                value={data.contractWeb}
                                                onChange={e => setData({
                                                    ...data,
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
                                                name={'contractDiscord'}
                                                content={data.contractDiscord}
                                                inputHandler={contractDiscordHandler}
                                            />
                                        </label>
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <label className="input-label">
                                            <span>*</span> Logotype
                                            <InputFile
                                                name={'logotype'}
                                                content={data.logotype}
                                                placeholder={'Png/jpg 128 x 128'}
                                                inputHandler={inputFileHandler}
                                                isRequired={true}
                                            />
                                        </label>
                                    </InputGroup>

                                </div>
                            </div>

                            <FormBlockDivider/>

                            <h2 className={c.titleBlock}>Contact info</h2>
                            <div className={c.formBlock}>

                                <div className={c.side}>
                                    <InputGroup className="mb-3">
                                        <label className="input-label">
                                            <span>*</span> Contact Email
                                            <FormControl
                                                placeholder="@"
                                                className="input-text"
                                                type="email"
                                                value={data.email}
                                                onChange={e => setData({
                                                    ...data,
                                                    'email': e.target.value
                                                })}
                                                required
                                            />
                                        </label>
                                    </InputGroup>
                                </div>

                                <div className={c.side}>
                                    <InputGroup className="mb-3">
                                        <label className="input-label">
                                            Contact Telegram
                                            <InputImage
                                                name={'telegram'}
                                                content={data.telegram}
                                                imgLink={telegram}
                                                inputHandler={telegramHandler}
                                            />
                                        </label>
                                    </InputGroup>
                                </div>
                            </div>

                            <div className={c.btnWrapper}>
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

                </div>
            </Container>
        </Layout>
    );
};

export default CoinEdit;
