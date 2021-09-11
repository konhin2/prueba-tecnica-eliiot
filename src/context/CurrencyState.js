import axios from 'axios'
import React, { useReducer } from 'react'
import CurrencyContext from './CurrencyContext'
import CurrencyReducer from './CurrencyReducer'

const CurrencyState = (props) => {
    const initialState = {
        currency: '0'
    }

    const [globalState, dispatch] = useReducer(CurrencyReducer, initialState)
    const getInfo = async (curr) => {
        try {
            const config = {
                headers: {
                    accept: "application/json",
                }
            }
            const response = await axios.get(`https://api.blockchain.com/v3/exchange/tickers/${curr.target.name}`, config)
            dispatch({
                type: "GET_CURRENCIES",
                payload: response.data.price_24h
            })
        } catch (e) { }
    }


    return (
        <CurrencyContext.Provider value={{ currency: globalState.currency, getInfo }}>
            {props.children}
        </CurrencyContext.Provider>
    )
}

export default CurrencyState