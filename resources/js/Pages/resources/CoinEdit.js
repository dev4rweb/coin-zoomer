import React, {useState, Component} from 'react';
import {Button, Container, DropdownButton, FloatingLabel, FormControl, InputGroup} from "react-bootstrap";
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
import Chain from "../../components/ChainItem/Chain";
import DropdownItem from "react-bootstrap/DropdownItem";
import {useDispatch} from "react-redux";
import TextEditor from "../../components/TextEditor/TextEditor";
import TextEditorMenu from "../../components/TextEditor/TextEditorMenu";
import {Head} from '@inertiajs/inertia-react'

const CoinEdit = ({coin}) => {
    const dispatch = useDispatch()
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
        is_promoted: coin.is_promoted || false,
        is_approved: coin.is_approved || false,
        is_kyc: coin.is_kyc || false,
        is_market_cap_gecko: coin.is_market_cap_gecko || false,
        is_own_logo: coin.is_own_logo || false,
        coin_chains: coin.coin_chains || null,
        circulating_supply: coin.circulating_supply || null,
        presale_link: coin.presale_link || '',
        invite_link: coin.invite_link || '',
        remote_response: coin.contractAdditional || '',
        updated_at: coin.updated_at || '',
        warning_message: coin.warning_message || '',
        show_warning_message: coin.show_warning_message || false,
        important_warning_message: coin.important_warning_message || false,
    })

    const [titleChain, setTitleChain] = useState('Select')
    const [contractAddress, setContractAddress] = useState('')
    const [isDisabled, setDisabled] = useState(false)

    console.log('CoinEdit', coin)

    const limitTextHandler = e => {
        let words = e.target.value.split(' ').filter(Boolean)
        // console.log('limitTextHandler', words)
        if (words.length < 150) {
            setData({
                ...data,
                description: e.target.value
            });
        } else {
            e.target.style.color = 'red'
        }
    };

    const saveEditorHandler = textHtml => {
        console.log('saveEditorHandler', textHtml)
        setData({
            ...data,
            ['description']: textHtml
        })
    };

    const contractTwitterHandler = value => {
        // console.log('contractTwitterHandler', value)
        setData({
            ...data,
            ['contractTwitter']: value
        })
    };

    const contractRedditHandler = value => {
        // console.log('contractRedditHandler', value)
        setData({
            ...data,
            ['contractReddit']: value
        })
    };

    const contractDiscordHandler = value => {
        // console.log('contractDiscordHandler', value)
        setData({
            ...data,
            ['contractDiscord']: value
        })
    };

    const inputFileHandler = filepath => {
        // console.log('inputFileHandler', filepath)
        setData({
            ...data,
            ['logotype']: filepath
        })
    };

    const telegramHandler = value => {
        // console.log('telegramHandler', value)
        setData({
            ...data,
            ['telegram']: value
        })
    };

    const removeChainHandler = chain => {
        console.log('removeChainHandler', chain)
        setData({
            ...data,
            ['coin_chains']: data.coin_chains.filter(i => i.id !== chain.id)
        })
    };

    const chainTitleHandler = e => {
        e.preventDefault()
        setTitleChain(e.target.getAttribute('title'))
    };

    const addNewChainHandler = e => {
        if (
            (titleChain !== 'Select' && contractAddress)
            ||
            titleChain === 'mainnet'
        ) {
            const newChain = {
                id: Date.now(),
                chain: titleChain,
                contract_address: contractAddress
            };
            setData({
                ...data,
                ['contract_address']: data.coin_chains.push(newChain)
            });
            setTitleChain('Select');
            setContractAddress('');
        } else {
            dispatch(setErrorsAction({message: 'You need to fill fields'}))
        }

    };

    const handleSubmit = e => {
        e.preventDefault()
        console.log('handleSubmit', data)
        setDisabled(true)
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
            is_fake: false,
            is_kyc: data.is_kyc,
            is_market_cap_gecko: data.is_market_cap_gecko,
            is_own_logo: data.is_own_logo,
            coin_chains: data.coin_chains,
            circulating_supply: data.circulating_supply,
            presale_link: data.presale_link,
            invite_link: data.invite_link,
            warning_message: data.warning_message,
            show_warning_message: data.show_warning_message,
            important_warning_message: data.important_warning_message,

        }).then(res => {
            console.log(res)
            if (res.data.success) {
                dispatch(setErrorsAction({message: res.data.message}));
                Inertia.visit(PATH_ADMIN_COINS_PAGE);
            } else {
                // setErrorsAction({message: 'Something wrong! Try again later'});
                dispatch(setErrorsAction({message: res.data.message}));
            }
        }).catch(err => {
            console.log(err)
            // setErrorsAction({message: 'Something wrong!'});
            dispatch(setErrorsAction(err.response.data));
        }).finally(() => {
            setDisabled(false)
        });
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
                <div className={`mt-5 mb-5 ${c.formWrapper}`}>
                    <CustomForm
                        title={
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                <h1>{data.name}</h1>
                                {
                                    data.invite_link &&
                                    <h2>Invite link {data.invite_link}</h2>
                                }
                                <div className="mb-3">
                                    <Form.Group>
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
                                    <Form.Group>
                                        <Form.Check
                                            type="checkbox"
                                            checked={data.is_kyc}
                                            onChange={e => setData({
                                                ...data,
                                                ['is_kyc']: e.target.checked
                                            })}
                                            label={data.is_kyc ? 'KYC' : 'NOT KYC'}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Check
                                            type="checkbox"
                                            checked={data.is_market_cap_gecko}
                                            onChange={e => setData({
                                                ...data,
                                                ['is_market_cap_gecko']: e.target.checked
                                            })}
                                            label={data.is_market_cap_gecko ? 'MARKET CUP' : 'OWN MARKET CUP'}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Check
                                            type="checkbox"
                                            checked={data.is_own_logo}
                                            onChange={e => setData({
                                                ...data,
                                                ['is_own_logo']: e.target.checked
                                            })}
                                            label={data.is_own_logo ? 'OWN LOGO' : 'FROM RESOURCE'}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Check
                                            type="checkbox"
                                            checked={data.is_presale}
                                            onChange={e => setData({
                                                ...data,
                                                ['is_presale']: e.target.checked
                                            })}
                                            label={data.is_presale ? 'PRESALE' : 'NOT PRESALE'}
                                        />
                                    </Form.Group>
                                </div>

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
                            <div className="mt-5 mb-5">
                                <h3>Warning message</h3>
                                <div className="d-flex justify-content-around">
                                    <Form.Group>
                                        <Form.Check
                                            type="checkbox"
                                            checked={data.show_warning_message}
                                            onChange={e => setData({
                                                ...data,
                                                ['show_warning_message']: e.target.checked
                                            })}
                                            label={data.show_warning_message ? 'SHOW' : 'HIDDEN'}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Check
                                            type="checkbox"
                                            checked={data.important_warning_message}
                                            onChange={e => setData({
                                                ...data,
                                                ['important_warning_message']: e.target.checked
                                            })}
                                            label={data.important_warning_message ? 'RED' : 'ORANGE'}
                                        />
                                    </Form.Group>
                                </div>
                                <InputGroup className="mb-3">
                                    <label className="input-label">
                                        Text Message
                                        <FormControl
                                            placeholder="Example: Warning message"
                                            className="input-text"
                                            type="text"
                                            value={data.warning_message}
                                            onChange={e => setData({
                                                ...data,
                                                ['warning_message']: e.target.value
                                            })}
                                        />
                                    </label>
                                </InputGroup>
                            </div>
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
                                            {data.is_presale ? ' Presale price in USD' : 'Price in USD'}

                                            {
                                                data.is_presale ?
                                                    <FormControl
                                                        placeholder="Example: 0.05656"
                                                        className="input-text"
                                                        type="number"
                                                        value={data.price}
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

                                    {
                                        (!data.is_coin_gecko || !data.is_market_cap_gecko) &&
                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                <span>*</span> Approximately Circulating Supply
                                                <FormControl
                                                    placeholder="Example: 100000000"
                                                    className="input-text"
                                                    type="number"
                                                    min="0"
                                                    value={data.circulating_supply}
                                                    onChange={e => setData({
                                                        ...data,
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
                                            <span>*</span>
                                            {data.is_presale ? 'Upcoming launch date (DD.MM.YYYY)' : 'Launch date (DD.MM.YYYY)'}

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
                                                style={{height: '300px'}}
                                                required
                                            />
                                        </FloatingLabel>
                                    </InputGroup>
                                </label>
                            </div>

                            <div>
                                <TextEditor content={data.description} onChange={saveEditorHandler}/>
                            </div>
                            <FormBlockDivider/>

                            <h2 className={c.titleBlock}>Contract addresses</h2>
                            <div>
                                {
                                    data.coin_chains && data.coin_chains.map(
                                        (chain, i) =>
                                            <Chain
                                                chain={chain}
                                                removeChain={removeChainHandler}
                                                key={i}
                                            />
                                    )
                                }
                            </div>
                            <div className="d-flex justify-content-between w-100">
                                <label
                                    className="input-label me-5"
                                >
                                    <span>*</span> Chain
                                    <InputGroup className="mb-3">
                                        <DropdownButton
                                            id="dropdown-custom"
                                            className='dropdown-custom'
                                            title={titleChain}
                                            required
                                        >
                                            <DropdownItem
                                                onClick={chainTitleHandler}
                                                as="button"
                                                title={'eth'}
                                            >
                                                eth
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={chainTitleHandler}
                                                as="button"
                                                title={'bsc'}
                                            >
                                                bsc
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={chainTitleHandler}
                                                as="button"
                                                title={'fantom'}
                                            >
                                                fantom
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={chainTitleHandler}
                                                as="button"
                                                title={'mumbai'}
                                            >
                                                mumbai
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={chainTitleHandler}
                                                as="button"
                                                title={'polygon'}
                                            >
                                                polygon
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={chainTitleHandler}
                                                as="button"
                                                title={'avalanche'}
                                            >
                                                avalanche
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={chainTitleHandler}
                                                as="button"
                                                title={'mainnet'}
                                            >
                                                mainnet
                                            </DropdownItem>
                                            <DropdownItem
                                                onClick={chainTitleHandler}
                                                as="button"
                                                title={'solana'}
                                            >
                                                solana
                                            </DropdownItem>
                                        </DropdownButton>
                                    </InputGroup>
                                </label>

                                <InputGroup className="mb-3 me-5">
                                    <label className="input-label">
                                        {
                                            titleChain !== 'mainnet' ?
                                                <span>*</span>
                                                :
                                                ''
                                        }
                                        Contract address
                                        {
                                            titleChain !== 'mainnet' ?
                                                <FormControl
                                                    placeholder="Example: BTC"
                                                    className="input-text"
                                                    type="text"
                                                    value={contractAddress}
                                                    onChange={e => setContractAddress(e.target.value)}
                                                />
                                                :
                                                <FormControl
                                                    placeholder="Example: BTC"
                                                    className="input-text"
                                                    type="text"
                                                    value={contractAddress}
                                                    onChange={e => setContractAddress(e.target.value)}
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

                                    {
                                        data.is_presale &&
                                        <InputGroup className="mb-3">
                                            <label className="input-label">
                                                Presale Link
                                                <FormControl
                                                    placeholder="Http://"
                                                    className="input-text"
                                                    type="url"
                                                    value={data.presale_link}
                                                    onChange={e => setData({
                                                        ...data,
                                                        ['presale_link']: e.target.value
                                                    })}
                                                />
                                            </label>
                                        </InputGroup>
                                    }

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
                                    disabled={isDisabled}
                                >
                                    Submit
                                </Button>

                            </div>

                            <FormBlockDivider/>
                            <h2 className={c.titleBlock}>Response from remote api updated {data.updated_at}</h2>
                            <p dangerouslySetInnerHTML={{__html: data.remote_response}}/>
                        </form>
                    </CustomForm>

                </div>
            </Container>
        </Layout>
);
};

export default CoinEdit;
