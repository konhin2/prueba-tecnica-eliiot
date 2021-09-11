import React, { useContext, useState } from 'react'
import CurrencyContext from './../../context/CurrencyContext'


export default function Body() {
    const context = useContext(CurrencyContext)
    const {
        currency,
        getInfo
    } = context
    const [currentCur, setCurrentCur] = useState("United States Dollar")
    const [change, setChange] = useState("BTC-USD")
    // Funciones
    const changeCurrency = (event) => {
        switch (event.target.name) {
            case 'BTC-USD':
                setCurrentCur("United States Dollar")
                setChange("BTC-USD")
                return
            case 'BTC-GBP':
                setCurrentCur("Great Britain Pound")
                setChange("BTC-GBP")
                return 
            case 'BTC-EUR':
                setCurrentCur("Euro")
                setChange("BTC-EUR")
                return
            default:
                return
        }
    }
    return (
        <div className="my-8 mx-5">
            <div className="text-center text-xl text-eliiot-g2 font-bold">
                <h1>Valor Bitcoin actual</h1>
            </div>
            <div className="shadow-sm mt-4 h-36 w-full text-eliiot-g2 bg-white rounded-2xl text-center">
                <div className="pt-7 text-lg font-normal">
                    <h2>Moneda</h2>
                </div>
                <div className="flex justify-around w-auto bg-eliiot-bg rounded-3xl mx-5 my-3 font-medium text-eliiot-b2">
                    {
                        currentCur === "United States Dollar" ?
                            (
                                <button name="BTC-USD" type="button" className="bg-white w-16 rounded-3xl p-3 mt-1.5 mb-1.5" onClick={(e) => {
                                    getInfo(e);
                                    changeCurrency(e)
                                }}>USD</button>
                            ) :
                            (
                                <button name="BTC-USD" type="button" className="text-eliiot-c w-16 rounded-3xl p-3 mt-1.5 mb-1.5" onClick={(e) => {
                                    getInfo(e);
                                    changeCurrency(e)
                                }}>USD</button>
                            )
                    }
                    {
                        currentCur === "Great Britain Pound" ?
                            (
                                <button name="BTC-GBP" type="button" className="bg-white w-16 rounded-3xl p-3 mt-1.5 mb-1.5" onClick={(e) => {
                                    getInfo(e);
                                    changeCurrency(e)
                                }}>GBP</button>
                            ) :
                            (
                                <button name="BTC-GBP" type="button" className="text-eliiot-c w-16 rounded-3xl p-3 mt-1.5 mb-1.5" onClick={(e) => {
                                    getInfo(e);
                                    changeCurrency(e)
                                }}>GBP</button>
                            )
                    }
                    {
                        currentCur === "Euro" ?
                            (
                                <button name="BTC-EUR" type="button" className="bg-white w-16 rounded-3xl p-3 mt-1.5 mb-1.5" onClick={(e) => {
                                    getInfo(e);
                                    changeCurrency(e)
                                }}>EUR</button>
                            ) :
                            (
                                <button name="BTC-EUR" type="button" className="text-eliiot-c w-16 rounded-3xl p-3 mt-1.5 mb-1.5" onClick={(e) => {
                                    getInfo(e);
                                    changeCurrency(e)
                                }}>EUR</button>
                            )
                    }

                </div>
            </div>
            <div className="details mt-8 w-full">
                <div className="pt-3 pl-4 text-base font-normal font-semibold text-eliiot-b1">
                    <h2>Detalle</h2>
                </div>
                <div className="pt-3 pl-4 text-base font-normal font-base text-eliiot-c">
                    <h2>{currentCur}</h2>
                </div>
                <div className="pt-4 px-4 pb-4">
                    <input className="p-4 w-full h-12 rounded-3xl font-normal text-eliiot-b3" value={'$ ' + currency} readOnly />
                </div>
            </div>
            <div className="adj-btn my-8 mx-5">
                <button name={change} type="button" className="w-full h-full flex justify-center items-center px-4 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-eliiot-b1 hover:bg-eliiot-b4" onClick={(e) => getInfo(e)}>
                    Actualizar
                </button>
            </div>
        </div>
    )
}
