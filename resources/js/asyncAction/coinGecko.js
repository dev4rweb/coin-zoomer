import axios from "axios";
import {
    GECKO_ROOT_PATH,
    GECKO_PING_PATH,
    GECKO_COIN_LIST_PATH,
    GECKO_COIN_MARKETS_PATH,
    GECKO_CURRENT_COIN_PATH
} from "../utils/routesPath";
import {
    setGeckoCoinsListAction,
    setGeckoCoinsMarketAction,
    setGeckoCurrentCoinAction,
    setGeckoPingAction, setTopCoinsGeckoAction
} from "../reducers/coinGeckoApiReducer";

export const geckoGetPing = () => {
    return function (dispatch) {
        axios.get(`${GECKO_ROOT_PATH}${GECKO_PING_PATH}`)
            .then(res => {
                console.log('geckoGetPing', res)
                if (res.status === 200) {
                    dispatch(setGeckoPingAction(true));
                    // dispatch(geckoGetCoinsList())
                    dispatch(geckoGetCoinsMarket())
                }
            })
            .catch(err => {
                console.log(err)
            });
    };
};

export const geckoGetCoinsList = () => {
    return function (dispatch) {
        axios.get(`${GECKO_ROOT_PATH}${GECKO_COIN_LIST_PATH}`)
            .then(res => {
                console.log('geckoGetCoinsList', res)
                if (res.status === 200) {
                    dispatch(setGeckoCoinsListAction(res.data))
                }
            })
            .catch(err => {
                console.log('geckoGetCoinsList err', err)
            });
    };
};

export const geckoGetCoinsMarket = () => {
    const currency = 'usd'
    const order = 'market_cap_desc'
    const per_page = 5
    const page = 1
    const sparkline = false // if true dinamic of price by 7 days
    const price_change_percentage = '1h' // 1h, 24h, 7d, 14d, 30d, 200d, 1y
    return function (dispatch) {
        axios.get(`${GECKO_ROOT_PATH}${GECKO_COIN_MARKETS_PATH}?vs_currency=${currency}&order=${order}&per_page=${per_page}&page=${page}&sparkline=${sparkline}&price_change_percentage=${price_change_percentage}`)
            .then(res => {
                console.log('geckoGetCoinsMarket', res)
                const coins = res.data
                if (res.status === 200) {
                    dispatch(setGeckoCoinsMarketAction(res.data))
                    // res.data.forEach(i => {
                    //     dispatch(geckoGetCurrentCoin(i.id))
                    // });
                }
            })
            .catch(err => {
                console.log('geckoGetCoinsMarket err', err)
            });
    };
};

export const geckoGetCurrentCoin = id => {

    return function (dispatch) {
        axios.get(`${GECKO_ROOT_PATH}${GECKO_CURRENT_COIN_PATH}${id}`)
            .then(res => {
                console.log('geckoGetCurrentCoin', res)
                dispatch(setGeckoCurrentCoinAction(res.data))
                // if (res.data && res.data.contract_address)
                //     dispatch(setTopCoinsGeckoAction(res.data))
            })
            .catch(err => {
                console.log('geckoGetCurrentCoin err', err)
            });
    };
};

export const geckoGetLiteDataCurrentCoin = (
    nameId, tickers = false, market_data = true, community_data = false,
    developer_data = false, sparkline = false
) => {
    const dopData = `tickers=${tickers}&market_data=${market_data}&community_data=${community_data}&developer_data=${developer_data}&sparkline=${sparkline}`
    return function (dispatch) {
        axios.get(`${GECKO_ROOT_PATH}/coins/${nameId}?${dopData}`)

    };
};
