import axios from 'axios'
import React, { useReducer } from 'react'
import CurrencyContext from './CurrencyContext'
import CurrencyReducer from './CurrencyReducer'

const CurrencyState = (props) => {
    const initialState = {
        currency: '0',
        msg: 'United States Dollar',
        url: 'BTC-USD'
    }

    const [globalState, dispatch] = useReducer(CurrencyReducer, initialState)
    const getInfo = async (curr) => {
        const config = {
            headers: {
                accept: "application/json",
            }
        }
        try {
            const response = await axios.get(`https://api.blockchain.com/v3/exchange/tickers/${curr}`, config)
            dispatch({
                type: "GET_CURRENCIES",
                payload: formatNumber(response.data.price_24h)
            })
        } catch (e) { }
    }
    const setText = (curr) => {
        let msg = ''
        let url = ''
        switch (curr) {
            case 'BTC-USD':
                msg = "United States Dollar"
                url = "BTC-USD"
                break
            case 'BTC-GBP':
                msg = "Great Britain Pound"
                url = "BTC-GBP"
                break
            case 'BTC-EUR':
                msg = "Euro"
                url = "BTC-EUR"
                break
            default:
                break
        }
        dispatch({
            type: "SET_INFO",
            payload: {
                msg,
                url
            }
        })
        return
    }
    const formatNumber = (num) => {
        if (num >= 1000 && num.toString().includes('.')) {
            const splitted = num.toString().split('.')
            let result = ""
            for (let i = splitted[0].length - 1; i >= 0; i--) {
                if (result.length % 3 === 0 && result.length > 0) {
                    result = splitted[0].charAt(i) + "," + result
                } else {
                    result = splitted[0].charAt(i) + result
                }
            }
            if (result.charAt(0) === ",") {
                return result.substring(1, result.length) + '.' + splitted[1]
            } else {
                return result + '.' + splitted[1]
            }

        } else if (num >= 1000) {
            const string = num.toString()
            let result = ""
            for (let i = string.length - 1; i >= 0; i--) {
                if (result.length % 3 === 0 && result.length > 0) {
                    result = string.charAt(i) + "," + result
                } else {
                    result = string.charAt(i) + result
                }
            }
            if (result.charAt(0) === ",") {
                result.substring(1, result.length)
            } else {
                return result
            }
        } else {
            return num.toString()
        }
    }

    return (
        <CurrencyContext.Provider value={{
            currency: globalState.currency,
            msg: globalState.msg,
            url: globalState.url,
            getInfo,
            setText
        }}
        >
            {props.children}
        </CurrencyContext.Provider>
    )
}

export default CurrencyState