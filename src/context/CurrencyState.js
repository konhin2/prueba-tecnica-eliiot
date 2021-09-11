import axios from 'axios'
import React, { useReducer } from 'react'
import CurrencyContext from './CurrencyContext'
import CurrencyReducer from './CurrencyReducer'

const CurrencyState = (props) => {
    const initialState = {
        currency: ''
    }

    const [globalState, dispatch] = useReducer(CurrencyReducer, initialState)
    const getInfo = async () => {
        try {
            const response = await axios.get('https://www.blockchain.com/es/api')
            dispatch({
                type: "GET_CURRENCIES",
                payload: response.data.url
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